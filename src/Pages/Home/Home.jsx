import React, { useContext, useState } from 'react'
import Services from '../../Components/Home/Services/Services'
import Content2 from '../../Components/Home/Content2/Content2'
import Content4 from '../../Components/Home/Content4/Content4'
import Advantages from '../../Components/Home/Advantages/Advantages'
import Feedbacks from '../../Components/Feedbacks/Feedbacks'
import Staff from '../../Components/Staff/Staff'
import Content8 from '../../Components/Home/Content8/Content8'
import Content9 from '../../Components/Home/Content9/Content9'
import Content3 from '../../Components/Home/Content3/Content3'
import "./Home.scss"
import AllModals from '../../Components/Modals/AllModals'
import MyContext from '../../Contexts/context'

export default function Home() {
  const value = useContext(MyContext)
  return (
    <div className='Home'>
      <AllModals/>
        <div className="Home_title">
          <div className="Home_title_content">
            <h1>ОПЕРАТИВНАЯ КОМПЬЮТЕРНАЯ ПОМОЩЬ</h1>
            <h5>Ремонт любой сложности ПК, ноутбуков и техники Apple для дома и офиса</h5>
            <p>Срочный выезд мастера</p>
            <button className='btnOfNeedMaster' onClick={value.handleCall}>ВЫЗВАТЬ МАСТЕРА</button>
          </div>
        </div>
        <Services/>
        <Content2/>
        <Content3 />
        <Content4/>
        <Advantages/>
        <Feedbacks/>
        <Staff/>
        <Content8/>
        <Content9/>
        <button className='btnOfConsultation' onClick={()=>value.needConsultation()}>ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ</button>
    </div>
  )
}
