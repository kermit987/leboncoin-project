const { client } = require('model/db')
const config = require('../../config/config.js')

const getStatistic = async (req, res) => {
  // console.log(Statistic.findOne({}))
  const database = client.db(config.db.host)
  const statistics = database.collection('statistics')

  const cursor = await statistics.aggregate([
    {'$match': { _id : {$exists: true} } },

  ])

  const result = await cursor.forEach(doc => {
    console.log(doc)
  })

  res.status(200).send(result)
}

module.exports = {
  getStatistic
}