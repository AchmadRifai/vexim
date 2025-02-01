const express = require('express'), { ruruHTML } = require('ruru/server')

const router = express.Router()

router.get('/', (_, res) => {
    res.type('html')
    res.writeHead(200, { "Content-Type": "text/html" })
    res.end(ruruHTML({ endpoint: '/graphql' }))
})

module.exports = router