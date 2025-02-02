const dto = require('../DTOs/auth'), express = require('express')

const login = async (req = express.request, _ = express.response, next) => {
    dto.login.parse(req.body)
    next()
}

module.exports = { login }