import React, { useContext, useState } from 'react'
import useHttp from '../hooks/http.hook'
import Context from '../context/authContext'

export default function Auth() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {request} = useHttp()
    const {login} = useContext(Context)

    const loginHandler = async (e) => {
        e.preventDefault()
        //const data = await request('http://localhost:3000/app/auth/login', {method: 'POST', body: {email, password}})
        const data = await request('http://localhost:3000/app/auth/login', 'POST', {email, password})
        login(data.token)
    }

    const registerHandler = async (e) => {
        e.preventDefault()
        //request('http://localhost:3000/app/auth/registr', {method: 'POST', body: {email, password}})
        request('http://localhost:3000/app/auth/registr', 'POST', {email, password})
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
