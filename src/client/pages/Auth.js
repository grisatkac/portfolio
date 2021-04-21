import React, { useContext, useState } from 'react'
import useHttp from '../hooks/http.hook'
import Context from '../context/authContext'
import Registr from './Registr'
import useInput from '../hooks/input.hook'

export default function Auth() {
    /*const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')*/
    const email = useInput('', {isEmpty: true, minLength: 10, isEmail: true})
    const password = useInput('', {isEmpty: true, maxLength: 20})
    const [openSignUpCard, setSignUpCard] = useState(false)
    const { request } = useHttp()
    const { login } = useContext(Context)

    const loginHandler = async (e) => {
        e.preventDefault()
        //const data = await request('http://localhost:3000/app/auth/login', {method: 'POST', body: {email, password}})
        const data = await request('http://localhost:3000/app/auth/login', 'POST', { email: email.value, password: password.value })
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
                                //value={email}
                                value={email.value}
                                name='email'
                                //onChange={(e) => setEmail(e.target.value)}
                                onChange={(e) => email.onChange(e)}
                                onBlur={(e) => email.onBlur(e)}
                            />
                            { (email.isDirty && email.isEmpty) && <div style={{color: 'red'}}>Поле не может быть пустым</div> }
                            { (email.isDirty && email.minLengthError) && <div style={{color: 'red'}}>Неккоректная длина</div> }
                            { (email.isDirty && email.emailError) && <div style={{color: 'red'}}>Неккоректный email</div> }
                        </div>
                        <div className="input-field">
                            <input
                                type="password"
                                placeholder='Password'
                                //value={password}
                                value={password.value}
                                name='password'
                                //onChange={(e) => setPassword(e.target.value)}
                                onChange={(e) => password.onChange(e)}
                                onBlur={(e) => password.onBlur(e)}
                            />
                            { (password.isDirty && password.isEmpty) && <div style={{color: 'red'}}>Поле не может быть пустым</div> }
                            { (password.isDirty && password.maxLengthError) && <div style={{color: 'red'}}>Неккоректная длина</div> }
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
