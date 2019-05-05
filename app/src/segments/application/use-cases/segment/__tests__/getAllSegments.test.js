const getAllSegmentsFactory = require('../getAllSegments')

test('USE-CASE getAllSegments: no segments', async () => {
  const segmentRepository = {
    getAll: () => Promise.resolve([])
  }
  const getAllSegments = getAllSegmentsFactory({ segmentRepository })

  const segments = await getAllSegments()
  expect(segments.length).toBe(0)
})

test('USE-CASE getAllSegments: get all segments', async () => {
  const mockSegments = [
    { id: 'segment-id-1', users: 0, getHouseholdCount: () => 0 },
    { id: 'segment-id-2', users: 0, getHouseholdCount: () => 0 }
  ]
  const segmentRepository = {
    getAll: () => Promise.resolve(mockSegments)
  }
  const getAllSegments = getAllSegmentsFactory({ segmentRepository })

  const segments = await getAllSegments()
  expect(segments.length).toBe(2)
  expect(segments[0]).toBe(mockSegments[0])
  expect(segments[1]).toBe(mockSegments[1])
})

test('USE-CASE getAllSegments: filter by minimal users', async () => {
  const mockSegments = [
    { id: 'segment-id-1', users: 20, getHouseholdCount: () => 5 },
    { id: 'segment-id-2', users: 40, getHouseholdCount: () => 10 }
  ]
  const segmentRepository = {
    getAll: () => Promise.resolve(mockSegments)
  }
  const getAllSegments = getAllSegmentsFactory({ segmentRepository })

  const segments = await getAllSegments({ minHousehold: 7 })

  expect(segments.length).toBe(1)
  expect(segments[0]).toBe(mockSegments[1])
})
