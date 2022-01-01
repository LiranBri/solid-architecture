const path = require('path')
const _ = require('lodash')
const { createContainer, asClass, asFunction, asValue } = require('awilix')
const { scopePerRequest } = require('awilix-express')

const container = createContainer()

// System
container
  .register({
    app: asClass(require('./application/Application')).singleton(),
    server: asClass(require('./interfaces/http/Server')).singleton()
  }).register({
    router: asFunction(require('./interfaces/http/router')).singleton(),
    logger: asFunction(require('./infrastructure/logging/logger')).singleton()
  })

// Middlewares
const errorHandler = require('./interfaces/http/errors/debugErrorHandler')
container.register({
  containerMiddleware: asValue(scopePerRequest(container)),
  errorHandler: asValue(errorHandler)
})

// Repositories
// const SequelizeSegmentRepository = require('./infrastructure/database/repositories/segment-repository/SequelizeSegmentRepository')
// container.register({
//   segmentRepository: asClass(SequelizeSegmentRepository).singleton()
// })

// const SequelizeBoardsRepository = require('./infrastructure/database/repositories/boards-repository/SequelizeBoardsRepository')
// container.register({
//   boardsRepository: asClass(SequelizeBoardsRepository).singleton()
// })


//    by name convention use the last directory as registered name
container.loadModules(['src/boards/infrastructure/database/repositories/**/*.js'],
  {
    formatName: (name, { path: filePath }) =>
      _.chain(
        path.dirname(filePath).split('/')
      )
        .last()
        .camelCase()
        .value()

  })

// Database
container.register({
  database: asFunction(require('./infrastructure/database/db')).singleton()
})

// Use Cases
container.loadModules(['src/boards/application/use-cases/**/!(*.test).js'])

module.exports = container
