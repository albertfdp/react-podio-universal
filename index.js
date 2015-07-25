global.__CLIENT__ = false;
global.__SERVER__ = true;
global.__DEV__ = process.env.NODE_ENV !== 'production';

require('./src/server');
