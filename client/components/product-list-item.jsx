import React from 'react';

export default function ProductListItem(props) {
  console.log(props);
  return (
    <div className="card">
      <img className=" card-img-top" src={props.image} alt="product name"/>
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <h6 className="card-title text-muted">${props.price / 100}</h6>
        <p className="text-dark">{props.shortDescription}</p>
      </div>
    </div>
  );
}

// product-card col-6 col-md-4
//
