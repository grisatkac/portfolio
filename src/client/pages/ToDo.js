import React, { useCallback, useContext, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import ToDoFooter from '../components/ToDo/ToDoFooter'
import ToDoInput from '../components/ToDo/ToDoInput'
import ToDoTasks from '../components/ToDo/ToDoTasks'
import Context from '../context/authContext'
import useHttp from '../hooks/http.hook'


const ToDo = () => {
    const {request} = useHttp()
    const {token} = useContext(Context)
    const tasks = useSelector(state => state.ToDoList.tasks)
    const activeFilter = useSelector(state => state.ToDoList.filter)
    //const [activeFilter, setActiveFilter] = useState('all') setActiveFilter={setActiveFilter}
    console.log('tasks tood', tasks)

    const fetchTasks = useCallback(async () => {
        const response = await request('http://localhost:3000/app/todo/tasks', {
            method: 'GET', body: null, headers: {authorization: token}}
        )

        console.log(response)

    }, [token])
    

    

    return (
        <>
            <ToDoInput />
            <ToDoTasks tasks={tasks} activeFilter={activeFilter}/>
            <ToDoFooter tasks={tasks} activeFilter={activeFilter}  />
            <button onClick={fetchTasks}>gEt data</button>
        </>
    )
}

export default ToDo
