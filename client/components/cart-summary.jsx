import React from 'react';
import CartSummaryItem from './cart-summary-item';

export default function CartSummary(props) {
  const reactElementArray = props.cart.map(currentIndex => {
    return (
      <CartSummaryItem image={currentIndex.image}
        name={currentIndex.name}
        price={currentIndex.price}
        shortDescription={currentIndex.shortDescription}
        key={currentIndex.cartItemId}/>
    );
  });

  return (
    <>
      <div className="row">
        <div className="col">
          <h4>My Cart</h4>
        </div>
      </div>

      {(props.cart.length === 0) ? (<div className="mb-2 row shadow border border-secondary">
        <div className="col">
          <h6>No items currently in cart</h6>
        </div>
      </div>)
        : reactElementArray}
      <div className="row mt-2">
        <div className="col">

          {/* Try using reduce array method below */}
          <h5>Item Total: $5.00</h5>
        </div>
      </div>
    </>
  );
}
