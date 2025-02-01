const dbUrl = process.env.MONGO_URL || 'mongodb://localhost:27017/vexim'
const mongo = require('mongodb')

async function dbConnected(callback = async (_ = new mongo.MongoClient('')) => { }) {
    const db = new mongo.MongoClient(dbUrl)
    await db.connect()
    try {
        return await callback(db)
    } catch (e) {
        throw e
    } finally {
        await db.close()
    }
}

async function transactionDb(callback = async (db = new mongo.MongoClient('')) => { }) {
    const db = new mongo.MongoClient(dbUrl)
    await db.connect()
    try {
        const session = db.startSession()
        try {
            session.startTransaction()
            const result = await callback(db)
            await session.commitTransaction()
            return result
        } catch (e) {
            await session.abortTransaction()
            throw e
        } finally {
            await session.endSession()
        }
    } catch (e) {
        throw e
    } finally {
        await db.close()
    }
}

module.exports = { dbConnected, transactionDb }