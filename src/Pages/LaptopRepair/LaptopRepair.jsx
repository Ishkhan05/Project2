import React, { useContext } from 'react'
import ServicesNavigation from '../../Components/Service/ServicesNavigation/ServicesNavigation'
import Title from '../../Components/Service/Title/Title'
import Component1 from '../../Components/Service/Component1/Component1'
import Attention from '../../Components/Service/Attention/Attention'
import Component2 from '../../Components/Service/Component2/Component2'
import { Link } from 'react-router-dom'
import ROUTES from '../../routes'
import "./LaptopRepair.scss"
import MyContext from '../../Contexts/context'
import AllModals from '../../Components/Modals/AllModals'

export default function LaptopRepair() {
  const value = useContext(MyContext)
  return (
    <div className='LaptopRepair'>
      <AllModals/>
      <ServicesNavigation/>
      <Title image={"/Images/Home_images/Notebooks.svg"} header={"РЕМОНТ НОУТБУКОВ"}/>
      <div className="LaptopRepair__content">
        <p>Благодаря своей мобильности и компактности ноутбуки в современном мире стали одним из самых востребованных видов компьютерной техники, но, к сожалению, они, наиболее часто подвержены разного рода поломкам. В отличие от стационарного компьютера, где поломки носят обычно локальный характер, например, сломалась клавиатура или вышел из строя монитор, в ноутбуке, из-за его комплексной конструкции, велик риск выхода из строя сразу всего аппарата. <br /><br />Независимо от того, какой модели у вас ноутбук, он может выйти из строя по следующим причинам: </p>
        <div className='LaptopRepair__content-box'>
          <div>
            <div>
              <h3>ЗАВОДСКОЙ БРАК</h3>
              <p>Если изначально в девайсе установлены бракованные комплектующие, они не выдержат нагрузки, и техника начнет работать со сбоями.</p>
            </div>
            <div>
              <h3>ДЛИТЕЛЬНАЯ ЭКСПЛУАТАЦИЯ</h3>
              <p>Компоненты системы с течением времени подвергаются износу, ломаются. Поэтому какие-либо элементы может потребоваться заменить. </p>
            </div>
          </div>
          <img src="/Images/Services_images/laptop.png" />
        </div>
        <p>Расколотые корпуса, облитая жидкостью клавиатура. самопроизвольное отключение, сбой батарей, перегрев вентилятора, торможения (зависание оборудования), искаженное изображение на экране – это основные, но далеко не все проблемы, с которыми обращаются в наш компьютерный сервис. <br /> Какой бы ни была поломка вашего ноутбука, обратитесь в сервис Geko Corp. Наши мастера окажут срочную профессиональную помощь и вернут ваш ноутбук к жизни с гарантией стабильной безотказной работы при условии правильной эксплуатации.  В 90% случаев с проблемой удается справиться в день обращения, при серьезных проблемах неисправное устройство будет бесплатно доставлено в сервисный центр..</p>
      </div>
      <Component1/>
      <div className='LaptopRepair__price'>
        <h1>СТОИМОСТЬ РАБОТ</h1>
        <p>Наши цены на услуги по ремонту компьютеров окончательны, то есть не включают скрытых надбавок, которые в дальнейшем могут привести к значительному увеличению стоимости ремонта. После бесплатной диагностики окончательная смета работ составляется из нижеуказанных цен плюс стоимость комплектующих в случае необходимости их замены.</p>
        <Link to={ROUTES.PRICE_LIST}>ПОЛНЫЙ ПРАЙС-ЛИСТ</Link>
      </div>
      <Attention/>
      <Component2 device={"laptop"}/>
      <button className='btnOfConsultation' onClick={value.needConsultation}>ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ</button>
    </div>
  )
}
