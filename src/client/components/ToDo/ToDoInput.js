import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { createTask } from '../../redux/actions/toDoTasks'

const ToDoInput = () => {
    const [value, setValue] = useState({title: ''})
    const dispatch = useDispatch()

    const changeInputHanler = (e) => {
        e.persist()
        setValue(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const onclickHandler = () => {
        console.log(value.title)
        dispatch(createTask(value))
        setValue({title: ''})
    }

    return (
        <div>
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
