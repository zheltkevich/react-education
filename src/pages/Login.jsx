import React from 'react'
import AppButton from '../components/ui/button/AppButton'
import AppInput from '../components/ui/input/AppInput'

const Login = () => {
  return (
    <div>
        <h1>Авторизация</h1>
        <form action="">
            <AppInput type={'text'} placeholder={'Введите логин'}></AppInput>
            <AppInput type={'password'} placeholder={'Введите пароль'}></AppInput>
            <AppButton>Войти</AppButton>
        </form>
    </div>
  )
}

export default Login
