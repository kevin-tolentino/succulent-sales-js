import React from 'react';

export default function Header(props) {
  return (
    <nav className='mt-2 mb-4 navbar bg-dark'>
      <div className="ml-4 navbar-brand">
        <i className=" fas fa-dollar-sign"></i>
        <span className="ml-1">Wicked Sales</span>
      </div>
    </nav>
  );
}
