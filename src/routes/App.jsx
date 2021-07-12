import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Carrito from '../containers/Carrito/Carrito';
import Home from '../containers/Home/Home';
import Product from '../containers/Product/Product';
import Search from '../containers/Search/Search';
import NotFound from '../containers/NotFound';
import Stripe from '../stripe/Stripe'

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/carrito' component={Carrito} />
        <Route exact path='/product' component={Product} />
        <Route exact path='/search' component={Search} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
    <Stripe></Stripe>
    </>
  );
};
export default App;
