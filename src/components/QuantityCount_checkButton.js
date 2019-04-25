import React from "react";
import Cart from "./Cart";
import GetFinalPrice from "./GetFinalPrice";
import Price from "./Price";
import Subtotal from "./Subtotal";

export default class QuantityCounter_checkoutButton extends React.Component {
  constructor(props) {
    super(props);
    this.addOne = this.addOne.bind(this);
    this.minusOne = this.minusOne.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.subt = this.subt.bind(this);

    this.state = {
      count: 0,
      subtotal: 0,
      price: 0,
      grandTotal: 0,
      priceCheck: this.props.prize,
      count2: 0,
      productName: this.props.title
    };
  }
  subt() {}
  addOne() {
    this.setState(prevCount => {
      return {
        count: prevCount.count + 1,
        count2: this.state.count + 1
      };
    });

    // localStorage.setItem('this_portal', num)
  }
  minusOne() {
    this.setState(prevState => {
      if (prevState.count < 1) {
        return {
          count: (prevState.count = 0),
          count2: this.state.count
        };
      } else {
        return {
          count: prevState.count - 1,
          count2: this.state.count - 1
        };
      }
    });
  }

  addToCart(price) {
    this.state.grandTotal = price;
    const destroy_count = this.setState(prevState => {
      return {
        count: (prevState.count = 0),
        grandTotal: price
      };
    });
    this.props.subt(this.state.grandTotal);
  }
  render() {
    return (
      <div>
        <h3>{this.props.subtitle}</h3>
        <br />
        <br />
        <img
          className="z-depth-5"
          style={{
            height: "200px",
            width: "240px"
          }}
          src={this.props.image}
        />
        <br />
        <br />
        <a href="javascript:void(0)" id="bazuka_add" onClick={this.addOne}>
          <i className="material-icons ">add_circle_outline</i>
        </a>
        <a href="javascript:void(0)" id="bazuka_remove" onClick={this.minusOne}>
          <i className="material-icons ">remove_circle_outline</i>
        </a>

        <p id="qty">qty: {this.state.count >= 1 ? this.state.count : ""}</p>

        <Cart
          count={this.state.count}
          addToCart={this.addToCart}
          getPrice={this.getPrice}
          subtotal={this.state.subtotal}
          priceCheck={this.state.priceCheck}
        />
        <GetFinalPrice
          grandTotal={this.state.grandTotal}
          count={this.state.count}
          count2={this.state.count2}
          productName={this.state.productName}
        />
        <Price grandTotal={this.state.grandTotal} />
        <Subtotal grandTotal={this.state.grandTotal} />
      </div>
    );
  }
}
