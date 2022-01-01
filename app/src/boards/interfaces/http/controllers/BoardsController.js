const PromiseRouter = require('express-promise-router')
const { inject } = require('awilix-express')
const Status = require('http-status')

const BoardsController = {
  get router() {
    const router = PromiseRouter()

    router.get('/:boardId/count_teams', this.countTeamsInBoard)

    router.get('/', this.getAll)

    return router
  },

  getAll: inject(() =>
    async (req, res) => {
      res.status(Status.OK).json({ cool: 123 })
    }
  ),

  countTeamsInBoard: inject(({ countTeamsInBoard }) =>
    async (req, res) => {
      const { boardId } = req.params

      try {
        const uniqueTeamsInBoard = await countTeamsInBoard({ boardId })
        res.status(Status.OK).json({ uniqueTeamsInBoard })
      } catch (err) {
        console.log('err:', err);
        res.status(Status.INTERNAL_SERVER_ERROR).send(err.message)
      }
    }
  )
}

module.exports = BoardsController
