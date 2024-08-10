import React, { useContext } from 'react'
import "./About.scss"
import Content10 from '../../Components/About/Content10/Content10'
import Staff from '../../Components/Staff/Staff'
import Content11 from '../../Components/About/Content11/Content11'
import Content12 from '../../Components/About/Content12/Content12'
import Content13 from '../../Components/About/Content13/Content13'
import PaymentMethod from '../../Components/About/PaymentMethod/PaymentMethod'
import Feedbacks from '../../Components/Feedbacks/Feedbacks'
import Content14 from '../../Components/About/Content14/Content14'
import Content15 from '../../Components/About/Content15/Content15'
import { Link } from 'react-router-dom'
import ROUTES from '../../routes'
import MyContext from '../../Contexts/context'
import AllModals from '../../Components/Modals/AllModals'

export default function About() {
  const value = useContext(MyContext)
  return (
    <div className='About'>
      <div className="About_content">
        <h1>КОМПЬЮТЕРНЫЙ СЕРВИС GEKO CORP</h1>
        <Content10/>
        <Staff />
        <Content11/>
        <Content12/>
        <button className='btnOfNeedMaster' onClick={value.handleCall}>ВЫЗВАТЬ МАСТЕРА</button>
        <Link className='priceLink' to={ROUTES.PRICE_LIST}>ПОСМОТРЕТЬ ПРАЙС-ЛИСТ</Link>
        <img src="/Images/About_images/Content12.png"/>
        <Content13/>
        <PaymentMethod/>
        <Feedbacks/>
        <Content14/>
        <Content15/>
        <button className='btnOfConsultation' onClick={value.needConsultation}>ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ</button>
      </div>
      <AllModals/>
    </div>
  )
}
