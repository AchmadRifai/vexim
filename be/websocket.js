const { createServer } = require('http'), { Server } = require('socket.io'), eiows = require('eiows'), uuid = require('uuid')

function connectingIo(app) {
    const httpServer = createServer(app)
    const io = new Server(httpServer, {
        wsEngine: eiows.Server
    })
    io.engine.generateId = _ => uuid.v4()
    io.engine.use(require('helmet')())
    io.engine.on("connection_error", (err) => {
        console.log(`[${new Date().toISOString()}] err.req => ${err.req}`)
        console.log(`[${new Date().toISOString()}] err.code => ${err.code}`)
        console.log(`[${new Date().toISOString()}] err.message => ${err.message}`)
        console.log(`[${new Date().toISOString()}] err.context => ${err.context}`)
    })
    io.on('connection', socket => {
        console.log(`[${new Date().toISOString()}] Socket ID : ${socket.id}`)
        socket.emit('connect', { message: 'a new client connected' })
        socket.on('chat', message => {
            console.log(`[${new Date().toISOString()}] From client: ${message}`)
            io.emit('chat', message)
        })
        socket.on('disconnect', () => console.log(`[${new Date().toISOString()}] User disconnected`))
    })
    return httpServer
}

module.exports = { connectingIo }