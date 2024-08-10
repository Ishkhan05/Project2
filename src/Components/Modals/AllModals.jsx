import React, { useContext } from 'react'
import AllDone from './AllDoneModal/AllDone'
import PhoneCall from '../Forms/PhoneCall/PhoneCall'
import MasterCall from '../Forms/MasterCall/MasterCall'
import MyContext from '../../Contexts/context'

export default function AllModals() {
  const value = useContext(MyContext)
  return (
    <div className='AllModals'>
      {value.isOpen ? (
        <AllDone>
          <h1>ВЫЗВАТЬ МАСТЕРА</h1>
          <MasterCall size='medium'/>
        </AllDone>
      ) : null}
      {value.isDone? (
        <AllDone>
          <i className="bi bi-check-circle"></i>
          <p>Запрос отправлен. Мастер нашего сервисного центра перезвонит Вам в течение 10 минут</p>
        </AllDone>
      ) : null}
      {value.consultation? (
        <AllDone>
          <h1>ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ</h1>
          <PhoneCall/>
        </AllDone>
      ) : null}
    </div>
  )
}
