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
        const listItemsArray = data.map(currentValue => {
          return (<ProductListItem key={currentValue.productId} name={currentValue.name} shortDescription={currentValue.shortDescription} price={currentValue.price} image={currentValue.image} />);
        });
        this.setState({ productList: listItemsArray });

        const rowSlices = [];
        for (let listIterator = 0; listIterator < this.state.productList.length; listIterator += 3) {
          console.log('listIterator', listIterator);
          const listSlice = this.state.productList.slice(listIterator, listIterator + 3);
          rowSlices.push(listSlice);
        }
        console.log(this.state.productList, this.state.productList.length);
        console.log(rowSlices);
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
        {this.state.productList}
      </>
    );
  }
}
