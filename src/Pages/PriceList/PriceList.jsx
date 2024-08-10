import React, { useContext, useState } from 'react'
import Individuals from '../../Components/PriceList/Individuals/Individuals'
import LegalEntities from '../../Components/PriceList/LegalEntities/LegalEntities'
import classNames from 'classnames'
import "./PriceList.scss"
import MyContext from '../../Contexts/context'
import AllModals from '../../Components/Modals/AllModals'

export default function PriceList() {
  const value = useContext(MyContext)
  const [isOpenIndividuals, setIsOpenIndividuals] = useState(true)
  const [isOpenLegalEntities, setIsOpenLegalEntities] = useState(false)
  const openIndividuals = ()=>{
    setIsOpenIndividuals(true)
    setIsOpenLegalEntities(false)
  }
  const openLegalEntities = ()=>{
    setIsOpenIndividuals(false)
    setIsOpenLegalEntities(true)
  }
  return (
    <div className='PriceList'>
      <AllModals/>
      <div className="PriceList_title">
       <h1>ПРАЙС-ЛИСТ</h1>
      </div>
      <div className='PriceList_choose'>
        <div className={classNames('Individuals slice' ,{"active":isOpenIndividuals})} onClick={openIndividuals} >
          <h2>ФИЗИЧЕСКИМ ЛИЦАМ</h2>
          <i className="bi bi-arrow-left-short"></i>
        </div>
        <span></span>
        <div className={classNames('LegalEntities slice' ,{"active":isOpenLegalEntities})} onClick={openLegalEntities} >
          <i className="bi bi-arrow-right-short"></i>
          <h2>КОРПОРАТИВНЫМ КЛИЕНТАМ</h2>
        </div>
      </div>  
      <div className="PriceList_content"> 
        {
          isOpenIndividuals? <Individuals/>
          :null
        }
        {
          isOpenLegalEntities? <LegalEntities/>
          :null
        }
      </div>
      <button className='btnOfConsultation' onClick={value.needConsultation}>ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ</button>
    </div>
  )
}
