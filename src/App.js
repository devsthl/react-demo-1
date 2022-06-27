import logo from './logo.svg';
import './App.scss';
import Home from './components/Home';
import AddNewProduct from './components/AddNewProduct';

function App() {
  return (
    <div className="App">
      <header className="App-header content-left">
        <div
          style={{
            textAlign: "center"
          }}>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Home />
      </header>
      <div className='content-right'>
        <AddNewProduct />
      </div>
    </div>
  );
}

export default App;
