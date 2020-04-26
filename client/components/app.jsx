import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      isLoading: true,
      view: {
        name: 'catalog',
        params: {}
      }
    };
  }

  render() {
    return (
      <>
        <div className="row-1">
          <Header />
        </div>
        <div className="row-2">
          <div className="min-vh-80 container">
            <ProductDetails />

            <div className="row">
              <ProductList />
            </div>
          </div>
        </div>
      </>
    );
  }
}
