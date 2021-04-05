import React from 'react'
import { useDispatch } from 'react-redux'
import { updateToDoList } from '../../redux/actions/toDo'

const TaskItem = ({ task }) => {
    const dipsatch = useDispatch()
    
    const onclickHandler = () => {
        dipsatch(updateToDoList(task._id, 'TODO/DELETE_TASK'))
    }
    
    return (
        <li>
            <p>{task.title}</p>
            <button onClick={onclickHandler}>Удалить</button>
        </li>
    )
}

export default TaskItem
