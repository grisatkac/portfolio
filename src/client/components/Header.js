import React, { useContext } from 'react'
import AuthContext from '../context/authContext'

const Header = () => {
    const {token, logout} = useContext(AuthContext)

    const clickHandler = (e) => {
        e.preventDefault()
        logout(token)
    }

    return (
        <>
            <div>
                HEADER
            </div>
            <button onClick={clickHandler}>Logout</button>
        </>
    )
}

export default Header
