import React, { useContext } from 'react'
import {Route, Switch, NavLink} from 'react-router-dom'
import AuthContext from '../context/authContext'

const Header = () => {
    const {token, logout} = useContext(AuthContext)

    const clickLogOut = (e) => {
        e.preventDefault()
        logout(token)
    }

    return (
        <header className="header">
        <div className="container">
            <div className="header__logo"><span>PISTAPOOL</span></div>
            <nav className="header__nav">
                <ul>
                    <NavLink to="/home"><li>Home</li></NavLink>
                    <NavLink to="/about"><li>About</li></NavLink>
                    <NavLink to="contact"><li>Contact</li></NavLink>
                </ul>
            </nav>
            <div className="header__burger">
                <span></span>
            </div>
            <button onClick={clickLogOut}>Выйти</button>
        </div>
    </header>
    )
}

export default Header
