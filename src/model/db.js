const { MongoClient } = require('mongodb')
const config = require("../../config/config.js")


const uri = 'mongodb+srv://' + config.db.user + ':' + config.db.password + '@cluster0.4s4z6.mongodb.net/' + config.db.host + '?retryWrites=true&w=majority'

const client = new MongoClient(uri, { useUnifiedTopology: true })

const closeDatabase = async () => {
  await client.close()
}

const init = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      await client.connect()
      await client.db(config.db.host).command({ping: 1})
      console.log('Connected successfully!')
      resolve()
    } catch (err) {
      console.log('Error: failed to connect to database ', err)
      reject (err)
    }    
  })
}


module.exports = {
  client,
  init,
  closeDatabase
}