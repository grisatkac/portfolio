import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import ToDoFooter from '../components/ToDo/ToDoFooter'
import ToDoInput from '../components/ToDo/ToDoInput'
import ToDoTasks from '../components/ToDo/ToDoTasks'


const ToDo = () => {
    const tasks = useSelector(state => state.ToDoList.tasks)
    const activeFilter = useSelector(state => state.ToDoList.filter)
    //const [activeFilter, setActiveFilter] = useState('all') setActiveFilter={setActiveFilter}
    console.log('tasks tood', tasks)

    return (
        <>
            <ToDoInput />
            <ToDoTasks tasks={tasks} activeFilter={activeFilter}/>
            <ToDoFooter tasks={tasks} activeFilter={activeFilter}  />
        </>
    )
}

export default ToDo
