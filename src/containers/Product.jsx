import React from 'react';
import { Link } from 'react-router-dom';

const Product = () => {
  return (
    <div>
      <h1>Producr</h1>
      <Link to='/'>Home</Link>
      <Link to='/carrito'>Carrito</Link>
      <Link to='/product'>product</Link>
      <Link to='/search'>buscar</Link>
    </div>
  );
};

export default Product;
