const initialState = {
    tasks: [],
    filter: 'all'
}
export const toDoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TODO/CREATE_TASK':
            return { ...state, tasks: state.tasks.concat([action.payload]) }
        case 'TODO/CHANGE_FILTER':
            return { ...state, filter: payload }

        default:
            return state;
    }
}
