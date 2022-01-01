const Board = require('../../../domain/board/Board')
const Person = require('../../../domain/board/Person')
// const PersonMapper = require('./PersonMapper')

const BoardMapper = {
  toDomain(dbDataValues) {
    const { boardId, People, ...otherFields } = dbDataValues.toJSON()

    return new Board({
      id: boardId,
      persons: People.map(PersonMapper.toDomain),
      ...otherFields
    })
  },

  toDatabase(domainDataValues) {
    const { id, ...otherFields } = domainDataValues

    return {
      boardId: id,
      People: persons.map(PersonMapper.toDatabase),
      ...otherFields
    }
  }
}

module.exports = BoardMapper









const PersonMapper = {
  toDomain(dbDataValues) {
    const { personId, ...otherFields } = dbDataValues

    return new Person({
      id: personId,
      ...otherFields
    })
  },

  toDatabase(domainDataValues) {
    const { id, ...otherFields } = domainDataValues

    return {
      personId: id,
      ...otherFields
    }
  }
}