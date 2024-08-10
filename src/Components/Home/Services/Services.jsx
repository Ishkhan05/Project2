import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ROUTES from '../../../routes'
import axios from 'axios'
import "./Services.scss"


export default function Services() {
  const [servicesState, setServicesState] = useState()
  useEffect(() => {
    axios("http://localhost:3000/service")
    .then(res=>setServicesState(res.data))
  }, [])

  return (
    <div className='Services'>
      {
        servicesState?.map(elem=>{
          return(
            <div key={elem.id} className='Services_Elements'>
              <div className='image_content'>
                <div className='lines'></div>
                <img src={elem.image}/>
                <div className='lines'></div>
              </div>
              <h1>{elem.name}</h1>
              <ul>
                {
                  elem.services.map((service,index)=>{
                    return <li key={index}><i className="bi bi-check"></i>{service}</li>
                  })
                }
                <li className='andMore'>и другое...</li>
              </ul>
              <Link to={ROUTES[elem.link]}>ПОДРОБНОСТИ И ЦЕНЫ</Link>
            </div>
          )
        })
      }
    </div>
  )
}
