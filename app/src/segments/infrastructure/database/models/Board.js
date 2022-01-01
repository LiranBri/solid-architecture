const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  const Board = sequelize.define('Board',
    {
      boardId: { field: 'board_id', type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      title: DataTypes.STRING
    }, {
      tableName: 'boards'
    }
  )

  Board.associate = function (models) {
    Board.hasMany(models.Person, { foreignKey: 'board_id' })
  }

  return Board
}
