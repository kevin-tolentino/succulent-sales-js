import React from 'react';

export default function Header(props) {
  return (
    <nav className='mb-4 navbar text-white'>
      <div className="ml-2 navbar-brand">
        <img className='logo-styling' src="/images/succulent.png" alt="Succulent Logo"/>
        <span onClick={() => props.onClick('catalog', {})} className="cursor-pointer ml-1">Succculent Sales</span>
      </div>
      <div onClick={(name, params) => {
        props.onClick('cart');
      }} className="mr-2 cursor-pointer d-flex align-items-center">
        {/* <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
        <span>{props.cartItemCount} items <img className='cart-styling' src="/images/wheelbarrow.svg" alt="Succulent Logo" /></span>
      </div>

    </nav>
  );
}
