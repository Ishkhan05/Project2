import PriceListForIndividuals from './PriceListForIndividuals'
import "./Individuals.scss"

export default function Individuals() {
  
  return (
    <div className='Individuals'>
      <p>Наши цены на услуги по компьютерной помощи окончательны, то есть не включают скрытых надбавок, которые в дальнейшем могут привести к значительному увеличению стоимости ремонта. После бесплатной диагностики окончательная смета работ составляется специалистом из нижеуказанных цен плюс стоимость комплектующих в случае необходимости их замены.</p>
      <div className='basicServices'>
        <div className='items'>
          <p>Выезд мастера</p>
          <p>бесплатно</p>
        </div>
        <div className='items'>
          <p>Диагностика</p>
          <p>бесплатно</p>
        </div>
      </div>
      <div className="otherServices">
        <PriceListForIndividuals/>
      </div>      
    </div>
  )
}
