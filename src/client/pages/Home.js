import React from 'react'
import { NavLink } from 'react-router-dom'
import ToDo from './ToDo'

const Home = () => {
    return (
        <main className="main">
            <div className="main-container">
                <div>
                    <h1>Weclome to the PISTAPOOL</h1>
                </div>

                <div className="todo">
                    <div className="todo-container">
                        <div>Здесь вы можете можете составлять планы</div>
                    </div>
                </div>
                <div>
                    <NavLink to="/tasks"><p>Планировщик задач</p></NavLink>
                </div>
                <div>
                    <NavLink to="/messages">Сообщения</NavLink>
                </div>
            </div>
        </main>
    )
}

export default Home
