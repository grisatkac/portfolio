import React, { useContext } from 'react'
import AuthContext from '../context/authContext'

const Header = () => {
    const {token, logout} = useContext(AuthContext)

    const clickHandler = (e) => {
        e.preventDefault()
        logout(token)
    }

    return (
        <header>
            <div className="">Logo</div>

            <nav>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Team</li>
                    <li>Contact</li>
                </ul>
            </nav>

            <div className="">
                <div>burger</div>
                <button onClick={clickHandler}>Logout</button>
            </div>
        </header>
    )
}

export default Header
