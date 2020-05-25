const postMessageModel = require('./postMessage.model');
const {crudController} = require('../../utils/crud');

module.exports = crudController(postMessageModel);