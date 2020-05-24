const express = require('express');
const bodyParser = require('body-parser')
require('./utils/db')
const postMessageRouter = require('./resources/postMessage/postMessage.router')

const app = express();

app.use(bodyParser.json())
app.use(postMessageRouter)

const start = () => {
    app.listen(3006, () => {
        console.log("Server running at 3006")
    })
}

module.exports = {start};