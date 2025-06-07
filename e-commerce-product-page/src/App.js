import './App.css';
import Menu from './components/Menu';
import ProductGallery from './components/ProductGallery';

function App() {
  return (
    <div className="App">
      <menu>
        <Menu />
      </menu>
      <section>
        <ProductGallery />
      </section>
    </div>
  );
}

export default App;
