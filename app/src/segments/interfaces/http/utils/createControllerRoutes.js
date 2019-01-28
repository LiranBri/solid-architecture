const path = require('path')

module.exports = function createControllerRoutes (controllerUri) {
  const controllerPath = path.resolve('src/segments/interfaces/http', controllerUri)
  const Controller = require(controllerPath)

  return Controller.router
}
