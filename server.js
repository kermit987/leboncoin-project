const { app } = require('./app')

const PORT = process.env.PORT || 8080

server = app.listen(PORT, () => {
  console.log('App listening on port ', PORT)
})

module.exports = {
  server
}