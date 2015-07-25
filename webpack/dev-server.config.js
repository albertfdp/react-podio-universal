import WebpackDevServer from 'webpack-dev-server';
import webpack from 'webpack';
import config from './development.config';

const host = process.env.HOST || 'localhost';
const port = parseInt(process.env.PORT) + 1 || 3001;

let devServerOptions = {
  contentBase: 'http://' + host + ':' + port,
  quiet: false,
  noInfo: false,
  hot: true,
  inline: true,
  lazy: false,
  publicPath: config.output.publicPath,
  headers: { 'Allow-Control-Allow-Origin': '*' },
  stats: { colors: true }
};

let compiler = webpack(config);
let webpackDevServer = new WebpackDevServer(compiler, devServerOptions);

webpackDevServer.listen(port, host, () => {
  console.info(`==> 🚧  Webpack development server listening on ${host}:${port}\n`);
});
