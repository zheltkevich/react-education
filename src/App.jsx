import React from "react"
import './styles/main.css'
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import About from "./pages/About"
import Posts from "./pages/Posts"
import NotFound from "./pages/NotFound"
import AppNavbar from "./components/ui/navbar/AppNavbar"

function App() {
    return (
        <BrowserRouter>
            <AppNavbar />
            <div className="container">
                <Routes>
                    <Route path="/about" element={<About />} />
                    <Route path="/posts" element={<Posts />} />
                    <Route path="*" element={<NotFound />} />
                    {/* <Route
                        path="*"
                        element={<Navigate to="/posts" replace />}
                    /> */}
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App
