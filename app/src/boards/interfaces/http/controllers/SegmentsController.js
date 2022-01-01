const PromiseRouter = require('express-promise-router')
const { inject } = require('awilix-express')
const Status = require('http-status')
const SegmentMapper = require('../mappers/SegmentMapper')

const SegmentsController = {
  get router () {
    const router = PromiseRouter()

    router.get('/', this.getAll)

    return router
  },

  getAll: inject(({ getAllSegments }) =>
    async (req, res) => {
      const minHousehold = req.query['min-household']

      try {
        const segments = await getAllSegments({ minHousehold })

        const clientFormatSegments = segments.map(SegmentMapper.toClient)
        res.status(Status.OK).json(clientFormatSegments)
      } catch (err) {
        res.status(Status.INTERNAL_SERVER_ERROR).send(err.message)
      }
    }
  )
}

module.exports = SegmentsController
