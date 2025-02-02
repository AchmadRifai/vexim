const express = require('express')
const authMdw = require('../../middlewares/auth')
const authSvc = require('../../services/auth')
const error = require('../../utils/errors')

const router = express.Router()

router.post('/login',
    (req, res, next) => authMdw.login(req, res, next).catch(e => error.error(res, 400, e)),
    (req, res) => authSvc.login(req, res).catch(e => error.error(res, 500, e)))

module.exports = router