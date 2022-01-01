const Board = require('../../../../domain/board/Board')
const Person = require('../../../../domain/board/Person')
const BoardMapper = require('../../mappers/BoardMapper')

class SequelizeBoardsRepository {
  constructor({ database }) {
    this.BoardModel = database.Board
    this.PersonModel = database.Person
  }

  async getById(id) {
    const include = [this.PersonModel]
    const board = await this.BoardModel.findByPk(id, { include })

    if (!board) {
      throw new Error(`Board "${id}" not found`)
    }

    return BoardMapper.toDomain(board)
  }
}

module.exports = SequelizeBoardsRepository
