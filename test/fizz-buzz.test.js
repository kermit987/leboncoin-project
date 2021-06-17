const { app, server } = require('../app.js')
const request = require('supertest')

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
    await request(app)
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
    await request(app)
      .post('/fizz-buzz')
      .set('Accept', 'application/json')
      .send(payload)
      .expect(200)
      .then(response => {
        expect(JSON.parse(response.text)).toStrictEqual(expectResult)
      })
    done()
  })
})

server.close()