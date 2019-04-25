import React from "react";

import QuantityCounter_checkoutButton from "./QuantityCount_checkButton";

export default class Godzilla extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Godzilla",
      prize: 10.5,
      subtitle: "Godzilla",
      amount: 0,
      image: "/images/s-marijuana.1.jpg"
    };
    this.subt = this.subt.bind(this);
    this.godzilla = this.godzilla.bind(this);
  }

  godzilla() {}
  subt(price) {
    this.state.amount = price;
    console.log("Here I am" + " " + this.state.amount);
    this.props.godzilla(this.state.amount);
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
