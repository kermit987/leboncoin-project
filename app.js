const express = require('express')
const bodyParser = require('body-parser')
const router = require('route/')
const { init } = require('model/db')

const dotenv = require('dotenv').config()

const app = express()

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Credentials', true) //Otherwise there is an error while push on HEROKU
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization' //https://stackoverflow.com/questions/44245588/how-to-send-authorization-header-with-axios
  )
  res.header(
    'Access-Control-Allow-Methods',
    'GET,PUT,POST,DELETE,PATCH,OPTIONS'
  )
  next()
})

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

init()

router(app)

module.exports = {
  app,
}