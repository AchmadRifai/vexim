require('dotenv').config()

console.log(`[${new Date().toISOString()}] Ok`)

const express = require('express'), fs = require('fs'), ws = require('./websocket')

const app = express().use(express.json())
    .use(express.urlencoded({ extended: true }))
    .use(require('helmet')())
    .use(require('cors')())
    .use(require('./middlewares/loggers'))

function recurrsiveRouting(pathParent = '', url = '') {
    const paths = fs.readdirSync(pathParent)
    paths.filter(path => fs.statSync(`${pathParent}/${path}`).isFile() && path.endsWith('.js'))
        .map(s => s.replace('.js', ''))
        .forEach(path => {
            console.log(`[${new Date().toISOString()}] Registering ${url}/${path}`)
            app.use(`${url}/${path}`, require(`${pathParent}/${path}`))
        })
    paths.filter(s => fs.statSync(`${pathParent}/${s}`).isDirectory())
        .forEach(path => recurrsiveRouting(`${pathParent}/${path}`, `${url}/${path}`))
}

recurrsiveRouting('./routes', '')

ws.connectingIo(app).listen(8080, () => console.log(`[${new Date().toISOString()}] listening on localhost:8080`))