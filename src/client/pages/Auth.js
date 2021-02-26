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
        //request('http://localhost:3000/app/auth/registr', {method: 'POST', body: {email, password}}) <label htmlFor='password'>Введите пароль:</label> <label htmlFor='email'>Введите email:</label>
        request('http://localhost:3000/app/auth/registr', 'POST', {email, password})
    }

    return (
        <div className="auth-card">
            <div className="content">
                <div className="input-field">
                    <label htmlFor='email'>Почта:</label>
                    <input
                        type="text"
                        placeholder='Введите email'
                        value={email}
                        name='email'
                        id='email'
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="input-field">
                    <label htmlFor='password'>Пароль:</label>
                    <input
                        type="password"
                        placeholder='Введите пароль'
                        value={password}
                        name='password'
                        id='password'
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="auth-btns">
                    <button onClick={loginHandler}>Войти</button>
                    <button onClick={registerHandler}>Зарегистрироваться</button>
                </div>
            </div>
        </div>

    )
}
