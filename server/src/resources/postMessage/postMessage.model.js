const mongoose = require('mongoose');

const postMessage = new mongoose.Schema({
    title: {
        type: String,
        required: true,
     },
    message: {
        type: String,
        required: true,
    }
})

const postMessageModel = mongoose.model('postMessage', postMessage)

module.exports = postMessageModel;
