const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  const Person = sequelize.define('Person',
    {
      personId: { field: 'person_id', type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      team: DataTypes.STRING
    }, {
    tableName: 'persons'
  }
  )

  return Person
}
