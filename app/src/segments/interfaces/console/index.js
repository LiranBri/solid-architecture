const Console = require('./Console')
const container = require('../../container')

Console.start({
  expose: { container }
})
