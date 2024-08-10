import React from 'react'
import "./StepsOfWork.scss"
import MasterCall from '../../Forms/MasterCall/MasterCall'

export default function StepsOfWork() {
  return (
    <div className='StepsOfWork'>
      <div className="StepsOfWork__content">
        <div className='StepsOfWork__content-steps'>
          <h2>ЭТАПЫ РАБОТЫ</h2>
          <div className='step'>
            <h1>1</h1>
            <div className='step_content'>
              <h3>ИЗУЧЕНИЕ И СОГЛАСОВАНИЕ</h3>
              <ul>
                <li>
                  <i className="bi bi-check"></i>
                  <p>Проводим аудит (с выездом специалистов нашей компании в ваш офис)</p>
                </li>
                <li>
                  <i className="bi bi-check"></i>
                  <p>Разрабатываем план улучшений</p>
                </li>
                <li>
                  <i className="bi bi-check"></i>
                  <p>Подбираем удобную схему сотрудничества</p>
                </li>
                <li>
                  <i className="bi bi-check"></i>
                  <p>Подписываем договор</p>
                </li>
                <li>
                  <i className="bi bi-check"></i>
                  <p>Согласовываем этапы улучшений и модернизации</p>
                </li>
              </ul>
            </div>
          </div>
          <div className='step'>
            <h1>2</h1>
            <div className='step_content'>
              <h3>НАСТРОЙКА IT-СТРУКТУРЫ</h3>
              <ul>
                <li>
                  <i className="bi bi-check"></i>
                  <p>Настройка оборудования</p>
                </li>
                <li>
                  <i className="bi bi-check"></i>
                  <p>Настройка антивирусной защиты</p>
                </li>
                <li>
                  <i className="bi bi-check"></i>
                  <p>Настройка резервного копирования данных</p>
                </li>
                <li>
                  <i className="bi bi-check"></i>
                  <p>Приведение в порядок серверного узла</p>
                </li>
                <li>
                  <i className="bi bi-check"></i>
                  <p>Совместный с клиентом анализ первых результатов</p>
                </li>
              </ul>
            </div>
          </div>
          <div className='step'>
            <h1>3</h1>
            <div className='step_content'>
              <h3>ПЛАНОВЫЙ СЕРВИС</h3>
              <ul>
                <li>
                  <i className="bi bi-check"></i>
                  <p>Поддержание работоспособности и сервисное обслуживание компьютерной сети</p>
                </li>
                <li>
                  <i className="bi bi-check"></i>
                  <p>Профилактические выезды</p>
                </li>
                <li>
                  <i className="bi bi-check"></i>
                  <p>Устранение возникающих неисправностей</p>
                </li>
                <li>
                  <i className="bi bi-check"></i>
                  <p>Консультирование сотрудников</p>
                </li>
              </ul>
            </div>
          </div>
          <p>Мы работаем по договору с соглашением об уровне сервиса SLA, где четко прописываются все условия сотрудничества и обязательства нашей компании.</p>
        </div>
        <MasterCall/>
      </div>
    </div>
  )
}

