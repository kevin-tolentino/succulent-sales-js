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
    this.handleSubmit = this.handleSubmit.bind(this);
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
    const submissionInfo = { ...this.state };
    this.props.placeOrder(submissionInfo);
  }

  render() {
    return (
      <>
        <div className="row">
          <div className="col">
            <h1>Checkout</h1>
            <h6 className='text-secondary'>Order Total: ${this.props.total / 100} </h6>
          </div>
        </div>

        <div className="row">
          <form className='col' onSubmit={this.handleSubmit}>
            <div className="form-row my-4">
              <div className="col">
                <label htmlFor="name">Name</label>
                <input
                  required
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Name"
                  value={this.state.name}
                  onChange={this.handleNameChange} />
              </div>

            </div>
            <div className="form-row mb-4">
              <div className="col">
                <label htmlFor="creditCard">Credit Card</label>
                <input
                  required
                  type="text"
                  className="form-control"
                  id="creditCart"
                  placeholder="Credit Card"
                  value={this.state.creditCard}
                  onChange={this.handleCreditCardChange} />
              </div>
            </div>
            <div className="form-row mb-4">
              <div className="col">
                <label htmlFor='shippingAddress'>Shipping Address</label>
                <textarea required rows='3'
                  placeholder="Shipping Address"
                  className='form-control'
                  id='shippingAddress'
                  value={this.state.shippingAddress}
                  onChange={this.handleShippingAddressChange} />
              </div>
            </div>
            <div className="form-row mb-4">
              <div className="col">
                <div className="form-check">
                  <input required className="form-check-input"
                    type="checkbox"
                    name="disclaimer"
                    id="disclaimer"/>
                  <label htmlFor="disclaimer" className="form-check-label">
                    I understand that this is a demo. I should not use personal information.
                  </label>
                </div>
              </div>
            </div>
            <div className="form-row pt-4 my-4">
              <div className="col">
                <p onClick={(name, params) => {
                  this.props.onClick('catalog', this.props.params);
                }}
                className='back-to text-secondary'>&#60; Continue Shopping </p>
              </div>
              <div className="col d-flex justify-content-end">
                <button className='btn btn-success'>Place Order</button>
              </div>
            </div>
          </form>

        </div>
      </>
    );
  }
}
