const liveServer = require('live-server')

const params = {
  port: 9000,
  host: 'localhost',
  root: './dist',
  file: 'index.html',
  open: false,
  wait: 10
  // ignore: 'node_modules,e2e,specs,src'
}

liveServer.start(params)
