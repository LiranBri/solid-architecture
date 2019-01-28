const express = require('express')

class Server {
  constructor ({ router, logger }) {
    this.logger = logger
    this.express = express()

    this.express.use(router)
  }

  start () {
    return new Promise((resolve) => {
      // listen on provided port, on all network interfaces.
      const port = '4321'
      console.log('starting server ...')
      this.express.listen(port, () => console.log(`listening at port ${port}`))
      this.express.on('error', this.onError.bind(this))
      resolve()
    })
  }

  // event listener for HTTP server "error" event.
  onError (error) {
    if (error.syscall !== 'listen') {
      throw error
    }

    const port = '4321'
    const bind = typeof port === 'string'
      ? 'Pipe ' + port
      : 'Port ' + port

    // handle specific listen errors with friendly messages
    switch (error.code) {
      case 'EACCES':
        console.error(bind + ' requires elevated privileges')
        process.exit(1)
      case 'EADDRINUSE':
        console.error(bind + ' is already in use')
        process.exit(1)
      default:
        throw error
    }
  }
}

module.exports = Server
