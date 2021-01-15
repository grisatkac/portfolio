const { createStore, applyMiddleware } = require("redux");
const { composeWithDevTools } = require('redux-devtools-extension')
const { rootReducer } = require("./reducers/rootReducer");

//export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware()))
