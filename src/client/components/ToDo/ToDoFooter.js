import { set } from 'mongoose'
import React from 'react'
import Default from '../../../config/default'

const ToDoFooter = ({ tasks, setActiveFilter}) => {
    const clickHandler = (e) => {
        setActiveFilter(e.target.value)
    }

    return (
        <div>
            <p>Осталось задач: {tasks.length}</p>
            {Default.ToDoFilters.map(filter => {
                return (
                <input
                    type="button"
                    name="title"
                    value={filter}
                    onClick={clickHandler}
                />)
            })}
        </div>
    )
}

export default ToDoFooter;
