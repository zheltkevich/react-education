import React from 'react'
import { Route, Routes, Navigate } from "react-router-dom"
import About from "../pages/About"
import Posts from "../pages/Posts"
import NotFound from "../pages/NotFound"

const AppRouter = () => {
  return (
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
  )
}

export default AppRouter
