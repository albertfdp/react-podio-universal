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
    clientId: '',
    clientSecret: '',
    username: '',
    password: '',
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
