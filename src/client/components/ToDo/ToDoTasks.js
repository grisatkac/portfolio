import React from 'react'
import { useSelector } from 'react-redux'
import Task from './Task'

const ToDoTasks = () => {
    const tasks = useSelector(state => state.ToDoList.tasks)
    
    if (!tasks.length) {
        return (
            <div>Список задач пуст. Добавьте задачи!</div>
        )
    }
    console.log(tasks)
    return tasks.map(task => <Task task={task.title} /> )
}

export default ToDoTasks
