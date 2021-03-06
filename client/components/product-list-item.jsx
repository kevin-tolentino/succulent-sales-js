import React from 'react';

export default function ProductListItem(props) {
  function handleClick() {
    const paramObj = { productId: props.productId };
    props.onClick('details', paramObj);
  }

  return (
    <div onClick={handleClick} className="card card-div col-md-4 mb-4 overflow-hidden">
      <img className="mt-sm-1 card-image card-img-top" src={props.image} alt="product name"/>
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <h6 className="card-title text-muted">${(props.price / 100).toFixed(2)}</h6>
        <p className="text-body">{props.shortDescription}</p>
      </div>
    </div>
  );
}
