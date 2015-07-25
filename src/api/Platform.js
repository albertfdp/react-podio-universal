import config from '../config';
import { api as Podio } from 'podio-js';

let platform = new Podio({
  authType: 'password',
  clientId: config.podio.clientId,
  clientSecret: config.podio.clientSecret
});

export default platform;
