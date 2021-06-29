import React from 'react';
import { Link } from 'react-router-dom';
import { MdAccountCircle } from 'react-icons/md';
import IconosUsar from '../IconosUsar';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <div>
        <MdAccountCircle size='5rem' color='red' />
      </div>

      <Link to='/'>Home</Link>
      <Link to='/carrito'>Carrito</Link>
      <Link to='/product'>product</Link>
      <Link to='/search'>buscar</Link>
      <h1>Iconos a utilizar</h1>
      <IconosUsar />
    </div>
  );
};

export default Home;
