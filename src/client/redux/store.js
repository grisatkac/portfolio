//const { createStore, applyMiddleware } = require("redux");
import {createStore, applyMiddleware} from 'redux'
//const { composeWithDevTools } = require('redux-devtools-extension')
import {composeWithDevTools} from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import { updateToDoListWatcher } from './sagas';
const { rootReducer } = require("./reducers/rootReducer");

const sagaMiddleware = createSagaMiddleware()

//export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(updateToDoListWatcher)
