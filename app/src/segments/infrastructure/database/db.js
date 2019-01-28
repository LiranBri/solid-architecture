const Sequelize = require('sequelize')
const fs = require('fs')
const path = require('path')

module.exports = ({ logger }) => {
  const db = {}

  const host = 'localhost'
  const database = 'core'
  const port = 4306
  const user = 'root'
  const password = 'mamram'
  logger.log(`initializing db connection to address ${host}:${port} ...`)

  // keep reference to the actual underlying sequelize object, in case we want to create transactions or test if connection is online
  // dynamically get all models
  db.sequelize = new Sequelize(database, user, password, {
    host: host,
    port: port,
    dialect: 'mysql',
    // disable string-based operators, and do not set any aliases (i.e. use the built-in Symbol-based operators
    operatorsAliases: false
  })

  fs.readdirSync(path.join(__dirname, 'models')).forEach(function (file) {
    const model = db.sequelize.import(path.join(__dirname, 'models', file))
    db[model.name] = model
  })

  // call each model's "associate" method
  //    explanation: we need to first create the models, and only then associate them. otherwise we would need to put all relationships in a single file to prevent cyclic reference
  Object.keys(db).forEach(function (modelName) {
    if ('associate' in db[modelName]) {
      db[modelName].associate(db)
    }
  })

  return db
}
