import logo from './logo.svg';
import './App.scss';
import Home from './components/Home';
import AddNewProduct from './components/AddNewProduct';
import Product from './Products/Product';
import 'react-image-lightbox/style.css'
import Nav from './components/Navigation/Nav';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/product">
          <Product />
        </Route>
        <Route path="/weather">
          <div>WeatherApp</div>
        </Route>
        <Route path="/about">
          <div>about</div>
        </Route>
        <Route path="/" exact={true}>
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
              <hr />
              <Product />
            </div>
          </div>
        </Route>
        <Route path="*">
          <div>404 Not Found</div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
