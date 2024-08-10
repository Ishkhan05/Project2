import React, { useContext } from 'react'
import ServicesNavigation from '../../Components/Service/ServicesNavigation/ServicesNavigation'
import "./ComputerRepair.scss"
import Component1 from '../../Components/Service/Component1/Component1'
import { Link } from 'react-router-dom'
import ROUTES from '../../routes'
import Component2 from '../../Components/Service/Component2/Component2'
import Attention from '../../Components/Service/Attention/Attention'
import Title from '../../Components/Service/Title/Title'
import MyContext from '../../Contexts/context'
import AllModals from '../../Components/Modals/AllModals'

export default function ComputerRepair() {
  const value = useContext(MyContext)
  return (
    <div className='ComputerRepair'>
      <AllModals/>
      <ServicesNavigation/>
      <Title image={"/Images/Home_images/Computers.svg"} header={"РЕМОНТ КОМПЬЮТЕРОВ"}/>
      <div className="ComputerRepair__content">
        <p>Если Ваш компьютер начал работать со сбоями, издавать странные звуки или вообще перестал включаться, рекомендуем срочно обратиться к специалисту, не пытаясь самостоятельно найти причину поломки. Это позволит вам избежать лишних финансовых затрат и сэкономит время. Как правило неисправность компьютера может быть вызвана аппаратными или программными сбоями. </p>
        <div className='ComputerRepair__content-box'>
          <div>
            <div>
              <h3>АППАРАТНЫЕ НЕИСПАРАВНОСТИ</h3>
              <p>Возникают из-за повреждения комплектующих системного блока: жесткого диска, материнской платы, процессора и т. д. В 95% случаев все эти проблемы наши мастера устраняют на месте в день обращения. В сложных случаях доставка в сервисный центр и обратно будет бесплатной.</p>
            </div>
            <div>
              <h3>ПРОГРАММНЫЕ СБОИ</h3>
              <p>Могут быть связаны с действием компьютерных вирусов и вредоносных программ. Мастер удалит любые типы вирусов и установит эффективную антивирусную защиту. В 100% случаях настройка производится на месте в день обращения. </p>
            </div>
          </div>
          <img src="/Images/Services_images/computer.png" />
        </div>
        <p>Квалификация специалистов сервиса Geko позволяет найти решение проблем любого уровня сложности по реанимации вашей компьютерной техники. При диагностике и ремонте компьютеров мы используем только лицензионное программное обеспечение, комплектующие от официальных дистрибьютеров и оборудование ведущих марок Gigabyte, Asus, MSI и т.д.</p>
      </div>
      <Component1/>
      <div className='ComputerRepair__price'>
        <h1>СТОИМОСТЬ РАБОТ</h1>
        <p>Наши цены на услуги по ремонту компьютеров окончательны, то есть не включают скрытых надбавок, которые в дальнейшем могут привести к значительному увеличению стоимости ремонта. После бесплатной диагностики окончательная смета работ составляется из нижеуказанных цен плюс стоимость комплектующих в случае необходимости их замены.</p>
        <Link to={ROUTES.PRICE_LIST}>ПОЛНЫЙ ПРАЙС-ЛИСТ</Link>
      </div>
      <Attention/>
      <Component2 device={"computer"}/>
      <button className='btnOfConsultation' onClick={value.needConsultation}>ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ</button>
    </div>
  )
}
