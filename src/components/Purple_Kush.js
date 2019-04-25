import React from "react";

import QuantityCounter_checkoutButton from "./QuantityCount_checkButton";

export default class Purple_Kush extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prize: 10.99,
      title: "Purple K...",
      amount: 0,
      subtitle: "Purple Kush",
      image: "/images/purple-kush.jpg"
    };
    this.purple = this.purple.bind(this);
    this.subt = this.subt.bind(this);
  }
  purple() {}
  subt(price) {
    this.state.amount = price;

    this.props.purple(this.state.amount);
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
