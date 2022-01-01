const Segment = require('../../../domain/segment/Segment')

const SegmentMapper = {
  toDomain (dbDataValues) {
    const { segmentId, ...otherFields } = dbDataValues.toJSON()

    return new Segment({
      id: segmentId,
      ...otherFields
    })
  },

  toDatabase (domainDataValues) {
    const { id,...otherFields } = domainDataValues

    return {
      segmentId: id,
      ...otherFields
    }
  }
}

module.exports = SegmentMapper
