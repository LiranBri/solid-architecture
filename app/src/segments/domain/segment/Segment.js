const { attributes } = require('structure')

const Segment = attributes({
  segmentId: Number,
  name: { type: String, required: true, maxLength: 150 },
  users: { type: Number, required: true, positive: true }
})(
  class Segment {
    getHouseholdCount () {
      return this.users / 4
    }
  }
)

module.exports = Segment
