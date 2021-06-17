const express = require('express')
const Router = express.Router()
const {
  getStatistic
} = require('controller/statistic.controller.js')

Router.get('/getStatistic', getStatistic)

module.exports = Router