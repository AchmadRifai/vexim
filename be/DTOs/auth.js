const { z } = require('zod')

const login = z.object({
    username: z.string().min(1),
    password: z.string().min(8),
})

module.exports = {
    login
}