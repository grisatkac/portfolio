import React from 'react'
import { NavLink } from 'react-router-dom'
import ToDo from './ToDo'

const Home = () => {
    return (
        <>
            <div>
                Home page
            </div>
            <div>
                <NavLink to="/tasks"><p>Планировщик задач</p></NavLink>
            </div>
            <div>
                <NavLink to="/messages">Сообщения</NavLink>
            </div>
        </>
    )
}

export default Home
