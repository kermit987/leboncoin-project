const { client } = require('model/db')
const config = require('../../config/config.js')

const getStatistic = async (req, res) => {
  const database = client.db(config.db.host)
  const statistics = database.collection('statistic')
  const mostUsedRequest = []


  const cursor = await statistics.aggregate([
    {'$group': {      
      _id: "$doc",
      mostUsedRequest: {$sum: 1},
    }},
    { '$sort': {
      'mostUsedRequest': -1
    }},
    { '$project': { 'doc': '$_id', '_id': 0, 'mostUsedRequest': 1}}
  ])

  const firstResult = await cursor.toArray();
  res.status(200).send(firstResult[0])
}

module.exports = {
  getStatistic
}