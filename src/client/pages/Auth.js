import React, { useState } from 'react'
import useHttp from '../hooks/http.hook'

export default function Auth() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {request} = useHttp()

    const loginHandler = (e) => {
        e.preventDefault()
    }

    const registerHandler = async (e) => {
        e.preventDefault()
        const data = request('http://localhost:3000/api/auth/registr', {method: 'POST', body: {email, password}})

    }

    return (
        <div>
            <label>
                Введите email:
                    <input type="text"
                    placeholder='Введите email'
                    value={email}
                    name={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </label>

            <label>
                Введите пароль:
                    <input type="text"
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
