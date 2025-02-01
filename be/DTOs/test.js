const { z } = require('zod')

module.exports = z.object({
    id: z.coerce.string().min(24).max(24)
})