import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AppButton from '../button/AppButton'
import { AuthContext } from '../../../context'

const AppNavbar = () => {
    const { setIsAuth } = useContext(AuthContext)
    const logout = () => {
        setIsAuth(false)
        localStorage.removeItem('auth')
    }

    return (
        <div className="navbar">
            <AppButton onClick={logout}>Выйти</AppButton>
            <div className="navbar__links">
                <Link to="/about">О сайте</Link>
                <Link to="/posts">Посты</Link>
            </div>
        </div>
    )
}

export default AppNavbar
