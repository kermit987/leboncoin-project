module.exports = app => {
  app.use(require('./fizz-buzz.route'))
  app.use(require('./statistic.route.js'))
}