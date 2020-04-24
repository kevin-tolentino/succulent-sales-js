import React from 'react';
import ProductListItem from './product-list-item';

export default class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: []
    };
  }

  // getProducts

  // componentDidMount() {
  //   fetch('/api/health-check')
  //     .then(res => res.json())
  //     .then(data => this.setState({ message: data.message || data.error }))
  //     .catch(err => this.setState({ message: err.message }))
  //     .finally(() => this.setState({ isLoading: false }));
  // }
  // if (rowCounter = 3){create new row where starting with current index}

  render() {
    return (
      <>
        <ProductListItem />

      </>
    );
  }
}
