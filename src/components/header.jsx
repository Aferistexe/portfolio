import React from 'react'
import "../styles/header.css"
import logo from '../images/logo.jpg'

export default function Header() {
  
  return (
    <header>
        <nav>
          <div className='nav_image'>
            <a href="#">
              <img src={logo} alt="Логотип" />
            </a>
          </div>
           <p className='nav__designer-note'>{'<'}----Этот логотип кстати дизайнер сделал</p>
            
            <ul>
              <li><a href="#about">Обо мне</a></li>
              <li><a href="#skills">Навыки</a></li> 
              <li><a href="#projects">Проекты</a></li>
            </ul>
        </nav>
    </header>
  )
}
