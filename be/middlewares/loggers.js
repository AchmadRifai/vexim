const express = require('express')

module.exports = (req = express.request, _ = express.response, next) => {
    const start = new Date()
    next()
    const durration = new Date().getTime() - start.getTime()
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.baseUrl}${req.url} ${durration}ms`)
}