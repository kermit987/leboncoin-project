const express = require('express')
const http = require('http')

const dotenv = require('dotenv').config()

const app = express()

const PORT = process.env.PORT || 8080

const server = http
  .createServer(app)
  .listen(PORT, console.log('app listening on port ',  PORT))

module.exports = {
  server
}