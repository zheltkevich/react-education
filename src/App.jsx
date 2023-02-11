import React, { useEffect, useState } from "react"
import './styles/main.css'
import { BrowserRouter } from "react-router-dom"
import AppNavbar from "./components/ui/navbar/AppNavbar"
import AppRouter from "./components/AppRouter"
import { AuthContext } from './context'

function App() {
    const [isAuth, setIsAuth] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if (localStorage.getItem('auth')) {
            setIsAuth(true)
        }
        setIsLoading(false)
    }, [])

    return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth,
            isLoading
        }}>
            <BrowserRouter>
                {
                    isAuth && <AppNavbar />
                }
                <AppRouter />
            </BrowserRouter>
        </AuthContext.Provider>
    )
}

export default App
