import React, { useContext } from 'react'
import "./MonoblocksRepair.scss"
import ServicesNavigation from '../../Components/Service/ServicesNavigation/ServicesNavigation'
import Title from '../../Components/Service/Title/Title'
import Component1 from '../../Components/Service/Component1/Component1'
import { Link } from 'react-router-dom'
import ROUTES from '../../routes'
import Attention from '../../Components/Service/Attention/Attention'
import Component2 from '../../Components/Service/Component2/Component2'
import MyContext from '../../Contexts/context'
import AllModals from '../../Components/Modals/AllModals'

export default function MonoblocksRepair() {
  const value = useContext(MyContext)
  return (
    <div className='MonoblocksRepair'>
      <AllModals/>
      <ServicesNavigation/>
      <Title image={"/Images/Home_images/Monoblocks.svg"} header={"РЕМОНТ МОНОБЛОКОВ"}/>
      <div className="MonoblocksRepair__content">
        <p>Моноблок – это гибрид компьютера и ноутбука, активно набирающий популярность как замена классического сочетания «системный блок + монитор». Они удобны, компактны, занимают мало места и эстетично выглядят, не уступают по характеристикам полноценному персональному компьютеру, отличаются такой же высокой мощностью и быстродействием.  Единственный минус такой техники в том, что в случае поломки отдельного модуля ее приходится ремонтировать полностью – в отличие от ПК, где можно просто заменить системный блок или монитор. Плюс к этому архитектура конструкции моноблока дает большую нагрузку на систему охлаждения, что является частой причиной поломок. </p>
        <img src="/Images/Services_images/monoblocks.png" />
        <h3>ПОЭТОМУ СРЕДИ ПРЕВЕНТИВНЫХ МЕР НА ПЕРВОМ МЕСТЕ СТОИТ РЕГУЛЯРНАЯ ЧИСТКА МОНОБЛОКА, ЭТО МИНИМИЗИРУЕТ РИСК ЧАСТЫХ ПОЛОМОК И СЭКОНОМИТ ВАШИ СРЕДСТВА НА РЕМОНТ.</h3>
        <p>Моноблоки разных брендов имеют разные типы поломок, здесь потребуется высокая квалификация специалистов, огромный опыт и своевременное обращение в компьютерный сервис. Наш сервисный центр Geko Corp готов предложить вам ремонт моноблоков различных производителей: Apple, Asus, HP, Sony, Lenovo, Acer и других. Наши специалисты гарантируют надлежащее исполнение заявленных работ, установку исключительно оригинальных комплектующих и срочную помощь в восстановлении работы моноблока.</p>
      </div>
      <Component1/>
      <div className='MonoblocksRepair__price'>
        <h1>СТОИМОСТЬ РАБОТ</h1>
        <p>Наши цены на услуги по ремонту компьютеров окончательны, то есть не включают скрытых надбавок, которые в дальнейшем могут привести к значительному увеличению стоимости ремонта. После бесплатной диагностики окончательная смета работ составляется из нижеуказанных цен плюс стоимость комплектующих в случае необходимости их замены.</p>
        <Link to={ROUTES.PRICE_LIST}>ПОЛНЫЙ ПРАЙС-ЛИСТ</Link>
      </div>
      <Attention/>
      <Component2 device={"monoblocks"}/>
      <button className='btnOfConsultation' onClick={value.needConsultation}>ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ</button>
    </div>
  )
}
