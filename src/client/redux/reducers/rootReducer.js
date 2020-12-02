const { combineReducers } = require("redux");
import {toDoReducer} from './toDoReducer'

export const rootReducer = combineReducers({
    ToDoList: toDoReducer
})
