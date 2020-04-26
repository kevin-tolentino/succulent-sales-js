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
      .catch(err => console.error(err));
  }

  componentDidMount() {
    this.getProducts();
  }

  render() {
    const changeView = this.props.onClick;
    const reactElementArray = this.state.productList.map(currentValue => {
      return (<ProductListItem onClick={(name, params) => {
        changeView(name, params);
      }}
      key={currentValue.productId}
      productId = {currentValue.productId}
      name={currentValue.name}
      shortDescription={currentValue.shortDescription}
      price={currentValue.price}
      image={currentValue.image} />);
    });

    return (

      <>
        {reactElementArray}
      </>
    );
  }
}
