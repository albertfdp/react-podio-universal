const config = __DEV__ ? require('./development') : require('./production');

module.exports = config;
