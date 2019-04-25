import React from "react";

import QuantityCounter_checkoutButton from "./QuantityCount_checkButton";

export default class Jedi_Skywalker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Skywalker",
      prize: 10.99,
      subtitle: "Skywalker",
      amount: 0,
      image: "/images/1z2zr4o.jpg"
    };
    this.jedi = this.jedi.bind(this);
    this.subt = this.subt.bind(this);
  }
  jedi() {}
  subt(price) {
    this.state.amount = price;
    console.log("Here I am" + " " + this.state.amount);
    this.props.jedi(this.state.amount);
  }
  render() {
    return (
      <div>
        <QuantityCounter_checkoutButton
          prize={this.state.prize}
          title={this.state.title}
          subtitle={this.state.subtitle}
          image={this.state.image}
          subt={this.subt}
        />
      </div>
    );
  }
}
