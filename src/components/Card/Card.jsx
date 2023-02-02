import React from 'react'
import './Card.scss'

const Card = ({character}) => {
  return (
    <div className= "simpsons-card">
         <h2>{character.character}</h2>
         <div className='img-coment'>
         <img src= {character.image} alt={character.character}/>
         <p>{character.quote}</p>
         </div>
    </div>
  )
}

export default Card

