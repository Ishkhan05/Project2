import React from 'react'
import { NavLink } from 'react-router-dom'
import "./ServicesNavigation.scss"
import ROUTES from '../../../routes'

const activeClassName = ({ isActive }) => isActive ? "active__link" : '';

export default function ServicesNavigation() {
  return (
    <nav className='ServicesNavigation'>
      <NavLink to={ROUTES.COMPUTER_REPAIR} className={activeClassName}>КОМПЬЮТЕРЫ</NavLink>
      <NavLink to={ROUTES.LAPTOP_REPAIR} className={activeClassName}>НОУТБУКИ</NavLink>
      <NavLink to={ROUTES.MONOBLOCS_REPAIR} className={activeClassName}>МОНОБЛОКИ</NavLink>
      <NavLink to={ROUTES.APPLE_REPAIR} className={activeClassName}>APPLE</NavLink>
      <NavLink to={ROUTES.COMPUTER_UPGRADE} className={activeClassName}>АПГРЕЙД</NavLink>
      <NavLink to={ROUTES.PROGRAM_INSTALLING} className={activeClassName}>ОС и ПО</NavLink>
      <NavLink to={ROUTES.VIRUS_REMOVAL} className={activeClassName}>ВИРУСЫ</NavLink>
      <NavLink to={ROUTES.INTERNET_SETTINGS} className={activeClassName}>ИНТЕРНЕТ</NavLink>
      <NavLink to={ROUTES.CORPORATE_CLIENTS} className={activeClassName}>КОРПОРАТИВНЫМ КЛИЕНТАМ</NavLink>
    </nav>
  )
}
