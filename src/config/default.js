module.exports = {
  server: {
    port: process.env.PORT || 8080
  },
  api: {
    port: 9090,
    url: 'http://0.0.0.0:9090'
  },
  webpack: {
    port: 3001
  },
  podio: {
    clientId: process.env.CLIENT_ID || '',
    clientSecret: process.env.CLIENT_SECRET || '',
    username: process.env.USERNAME || '',
    password: process.env.PASSWORD || '',
    apps: {
      todo: {
        app_id: '',
        space_id: '',
        fields: {
          text: '',
          marked: ''
        }
      }
    }
  }
};
