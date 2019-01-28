/**
 * translates client side format to domain format
 */
const SegmentMapper = {
  fromClient (clientDataValues) {
    const response = {
      ...clientDataValues
    }
    return response
  },

  toClient (domainDataValues) {
    return {
      ...domainDataValues.toJSON()
    }
  }
}

module.exports = SegmentMapper
