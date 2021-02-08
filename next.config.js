module.exports = {
  serverRuntimeConfig: {
    databaseUri: process.env.MONGODB_URI || 'mongodb://localhost/taskmanager'
  },
  publicRuntimeConfig: {},
}