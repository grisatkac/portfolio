import React from "react"
import Header from "../components/Header"
import Auth from "../pages/Auth"
import Main from "../pages/Main"


const Routes = (auth) => {

    if (auth) {
        return (
            <>
                <Header />
                <Main />
            </>
        )
    }

    return (
        <Auth />
    )
}

export default Routes