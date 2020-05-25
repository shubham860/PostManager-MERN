const { Router } = require('express')
const controller = require('./postMessage.controllers')

const postMessageRouter = Router()

postMessageRouter
    .route('/')
    .get(controller.getMany)
    .post(controller.createOne)


postMessageRouter
    .route('/:id')
    .get(controller.getOne)
    .put(controller.updateOne)
    .delete(controller.removeOne)



module.exports = postMessageRouter;