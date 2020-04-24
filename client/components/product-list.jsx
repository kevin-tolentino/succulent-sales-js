import React from 'react';
import ProductListItem from './product-list-item';

export default class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: []
    };
    this.getProducts = this.getProducts.bind(this);
  }

  getProducts() {
    fetch('/api/products')
      .then(response => response.json())
      .then(data => {
        this.setState({ productList: data });
      })
    /* eslint-disable no-console */
      .catch(err => console.log(err));
  }

  componentDidMount() {
    this.getProducts();
  }
  // if (rowCounter = 3){create new row where starting with current index}

  render() {
    return (
      <>
        <ProductListItem />

      </>
    );
  }
}
