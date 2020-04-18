import React from "react";

import QuantityCounter_checkoutButton from "./QuantityCount_checkButton";

export default class Good_Time extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prize: 250.99,
      title: "3M Full",
      subtitle: "3M Full Face Mask",
      amount: 0,
      image: "/images/img/3m-full.png",
    };
    this.goodTime = this.goodTime.bind(this);
    this.subt = this.subt.bind(this);
  }
  goodTime() {}
  subt(price) {
    this.state.amount = price;

    this.props.goodTime(this.state.amount);
  }
  render() {
    return (
      <div>
        <QuantityCounter_checkoutButton
          prize={this.state.prize}
          title={this.state.title}
          image={this.state.image}
          subtitle={this.state.subtitle}
          subt={this.subt}
        />
      </div>
    );
  }
}
