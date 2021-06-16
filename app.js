const express = require('express')
const http = require('http')
const bodyParser = require('body-parser')
const router = require('route/')

const dotenv = require('dotenv').config()

const app = express()

const PORT = process.env.PORT || 8080

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

router(app)

const server = http
  .createServer(app)
  .listen(PORT, console.log('app listening on port ',  PORT))


module.exports = {
  server
}