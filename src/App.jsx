import React from "react"
import './styles/main.css'
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import AppNavbar from "./components/ui/navbar/AppNavbar"
import AppRouter from "./components/AppRouter"

function App() {
    return (
        <BrowserRouter>
            <AppNavbar />
            <AppRouter />
        </BrowserRouter>
    )
}

export default App
