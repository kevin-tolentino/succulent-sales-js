import React from 'react';

export default class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
      initRender: null
    };
  }

  componentDidMount() {
    fetch(`/api/products/${this.props.params.productId}`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          product: data,
          initRender: true
        });
      })
      .catch(err => console.error(err));
  }

  render() {

    if (this.state.initRender === true) {
      const image = this.state.product.image;
      const productName = this.state.product.name;
      const price = this.state.product.price;
      const shortDescription = this.state.product.shortDescription;
      const longDescription = this.state.product.longDescription;
      return (
        <div className="col-12 bg-white">
          <div className="row mt-3">
            <h6 id='back-to' onClick={(name, params) => {
              this.props.onClick('catalog', this.props.params);
            }}
            className='ml-2 mt-3 back-to'>&#60; back to catalog</h6>
          </div>
          <div className="row mt-3 mb-3">
            <div className="col-5">
              <img className="w-100 detail-card-image" src={image} alt={this.state.product.name}/>
            </div>
            <div className="col-7">
              <h2 className="mt-1">{productName}</h2>
              <h3>${(price / 100).toFixed(2)}</h3>
              <p>{shortDescription}</p>
              <button className='btn btn-primary'>Add To Cart</button>
            </div>
          </div>
          <div className="row col-12 mb-3">
            <p className='mt-2'>{longDescription}</p>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}
