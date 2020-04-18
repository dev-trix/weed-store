import React from "react";

import QuantityCounter_checkoutButton from "./QuantityCount_checkButton";

export default class Fun_Dip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "3M Mask",
      prize: 45.59,
      subtitle: "3M Mask",
      amount: 0,
      image: "/images/img/3m.png",
    };
    this.subt = this.subt.bind(this);
    this.dip = this.dip.bind(this);
  }
  dip() {}
  subt(price) {
    this.state.amount = price;
    console.log("Here I am" + " " + "Fun DIP" + this.state.amount);
    this.props.dip(this.state.amount);
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
