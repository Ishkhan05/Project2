import React from 'react'
import "./Title.scss"

export default function Title({header,image}) {
  return (
    <div className='Title'>
      <img src={image}/>
      <h1>{header}</h1>
    </div>
  )
}
