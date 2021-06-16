const express = require('express')
const Router = express.Router()
const {
  fizzBuzzController
} = require('controller/fizzbuzz.controller.js')

Router.post('/fizz-buzz', fizzBuzzController)