const { attributes } = require('structure');
const Person = require('./Person');

const Board = attributes({
  id: Number,
  title: { type: String, required: true, maxLength: 150 },
  persons: { type: Array, itemType: Person, default: [] }
})(
  class Board {
    countTeamsInBoard () {
      const teams = new Set();
      for (const currPerson of this.persons) {
        teams.add(currPerson.team)
      }
      const uniqueTeamsInBoard = teams.size
      return uniqueTeamsInBoard
    }
  }
)

module.exports = Board
