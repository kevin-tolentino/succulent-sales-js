import React from 'react';

export default function CartSummaryItem(props) {

  function handleClick() {
    const paramObj = { productId: props.productId };
    props.onClick('details', paramObj);
    // change to correct arguments ^^
  }

  return (
    <div className="row">
      <div onClick={handleClick} className="">
        <img className="col-4" src={props.image} alt="product name" />
        <div className="col-8">
          <h5 className="card-title">{props.name}</h5>
          <h6 className="card-title text-muted">${(props.price / 100).toFixed(2)}</h6>
          <p className="text-body">{props.shortDescription}</p>
        </div>
      </div>
    </div>
  );
}
