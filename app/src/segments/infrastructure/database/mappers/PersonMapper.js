const Person = require('../../../domain/board/person')

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

module.exports = PersonMapper
