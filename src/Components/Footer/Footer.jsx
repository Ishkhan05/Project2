import { Link } from 'react-router-dom'
import ROUTES from '../../routes'
import "./Footer.scss"

export default function Footer() {
  return (
    <div className='Footer'>
      <div className="Footer_Content">
        <div className='About'>
          <img src="/Images/HeaderFooter_images/Logo.png" />
          <p>ИП Шумихин М.А.<br /> ИНН/ОГРНИП:<br /> 141800214410/320623400028827</p>
          <p>Обращаем ваше внимание на то, что данный интернет-сайт носит исключительно информационный характер и ни при каких условиях не является публичной офертой, определяемой положениями Статьи 437 (2) Гражданского кодекса Российской Федерации.</p>
        </div>
        <div className='Navigation links'>
          <Link to={ROUTES.HOME}>ГЛАВНАЯ</Link>
          <Link to={ROUTES.ABOUT}>О НАС</Link>
          <Link to={ROUTES.PRICE_LIST}>ПРАЙС-ЛИСТ</Link>
          <Link to={ROUTES.REVIEWS}>ОТЗЫВЫ</Link>
          <Link to={ROUTES.BLOG}>БЛОГ</Link>
          <Link to={ROUTES.CONTACTS}>КОНТАКТЫ</Link>
        </div>
        <div className='Service links'>
          <Link to={ROUTES.SERVICES}>УСЛУГИ</Link>
          <Link to={ROUTES.COMPUTER_REPAIR}>Ремонт компьютеров</Link>
          <Link to={ROUTES.LAPTOP_REPAIR}>Ремонт ноутбуков</Link>
          <Link to={ROUTES.MONOBLOCS_REPAIR}>Ремонт моноблоков</Link>
          <Link to={ROUTES.APPLE_REPAIR}>Ремонт техники APPLE</Link>
          <Link to={ROUTES.COMPUTER_UPGRADE}>Сборка и апгрейд компьютеров</Link>
          <Link to={ROUTES.PROGRAM_INSTALLING}>Установка ОС и программ</Link>
          <Link to={ROUTES.VIRUS_REMOVAL}>Удаление вирусов</Link>
          <Link to={ROUTES.INTERNET_SETTINGS}>Настройка интернета</Link>
          <Link to={ROUTES.CORPORATE_CLIENTS}>Корпоративным клиентам</Link>
        </div>
        <div className='contacts'>
          <div className='Numbers'>
            <i className="bi bi-arrow-right-short"></i>
            <p> +7 (495) 135-45-47</p>
          </div>
          <div className='Numbers'>
            <i className="bi bi-arrow-right-short"></i>
            <p> +7 (965) 318-70-14</p>
          </div>
          <div className='Contacts_Content'>
            <p><i className="bi bi-geo-alt"></i> г. Москва, ул. Люблинская 141, офис 319Б</p>
            <p><i className="bi bi-envelope"></i> info@remont-geko.ru</p>
            <p><i className="bi bi-clock"></i> 10:00 - 20:00 (без выходных)</p>
          </div>
          <div className='SocialMedia'>
            <Link to="https://www.instagram.com/" target="_blank"><img src="/Images/HeaderFooter_images/Instagram.svg" /></Link>
            <Link to="https://www.whatsapp.com/" target="_blank"><img src="/Images/HeaderFooter_images/whatsapp.png" /></Link>
            <Link to="https://web.telegram.org/k/" target="_blank"><img src="/Images/HeaderFooter_images/telegram.png" /></Link>
          </div>
        </div>
      </div>
    </div>
  )
}
