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
    }}
  ])

  await cursor.forEach(doc => {
    mostUsedRequest.push(doc)
  })

  res.status(200).send(mostUsedRequest[0])
}

module.exports = {
  getStatistic
}