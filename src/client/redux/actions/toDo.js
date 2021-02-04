export const changeFilter = (filter) => ({
    type: 'TODO/CHANGE_FILTER',
    payload: filter
})

export const loadTasks = (tasks) => ({
    type: 'TODO/LOAD_TASKS',
    payload: tasks
})

export const createTask = (task) => ({
    type: 'TODO/CREATE_TASK',
    payload: task
})

export const deleteTask = (task) => ({
    type: 'TODO/DELETE_TASK',
    payload: task
})

export const changeTask = (task) => ({
    type: 'TODO/CHANGE_TASK',
    payload: task
})

export const updateToDoList = (data, action) => ({
    type: 'TODO/UPDATE_LIST',
    payload: {data, action}
})