const express = require('express')
const service = require('../services/index')
const error = require('../utils/errors')
const mdw = require('../middlewares/test')

const router = express.Router()

router.get('/', (req, res) => service.getAll(req, res).catch(e => error.error(res, 500, e)))

router.post('/', (req, res) => service.insertOne(req, res).catch(e => error.error(res, 500, e)))

router.delete('/', (req, res, next) => mdw.test(req, res, next).catch(e => error.error(res, 400, e)), (req, res) => service.deleteOne(req, res).catch(e => error.error(res, 500, e)))

router.put('/', (req, res, next) => mdw.test(req, res, next).catch(e => error.error(res, 400, e)), (req, res) => service.updateOne(req, res).catch(e => error.error(res, 500, e)))

module.exports = router