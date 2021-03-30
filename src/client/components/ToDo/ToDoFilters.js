import React from 'react'
import { useDispatch } from "react-redux"
import Default from '../../../config/default'
import {changeFilter} from '../../redux/actions/toDo'

const ToDoFilters = ({ tasks, setActiveFilter}) => {
    const dispatch = useDispatch()
    const clickHandler = (e) => {
        //setActiveFilter(e.target.value)
        dispatch(changeFilter(e.target.value))
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
                    key={filter}
                    onClick={clickHandler}
                />)
            })}
        </div>
    )
}


export default ToDoFilters;
