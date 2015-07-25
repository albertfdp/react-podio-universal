import express from 'express';
import bodyParser from 'body-parser';
import config from '../config';
import platform from './Platform';
import * as actions from './routes';

const app = express();
app.use(bodyParser.json());

function handleRequest(req, res, action, matcher) {
  action(req, matcher.slice(2))
    .then((result) => {
      res.json(result);
    }, (reason) => {
      if (reason && reason.redirect) {
        res.redirect(reason.redirect);
      } else {
        console.error('API ERROR:', reason);
        res.status(reason.status || 500).json(reason);
      }
    });
}

export default function api() {
  return new Promise((resolve) => {
    app.use((req, res) => {
      let matcher = req.url.split('/');
      let action = matcher && actions[matcher[1]];
      if (action) {
        platform.isAuthenticated().then(() => {
          handleRequest(req, res, action, matcher);
        }).catch((err) => {
          // TODO: this is the 1st iteration. It will change to client or server auth
          platform.authenticateWithCredentials(config.podio.username, config.podio.password, () => {
            handleRequest(req, res, action, matcher);
          });
        })
      } else {
        res.status(404).end('NOT FOUND');
      }
    });
    app.listen(config.api.port);
    resolve();
  });
}
