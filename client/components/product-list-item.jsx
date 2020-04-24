import React from 'react';

export default function ProductListItem(props) {
  return (
    <div className="product-card card col-6 col-md-4">
      <img className="card-image card-img-top" src="images/shamwow.jpg" alt="product name"/>
      <div className="card-body">
        <h5 className="card-title">Product Title</h5>
        <h6 className="card-title text-muted">$Price</h6>
        <p className="text-dark">Short description</p>
      </div>
    </div>
  );
}
