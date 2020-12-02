const { createStore } = require("redux");
const { rootReducer } = require("./reducers/rootReducer");

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
