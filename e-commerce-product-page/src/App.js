import './App.css';
import MainBlock from './components/MainBlock';
import Menu from './components/Menu';

function App() {
  return (
    <div className="App">
      <menu>
        <Menu />
      </menu>
      <section className='main-section'>
        <MainBlock />
      </section>
    </div>
  );
}

export default App;
