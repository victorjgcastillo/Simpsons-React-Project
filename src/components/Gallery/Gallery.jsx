import React from 'react'
import Card from '../Card/Card'
import './Gallery.scss'

const Gallery = ({characters}) => {
  return (
    <div className='gallery'>
      {characters.length > 0 && characters.map((character)=> <Card character={character}/>)}
    </div>
  )
}

export default Gallery
