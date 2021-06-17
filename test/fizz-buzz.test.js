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
    const expectResult = ['1','2','three','four','5','three','7','four','three','10','11','threefour','13','14','three','four','17','three','19']
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