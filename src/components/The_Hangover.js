import React from "react";
import QuantityCounter_checkoutButton from "./QuantityCount_checkButton";

export default class The_Hangover extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prize: 14.5,
      title: "Hangover",
      subtitle: "Hangover",
      amount: 0,
      image: "/images/origin_7-points-oregon-staff.jpg"
    };
    this.subt = this.subt.bind(this);
    this.hangover = this.hangover.bind(this);
  }
  hangover() {}
  subt(price) {
    this.state.amount = price;
    console.log("Here I am" + " " + this.state.amount);
    this.props.hangover(this.state.amount);
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
