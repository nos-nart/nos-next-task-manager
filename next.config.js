module.exports = {
  serverRuntimeConfig: {
    databaseUrl: process.env.MONGODB_URI || 'mongodb://localhost/taskmanager'
  },
  publicRuntimeConfig: {},
}