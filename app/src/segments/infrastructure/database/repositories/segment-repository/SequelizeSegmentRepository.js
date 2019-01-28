const SegmentMapper = require('../../mappers/SegmentMapper')

class SequelizeSegmentRepository {
  constructor ({ database }) {
    this.SegmentModel = database.Segment
  }

  async getAll () {
    const segments = await this.SegmentModel.findAll()
    return segments.map(SegmentMapper.toDomain)
  }
}

module.exports = SequelizeSegmentRepository
