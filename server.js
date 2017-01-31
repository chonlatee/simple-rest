require('babel-register')

const http = require('http')
const app = require('./app')

const server = http.createServer(app)
const port = process.env.port || 8765

module.exports = server.listen(port, () => {
  console.log(`listening: http://localhost:${port}`)
})

