import React from "react";

export default class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.addToCart = this.addToCart.bind(this);
  }

  addToCart() {
    this.props.addToCart(this.props.count * this.props.priceCheck);
  }

  render() {
    const price = this.props.count * this.props.priceCheck;
    return (
      <div className="addToCart">
        <button
          type="submit"
          name="action"
          disabled={this.props.count > 0 ? false : true}
          className="cartButton waves-light btn-small"
          onClick={this.addToCart}
          id={"cartButton"}
        >
          <i className="material-icons right ">shopping_cart</i>
          <b>Add</b>
        </button>

        <h5>Price: {price.toFixed(2)}</h5>
        <br />
      </div>
    );
  }
}
