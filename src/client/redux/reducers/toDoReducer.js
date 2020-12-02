const initialState = {
    tasks: []
}
export const toDoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TODO/CREATE_TASK':
            return {...state, tasks: state.tasks.concat([action.payload]) }
        default:
            return state;
    }
}
