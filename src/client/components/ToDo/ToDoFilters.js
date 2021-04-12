import React from 'react'
import { useDispatch } from "react-redux"
import Default from '../../../config/default'
import {changeFilter} from '../../redux/actions/toDo'

const ToDoFilters = ({ tasks, activeFilter}) => {
    const dispatch = useDispatch()
    const clickHandler = (e) => {
        dispatch(changeFilter(e.target.value))
    }

    return (
        <div className="todo-settings">
            <p className="count-tasks">Осталось задач: {tasks.length}</p>
            <div className="todo-sortingBy">
                <p>Sorting by</p>
                <select>
                    <option value="value" >name</option>
                    <option value="value1">date</option>
                </select>
            </div>
            <div className="todo-filters">
                {Default.ToDoFilters.map(filter => {
                    return (
                        <input
                            type="button"
                            name="title"
                            value={filter}
                            key={filter}
                            className={activeFilter === filter? 'currentFilter' : ''}
                            onClick={clickHandler}
                        />)
                })}
            </div>
        </div>
    )
}


export default ToDoFilters;
