import config from './config';

import Express from 'express';
import compression from 'compression';
import httpProxy from 'http-proxy';
import path from 'path';
import serialize from 'serialize-javascript';

import React from 'react';
import Location from 'react-router/lib/Location';
import createStore from './redux/create';
import ApiClient from './services/ApiClient';
import router from './universalRouter';

const app = new Express();
const proxy = httpProxy.createProxyServer({
  target: config.api.url
});

app.use(compression());
app.use(require('serve-static')(path.join(__dirname, '..', 'static')));

app.use('/api', (req, res) => {
  proxy.web(req, res);
});

app.set('views', path.join(process.cwd(), 'src', 'views'));
app.set('view engine', 'jade');

app.use((req, res) => {

  const client = new ApiClient(req);
  const store = createStore(client);
  const location = new Location(req.path, req.query);

  router(location, undefined, store)
    .then(({ component, transition, isRedirect }) => {
      try {

        if (isRedirect) {
          res.redirect(transition.redirectInfo.pathname);
          return;
        }

        let dangerousHTML = `window.__data=${serialize(store.getState())};`;
        res.render('index', {
          title: `React Podio Universal`,
          content: React.renderToString(component),
          dangerousHTML: dangerousHTML,
          scriptSrc: `http://localhost:${config.webpack.port}/src/main.js`
        });
      } catch (err) {
        console.error(`ERROR: ${err}`);
        res.status(500).send({ error: err });
      }
    }, (err) => {
      console.error(`ERROR: ${err}`);
      res.status(500).send({ error: err });
    })
});

app.listen(config.server.port, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.info(`==> ✅  Server is listening at ${config.server.port}`);
    console.info(`==> ✅  API is running on ${config.api.url}`);
  }
});
