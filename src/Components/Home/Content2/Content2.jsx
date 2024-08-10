import React from 'react'
import "./Content2.scss"

export default function Content2() {
  return (
    <div className='Content2'>
      <h1>НЕ РАБОТАЕТ КОМПЬЮТЕР?</h1>
      <div className='Content2_help'>
        <img src="/Images/Home_images/content2.png"/>
        <div className='steps'>
          <div className='lines line1'></div>
          <div className="step">
            <h2 className='active'>1</h2>
            <p>Вызовите мастера для бесплатной диагностики в удобное для вас время</p> 
          </div>
          <div className='lines line2'></div>
          <div className="step">
            <h2>2</h2>
            <p>Узнайте причину неисправности, перечень необходимых работ и стоимость ремонта</p>
          </div>
          <div className='lines line3'></div>
          <div className="step">
            <h2>3</h2>
            <p>Платите по окончанию выполнения ремонта и подписания договора</p>
          </div>
          <div className='lines line4'></div>
          <div className="step">
            <h2>4</h2>
            <p>Получите гарантию 1 год на произведенные работы</p>
          </div>

        </div>
      </div>
      <div className='more'>
        <span></span>
        <h2>ПОДРОБНЕЕ</h2>
        <span></span>
      </div>
    </div>
  )
}
