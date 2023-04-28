import React from 'react'
import Card from '../../../home/components/main/components/car_card'
import { StyledAnnouncerCardDiv } from './styled'

export default function AnnouncerCards() {
  return (
    <StyledAnnouncerCardDiv>
        <h2>Anúncios</h2>
        <ul>
            <li>
                <Card/>
            </li>
            <li>
                <Card/>
            </li>
            <li>
                <Card/>
            </li>
            <li>
                <Card/>
            </li>
            <li>
                <Card/>
            </li>
            <li>
                <Card/>
            </li>
            <li>
                <Card/>
            </li>
            <li>
                <Card/>
            </li>
            <li>
                <Card/>
            </li>
        </ul>
        <div className="pagination">
                <p className='page'><span className='selected_page'>1</span> de 2</p>
                <p className="forward">Seguinte</p>
        </div>
    </StyledAnnouncerCardDiv>
  )
}
