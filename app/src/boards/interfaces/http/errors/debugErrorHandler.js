const Status = require('http-status')
const logger = require('winston')

module.exports = (err, req, res, next) => {
  logger.error(err)

  res.status(Status.INTERNAL_SERVER_ERROR).json(err)
}
