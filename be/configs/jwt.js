const jwt = require('jsonwebtoken')

const token = process.env.JWT_TOKEN || 'nothing'

const refresh = header => {
    try {
        const result = decrypt(header)
        console.log(`[${new Date().toISOString()}] Refreshing Token : ${result}`)
    } catch (e) {
        if (e instanceof jwt.TokenExpiredError) {
            //
        } else throw e
    }
}

const encrypt = (id) => ({
    token: jwt.sign({ sub: id }, token, { algorithm: 'HS512', expiresIn: '30m' }),
    refreshToken: jwt.sign({ sub: id }, token, { algorithm: 'HS512', expiresIn: '1d' })
})

const decrypt = header => jwt.verify(header, token)

module.exports = { decrypt, encrypt, refresh }