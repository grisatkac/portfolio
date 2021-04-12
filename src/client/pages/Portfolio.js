import React from 'react'
import { NavLink } from 'react-router-dom'

const Portfolio = () => {
    return (
        <main className="main">
            <div className="main-container">
                <div className="todo-promo">
                    <div className="todo-promo-container">
                        <div>Здесь вы можете можете составлять планы</div>
                        <NavLink to="/tasks"><p>Планировщик задач</p></NavLink>
                    </div>
                </div>

                {/*<div>
                <NavLink to="/messages">Сообщения</NavLink>
            </div>*/}
            </div>
        </main>
    )
}

export default Portfolio
