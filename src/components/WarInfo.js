import React from 'react'

function WarInfo({image, title, description, years }) {
  return (
    <div className='warInfo'>
        <div style={{backgroundImage: `url(${image})`}}> </div>
        <h1> {title} </h1>
        <p> {description} </p>
        <p className='years'> years: {years}</p>
      
    </div>
  )
}

export default WarInfo
