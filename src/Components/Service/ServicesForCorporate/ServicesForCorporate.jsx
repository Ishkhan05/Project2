import React, { useEffect, useState } from 'react'
import axios from "axios"
import "./ServicesForCorporate.scss"

export default function ServicesForCorporate() {
  const [state, setState] = useState()
  useEffect(() => {
    axios('http://localhost:3000/servicesForCorporateClients')
    .then(res=>setState(res.data))
  }, [])
  


  return (
    <div className='ServicesForCorporate'>
      <h1>УСЛУГИ, ОКАЗЫВАЕМЫЕ В РАМКАХ ДОГОВОРА АБОНЕНТСКОГО ОБСЛУЖИВАНИЯ</h1>
      <div className="ServicesForCorporate__content">
        {
          state?.map(elem=>{
            return(
              <div key={elem.id} className="ServicesForCorporate__content-item">
                <img src={elem.image} />
                <h4>{elem.title}</h4>
                <p>{elem.desc}</p>
              </div>
            )
          })
        }
        <div className='lines line1'></div>
        <div className='lines line2'></div>
        <div className='lines line3'></div>
        <div className='lines line4'></div>
      </div>
    </div>
  )
}
