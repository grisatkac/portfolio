import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { createTask, updateToDoList } from '../../redux/actions/toDo'

const ToDoInput = () => {
    const [value, setValue] = useState({title: '', completed: 'active'})
    const dispatch = useDispatch()

    const changeInputHanler = (e) => {
        e.persist()
        setValue(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const onclickHandler = () => {
        setValue({title: '', completed: 'active'})
        //dispatch(createTask(value))
        dispatch(updateToDoList(value, 'TODO/CREATE_TASK'))
    }

    return (
        <div className="todo-input">
            <label htmlFor="input">Заголовок задачи</label>
            <input 
                type="text"
                id="input"
                name="title"
                value={value.title}
                onChange={changeInputHanler}
            />
            
            <button onClick={onclickHandler}>Создать задачу</button>
        </div>
    )
}

export default React.memo(ToDoInput)
