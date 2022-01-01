const container = require('./src/boards/container')

process.on('unhandledRejection', error => {
  console.error('unhandledRejection', error)
})

const app = container.resolve('app')

app.start().catch((error) => {
  console.error('failed to initiate container. error:', error)
  app.logger.error(error.stack)
  process.exit()
})
