import { Link, NavLink } from 'react-router-dom'
import ROUTES from '../../routes'
import "./Header.scss"
const activeClassName = ({ isActive }) => isActive ? "active__link" : '';

export default function Header() {
  return (
    <div className='Header'>
      <Link to={ROUTES.HOME} className='Logo'>
        <img src="/Images/HeaderFooter_images/Logo.png" />
      </Link>
      <div className="Header_content">
        <div className='Header_content_info'>
          <div className='numbers'>
            <i className="bi bi-arrow-right-short"></i>
            <p> +7 (495) 135-45-47</p>
          </div>
          <div className='numbers'>
            <i className="bi bi-arrow-right-short"></i>
            <p> +7 (965) 318-70-14</p>
          </div>
          <div className='SocialMedia'>
            <Link to="https://www.instagram.com/" target="_blank"><img src="/Images/HeaderFooter_images/Instagram.svg" /></Link>
            <Link to="https://www.whatsapp.com/" target="_blank"><img src="/Images/HeaderFooter_images/whatsapp.png" /></Link>
            <Link to="https://web.telegram.org/k/" target="_blank"><img src="/Images/HeaderFooter_images/telegram.png" /></Link>
          </div>
        </div>
        <nav>
          <NavLink to={ROUTES.HOME} className={activeClassName}>ГЛАВНАЯ</NavLink>
          <NavLink to={ROUTES.ABOUT} className={activeClassName}>О НАС</NavLink>
          <NavLink to={ROUTES.COMPUTER_REPAIR} className={activeClassName}>УСЛУГИ</NavLink>
          <NavLink to={ROUTES.PRICE_LIST} className={activeClassName}>ПРАЙС-ЛИСТ</NavLink>
          <NavLink to={ROUTES.REVIEWS} className={activeClassName}>ОТЗЫВЫ</NavLink>
          <NavLink to={ROUTES.BLOG} className={activeClassName}>БЛОГ</NavLink>
          <NavLink to={ROUTES.CONTACTS} className={activeClassName}>КОНТАКТЫ</NavLink>
        </nav>
      </div>
    </div>
  )
}
