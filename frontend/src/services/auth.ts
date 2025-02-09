import api from './api'

export const register = async (username:string, email:string, password:string) => {
    try {
        const res = await api.post('/auth/local/register', {
            username,
            email,
            password
        })
        return res.data
    } catch(error) {
        console.error(error)
    }
}

export const login = async (identifier:string, password:string) => {
    try {
        const res = await api.post('/auth/local', {
            identifier,
            password
        })
        return res.data
    } catch(error) {
        console.error(error)
    }
}