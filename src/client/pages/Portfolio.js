import React from 'react'
import { NavLink } from 'react-router-dom'

const Portfolio = () => {
    return (
        <>
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
        </>
    )
}

export default Portfolio
