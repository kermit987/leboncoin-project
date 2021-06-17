const mongoose = require('mongoose')

const statisticSchema = new mongoose.Schema(
  {
      request: String,
      time: Date
  }
)

const Statistic = mongoose.model('statistics', statisticSchema)

module.exports = {
  Statistic
}