import React from 'react'
import "./LegalEntities.scss"
import PriceListForLegalEntities from './PriceListForLegalEntities'

export default function LegalEntities() {
  return (
    <div className='LegalEntities'>
      <p>Все цены, указанные в нашем прайс-листе на IT-аутсорсинг в Москве, носят ознакомительный характер. Точную стоимость вам озвучит специалист после аудита вашей IT-инфраструктуры. Если вас заинтересовали услуги компании Geko Corp, свяжитесь с нашими специалистами, и мы разработаем для вас индивидуальный абонентский тариф, включающий обслуживание и настройку компьютров и офисного оборудования.</p>
      <PriceListForLegalEntities/>
      <p>Если вы не нашли интересующую вас услугу или у вас возникли вопросы, свяжитесь с нами по телефону или с помощью формы обратной связи. Наш специалист предоставит вам исчерпывающую информацию и поможет найти нестандартное решение для любой проблемы с вашей компьютерной техникой.</p>
    </div>
  )
}
