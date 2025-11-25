import React from 'react'
import '../styles/footer.css'

export default function Footer() {
  return (
    <footer>
        <div className='footer'>
            <div className='footer_contacts-title'>
                <h5>Контакты</h5>
                <div className='footer_contacts-items'>
                    <p><a href="https://t.me/AllrightLicht">Telegram</a></p>
                    <p>Почта: <a href="mailto:andrey.ivanov@gmail.com">andrey.ivanov@gmail.com</a></p>
                    <p>Номер телефона : <a href="tel:+79623836676">+7{'('}962{')'} 383-66-76</a></p>
                </div>
            </div>
            <div className='footer_nav'>
                <div className='footer_nav-title'>
                    <h5>Меню</h5>
                </div>
                <div className='footer_nav-items'>
                    <nav>
                        <ul>
                            <li><a href="#about">Обо мне</a></li>
                            <li><a href="#skills">Навыки</a></li> 
                            <li><a href="#projects">Проекты</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </footer>
  )
}
