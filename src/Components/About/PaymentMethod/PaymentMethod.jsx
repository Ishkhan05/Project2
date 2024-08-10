import React from 'react'
import "./PaymentMethod.scss"
export default function PaymentMethod() {
  return (
    <div className='PaymentMethod'>
      <div className="PaymentMethod_content">
        <h1>СПОСОБЫ ОПЛАТЫ</h1>
        <p>Мы работаем с частными и юридическими лицами. Вы можете оплатить работу наших специалистов любым удобным для вас способом.</p>
        <div className="Individuals">
          <h2>ФИЗИЧЕСКИЕ ЛИЦА</h2>
          <div className="Individuals_methods">
            <div className="method">
              <h4>НАЛИЧНЫМИ МАСТЕРУ</h4>
              <img src="/Images/Payment_images/purse.png" />
            </div>
            <span></span>
            <div className="method">
              <h4>БАНКОВСКАЯ КАРТА</h4>
              <img src="/Images/Payment_images/Paymentsystems.png" />
            </div>
            <span></span>
            <div className="method">
              <h4>ПЕРЕВОД СБЕРБАНК ОНЛАЙН</h4>
              <img src="/Images/Payment_images/Sberbank.png" />
            </div>
            <span></span>
            <div className="method">
              <h4>ЭЛЕКТРОННЫЕ ДЕНЬГИ</h4>
              <img src="/Images/Payment_images/Digitalmoney.png" />
            </div>
          </div>
          <p>Оплата производится по окончании ремонта, после подписания договора и акта сдачи-приемки работ.</p>
        </div>
        <div className="LegalEntities">
          <h2>ЮРИДИЧЕСКИЕ ЛИЦА</h2>
          <h4>БЕЗНАЛИЧНЫЙ РАСЧЕТ</h4>
          <p>Оплата производится в соответствии с условиями заключенного договора.</p>
        </div>
      </div>
    </div>
  )
}
