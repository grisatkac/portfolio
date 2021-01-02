import React from 'react'

import AuthContext from './context/authContext'
import Header from './components/Header'
import Footer from './components/Footer'
import useAuth from './hooks/auth.hook'
import Routes from './routes'
import Loader from './components/Loader'

export default function App() {
    const { token, login, logout, ready } = useAuth()
    const auth = !!token
    const routes = Routes(auth)

    return (
            <AuthContext.Provider value={{ login, logout }}>
                    {auth && <Header />}
                    {routes}
                    <Footer />
            </AuthContext.Provider>
    )
}
