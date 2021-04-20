import React, { useContext, useState } from 'react'
import useHttp from '../hooks/http.hook'
import Context from '../context/authContext'
import Registr from './Registr'

export default function Auth() {
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

    
    const toggleOpenCard = (e) => {
        console.log('ok')
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
                    <Registr
                        toggleOpenCard={toggleOpenCard}
                        request={request}
                    />
                        
                    } 
                </div>
            </div>
        </main>
    )
}
