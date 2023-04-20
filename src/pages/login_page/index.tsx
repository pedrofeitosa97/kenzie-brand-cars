import React from 'react'
import Header from './components/header_login'
import LoginContent from './components/login_content'
import { StyledLogin } from './style'

export default function Login() {
  return (
    <StyledLogin>
        <Header/>
        <LoginContent/>
    </StyledLogin>
  )
}
