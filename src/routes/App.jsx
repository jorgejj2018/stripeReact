import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Carrito from '../containers/Carrito';
import Home from '../containers/Home';
import Product from '../containers/Product';
import Search from '../containers/Search';
import NotFound from '../containers/NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/carrito' component={Carrito} />
        <Route exact path='/product' component={Product} />
        <Route exact path='/search' component={Search} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};
export default App;
