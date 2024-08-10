import React, { useContext } from 'react'
import "./CorporateClients.scss"
import ServicesNavigation from '../../Components/Service/ServicesNavigation/ServicesNavigation'
import Title from '../../Components/Service/Title/Title'
import ServicesForCorporate from '../../Components/Service/ServicesForCorporate/ServicesForCorporate'
import StepsOfWork from '../../Components/Service/StepsOfWork/StepsOfWork'
import { Link } from 'react-router-dom'
import ROUTES from '../../routes'
import MyContext from '../../Contexts/context'
import AllModals from '../../Components/Modals/AllModals'

export default function CorporateClients() {
  const value = useContext(MyContext)
  return (
    <div className='CorporateClients'>
      <AllModals/>
      <ServicesNavigation/>
      <Title image={"/Images/Home_images/Corporate.png"} header={"КОРПОРАТИВНЫМ КЛИЕНТАМ"}/>
      <div className="CorporateClients__content">
        <p>Компьютерный сервис Geko Corp ориентирован на сотрудничество с предприятиями малого и среднего бизнеса. IT-аутсорсинг – долгосрочное сотрудничество, при котором организация передает IT-компании полностью или частично функции по обслуживанию компьютеров и сетевого оборудования. Основная выгода IT-поддержки на аутсорсинге заключается в существенной оптимизации финансовых затрат. Ежемесячная стоимость услуг профессионалов в среднем будет гораздо ниже регулярной заработной платы штатного системного администратора. Таким образом, компания покупает качественную услугу по более низкой цене и использует высвобожденный капитал для дальнейшего развития своего бизнеса. <br /><br />Работа с профессиональной фирмой IT-услуг гарантирует контроль стороннего доступа к информации и обеспечение полной безопасности данных. Сокращаются простои в работе персонала, оптимизируются расходы. Неполадки компьютерной техники сводятся к минимуму благодаря большому количеству превентивных мер. Все важные данные регулярно копируются на резервный носитель, в случае их утери доступно быстрое восстановление. Помимо прочего, проводятся подробные консультации персонала.</p>
      </div>
      <div className='CorporateClients__field'>
        <img src="/Images/Corporate_images/FieldIcon.png"/>
        <p>Мы оценим состояние IT-инфраструктуры вашей компании, подберем надежные решения специально под ваши задачи и обеспечим бесперебойную работу вашего бизнеса.</p>
      </div>
      <ServicesForCorporate/>
      <StepsOfWork/>
      <div className='CorporateClients__priceList'>
        <h1>СТОИМОСТЬ РАБОТ</h1>
        <p>Все цены, указанные в нашем прайс-листе на IT-аутсорсинг в Москве, носят ознакомительный характер. Точную стоимость вам озвучит специалист после аудита вашей IT-инфраструктуры. Если вас заинтересовали услуги компании Geko Corp, свяжитесь с нашими специалистами, и мы разработаем для вас индивидуальный абонентский тариф, включающий обслуживание и настройку компьютров и офисного оборудования.</p>
        <div className="CorporateClients__priceList-buttons">
          <button className='btnOfConsultation' onClick={value.needConsultation}>ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ</button>
          <Link to={ROUTES.PRICE_LIST}>ПОЛНЫЙ ПРАЙС-ЛИСТ</Link>
        </div>
      </div>
    </div>
  )
}
