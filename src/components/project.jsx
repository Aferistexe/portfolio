import '../styles/project.css'


export default function Project() {
  return (
    <section className='projects' id='projects'>
        <div className='title_project'>
          <h3>Учебные проекты</h3>
        </div>
        <div>
          <div >
            <div>
              <h4 className='title_project--title'>React</h4>
                <div className='button_projects'>
                  <a href="https://github.com/Aferistexe/WeatherApp"><button>WeatherApp</button></a>
                  <a href="https://github.com/Aferistexe/todolistReact"><button href="#">todolistReact</button></a>
                  <a href='https://github.com/Aferistexe/WeatherApp'><button>Finance-Tracker-React</button></a>
                  <a href='https://github.com/Aferistexe/hospitald'><button>Первая работа React{')'} в 2024</button></a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div >
            <div>
              <h4 className='title_project--title'>Js</h4>
                <div className='button_projects'>
                  <a href="https://github.com/Aferistexe/Sliders"><button>Sliders</button></a>
                  <a href="https://github.com/Aferistexe/Quiz_Game"><button href="#">Quiz_Game</button></a>
                  <a href='https://github.com/Aferistexe/lendingPCFuture'><button>Верстка + модальное окно</button></a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div >
            <div>
              <h4 className='title_project--title'>CSS + HTML</h4>
                <div className='button_projects'>
                  <a href="https://github.com/Aferistexe/formHtmlCss"><button>formHtmlCss</button></a>
                  <a href="https://github.com/Aferistexe/OpenAI"><button href="#">OpenAICSSHTML</button></a>
              </div>
            </div>
          </div>
        </div>
                <div>
          <div >
            <div>
              <h4 className='title_project--title'>Что-то на php</h4>
                <div className='button_projects'>
                  <a href="https://github.com/Aferistexe/PhpTasks"><button>Задачи практика</button></a>
                  <a href="https://github.com/Aferistexe/HoispitalDiplome"><button href="#">Дипломная работа php+yii2+boostrap</button></a>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}
