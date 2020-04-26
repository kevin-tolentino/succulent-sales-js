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
    this.setView = this.setView.bind(this);
  }

  setView(name, params) {
    this.setState({ view: { name, params } });
  }

  render() {
    // const name = this.state.view.name
    // let details = if (name === 'details') return
    // let product =
    return (
      <>
        <div className="row-1">
          <Header />
        </div>
        <div className="row-2">
          <div className="min-vh-80 container">
            {/* {if (this.state)} */}
            <ProductDetails onClick={this.setView} params={this.state.view.params}/>
            <ProductList onClick={this.setView}/>

            <div className="row">
            </div>
          </div>
        </div>
      </>
    );
  }
}
