import React, { useContext } from 'react'
import "./Content4.scss"
import MyContext from '../../../Contexts/context'

export default function Content4() {
  const value = useContext(MyContext)
  return (
    <div className='Content4'>
      <div className='Content4_message'>
        <img src="/Images/Home_images/Content4.png" />
        <p>Мы ориентированы на долгосрочное сотрудничество с нашими клиентами и работаем по принципу “домашнего доктора” для вашей компьютерной техники, поэтому обеспечиваем вас технической поддержкой и консультациями по всем вопросам, даже самым мелким.</p>
      </div>
      <div className='Content4_btn'>
        <span></span>
        <button onClick={()=>value.needConsultation()}>ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ</button>
        <span></span>
      </div>
    </div>
  )
}
