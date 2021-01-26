export const changeFilter = (filter) => ({
    type: 'TODO/CHANGE_FILTER',
    payload: filter
})

export const createTask = (task) => ({
    type: 'TODO/CREATE_TASK',
    payload: task
})

export const updateToDoList = (data) => ({
    type: 'TODO/UPDATE_LIST',
    payload: data
})