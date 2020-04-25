import React from 'react';

export default function ProductListItem(props) {
  return (
    <div className="card card-div col-md-4 mb-4">
      <img className="card-image card-img-top" src={props.image} alt="product name"/>
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <h6 className="card-title text-muted">${props.price / 100}</h6>
        <p className="text-body">{props.shortDescription}</p>
      </div>
    </div>
  );
}
