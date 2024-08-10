import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "./Advantages.scss"

export default function Advantages() {
  const [advantagesState, setAdvantagesState] = useState()
  useEffect(() => {
    axios("http://localhost:3000/advantages")
    .then(res=>setAdvantagesState(res.data))
  }, [])
  
  return (
    <div className='Advantages'>
      <h1>ПОЧЕМУ СТОИТ ОБРАТИТЬСЯ К НАМ</h1>
      <div className='Advantages_content'>
        <div className='verticalLines line1'></div>
        <div className='verticalLines line2'></div>
        <div className='verticalLines line3'></div>
        <div className='verticalLines line4'></div>
        <div className='verticalLines line5'></div>
        <div className='verticalLines line6'></div>
        <div className='horizontalLines line7'></div>
        <div className='horizontalLines line8'></div>
        <div className='horizontalLines line9'></div>
        <div className="frames frame1"></div>
        <div className="frames frame2"></div>
        <div className="frames frame3"></div>
        <div className="frames frame4"></div>
        <div className="frames frame5"></div>
        <div className="frames frame6"></div>
        <div className="frames frame7"></div>
        <div className="frames frame8"></div>
        {
          advantagesState?.map(elem=>{
            return(
              <div key={elem.id} className='item'>
                <img src={elem.image}/>
                <p>{elem.desc}</p>
              </div>
            )
          })
        }
        
      </div>
    </div>
  )
}
