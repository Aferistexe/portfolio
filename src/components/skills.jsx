import React, { useState } from 'react'
import '../styles/skills.css'


export default function Skills() {
const [modalcsshtml,setModalcsshtml] = useState(false)
const [modaljs,setModaljs] = useState(false)
const [modalreact,setModalreact] = useState(false)
const [modalpython,setmodalpython] = useState(false)
const [modalbackend,setmodalbackend] = useState(false)
const [modalboostrap,setmodalboostrap] = useState(false)

const [modalgit,setmodalgit] = useState(false)


const OpenModalHtmlCss = () => {
  setModalcsshtml(!modalcsshtml)
}
const OpenModalJs = () => {
  setModaljs(!modaljs)
}
const OpenModalReact = () => {
  setModalreact(!modalreact)
}
const OpenModalPython = () => {
  setmodalpython(!modalpython)
}
const OpenModalBackend = () => {
  setmodalbackend(!modalbackend)
}
const OpenModalBoostrap = () => {
  setmodalboostrap(!modalboostrap)
}
const OpenModalGit = () => {
  setmodalgit(!modalgit)
}
const OverlayClick = (e,closefunction) => {
  if(e.target === e.currentTarget){
    closefunction(false)
  }
}
  


  return (
    <section className='skills'>
      <div className='skills-title' id='skills'>
        <h2>Мои скиллы</h2>
        <p>На них можно нажать{`)))`}</p>
      </div>
      <div className='skills-info'>
        <div>
          <button onClick={OpenModalHtmlCss}>CSS  && HMTL</button>
        </div>
        <div>
          <button onClick={OpenModalJs}>JS</button>
        </div>
        <div>
          <button onClick={OpenModalReact}>React</button>
        </div>
        <div>
          <button onClick={OpenModalPython}>Python</button>
        </div>
        <div>
          <button onClick={OpenModalBackend}>Backend</button>
        </div>
        <div>
          <button onClick={OpenModalBoostrap}>Bootstrap</button>
        </div>
        <div>
          <button onClick={OpenModalGit}>Git & GitHub</button>
        </div>
      </div>
      {modalcsshtml &&
      <div className='htmlcss' onClick={(e) => OverlayClick(e, setModalcsshtml)}>
          <div>
            <h2 className='htmlcss_modal-title'>CSS & HTML</h2>
          </div>
          <div>
          </div>
          <div className='htmlcss_modal'>
            <div>
              <h3>HTML</h3>
                <ul className='modalhtml'>
                  <li>
                    <p>Семантическая верстка (header, section, nav, article, footer)</p>
                  </li>
                  <li>
                    <p>Формы, таблицы, списки</p>
                  </li>
                  <li>
                    <p>iframe, meta-теги, favicon</p>
                  </li>
                  <li>
                    <p>Валидная структура документа</p>
                  </li>
                  <li>
                    <p>Базовая SEO-оптимизация</p>
                  </li>
                </ul>
            </div>
            <div>
              <h3>CSS</h3>
                <ul className='modalhtml'>
                  <li>
                    <p>Flexbox (justify-content, align-items, flex-direction)</p>
                  </li>
                  <li>
                    <p>CSS Grid (grid-template-columns, gap)</p>
                  </li>
                  <li>
                    <p>Адаптивность (@media queries)</p>
                  </li>
                  <li>
                    <p>Псевдоклассы (:hover, :focus)</p>
                  </li>
                  <li>
                    <p>Позиционирование (relative, absolute)</p>
                  </li>
                  <li>
                    <p>Transform и transition для анимаций</p>
                  </li>
                  <li>
                    <p>Переменные (CSS Custom Properties)</p>
                  </li>
                  <li>
                    <p>БЭМ-нейминг</p>
                  </li>
                  
                </ul>
            </div>
            <div>
              <h3>Что реально умею делать?</h3>
                <ul className='modalhtml'>
                  <li>
                    <p>Верстать макеты из Figma</p>
                  </li>
                  <li>
                    <p>Создавать интерактивные элементы (hover-эффекты)</p>
                  </li>
                  <li>
                    <p>Строить сложные сетки на Flex/Grid</p>
                  </li>
                  <li>
                    <p>Работать с макетами любой сложности</p>
                  </li>
                  <li>
                    <p>Оптимизировать код для производительности</p>
                  </li>
                </ul>
            </div>
          </div>
      </div>
      }
      {modaljs &&
      <div className='htmlcss' onClick={(e) => OverlayClick(e, setModaljs)}>
          <div>
            <h2 className='htmlcss_modal-title'>JavaScript</h2>
          </div>
          <div>
          </div>
          <div className='htmlcss_modal'>
            <div>
              <h3>Основы JavaScript</h3>
                <ul className='modalhtml'>
                  <li>
                    <p>Переменные и типы данных - let/const/var, строки, числа, объекты, массивы</p>
                  </li>
                  <li>
                    <p>Функции - function declaration, arrow functions для обработчиков</p>
                  </li>
                  <li>
                    <p>Массивы и методы - map, filter, forEach (использую в React)</p>
                  </li>
                  <li>
                    <p>Объекты - свойства, методы, деструктуризация</p>
                  </li>
                  <li>
                    <p>Синтаксис ES6+ - шаблонные строки, деструктуризация</p>
                  </li>
                </ul>
            </div>
            <div>
              <h3>Работа с DOM и событиями</h3>
                <ul className='modalhtml'>
                  <li>
                    <p>Поиск элементов - getElementById, querySelector</p>
                  </li>
                  <li>
                    <p>Манипуляции с DOM - создание, изменение, удаление элементов</p>
                  </li>
                  <li>
                    <p>Обработка событий - click, change, submit события</p>
                  </li>
                  <li>
                    <p>Формы - получение данных, базовая валидация</p>
                  </li>
                  <li>
                    <p>Динамические стили - изменение классов, атрибутов</p>
                  </li>
                </ul>
            </div>
            <div>
              <h3>Асинхронность и API</h3>
                <ul className='modalhtml'>
                  <li>
                    <p>Async/await - основы для работы с API</p>
                  </li>
                  <li>
                    <p>Fetch API - GET-запросы к внешним сервисам</p>
                  </li>
                  <li>
                    <p>LocalStorage - сохранение данных в браузере</p>
                  </li>
                  <li>
                    <p>JSON - парсинг и преобразование данных</p>
                  </li>
                </ul>
            </div>
          </div>
      </div>
      }
      {modalreact &&
      <div className='htmlcss' onClick={(e) => OverlayClick(e, setModalreact)}>
          <div>
            <h2 className='htmlcss_modal-title'>React</h2>
          </div>
          <div>
          </div>
          <div className='htmlcss_modal'>
            <div>
              <h3>Основы React</h3>
                <ul className='modalhtml'>
                  <li>
                    <p>Компоненты - создаю функциональные компоненты, понимаю JSX</p>
                  </li>
                  <li>
                    <p>useState - управляю состоянием в проектах, работаю с массивами и объектами</p>
                  </li>
                  <li>
                    <p>useEffect - использую для side effects (localStorage, API запросы)</p>
                  </li>
                  <li>
                    <p>Обработка событий - onClick, onChange, понимаю синтетические события</p>
                  </li>
                  <li>
                    <p>Пропсы - передаю данные между компонентами</p>
                  </li>
                </ul>
            </div>
            <div>
              <h3>Практические навыки</h3>
                <ul className='modalhtml'>
                  <li>
                    <p>Создание SPA - от идеи до рабочего прототипа (TodoList, WeatherApp)</p>
                  </li>
                  <li>
                    <p>Работа с формами - контролируемые компоненты, базовая валидация</p>
                  </li>
                  <li>
                    <p>Списки и рендеринг - работа с массивами данных, ключи</p>
                  </li>
                  <li>
                    <p>Интеграция API - fetch запросы, обработка состояний загрузки</p>
                  </li>
                  <li>
                    <p>Локальное состояние - управление данными внутри компонентов</p>
                  </li>
                </ul>
            </div>
            <div>
              <h3>Реальные проекты</h3>
                <ul className='modalhtml'>
                  <li>
                    <p>TodoList - полный CRUD, localStorage, динамические стили</p>
                  </li>
                  <li>
                    <p>WeatherApp - работа с внешним API, геокодинг, асинхронные операции</p>
                  </li>
                  <li>
                    <p>Верстка в React - адаптивные интерфейсы, условный рендеринг</p>
                  </li>
                  <li>
                    <p>Отладка - решение реальных проблем, работа с ошибками</p>
                  </li>
                </ul>
            </div>
          </div>
      </div>
      }
      {modalpython &&
      <div className='htmlcss' onClick={(e) => OverlayClick(e, setmodalpython)}>
          <div>
            <h2 className='htmlcss_modal-title'>Python</h2>
          </div>
          <div>
          </div>
          <div className='htmlcss_modal'>
            <div>
              <h3>Основы Python (изучал на 1 курсе)</h3>
                <ul className='modalhtml'>
                  <li>
                    <p>Синтаксис - переменные, типы данных, основные операторы</p>
                  </li>
                  <li>
                    <p>Функции - создание и вызов функций, параметры</p>
                  </li>
                  <li>
                    <p>Циклы и условия - for, while, if/else</p>
                  </li>
                  <li>
                    <p>Списки, словари - базовые операции с коллекциями</p>
                  </li>
                </ul>
            </div>
            <div>
              <h3>Ограничения знаний</h3>
                <ul className='modalhtml'>
                  <li>
                    <p>Теория без практики - знания поверхностные, не подкреплены проектами</p>
                  </li>
                  <li>
                    <p>Забыл многое - после курса не использовал в реальных задачах</p>
                  </li>
                  <li>
                    <p>Нет реального опыта - не создавал проектов на Python</p>
                  </li>
                </ul>
            </div>
            <div>
              <h3>Контекст изучения</h3>
                <ul className='modalhtml'>
                  <li>
                    <p>Изучал на первом курсе как часть программы</p>
                  </li>
                  <li>
                    <p>Не применял в личных или коммерческих проектах</p>
                  </li>
                  <li>
                    <p>Основной фокус был на веб-разработке (JavaScript/PHP)</p>
                  </li>
                </ul>
            </div>
          </div>
      </div>
      }{modalbackend &&
      <div className='htmlcss' onClick={(e) => OverlayClick(e, setmodalbackend)}>
          <div>
            <h2 className='htmlcss_modal-title'>Backend Development</h2>
          </div>
          <div>
          </div>
          <div className='htmlcss_modal'>
            <div>
              <h3>PHP & Yii2 Framework</h3>
                <ul className='modalhtml'>
                  <li>
                    <p>Основы PHP - синтаксис, переменные, функции, работа с формами</p>
                  </li>
                  <li>
                    <p>Yii2 Framework - практический опыт разработки</p>
                  </li>
                  <li>
                    <p>Архитектура MVC - понимание структуры (Models, Views, Controllers)</p>
                  </li>
                  <li>
                    <p>Работа с базой данных - настройка подключения, выполнение запросов</p>
                  </li>
                  <li>
                    <p>Миграции БД - работа с готовыми миграциями, понимание концепции</p>
                  </li>
                  <li>
                    <p>CRUD операции - создание, чтение, обновление, удаление данных</p>
                  </li>
                  <li>
                    <p>Валидация данных - настройка правил через rules() в моделях</p>
                  </li>
                  <li>
                    <p>Аутентификация - реализация системы пользователей</p>
                  </li>
                </ul>
            </div>
            <div>
              <h3>Базы данных</h3>
                <ul className='modalhtml'>
                  <li>
                    <p>MySQL - базовые операции, работа с готовой структурой БД</p>
                  </li>
                  <li>
                    <p>Проектирование БД - понимание связей между таблицами</p>
                  </li>
                  <li>
                    <p>SQL запросы - SELECT, INSERT, UPDATE, DELETE</p>
                  </li>
                </ul>
            </div>
            <div>
              <h3>Инструменты</h3>
                <ul className='modalhtml'>
                  <li>
                    <p>Git - контроль версий, работа с репозиториями</p>
                  </li>
                  <li>
                    <p>Локальная разработка - настройка окружения</p>
                  </li>
                </ul>
            </div>
            <div>
              <h3>Практический опыт</h3>
                <ul className='modalhtml'>
                  <li>
                    <p>Реализован сайт с системой пользователей и заказами</p>
                  </li>
                  <li>
                    <p>Настроена авторизация и регистрация пользователей</p>
                  </li>
                  <li>
                    <p>Создана админ-панель для управления данными</p>
                  </li>
                  <li>
                    <p>Реализован функционал заказов с привязкой к пользователям</p>
                  </li>
                </ul>
            </div>
          </div>
      </div>
      }
      {modalboostrap &&
      <div className='htmlcss' onClick={(e) => OverlayClick(e, setmodalboostrap)}>
          <div>
            <h2 className='htmlcss_modal-title'>Bootstrap</h2>
          </div>
          <div>
          </div>
          <div className='htmlcss_modal'>
            <div>
              <h3>Фактический опыт работы</h3>
                <ul className='modalhtml'>
                  <li>
                    <p>Работа с готовыми шаблонами - адаптация под свои нужды</p>
                  </li>
                  <li>
                    <p>Изменение существующих стилей - кастомизация Bootstrap компонентов</p>
                  </li>
                  <li>
                    <p>Подгонка под макет - модификация сетки и компонентов</p>
                  </li>
                  <li>
                    <p>Настройка готовых решений - работа с существующей Bootstrap разметкой</p>
                  </li>
                </ul>
            </div>
            <div>
              <h3>Что конкретно делал</h3>
                <ul className='modalhtml'>
                  <li>
                    <p>Модификация классов - изменение стандартных Bootstrap стилей</p>
                  </li>
                  <li>
                    <p>Адаптация компонентов - подгонка под конкретный дизайн</p>
                  </li>
                  <li>
                    <p>Работа с сеткой - изменение колоночной структуры</p>
                  </li>
                  <li>
                    <p>Настройка отображения - работа с responsive утилитами</p>
                  </li>
                </ul>
            </div>
            <div>
              <h3>Уровень владения</h3>
                <ul className='modalhtml'>
                  <li>
                    <p>Практическое применение - использование в реальных проектах</p>
                  </li>
                  <li>
                    <p>Настройка под задачи - адаптация готовых решений</p>
                  </li>
                  <li>
                    <p>Понимание принципов - работа с Bootstrap архитектурой</p>
                  </li>
                  <li>
                    <p>Ограниченное использование - в рамках модификации готового </p>
                  </li>
                </ul>
            </div>
            <div>
              <h3>Практический опыт</h3>
                <ul className='modalhtml'>
                  <li>
                    <p>Реализован сайт с системой пользователей и заказами</p>
                  </li>
                  <li>
                    <p>Настроена авторизация и регистрация пользователей</p>
                  </li>
                  <li>
                    <p>Создана админ-панель для управления данными</p>
                  </li>
                  <li>
                    <p>Реализован функционал заказов с привязкой к пользователям</p>
                  </li>
                </ul>
            </div>
          </div>
      </div>
      }
      {modalgit &&
      <div className='htmlcss' onClick={(e) => OverlayClick(e, setmodalgit)}>
          <div>
            <h2 className='htmlcss_modal-title'>Git & GitHub</h2>
          </div>
          <div>
          </div>
          <div className='htmlcss_modal'>
            <div>
              <h3>Основы Git</h3>
                <ul className='modalhtml'>
                  <li>
                    <p>Коммиты - создание, просмотр истории коммитов</p>
                  </li>
                  <li>
                    <p>Ветвление - работа с ветками, создание, переключение</p>
                  </li>
                  <li>
                    <p>Отслеживание изменений - добавление файлов в staging area</p>
                  </li>
                  <li>
                    <p>Базовые команды - add, commit, push, pull, status</p>
                  </li>
                </ul>
            </div>
            <div>
              <h3>Работа с GitHub</h3>
                <ul className='modalhtml'>
                  <li>
                    <p>Создание репозиториев - инициализация проектов</p>
                  </li>
                  <li>
                    <p>Управление кодом - загрузка проектов на GitHub</p>
                  </li>
                  <li>
                    <p>Клонирование - работа с существующими репозиториями</p>
                  </li>
                  <li>
                    <p>Деплой - размещение проектов на GitHub Pages</p>
                  </li>
                </ul>
            </div>
            <div>
              <h3>Практический опыт</h3>
                <ul className='modalhtml'>
                  <li>
                    <p>Ведение проектов - TodoList, WeatherApp на GitHub</p>
                  </li>
                  <li>
                    <p>Контроль версий - отслеживание изменений в коде</p>
                  </li>
                  <li>
                    <p>Публикация проектов - демонстрация работ через GitHub Pages</p>
                  </li>
                  <li>
                    <p>Работа с историей - просмотр и управление коммитами</p>
                  </li>
                </ul>
            </div>

          </div>
      </div>
      }
      
      

    </section>
  )
}
