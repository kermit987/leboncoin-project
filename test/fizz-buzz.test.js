const request = require('supertest')
// const { a } = require('../app')
const { server } = require('../server.js')
const { init, client, closeDatabase } = require('../src/model/db')
const config = require('../config/config')

let database;
let statistic;

/**
 *  
 * seed the collection statistic from test database
 * for testing purpose (testing getStatistic endpoint)
 */

const seed = async (statistic) => {
  const docs = [
  { doc: '3 4 20 three four' },
  { doc: '3 4 20 three four' },
  { doc: '7 8 20 seven eight' },
  { doc: '7 8 20 seven eight' },
  { doc: '7 8 20 seven eight' },
  { doc: '7 8 20 seven eight' }]

  try {
    const payload = await statistic.insertMany(docs)
    console.log(`${payload.insertedCount} documents were inserted`)
  } catch (e) {
    throw 'Error while trying to insert document ' + e
  }
}

beforeAll(async() => {
  await init()
  database = client.db(config.db.host)
  statistic = database.collection('statistic')
  try {
    //check if the database exist before dropping it otherwise it may end up getting an "Error: ns not found"
    await database
      .listCollections()
      .toArray()
      .then(async cols => {
        if (cols.length)
          await statistic.drop()
      })
    seed(statistic)
  } catch (e) {
    throw 'Error while trying to drop database ' + e
  }
})

describe('/POST testing fizz-buzz', () => {
  test('testing normal behavior', async (done) => {
    const payload = {
      int1: 3,
      int2: 4,
      limit: 20,
      str1: "three",
      str2: "four"
    }
    const expectResult = ['1','2','three','four','5','three','7','four','three','10','11','threefour','13','14','three','four','17','three','19',"four"]
     await request(server)
      .post('/fizz-buzz')
      .set('Accept', 'application/json')
      .send(payload)
      .expect(200)
      .then(response => {
        expect(JSON.parse(response.text)).toStrictEqual(expectResult)
      })
    done()
  })

  test('testing another normal behavior', async (done) => {
    const payload = {
      int1: 5,
      int2: 6,
      limit: 30,
      str1: "five",
      str2: "six"
    }
    const expectResult = ['1','2','3','4','five','six','7','8','9','five','11','six','13','14','five','16','17','six','19','five','21','22','23','six','five','26','27','28','29','fivesix']
     await request(server)
      .post('/fizz-buzz')
      .set('Accept', 'application/json')
      .send(payload)
      .expect(200)
      .then(response => {
        expect(JSON.parse(response.text)).toStrictEqual(expectResult)
      })
    done()
  })

  test('testing when one of the params is missing', async (done) => {
    const payload = {
      int1: 5,
      int2: 6,
      limit: 30,
      str1: "five",
      //str2 is missing
    }
    await request(server)
      .post('/fizz-buzz')
      .set('Accept', 'application/json')
      .send(payload)
      .expect(400)
    done()
  })
})

describe('/GET test getStatic ', () => {
  test('check if we can find the most used request', async (done) => {
     await request(server)
      .get('/getStatistic')
      .expect(200)
      .then(response => {
        const result = JSON.parse(response.text)
        expect(result.doc).toBe('7 8 20 seven eight')
        expect(result.mostUsedRequest).toBe(4)
      })
    done()
  })

  test('check when two request have bee called an equal number of time', async (done) => {
    try {
      database = client.db(config.db.host)
      statistic = database.collection('statistic')  
      const payload = await statistic.insertOne({doc: '3 4 20 three four'})
      console.log(`${payload.insertedCount} documents were inserted`)
    } catch (e) {
      throw 'Error while trying to insert document ' + e
    }
    const expected = [{ mostUsedRequest: 4, doc: '3 4 20 three four' },  { mostUsedRequest: 4, doc: '7 8 20 seven eight' }]
     await request(server)
      .get('/getStatistic')
      .expect(200)
      .then(response => {
        const result = JSON.parse(response.text)
        expect(result).toEqual(expect.arrayContaining(expected))

      })
    done()

  })

  test('check when the database is empty', async (done) => {
    try {
      await statistic.drop()  
    } catch (e) {
      throw 'Error while trying to drop database ' + e
    }
    await request(server)
      .get('/getStatistic')
      .expect(200)
      .then(async response => {
        expect(response.text).toBeFalsy()
      })
    done()
  })
})

afterAll(async () => {
  server.close()
})

jest.setTimeout(10000)