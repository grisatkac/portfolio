import React, { useContext, useState } from 'react'
import useHttp from '../hooks/http.hook'
import Context from '../context/authContext'

export default function Auth() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {request} = useHttp()
    const {login, logout} = useContext(Context)

    const loginHandler = async (e) => {
        e.preventDefault()
        const data = await request('http://localhost:3000/api/auth/login', {method: 'POST', body: {email, password}})
        login(data.token)
        
        console.log('receive user id from server: ', data.userId)
        console.log('receive token from server: ', data.token)
    }

    const registerHandler = async (e) => {
        e.preventDefault()
        request('http://localhost:3000/api/auth/registr', {method: 'POST', body: {email, password}})
    }

    return (
        <div>
            <label>
                Введите email:
                <input 
                    type="text"
                    placeholder='Введите email'
                    value={email}
                    name={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </label>

            <label>
                Введите пароль:
                <input 
                    type="password"
                    placeholder='Введите пароль'
                    value={password}
                    name={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </label>
            <button onClick={loginHandler}>Войти</button>
            <button onClick={registerHandler}>Зарегистрироваться</button>
        </div>

    )
}
