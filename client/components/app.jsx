import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';
import CartSummary from './cart-summary';
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
    this.addToCart = this.addToCart.bind(this);
    this.placeOrder = this.placeOrder.bind(this);
  }

  componentDidMount() {
    this.getCartItems();
  }

  setView(name, params) {
    this.setState({ view: { name, params } });
  }

  addToCart(product) {
    const init = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product)
    };
    fetch('/api/cart', init)
      .then(res => res.json())
      .then(data => {
        const newStateCartArray = this.state.cart.concat(data);
        this.setState({ cart: newStateCartArray });
      });
  }

  getCartItems() {
    const init = {
      method: 'GET'
    };
    fetch('/api/cart', init)
      .then(res => res.json())
      .then(data => {
        this.setState({ cart: data });
      })
      .catch(err => console.error(err));
  }

  placeOrder() {
    const order = {
      name: 'John Doe',
      creditCard: '000 000 0000',
      shippingAddress: '9200 Irvine Center Drive, Irvine, CA 92618'
    };
    const init = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(order)
    };
    fetch('/api/orders', init)
      .then(res => res.json())
      .then(data => {
        const cartReset = [];
        this.setState({
          cart: cartReset
        });
        this.setView('catalog', {});
      });
  }

  render() {
    const name = this.state.view.name;
    let componentRender;
    if (name === 'catalog') {
      componentRender = <ProductList onClick={this.setView} />;
    } else if (name === 'details') {
      componentRender = <ProductDetails clickFunction={this.addToCart} onClick={this.setView} params={this.state.view.params} />;
    } else if (name === 'cart') {
      componentRender = <CartSummary cart={this.state.cart} onClick={this.setView} />;
    }
    return (
      <>
        <div className="row-1">
          <Header onClick={this.setView} cartItemCount= {this.state.cart.length} />
        </div>
        <div className="row-2">
          <div className="container">

            {componentRender}

          </div>
        </div>
      </>
    );
  }
}
