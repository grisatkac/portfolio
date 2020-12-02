import {useState, useEffect, useCallback, useMemo} from "react"

const storageUser = 'userData'

const useAuth = () => {
    const [token, setToken] = useState('')
    const [ready, setReady] = useState(false)

    const login = useCallback((userToken) => {
        setToken(userToken)
        localStorage.setItem(storageUser, userToken)
    }, [])

    const logout = useCallback((userToken) => {
        setToken(null)
        localStorage.removeItem(storageUser)
    }, [])

    useEffect(() => {
        const localStorageData = localStorage.getItem(storageUser)
        if (localStorageData) {
            login(localStorageData)
        }
        setReady(true)
    }, [login])

    return {login, logout, token, ready}
}

export default useAuth
