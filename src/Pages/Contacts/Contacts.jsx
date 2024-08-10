import React from 'react'
import "./Contacts.scss"
import MessageUs from '../../Components/Forms/MessageUs/MessageUs'

export default function Contacts() {
  return (
    <div className='Contacts'>
      <h1>КОНТАКТЫ</h1>
      <img src="/Images/Contacts_images/Map.png" />    
      <div className="Contacts_content">
        <div className='contactUs'>
          <p><i className="bi bi-geo-alt-fill"></i> г. Москва, ул. Люблинская 141, офис 319Б</p>
          <p><i className="bi bi-clock"></i> 10:00 - 20:00 (без выходных)</p>
          <p><i className="bi bi-phone"></i> +7 (495) 135-45-47</p>
          <p><i className="bi bi-phone"></i> +7 (965) 318-70-14</p>
          <p><i className="bi bi-envelope"></i> info@remont-geko.ru</p>
        </div>
        <div className='messageUs'>
          <p>Если у вас возникли проблемы с компьютерной техникой или вы заметили странности в ее работе,  пожалуйста, свяжитесь с нами, используя форму обратной связи ниже. Также вы можете позвонить нам по указанным номерам телефона или написать на электронную почту. Мы гарантируем быстрое и качественное решение проблем с вашей техникой.</p>
          <div className='form'>
            <h2>НАПИШИТЕ НАМ</h2>
            <MessageUs/>
          </div>
        </div>
      </div>
    </div>
  )
}
