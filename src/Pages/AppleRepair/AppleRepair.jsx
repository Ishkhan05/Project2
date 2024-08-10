import React from 'react'
import "./AppleRepair.scss"
import ServicesNavigation from '../../Components/Service/ServicesNavigation/ServicesNavigation'
import Title from '../../Components/Service/Title/Title'
import Component1 from '../../Components/Service/Component1/Component1'
import { Link } from 'react-router-dom'
import ROUTES from '../../routes'

export default function AppleRepair() {
  return (
    <div className='AppleRepair'>
      <ServicesNavigation/>
      <Title image={"/Images/Home_images/Apple.svg"} header={"РЕМОНТ ТЕХНИКИ APPLE"}/>
      <div className="AppleRepair__content">
        <p>Компьютерный сервис Geko Corp предоставляет услуги по ремонту, модернизации и поддержке устройств всемирно известного бренда Apple: моноблоки iMac, ноутбуки MacBook Pro и Air, планшеты iPad. Компьютерная техника Apple известна своей надежностью, однако и она не застрахована от выхода из строя. Наши специалисты имеют многолетний опыт работы и знают тонкости обслуживания каждого продукта из линейки Apple. Мы проводим как модульный ремонт, так и все виды сложных компонентных работ, таких как пайка и замена BGA микросхем, восстановление материнских плат после попадания жидкости, восстановление контактных дорожек после механических повреждений и т.д.  В процессе ремонта используется только сертифицированное оборудование, инструменты и запчасти, рекомендованные производителем. </p>
        <img src="/Images/Services_images/apple.png" />
        <h3>ВЫСОКАЯ КВАЛИФИКАЦИЯ МАСТЕРОВ И СПЕЦИАЛЬНОЕ ОБОРУДОВАНИЕ ДЛЯ ДИАГНОСТИКИ, КОМПОНЕНТНОГО И МОДУЛЬНОГО РЕМОНТА ПОЗВОЛЯЕТ НАМ ВОССТАНАВЛИВАТЬ ТЕХНИКУ APPLE ЛЮБОЙ МОДЕЛИ И ПОКОЛЕНИЯ.</h3>        
      </div>
      <Component1/>
      <div className='AppleRepair__price'>
        <h1>СТОИМОСТЬ РАБОТ</h1>
        <p>Наши цены на услуги по ремонту компьютеров окончательны, то есть не включают скрытых надбавок, которые в дальнейшем могут привести к значительному увеличению стоимости ремонта. После бесплатной диагностики окончательная смета работ составляется из нижеуказанных цен плюс стоимость комплектующих в случае необходимости их замены.</p>
        <Link to={ROUTES.PRICE_LIST}>ПОЛНЫЙ ПРАЙС-ЛИСТ</Link>
      </div>
    </div>
  )
}
