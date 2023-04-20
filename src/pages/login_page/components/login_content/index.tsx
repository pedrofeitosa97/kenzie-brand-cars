import React from 'react'
import { StyledLoginContent } from './style'

export default function LoginContent() {
  return (
    <StyledLoginContent>
        <h1>Login</h1>
        <form>
            <label>Usuário:</label>
            <input type="text" id="username" name="username" placeholder="Digite seu usuário"/>

            <label>Senha:</label>
            <input type="password" id="password" name="password" placeholder="Digite sua senha"/>

            <a href="#">Esqueci minha senha</a>

            <button className='submit_button'type="submit">Entrar</button>
            <p className='account_message'>Ainda não possui conta?</p>
            <button className='register_button'type="button">Cadastrar</button>
        </form>
    </StyledLoginContent>
  )
}
