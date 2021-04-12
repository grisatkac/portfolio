import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateToDoList } from '../../redux/actions/toDo'

const TaskItem = ({task: { _id, title, completed }}) => {
    //const [isCompleted, setCompleted] = useState(completed)
    const dispatch = useDispatch()
    console.log(title, completed, _id)
    const deleteHandler = () => {
        dispatch(updateToDoList(_id, 'TODO/DELETE_TASK'))
    }

    const changeStatusOfComplete = () => {
        const isCompleted = (completed === 'active') ? 'completed' : 'active';
        
        dispatch(updateToDoList({_id, completed: isCompleted} , 'TODO/CHANGE_TASK'))
    }
    
    return (
        <li>
             <i 
                className={ (completed === 'active') ? 'mark far fa-circle' : 'mark far fa-check-circle'} 
                onClick={changeStatusOfComplete}
            />
             {/*<i  className={isCompleted ? 'mark far fa-check-circle' : 'mark far fa-circle'} />*/}
            <p>{title}</p>
            <button 
                onClick={deleteHandler}
                value={'deleteBtn'}>Удалить</button>
            <i className="fas fa-trash-alt" 
               onClick={deleteHandler}
            />
        </li>
    )
}

export default TaskItem
