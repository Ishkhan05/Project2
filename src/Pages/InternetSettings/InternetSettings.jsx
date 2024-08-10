import React from 'react'
import "./InternetSettings.scss"
import ServicesNavigation from '../../Components/Service/ServicesNavigation/ServicesNavigation'
import Title from '../../Components/Service/Title/Title'
import Component1 from '../../Components/Service/Component1/Component1'
import { Link } from 'react-router-dom'
import ROUTES from '../../routes'

export default function InternetSettings() {
  return (
    <div className='InternetSettings'>
      <ServicesNavigation/>
      <Title image={"/Images/Home_images/Internet.png"} header={"НАСТРОЙКА ИНТЕРНЕТА"}/>
      <div className="InternetSettings__content">
        <p>Без интернета компьютер, планшет или ноутбук превращаются в очень ограниченные по функционалу устройства. Если вы хотите пользоваться сетью в любое время суток, без проблем доступа, зависания и сбоев, специалисты сервиса Geko Corp окажут квалифицированную скорую помощь по настройке интернета на всех портативных компьютерных устройствах, персональных домашних и рабочих компьютерах. Подключение, установка пользовательских настроек может осуществляться независимо от установленной операционной системы. Мы работаем со всеми существующими ОС: Windows XP, Vista, 7, 8, 10, Mobile/CE и более ранними версиями, MacOS 10.4 Tiger, 10.5 Leopard и многими другими. Также при необходимости мы окажем вам техническую помощь с роутером и прокладкой кабелей</p>       
        <img src="/Images/Services_images/internet.png" />
        <h3>ВЫЕЗДНЫЕ СПЕЦИАЛИСТЫ СЕРВИСА GEKO CORP:</h3>
        <ul>
          <li><i className="bi bi-check"></i> Подключат и настроят домашний интернет </li>
          <li><i className="bi bi-check"></i> Проведут интернет-кабель или заменят старый</li>
          <li><i className="bi bi-check"></i> Поменяют поврежденные коннекторы RG-45 на LAN кабеле</li>
          <li><i className="bi bi-check"></i> Помогут в выборе нового Wi-Fi роутера или маршрутизатора</li>
          <li><i className="bi bi-check"></i> Выберут наиболее оптимальное месторасположение Wi-Fi роутера</li>
          <li><i className="bi bi-check"></i> Подключат к роутеру Интернет-телевидение</li>
          <li><i className="bi bi-check"></i> Создадут локальные сети как дома, так и в офисных помещениях</li>
          <li><i className="bi bi-check"></i> Обеспечат безопасность передаваемых по сети данных</li>
        </ul>
      </div>
      <Component1/>
      <div className='InternetSettings__price'>
        <h1>СТОИМОСТЬ РАБОТ</h1>
        <p>Наши цены на услуги по ремонту компьютеров окончательны, то есть не включают скрытых надбавок, которые в дальнейшем могут привести к значительному увеличению стоимости ремонта. После бесплатной диагностики окончательная смета работ составляется из нижеуказанных цен плюс стоимость комплектующих в случае необходимости их замены.</p>
        <Link to={ROUTES.PRICE_LIST}>ПОЛНЫЙ ПРАЙС-ЛИСТ</Link>
      </div>
    </div>
  )
}
