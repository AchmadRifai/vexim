import { baseUrl } from './base'

export const login = async (username, password) => {
    const res = await fetch(`${baseUrl}/auth/admin/login`, {
        method: 'POST', body: JSON.stringify({ username, password }), headers: { "Content-Type": "application/json" },
    })
    const result = {
        body: await res.json(),
        header: {}
    }
    for (let key of res.headers.keys()) result.header[key] = res.headers.get(key)
    return result
}