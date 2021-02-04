const initialState = {
    tasks: [],
    filter: 'all'
}
export const toDoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TODO/LOAD_TASKS':
            return { ...state, tasks: state.tasks.concat(...[action.payload])}
        case 'TODO/CREATE_TASK':
            return { ...state, tasks: state.tasks.concat(...[action.payload]) }
        case 'TODO/DELETE_TASK':
            return {...state, tasks: state.tasks.filter(task => task._id !== action.payload)}
        case 'TODO/CHANGE_TASK':
            break;
        case 'TODO/CHANGE_FILTER':
            return { ...state, filter: action.payload }

        default:
            return state;
    }
}
