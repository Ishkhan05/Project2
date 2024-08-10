import axios from 'axios'
import classNames from 'classnames'
import React, { useEffect, useState } from 'react'

export default function PriceListForLegalEntities() {
  const [legalEntities, setLegalEntities] = useState()
  const [openId, setOpenId] = useState(null)
  const handleClick = (id) =>{
    setOpenId(openId === id ? null : id)
  }

  useEffect(() => {
    axios("http://localhost:3000/priceList")
    .then(res=>setLegalEntities(res.data.legalEntities))
  }, [])
  return (
    <div className='PriceListForLegalEntities'>
      {
        legalEntities?.map(elem=>{
          return(
            <div key={elem.id} className='slice'>
              <div className='item' onClick={()=>handleClick(elem.id)}>
                <h4>{elem.section.toUpperCase()}</h4>
                <i className={classNames("bi",{
                  "bi-chevron-compact-up" : openId === elem.id,
                  "bi-chevron-compact-down" : openId !== elem.id,
                })}></i>
              </div>
              { elem.id===openId?
                elem.services?.map(item=>{
                  return(
                    <div key={item.id} className='items'>
                      <p>{item.service}</p>
                      <p>{item.price}</p>
                    </div>
                  )
                })
                :null
              }
            </div>
          )
        })
      }
    </div>
  )
}
