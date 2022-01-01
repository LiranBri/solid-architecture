module.exports = ({ segmentRepository }) => {

  return async function getAllSegments ({ minHousehold = 0 } = {}) {
    const segments = await segmentRepository.getAll()
    const filteredSegments = segments.filter(s => s.getHouseholdCount() >= minHousehold)
    return filteredSegments
  }
}
