import React from 'react'
import { StyledCard } from './style'

export default function Card() {
  return (
    <StyledCard>
      <div className='img_card'>
        <img src="https://cdn.discordapp.com/attachments/733520580355293286/1101320298135031828/dc19e9b94a372ebc21ffeb7623d5632a.png" alt="" />
      </div>
      <div>
        <h2>Maserati Ghibli</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...</p>
        <div className='card_username'>
          <span>SL</span>
          <h3>Samuel Leão</h3>
        </div>
        <footer className='footer_infos'>
          <div className='footer_data'>
            <p>0 Km</p>
            <p>2019</p>
          </div>
          <div>
            <p>R$ 1.000.00,00</p>
          </div>
        </footer>
      </div>
    </StyledCard>
  )
}
