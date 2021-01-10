import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import ToDoFooter from '../components/ToDo/ToDoFooter'
import ToDoInput from '../components/ToDo/ToDoInput'
import ToDoTasks from '../components/ToDo/ToDoTasks'


const ToDo = () => {
    const tasks = useSelector(state => state.ToDoList.tasks)
    const [activeFilter, setActiveFilter] = useState('all')

    return (
        <>
            <ToDoInput />
            <ToDoTasks tasks={tasks} activeFilter={activeFilter}/>
            <ToDoFooter tasks={tasks} activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
        </>
    )
}

export default ToDo
