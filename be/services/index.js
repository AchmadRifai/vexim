const express = require('express')
const db = require('../configs/db')
const { ObjectId } = require('mongodb')

async function deleteOne(req = express.request, res = express.response) {
    const result = await db.transactionDb(async client => {
        console.log(`[${new Date().toISOString()}] Req body : ${JSON.stringify(req.body, undefined, 2)}`)
        return await client.db('vexim').collection('test').deleteOne({ _id: new ObjectId(req.body.id) })
    })
    res.json({ ...result })
}

async function getAll(req = express.request, res = express.response) {
    const result = await db.dbConnected(async client => {
        const result = {}
        result.datas = await client.db('vexim').collection('test').find(req.body).toArray()
        result.count = await client.db('vexim').collection('test').countDocuments(req.body)
        return result
    })
    res.json({ ...result })
}

async function insertOne(req = express.request, res = express.response) {
    const result = await db.transactionDb(async client => {
        console.log(`[${new Date().toISOString()}] Req body : ${JSON.stringify(req.body, undefined, 2)}`)
        return await client.db('vexim').collection('test').insertOne(req.body)
    })
    res.status(201).json({ ...result })
}

async function updateOne(req = express.request, res = express.response) {
    const result = await db.transactionDb(async client => {
        const where = { _id: new ObjectId(req.body.id) }
        const body = { ...req.body }
        delete body.id
        return await client.db('vexim').collection('test').updateOne(where, { $set: body })
    })
    res.json({ ...result })
}

module.exports = { deleteOne, getAll, insertOne, updateOne }