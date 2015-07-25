import config from './config';

import Express from 'express';
import compression from 'compression';
import httpProxy from 'http-proxy';
import path from 'path';

//import React from 'react';
//import Location from 'react-router/lib/Location';

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

  res.render('index', {
    title: `React Podio Universal`,
    content: ''
  });

});

app.listen(config.server.port, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.info(`==> ✅  Server is listening at ${config.server.port}`);
    console.info(`==> ✅  API is running on ${config.api.url}`);
  }
});
