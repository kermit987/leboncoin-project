const express = require('express')
const Router = express.Router()
const {
  fizzBuzzController
} = require('controller/fizz-buzz.controller.js')

Router.post('/fizz-buzz', fizzBuzzController)

module.exports = Router
