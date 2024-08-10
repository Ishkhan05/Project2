import React from 'react'
import "./Staff.scss"

export default function Staff() {
  return (
    <div className='Staff'>
      <h1>НАША КОМАНДА</h1>
      <div className="Staff_content">
        <p>В команде мастеров компьютерного сервиса Geko объединились профессионалы, которые хорошо знают и любят свое дело. Огромный опыт, современная техническая база и коллективный потенциал позволяют нам оперативно и качественно решать любые проблемы, возникшие с вашей компьютерной техникой.</p>
        <div className='ourStaff'>
          <div className='worker'>
            <img src="/Images/Home_images/staff.png"/>
            <h3>СЕРГЕЙ АЛЕКСАНДРОВ</h3>
            <p>Опыт работы - 10 лет</p>
          </div>
          <div className='worker'>
            <img src="/Images/Home_images/staff.png"/>
            <h3>СЕРГЕЙ АЛЕКСАНДРОВ</h3>
            <p>Опыт работы - 10 лет</p>
          </div>
          <div className='worker'>
            <img src="/Images/Home_images/staff.png"/>
            <h3>СЕРГЕЙ АЛЕКСАНДРОВ</h3>
            <p>Опыт работы - 10 лет</p>
          </div>
          <div className='worker'>
            <img src="/Images/Home_images/staff.png"/>
            <h3>СЕРГЕЙ АЛЕКСАНДРОВ</h3>
            <p>Опыт работы - 10 лет</p>
          </div>
        </div>
      </div>
    </div>
  )
}
