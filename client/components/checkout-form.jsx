import React from 'react';

export default class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      creditCard: '',
      shippingAddress: ''
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleCreditCardChange = this.handleCreditCardChange.bind(this);
    this.handleShippingAddressChange = this.handleShippingAddressChange.bind(this);

  }

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }

  handleCreditCardChange(event) {
    this.setState({ creditCard: event.target.value });
  }

  handleShippingAddressChange(event) {
    this.setState({ shippingAddress: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <>
        <div className="row">
          <div className="col">
            <h1>Checkout</h1>
            <h3>Order Total: </h3>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="John Doe"
                  value={this.state.name}
                  onChange={this.handleNameChange} />
              </div>
              <div className="form-group">
                <label htmlFor="creditCard">Credit Card</label>
                <input
                  type="text"
                  className="form-control"
                  id="creditCart"
                  placeholder="xxx-xxx-xxxx"
                  value={this.state.creditCard}
                  onChange={this.handleCreditCardChange} />
              </div>
              <div className="form-group">
                <label htmlFor='shippingAddress'>Shipping Address</label>
                <textarea rows='3' className='form-control' id='shippingAddress' value={this.state.shippingAddress} onChange={this.handleShippingAddressChange} />
              </div>
              <div className="row">
                <div className="col">
                  <h6 id='back-to' onClick={(name, params) => {
                    this.props.onClick('catalog', this.props.params);
                  }}
                  className='ml-2 mt-3 back-to'>&#60; Continue Shopping </h6>
                </div>
                <div className="col">
                  <input className='btn btn-primary' type="submit" value="Place Order" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}
