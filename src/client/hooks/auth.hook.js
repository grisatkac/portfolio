import {useState, useEffect, useCallback, useMemo} from "react"

const storageUser = 'userData'

const useAuth = () => {
    const [token, setToken] = useState('')

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
        console.log('---------------------')
        console.log(localStorageData)
        if (localStorageData) {
            login(localStorageData)
        }
    }, [])

    return {login, logout, token}
}

export default useAuth
