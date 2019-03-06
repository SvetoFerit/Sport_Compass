import React, { Component } from 'react';
import "react-bootstrap/dist/react-bootstrap.min.js"
import './App.css';
import { Switch,Route} from 'react-router-dom';

import Navbar from './components/Header'
import Jumbotron from './components/Jumbotron'
import ProductList from './components/ProductList'
import Details from './components/Details'
import Cart from './components/Cart/Cart'
import Default from './components/Default'

class App extends Component {

  render() {

    return (
          <React.Fragment>
            <Navbar />
            <Jumbotron/>
            <Switch>
              <Route exact path="/" component={ProductList} />
              <Route path="/details" component={Details} />
              <Route path="/cart" component={Cart} />
              <Route component={Default} />
            </Switch>

          </React.Fragment>
        );
  }
}

export default App;
