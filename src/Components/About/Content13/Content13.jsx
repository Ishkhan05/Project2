import React from 'react'
import BrandsImgLink from '../../../Constants/BrandsImgLink'
import "./Content13.scss"

export default function Content13() {
  return (
    <div className='Content13'>
      <div className="Content13_content">
        <h1>МЫ РЕМОНТИРУЕМ КОМПЬЮТЕРЫ И  НОУТБУКИ ЛЮБЫХ МАРОК И НЕИСПРАВНОСТИ ЛЮБОЙ СЛОЖНОСТИ</h1>
        <div className="brands">
          {
            BrandsImgLink.map((elem,index)=>{
              return(
                <img src={elem} key={index}/>
              )
            })
          }
        </div>
        <p>В СВОЕЙ РАБОТЕ МЫ ИСПОЛЬЗУЕМ ТОЛЬКО ЛИЦЕНЗИОННОЕ ПРОГРАММНОЕ ОБЕСПЕЧЕНИЕ И ОРИГИНАЛЬНЫЕ КОМПЛЕКТУЮЩИЕ ОТ ОФИЦИАЛЬНЫХ ДИСТРИБЬЮТОРОВ</p>
      </div>
    </div>
  )
}
