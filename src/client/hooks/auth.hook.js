import {useState, useEffect, useCallback, useMemo} from "react"
import useHttp from "./http.hook"

const storageUser = 'userData'

const useAuth = () => {
    const [token, setToken] = useState('')
    const [ready, setReady] = useState(false)
    const {request} = useHttp()

    const login = useCallback((userToken) => {
        setToken(userToken)
        localStorage.setItem(storageUser, userToken)
    }, [])

    const logout = useCallback((userToken) => {
        setToken(null)
        localStorage.removeItem(storageUser)
        localStorage.removeItem('UserTasks')
    }, [])

    useEffect(() => {
        console.log('check token')
        const localStorageData = localStorage.getItem(storageUser)
        console.log(localStorageData)
        /*if (localStorageData) {
            login(localStorageData)
        }*/

        const verifyToken = async () => {
            try {
                const data = await request('http://localhost:3000/app/token/refresh', 'GET', null, {
                    'authorization': localStorageData
                })

                if (data.message !== 'Авторизация не выполнена') {
                    login(localStorageData)
                } else {
                    logout()
                }

            } catch (error) {
                console.log(error)
            }
        }

        if (localStorageData) {
            verifyToken()
        }

        setReady(true)
    }, [login])

    return {login, logout, token, ready}
}

export default useAuth
