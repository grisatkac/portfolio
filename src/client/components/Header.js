import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import AuthContext from '../context/authContext'

const Header = () => {
    const { token, logout, firstName } = useContext(AuthContext)
    const [openMenu, setOpenMenu] = useState(false)
    const clickLogOut = (e) => {
        e.preventDefault()
        logout(token)
    }

    console.log(firstName)

    const clickMenu = (e) => {
        e.preventDefault()
        setOpenMenu((prevState) => {
            return !prevState
        })
    }

    useEffect(() => {
        const subMenu = document.querySelector('.header-submenu')
        //subMenu.addEventListener()
        
    }, [])

    return (
        <header className="header">
            <div className="header-container">
                <div className="header-logotext">
                    <NavLink exact to="/home">PISTAPOOL</NavLink>
                </div>
                <nav className="header-nav">
                    <ul>
                        <li><NavLink exact to="/home">Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/portfolio">Portfolio</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                </nav>
                {/*<div className="header__burger">
                    <span></span>
                </div>*/}
                {/*<div className="header-user">
                    <p>Имя пользователя</p>
                </div>*/}
                <div className="header-menu">
                    <button
                        className="header-burger"
                        onClick={clickMenu}>

                        {/*<span className="burger-line"></span>
                    <span className="burger-line"></span>
                    <span className="burger-line"></span>*/}
                        <p>Menu</p>
                    </button>

                    {true &&
                        <div className="header-submenu">
                            <div className="userName">
                                {firstName}
                            </div>
                            <div className="logout">
                                <button onClick={clickLogOut}>Выйти</button>
                            </div>
                        </div>}
                </div>
            </div>
        </header>
    )
}

export default Header
