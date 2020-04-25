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

  render() {
    const reactElementArray = this.state.productList.map(currentValue => {
      return (<ProductListItem key={currentValue.productId} name={currentValue.name} shortDescription={currentValue.shortDescription} price={currentValue.price} image={currentValue.image} />);
    });

    return (

      <>
        {reactElementArray}
      </>
    );
  }
}
