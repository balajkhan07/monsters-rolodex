import React from 'react'
import './card.styles.scss'

const Card = ({ monster }) => {
    return <div className="card">
        <img src={`https://robohash.org/${monster.id}?set=set3&size=180x180`} alt={monster.name}/>
        <h2>{monster.name}</h2>
        <p>{monster.email}</p>
    </div>
}

export default Card