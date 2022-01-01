const countTeamsInBoardFactory = require('../countTeamsInBoard')

test('USE-CASE countTeamsInBoard: no persons', async () => {
  const boardsRepository = {
    getById: () => Promise.resolve({
      People: []
    })
  }
  const countTeamsInBoard = countTeamsInBoardFactory({ boardsRepository })
  
  const result = countTeamsInBoard({ boardId: 1 })
  expect(result).toBe(0)
})