import React from 'react'
import "./Reviews.scss"
import { Link } from 'react-router-dom'
import AllReviews from '../../Components/Reviews/AllReviews/AllReviews'
import LeaveAReview from '../../Components/Forms/LeaveAReview/LeaveAReview'

export default function Reviews() {
  return (
    <div className='Reviews'>
      <h1>ОТЗЫВЫ КЛИЕНТОВ</h1>
      <div className="Reviews_content">
        <div className='info'>
          <p>Мы ориентированы на долгосрочное сотрудничество с нашими клиентами и на рекомендации. Просим вас после ремонта, выполненного нашими специалистами, оставить честный отзыв о нашей работе на этой странице или на независимых сайтах <Link to="https://www.otzovik.com/" target='_blanc'>www.otzovik.com</Link> и <Link to="https://www.irecommend.ru/" target='_blanc'>www.irecommend.ru</Link> </p>
          <div className='line'></div>
          <div className='links'>
            <div className="link">
              <img src="/Images/Reviews_images/Otzovik.png"/>
              <p>Мы на <Link to="https://www.otzovik.com/" target='_blanc'>www.otzovik.com</Link></p>
            </div>
            <div className="link">
              <img src="/Images/Reviews_images/Irecommend.png"/>
              <p>Мы на <Link to="https://www.irecommend.ru/" target='_blanc'>www.irecommend.ru</Link></p>
            </div>
          </div>
        </div>
      </div>
      <AllReviews/>
      <div className='Reviews_form'>
        <h1>ОСТАВИТЬ ОТЗЫВ</h1>
        <LeaveAReview/>
      </div>
    </div>
  )
}
