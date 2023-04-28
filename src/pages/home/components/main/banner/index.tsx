import React from 'react'
import { StyledHeaderMain } from './style'

export default function Banner() {
  return (
    <StyledHeaderMain>
      <img src="https://i.pinimg.com/originals/7e/76/62/7e76628a4fb9e03684a23a1133aeebfd.jpg" alt="" />
      <span className='img_title'>Motors shop</span>
      <span className='img_content'>A melhor plataforma de anúncio de carros do país.</span>
    </StyledHeaderMain>
  )
}
