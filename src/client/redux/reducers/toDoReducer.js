const initialState = {
    tasks: [],
    filter: 'all'
}
export const toDoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TODO/CREATE_TASK':
            return { ...state, tasks: state.tasks.concat(...[action.payload]) }
        case 'TODO/DELETE_TASK':
            console.log('delete tasks is working')
            
            //return { ...state, tasks: state.tasks.}
        case 'TODO/CHANGE_TASK':
            break;
        case 'TODO/CHANGE_FILTER':
            return { ...state, filter: action.payload }

        default:
            return state;
    }
}
