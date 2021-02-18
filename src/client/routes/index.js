import {Switch, Route, Redirect} from 'react-router-dom'
import React from "react"
import Auth from "../pages/Auth"
import Home from "../pages/Home"
import About from "../pages/About"
import Contact from "../pages/Contact"
import ToDo from '../pages/ToDo'
import Messages  from '../pages/Messages'

const Routes = (auth) => {
    if (auth) {
        return (
            <Switch>
                <Route path="/home" exact>
                    <Home />
                </Route>
                <Route path="/about" exact>
                    <About />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
                <Route path="/tasks">
                    <ToDo />
                </Route>
                <Route path="/messages">
                    <Messages />
                </Route>
                <Redirect to="/home" />
            </Switch>
        )
    }

    return (
        <Switch>
            <Route path="/" exact>
                <Auth />
            </Route>
            <Redirect to="/" />
        </Switch>
    )
    
}
export default Routes
