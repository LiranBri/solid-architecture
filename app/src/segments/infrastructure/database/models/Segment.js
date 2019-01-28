const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  const Segment = sequelize.define('Segment',
    {
      segmentId: { field: 'segment_id', type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      name: DataTypes.STRING,
      users: DataTypes.INTEGER
    }, {
      tableName: 'segment'
    }
  )

  return Segment
}
