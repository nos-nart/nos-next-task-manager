module.exports = {
  serverRuntimeConfig: {
    database: process.env.MONGODB_URI || 'mongodb://localhost/taskmanager'
  },
  publicRuntimeConfig: {},
}