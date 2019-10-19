import React from 'react'
import Card from '../Card/card.component'
import './card-list.styles.scss'

const CardList = ({ monsters }) => {
    return <div className="card-list">
        {monsters.map((monster, index) => (
            <Card key={index} monster={monster} />
        ))}
    </div>
}

export default CardList