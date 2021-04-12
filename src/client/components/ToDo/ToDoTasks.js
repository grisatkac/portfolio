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
                return <TaskItem task={task} key={task._id}/>
            } else if (task.completed !== activeFilter && activeFilter === 'all') {
                return <TaskItem task={task} key={task._id}/>
            }
        })   
    }, [tasks, activeFilter])
    
    return (
        <div className="todo-tasks">
            <ul className="todo-list">
                {sortTasks()}
            </ul>
        </div>)
}

export default ToDoTasks
