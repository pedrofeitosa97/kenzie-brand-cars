import React from 'react'
import Card from './components/car_card'
import { StyledDiv } from './style'

export default function Main() {
  return (
    <>
      <StyledDiv>
        <section className='filter_option'>
          <div>
          <h2>Marca</h2>
            <ul>
              <li>
                <p>General Motors</p>
              </li>
              <li>
                <p>Fiat</p>
              </li>
              <li>
                <p>Honda</p>
              </li>
              <li>
                <p>Porsche</p>
              </li>
              <li>
                <p>Volkswagem</p>
              </li>
            </ul>
          </div>
          <div>
          <h2>Modelo</h2>
            <ul>
              <li>
                <p>General Motors</p>
              </li>
              <li>
                <p>Fiat</p>
              </li>
              <li>
                <p>Honda</p>
              </li>
              <li>
                <p>Porsche</p>
              </li>
              <li>
                <p>Volkswagem</p>
              </li>
            </ul>
          </div>
          <div>
          <h2>Cor</h2>
            <ul>
              <li>
                <p>General Motors</p>
              </li>
              <li>
                <p>Fiat</p>
              </li>
              <li>
                <p>Honda</p>
              </li>
              <li>
                <p>Porsche</p>
              </li>
              <li>
                <p>Volkswagem</p>
              </li>
            </ul>
          </div>
          <div>
          <h2>Ano</h2>
            <ul>
              <li>
                <p>General Motors</p>
              </li>
              <li>
                <p>Fiat</p>
              </li>
              <li>
                <p>Honda</p>
              </li>
              <li>
                <p>Porsche</p>
              </li>
              <li>
                <p>Volkswagem</p>
              </li>
            </ul>
          </div>
          <div>
          <h2>Combustível</h2>
            <ul>
              <li>
                <p>General Motors</p>
              </li>
              <li>
                <p>Fiat</p>
              </li>
              <li>
                <p>Honda</p>
              </li>
              <li>
                <p>Porsche</p>
              </li>
              <li>
                <p>Volkswagem</p>
              </li>
            </ul>
          </div>
          <div>
          <h2>Km</h2>
            <input type="text" />
          </div>
          <div>
          <h2>Preço</h2>
            <input type="text" />
          </div>
        </section>
        <section className='car_cards'>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </section>
        <section className='filter_buttons'>
          <button className='filter_button_filter'>Filtros</button>
          <p className='filter_paragraph'>1 de 2</p>
          <p className='filter_paragraph'>Seguinte</p>
        </section>
      </StyledDiv>
    </>
  )
}
