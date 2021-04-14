import React, { useContext, useState } from 'react'
import useHttp from '../hooks/http.hook'
import Context from '../context/authContext'

export default function Auth() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [openCard, setOpenCard] = useState('logIn')
    const { request } = useHttp()
    const { login } = useContext(Context)

    const loginHandler = async (e) => {
        e.preventDefault()
        //const data = await request('http://localhost:3000/app/auth/login', {method: 'POST', body: {email, password}})
        const data = await request('http://localhost:3000/app/auth/login', 'POST', { email, password })
        login(data.token)
    }

    const registerHandler = async (e) => {
        e.preventDefault()
        //request('http://localhost:3000/app/auth/registr', {method: 'POST', body: {email, password}}) <label htmlFor='password'>Введите пароль:</label> <label htmlFor='email'>Введите email:</label>
        request('http://localhost:3000/app/auth/registr', 'POST', { email, password })
    }

    const toggleOpenCard = (e) => {
        e.preventDefault()
        if (openCard === 'signIn') {
            setOpenCard('signUp')
        } else {
            setOpenCard('signIn')
        }
    }

    const checkOpenCard = () => {
        if (openCard !== 'logIn') {
            return (
                <>
                <div className="auth-btns">
                        {/*<button onClick={loginHandler}>Войти</button>*/}
                        {/*<button onClick={registerHandler}>Зарегистрироваться</button>*/}
                    </div>
                <div className="signIn-card"></div>
                </>
            )
        }
    }

    return (
        <main className="main-auth">
            <div className="auth-card">
                <div className="auth-card-container">
                    <div className="auth-header">
                        <h1>pistapool</h1>
                        <p>You can registrate and look on the my site</p>
                    </div>
                    <div className="logIn-card">
                        <div className="input-field">
                            <input
                                type="text"
                                placeholder='Email'
                                value={email}
                                name='email'
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="input-field">
                            <input
                                type="password"
                                placeholder='Password'
                                value={password}
                                name='password'
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="logIn-btn">
                            <button onClick={loginHandler}>Log In</button>
                            <p>or</p>
                        </div>
                        <div className="signUp-link">
                            <button onClick={toggleOpenCard}>Create New Account</button>
                        </div>
                    </div>
                    {/*checkOpenCard()*/}
                    
                    <div className="signUp-card">
                        <div className="signUp-card-container">
                            <div className="signUp-card-header">
                                <h1>Sign Up</h1>
                                <p>It's quick and easy.</p>
                                <div className="close-btn">
                                <i 
                                    className="fas fa-times fa-2x">
                                </i>
                                </div>
                                
                            </div>

                            <div className="signUp-card-fields">
                                <input 
                                    type="text"
                                    placeholder="First name" 
                                />
                                <input 
                                    type="text"
                                    placeholder="Last name"
                                />
                                <input 
                                    type="email"
                                    placeholder="Email"
                                />
                                <input 
                                    type="password"
                                    placeholder="New password"
                                />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

/*const checkOpenCard = () => {
        if (openCard === 'logIn') {
            return (
                <div className="auth-card">
                <div className="auth-card-container">
                    <div>
                        <h1>pistapool</h1>
                    </div>
                    <div className="logIn-card">
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
                        <button onClick={loginHandler}>Log In</button>
                        <button>Create New Account</button>
                    </div>
                </div>
            </div>
            )
        }

        return (
            <div className="signIn-card"></div>
        )
    }*/
