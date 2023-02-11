import React from 'react'
import { Route, Routes, Navigate } from "react-router-dom"
import About from "../pages/About"
import Posts from "../pages/Posts"
// import NotFound from "../pages/NotFound"
import PostIdPage from '../pages/PostIdPage'
import Login from '../pages/Login'

const AppRouter = () => {
    const authenticated = false;

    return (
        <div className="container">
            {
                authenticated
                    ?
                        <Routes>
                            <Route path="/about" element={<About />} />
                            <Route path="/posts" element={<Posts />} />
                            <Route path="/posts/:id" element={<PostIdPage />} />
                            <Route
                                path="*"
                                element={<Navigate to="/posts" replace />}
                            />
                        </Routes>
                    :
                        <Routes>
                            <Route path="/login" element={<Login />} />
                            <Route
                                path="*"
                                element={<Navigate to="/login" replace />}
                            />
                        </Routes>
            }
        </div>
    )
}

export default AppRouter
