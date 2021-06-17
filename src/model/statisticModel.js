const { Statistic } = require('./statisticSchema')

const logRequest = (request) => {
  const newLog = new Statistic({
    request,
    date: Date.now()
  })
  return new Promise((resolve, reject) => {
    newLog
      .save()
      .then(log => {
        resolve(log)
      })
      .catch(err => reject(err))
  })
}

module.exports = {
  logRequest
}