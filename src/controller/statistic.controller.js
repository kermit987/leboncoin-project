const { client } = require('model/db')
const config = require('../../config/config.js')

const getStatistic = async (req, res) => {  
  const database = client.db(config.db.host)
  const statistics = database.collection('statistic')

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

  const mostUsedRequest = await cursor.toArray(); //otherwise your return a string
  if (mostUsedRequest[0] !== undefined && mostUsedRequest[1] !== undefined) {
    if (mostUsedRequest[0].mostUsedRequest === mostUsedRequest[1].mostUsedRequest) {
      res.status(200).send(mostUsedRequest.splice(0, 2))
    } else {
    res.status(200).send(mostUsedRequest[0])
    }
  } else {
    res.status(200).send(mostUsedRequest[0])
  }
}

module.exports = {
  getStatistic
}