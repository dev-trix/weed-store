import React from "react";

import QuantityCounter_checkoutButton from "./QuantityCount_checkButton";

export default class Godzilla extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Cert",
      prize: 159.99,
      subtitle: "Back To Work Certification",
      amount: 0,
      image: "/images/img/backtowork.png",
    };
    this.subt = this.subt.bind(this);
    this.godzilla = this.godzilla.bind(this);
  }

  godzilla() {}
  subt(price) {
    this.state.amount = price;

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
