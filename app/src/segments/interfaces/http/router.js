const { Router } = require('express')
const fs = require('fs')
const path = require('path')
const _ = require('lodash')

const middleware = require('./middleware')
const controller = require('./utils/createControllerRoutes')

module.exports = (cradle) => {
  const { containerMiddleware, errorHandler } = cradle

  const router = Router()

  const apiRouter = Router()
  router.use('/api', apiRouter)

  apiRouter.use(containerMiddleware)

  middleware(apiRouter, cradle)

  // by name convention, register each NameController as route /name
  fs.readdirSync(path.join(__dirname, 'controllers')).forEach(function (file) {
    if (file === '__tests__') return

    const route = '/' +
      _.lowerCase(file
        .replace('Controller', '')
        .replace('.js', '')
      )
        .replace(' ', '-')
    apiRouter.use(route, controller(`controllers/${file}`))
  })

  router.use(errorHandler)

  return router
}
