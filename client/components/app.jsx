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
      },
      cart: []
    };
    this.setView = this.setView.bind(this);
  }

  setView(name, params) {
    this.setState({ view: { name, params } });
  }

  getCartItems() {
    const init = {
      method: 'GET'
    };
    fetch('/api/cart', init)
      .then(res => res.json())
      .then(data => {
        this.setState({ cart: data });
      });
  }

  // getGrades() {
  //   fetch('/api/grades', { method: 'GET' })
  //     .then(res => res.json())
  //     .then(data => {
  //       this.setState({ grades: data });
  //     });
  // }

  render() {
    const name = this.state.view.name;
    let componentRender;
    if (name === 'catalog') {
      componentRender = <ProductList onClick={this.setView} />;
    } else if (name === 'details') {
      componentRender = <ProductDetails onClick={this.setView} params={this.state.view.params} />;
    }
    return (
      <>
        <div className="row-1">
          <Header />
        </div>
        <div className="row-2">
          <div className="container">
            <div className="row">
              {componentRender}
            </div>

          </div>
        </div>
      </>
    );
  }
}
