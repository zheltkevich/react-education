import React, { useContext } from 'react'
import AppButton from '../components/ui/button/AppButton'
import AppInput from '../components/ui/input/AppInput'
import { AuthContext } from '../context'

const Login = () => {
    const { setIsAuth } = useContext(AuthContext)
    const login = event => {
        setIsAuth(true)
        localStorage.setItem('auth', 'true')
    }

    return (
        <div>
            <h1>Авторизация</h1>
            <form>
                <AppInput type={'text'} placeholder={'Введите логин'}></AppInput>
                <AppInput type={'password'} placeholder={'Введите пароль'}></AppInput>
                <AppButton onClick={() => login()}>Войти</AppButton>
            </form>
        </div>
    )
}

export default Login
