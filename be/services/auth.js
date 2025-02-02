const express = require('express')
const jwt = require('../configs/jwt')
const db = require('../configs/db')

async function login(req = express.request, res = express.response) {
    const { username, password } = req.body
    let user1
    await db.dbConnected(async c => {
        const users = await c.db('vexim').collection('users').find({ username }).toArray()
        for (const user of users) {
            if (user.password === password) {
                user1 = user
                delete user1.password
                user1.roles = await c.db('vexim').collection('roles').find({ name: { $in: user1.roles } }).toArray()
                break
            }
        }
    })
    if (!user1) throw new Error('User not found')
    const tokens = jwt.encrypt(user1._id)
    res.json({ 'msg': 'Success', tokens, user: user1 })
}

module.exports = { login }