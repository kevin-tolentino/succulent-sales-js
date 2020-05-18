import React from 'react';

export default function CartSummaryItem(props) {
  return (
    <div className="mb-2 row shadow-sm border border-secondary">
      <img className="p-1 col-4 cart-image" src={props.image} alt="product name" />
      <div className="col-8">
        <h5 className="card-title">{props.name}</h5>
        <h6 className="card-title text-muted">${(props.price / 100).toFixed(2)}</h6>
        <p className="text-body">{props.shortDescription}</p>
      </div>
    </div>
  );
}
