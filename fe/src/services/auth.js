import { baseUrl } from './base'

export const login = async (username, password) => {
    console.log(`${baseUrl}/auth/admin/login`)
    const res = await fetch(`${baseUrl}/auth/admin/login`, {
        method: 'POST', body: JSON.stringify({ username, password }), headers: { "Content-Type": "application/json" },
    })
    const result = {
        body: await res.json(),
        header: res.headers
    }
    return result
}