import './styles/index.css'
import React from "react"
import {render} from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux'

import { store } from './redux/store'
import App from './App'
import './styles/index.css'
import './styles/scss.scss'

const app = (
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
)
render(app, document.getElementById('root'))
