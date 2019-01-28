class Application {
  constructor ({ server, database, logger }) {
    this.server = server
    this.database = database
    this.logger = logger
  }

  async start () {
    this.logger.info('starting core backend ...')
    await this.database.sequelize.authenticate()
    await this.server.start()
  }
}

module.exports = Application
