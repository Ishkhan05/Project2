import React, { useContext } from 'react'
import "./AllDone.scss"
import MyContext from '../../../Contexts/context'

export default function AllDone({children}) {
  const value = useContext(MyContext)
  return (
    <div className='AllDone' >
      <div className='AllDone_content'>
        <i className="bi bi-x-lg" onClick={()=>value.handleClose()}></i>
        {children}
      </div>
    </div>
  )
}
