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
    fetch('/api/products/1')
      .then(response => response.json())
      .then(data => {
        this.setState({ product: data });
      })
      .catch(err => console.error(err));
  }

  render() {
    return null;
  }
}
