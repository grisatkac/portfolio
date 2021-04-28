import {createContext} from 'react'

const authContext = createContext({
    token: null,
    login: null,
    logout: null,
    firstName: null
})

export default authContext