
import React from 'react';
import { MdShoppingCart, MdSearch, MdRemoveCircleOutline, MdChevronLeft, MdControlPoint } from 'react-icons/md';

const IconosUsar = () => {
  return (
    <div>
      <div>
        <h3>Carrito de Compras</h3>
        <MdShoppingCart color='blue' size='30px' />
      </div>
      <div>
        <h3>Icono de Search</h3>
        <MdSearch color='blue' size='30px' />
      </div>
      <div>
        <h3>Icono de volver atras</h3>
        <MdChevronLeft color='blue' size='30px' />
      </div>
      <div>
        <h3>Icono de Mas</h3>
        <MdControlPoint color='blue' size='30px' />
      </div>
      <div>
        <h3>Icono de menos</h3>
        <MdRemoveCircleOutline color='blue' size='30px' />
      </div>
    </div>
  );
};

export default IconosUsar;
