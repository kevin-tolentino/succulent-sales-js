import React from 'react';

export default function Header(props) {
  return (
    <nav className='mb-4 navbar text-light bg-dark'>
      <div className="ml-2 navbar-brand">
        <img className='logo-styling' src="/images/succulent.png" alt="Succulent Logo"/>
        <span onClick={() => props.onClick('catalog', {})} className="cursor-pointer ml-1">Succculent Sales</span>
      </div>
      <div onClick={(name, params) => {
        props.onClick('cart');
      }} className="mr-2 cursor-pointer d-flex align-items-center">
        <span>{props.cartItemCount} items <i className="fas fa-shopping-cart"></i></span>
      </div>

    </nav>
  );
}
