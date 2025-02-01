const express = require('express'), { ZodError } = require('zod')

function error(res = express.response, status = 500, e = new Error('')) {
    if (e instanceof ZodError) res.status(status).json({ ...e })
    else res.status(status).json({ msg: e.message })
    console.log(`[${new Date().toISOString()}]`)
    console.log(e)
}

module.exports = { error }