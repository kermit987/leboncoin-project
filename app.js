const express = require('express')
const bodyParser = require('body-parser')
const router = require('route/')
const { init } = require('model/db')

const dotenv = require('dotenv').config()

const app = express()


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

init()

router(app)

module.exports = {
  app,
}