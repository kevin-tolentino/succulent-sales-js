import React from 'react';

export default function Header(props) {
  return (
    <nav className='mt-2 mb-4 navbar text-light bg-dark'>
      <div className="ml-2 navbar-brand">
        <i className=" fas fa-dollar-sign"></i>
        <span className="ml-1">Wicked Sales</span>
      </div>
      <div className="mr-2 d-flex align-items-center">
        <span>{props.cartItemCount} items <i className="fas fa-shopping-cart"></i></span>
      </div>

    </nav>
  );
}
