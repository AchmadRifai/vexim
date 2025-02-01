const dto = require('../DTOs/test'), express = require('express')

const test = async (req = express.request, _ = express.response, next) => {
    dto.parse(req.body)
    next()
}

module.exports = { test }