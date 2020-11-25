import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import Footer from './components/Footer'
import useAuth from './hooks/auth.hook'
import Routes from './routes'
import AuthContext from './context/authContext'

export default function App() {
    const { token, login, logout } = useAuth()
    const auth = !!token
    const routes = Routes(auth)


    return (
        <div className='container'>
        <BrowserRouter>
            <AuthContext.Provider value={{ login, logout }}>
                    {routes}
                    <Footer />

            </AuthContext.Provider>
        </BrowserRouter>
        </div>
    )
}
