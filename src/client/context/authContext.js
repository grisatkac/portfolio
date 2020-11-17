import {createContext} from 'react'

const authContext = createContext({
    token: null,
    login: null,
    logout: null
})

export default authContext