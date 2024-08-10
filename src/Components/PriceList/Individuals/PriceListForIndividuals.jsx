import axios from 'axios';
import classNames from 'classnames';
import React, { useEffect, useState } from 'react'

export default function PriceListForIndividuals() {
  const [individuals, setIndividuals] = useState()
  const [openId, setOpenId] = useState(null)
  const [openItemsId, setOpenItemsId] = useState(null)
  const handleOpen = (id) =>{
    setOpenId(openId === id ? null : id)
  }
  const handleOpenItems = (id) =>{
    setOpenItemsId(openItemsId === id ? null : id)
  }

  useEffect(() => {
    axios("http://localhost:3000/priceList")
    .then(res=>setIndividuals(res.data.individuals))
  }, [])
  
  return (
    <div className='PriceListForIndividuals'>
      {
        individuals?.map(elem=>{
          return(
            <div key={elem.id} className='branches'>
              <h3>{elem.title.toUpperCase()}</h3>
              {
                elem.desc?.map(element=>{
                  return(
                    <div key={element.id}  className='slice'>
                      <div className='item' onClick={()=>handleOpen(element.id)}>
                        <h4>{element.section.toUpperCase()}</h4>
                        <i className={classNames("bi",{
                          "bi-chevron-compact-up" : openId === element.id,
                          "bi-chevron-compact-down" : openId !== element.id,
                        })}></i>
                      </div>
                      { element.id===openId?
                        element.services?.map(item=>{
                          return(
                            <div key={item.id} className='items'>
                              <p>{item.service}</p>
                              <p>{item.price}</p>
                            </div>
                          )
                        })

                        ||

                        element.devices?.map(item=>{
                          return(
                            <div key={item.id} className='Apple'>
                              <div className='Apple_products'>
                                <i className="bi bi-arrow-right-short"></i>
                                <h4>{item.device.toUpperCase()}</h4>
                              </div>
                              {
                                item.edition?.map(elem=>{
                                  return(
                                    <div key={elem.id}>
                                      <div className='Apple_product' onClick={()=>handleOpenItems(elem.id)}>
                                        <h5>{elem.device.toUpperCase()}</h5>
                                        <i className={classNames("bi",{
                                          "bi-dash" : openItemsId === elem.id,
                                          "bi-plus" : openItemsId !== elem.id,
                                        })}></i>
                                      </div>
                                      {elem.id===openItemsId?
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
                        })
                        :null
                      }
                    </div>
                  )
                })
                ||
                elem.services?.map(element=>{
                  return(
                    <div key={element.id} className='items'>
                      <p>{element.service}</p>
                      <p>{element.price}</p>
                    </div>
                  )
                })
              }
            </div>
          )
        })
      }
    </div>
  )
}
