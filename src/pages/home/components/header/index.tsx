import React from 'react'
import { StyledHeader } from './style'

export default function Header() {
  return (
    <>
        <StyledHeader>
            <div className="header_name">
                <img src="https://cdn.discordapp.com/attachments/733520580355293286/1098635263250538719/Motors_shop.png" alt="" />
            </div>
            <div className='header_buttons'>
                <button className='login_button'>
                    Fazer Login
                </button>
                <button className='login_register'>
                    Cadastrar
                </button>
                <img className="burguer_icon" src="https://cdn.discordapp.com/attachments/733520580355293286/1101303942043930646/burguer.png" alt="" />
            </div>
        </StyledHeader>
    </>
  )
}
