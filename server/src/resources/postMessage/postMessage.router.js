const { Router } = require('express')

const postMessageRouter = Router()

const controller = (req,res) => {
    res.send({message : "Data is coming..."})
}

postMessageRouter
    .route('/')
    .get(controller)

module.exports = postMessageRouter;    