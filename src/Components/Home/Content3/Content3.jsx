import React from 'react'
import MasterCall from '../../Forms/MasterCall/MasterCall'
import "./Content3.scss"
export default function Content3() {
  return (
    <div className='Content3'>
      <h1>ВЫЗВАТЬ МАСТЕРА</h1>
      <MasterCall size="large"/>
      <div className='Content3_footer'>
        <img src="/Images/Home_images/Content3.png" />
        <p>Мастера сервисного центра Geko Corp оперативно и гарантированно устранят любые проблемы, вызванные програмными или аппаратными сбоями. В случае выявления неисправностей, которые невозможно обнаружить при первоначальной диагностике, мастер обязательно согласует с вами возникшие дополнительные расходы, так что вы всегда будете уверены в конечной стоимости ремонта.  <br /><br />Вы можете рассчитать предварительную стоимость ремонта по ценам в нашем прайс-листе. Если вы не нашли нужную услугу, свяжитесь с нами. </p>
      </div>
    </div>
  )
}
