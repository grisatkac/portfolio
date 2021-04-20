import React, { useState } from 'react'

const Registr = ({ toggleOpenCard, request }) => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    

    const registerHandler = async (e) => {
        try {
            e.preventDefault()
            //request('http://localhost:3000/app/auth/registr', {method: 'POST', body: {email, password}}) <label htmlFor='password'>Введите пароль:</label> <label htmlFor='email'>Введите email:</label>
            await request('http://localhost:3000/app/auth/registr', 'POST', { email, password, firstName, lastName })
            toggleOpenCard()  
        } catch (error) {
            
        }
    }

    
    return (
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
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Last name"
                            className="last-name"
                            onChange={(e) => setLastName(e.target.value)}
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="New password"
                            className="password"
                            onChange={(e) => setPassword(e.target.value)}
                        />

                    </div>
                    <button onClick={registerHandler} >Sign Up </button>
                </div>
            </div>
        </div>
    )
}

export default Registr
