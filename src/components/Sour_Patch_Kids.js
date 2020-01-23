import React from "react";

import QuantityCounter_checkoutButton from "./QuantityCount_checkButton";

export default class Sour_Patch_Kids extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prize: 10.0,
      title: "Sour Patch",
      subtitle: "Sour Patch",
      amount: 0,
      image: "/images/ba7ea1fda379e94c6fae61cec211755a.jpg"
    };
    this.subt = this.subt.bind(this);
    this.sour = this.sour.bind(this);
  }
  sour() {}
  subt(price) {
    this.state.amount = price;

    this.props.sour(this.state.amount);
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
