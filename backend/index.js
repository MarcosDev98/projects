const { prototype } = require('events')
const http = require('http')

const app = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain' })
  response.end('Connection OK!!')
})

const PORT = 5005
app.listen(PORT)
console.log(`Server running on localhost:${PORT}`);