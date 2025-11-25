import React from 'react'
import '../styles/maininfo.css'
import myPhoto from '../images/my-photo.jpg'

export default function MainInfo() {
  return (
        <section className='main-info'>
            <div className='img' id='about'>
                <img src={myPhoto} alt="Фото человека" />
            </div>
            <div className='text'>
                <h1>Обо мне</h1>
                <p>Меня зовут <strong>Даниил</strong>. </p>
                <p>Мне <strong>21</strong>.</p>
                <p> Я начинающий <strong>веб-разработчик</strong>.</p>
                <p>Занимаюсь созданием сайтов и приложений. Умею работать с <strong>HTML, CSS, JavaScript и React</strong>.</p>
                <p>Люблю делать удобные и современные интерфейсы. Стараюсь чтобы мои работы были понятными и красивыми.</p>
                <p>Сейчас активно учусь и развиваюсь в программировании. В свободное время работаю над своими проектами.</p>
            </div>  
        </section>
  )
}
