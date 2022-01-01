module.exports = ({ boardsRepository }) => {

  return async function countTeamsInBoard({ boardId } = {}) {
    const board = await boardsRepository.getById(boardId)
    const uniqueTeamsInBoard = board.countTeamsInBoard()
    return uniqueTeamsInBoard
  }
}
