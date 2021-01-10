import React from 'react'
import TaskItem from './TaskItem'


const ToDoTasks = ({ tasks, activeFilter }) => {
    console.log('todotasks')
    if (!tasks.length) {
        return (
            <div>Список задач пуст. Добавьте задачи!</div>
        )
    }
    
    return (
        <ul>
            {tasks.map(task => <TaskItem task={task.title} key={task.title}/>)}
        </ul>)
}

export default ToDoTasks
