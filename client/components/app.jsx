import React from 'react';
import Header from './header';
import ProductList from './product-list';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      isLoading: true
    };
  }

  render() {
    return (
      <>
        <div className="row-1">
          <Header />
        </div>
        <div className="row-2">
          <div className="container">
            <div className="row">
              <ProductList />
            </div>
          </div>
        </div>
      </>
    );
  }
}
