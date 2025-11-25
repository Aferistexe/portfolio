import './App.css';
import Header from './components/header';
import Maininfo from './components/maininfo';
import Skills from './components/skills';
import Project from './components/project';
import Footer from './components/footer';

function App() {
  return (
    <body className="App">
      <Header/>
      <main>
        <article>
          <Maininfo/>
          <Skills/>
          <Project/>
        </article>
      </main>
      <Footer/>
    </body>
  );
}

export default App;
