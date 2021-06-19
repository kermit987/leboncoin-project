// const { Statistic } = require('./statisticSchema')
const config = require("../../config/config.js")

const { client } = require('./db')

const logRequest = async (request) => {
  try {
    const database = client.db(config.db.host)

    const statistic = database.collection('statistics')
    const payload = await statistic.insertOne({doc: request})
    console.log(`${payload.insertedCount} documents were inserted`)  
  } catch (e) {
    throw 'Error while trying to insert document ' + e
  }
}

module.exports = {
  logRequest
}