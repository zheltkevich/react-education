import React, { useEffect, useState } from "react"
import './styles/main.css'
import { BrowserRouter } from "react-router-dom"
import AppNavbar from "./components/ui/navbar/AppNavbar"
import AppRouter from "./components/AppRouter"
import { AuthContext } from './context'

function App() {
    const [isAuth, setIsAuth] = useState(false)

    useEffect(() => {
        if (localStorage.getItem('auth')) {
            setIsAuth(true)
        }
    }, [])

    return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth
        }}>
            <BrowserRouter>
                <AppNavbar />
                <AppRouter />
            </BrowserRouter>
        </AuthContext.Provider>
    )
}

export default App
