const { attributes } = require('structure')

const Person = attributes({
  id: Number,
  firstName: { type: String, required: true, maxLength: 150 },
  lastName: { type: String, required: true, maxLength: 150 },
  team: { type: String, required: true, maxLength: 100 },
})(
  class Person { }
)

module.exports = Person
