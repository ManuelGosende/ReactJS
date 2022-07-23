import React from 'react'

export const GifGridItem = ({ id, title, url }) => {
  return (
    <div className='card animate__shakeX'>
        <p>{ title }</p> 
        <img src={ url } alt={ title }/>
    </div>
  )
}
