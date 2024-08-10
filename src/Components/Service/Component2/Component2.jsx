import React, { useEffect, useState } from 'react'
import "./Component2.scss"
import axios from 'axios'


export default function Component2({device}) {
  const [problems, setProblems] = useState()
  useEffect(() => {
    axios("http://localhost:3000/problems")
    .then(res=>setProblems(res.data[`${device}`]))
  }, [])

  return (
    <div className='Component2'>
      <div className='Component2__column'>
        <h3>НЕИСПРАВНОСТЬ</h3>
        <h3>ПРИЧИНА</h3>
      </div>
      {
        problems?.map(elem=>{
          return(
            <div key={elem.id} className='Component2__column'>
              <div className='problem'>
                <h4>{elem.problem.toUpperCase()}</h4>
                <i className="bi bi-arrow-right"></i>
              </div>
              <div className='reasons'>
                {
                  elem.reason.map((item,index)=>{
                    return(
                      <p key={index}><i className="bi bi-check"></i> {item}</p>
                    )
                  })
                }
              </div>
            </div>
          )
        })
      }
    </div>
  )
}
