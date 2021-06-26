import React from 'react';
import { Link } from 'react-router-dom';

const Carrito = () => {
  return (
    <div>
      <h1>Carrito</h1>
      <Link to='/'>Home</Link>
      <Link to='/carrito'>Carrito</Link>
      <Link to='/product'>product</Link>
      <Link to='/search'>buscar</Link>
    </div>
  );
};

export default Carrito;
