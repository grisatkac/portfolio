import React, { useContext, useState } from 'react'
import useHttp from '../hooks/http.hook'
import Context from '../context/authContext'

export default function Auth() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [openSignUpCard, setSignUpCard] = useState(false)
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
        if (openSignUpCard) {
            setSignUpCard(false)
        } else {
            setSignUpCard(true)
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

                    {openSignUpCard &&
                        <div className="signUp-card">
                            <div className="signUp-card-container">
                                <div className="signUp-card-header">
                                    <h1>Sign Up</h1>
                                    <p>It's quick and easy.</p>
                                    <div className="close-btn" onClick={toggleOpenCard}>
                                        <i
                                            className="fas fa-times fa-2x">
                                        </i>
                                    </div>
                                </div>

                                <div className="signUp-card-fields">
                                    <div className="signUp-card-fields-container">
                                        <input
                                            type="text"
                                            placeholder="First name"
                                            className="first-name"
                                        />
                                        <input
                                            type="text"
                                            placeholder="Last name"
                                            className="last-name"
                                        />
                                        <input
                                            type="email"
                                            placeholder="Email"
                                            className="email"
                                        />
                                        <input
                                            type="password"
                                            placeholder="New password"
                                            className="password"
                                        />

                                    </div>
                                    <button onClick={registerHandler} >Sign Up </button>
                                </div>
                            </div>
                        </div>
                    } 
                </div>
            </div>
        </main>
    )
}
