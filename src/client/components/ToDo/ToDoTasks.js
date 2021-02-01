import React, { useCallback } from 'react'
import TaskItem from './TaskItem'

const ToDoTasks = ({ tasks, activeFilter }) => {
    if (!tasks.length) {
        return (
            <div>Список задач пуст. Добавьте задачи!</div>
        )
    }
    
    const sortTasks = useCallback(() => {
        return tasks.map((task) => {
            if (task.completed === activeFilter) {
                return <TaskItem task={task.title} key={task.title}/>
            } else if (task.completed !== activeFilter && activeFilter === 'all') {
                return <TaskItem task={task.title} key={task.title}/>
            }
        })   
    }, [tasks, activeFilter])
    
    return (
        <ul>
            {sortTasks()}
        </ul>)
}

export default ToDoTasks
