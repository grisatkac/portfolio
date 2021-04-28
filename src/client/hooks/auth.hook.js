import {useState, useEffect, useCallback, useMemo} from "react"
import useHttp from "./http.hook"

const storageUser = 'userData'
const userName = 'userName'

const useAuth = () => {
    const [token, setToken] = useState('')
    const [ready, setReady] = useState(false)
    const [firstName, setFirstName] = useState('')
    const {request} = useHttp()

    const login = useCallback((userToken, userFirstName) => {
        setToken(userToken)
        setFirstName(userFirstName)
        localStorage.setItem(storageUser, userToken)
        localStorage.setItem(userName, userFirstName)
    }, [])

    const logout = useCallback((userToken) => {
        setToken(null)
        localStorage.removeItem(storageUser)
        localStorage.removeItem('UserTasks')
    }, [])

    useEffect(() => {
        console.log('check token')
        const localStorageData = localStorage.getItem(storageUser)
        const localStorageUserName = localStorage.getItem(userName)
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
                    login(localStorageData, localStorageUserName)
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

    return {login, logout, token, ready, firstName}
}

export default useAuth
