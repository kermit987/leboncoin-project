const mongoose = require('mongoose')
const config = require("../../config/config.js")

const closeDatabase = done => {
  mongoose.disconnect(done)
}

console.log('value of config.db.user ', config.db.user)
console.log('value of config.db.password ', config.db.password)

const database = 'mongodb+srv://' + config.db.user + ':' + config.db.password + '@cluster0.qcnye.mongodb.net/' + config.db.host + '?retryWrites=true&w=majority'

mongoose.connect(database)

const db = mongoose.connection

db.on('error', err => {
  throw new Error('Connection to database failed ', err)
})

db.once('open', function() {  
  console.log('Database connected')
})

module.exports = {
  db,
  closeDatabase
}