import React from 'react'

import AuthContext from './context/authContext'
import Header from './components/Header'
import Footer from './components/Footer'
import useAuth from './hooks/auth.hook'
import Routes from './routes'
import Loader from './components/Loader'

export default function App() {
    const { token, login, logout, ready, firstName } = useAuth()
    const auth = !!token
    const routes = Routes(auth)
    console.log(firstName)

    return (
            <AuthContext.Provider value={{ token, login, logout, firstName }}>
                    {auth && <Header />}
                    {routes}
                    <Footer />
            </AuthContext.Provider>
    )
}
