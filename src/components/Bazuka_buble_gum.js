import React from "react";
import QuantityCounter_checkoutButton from "./QuantityCount_checkButton";
export default class Bazuka_buble_gum extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Afro Mask",
      prize: 99.99,
      amount: 0,
      subtitle: "African Face Mask",
      image: "/images/img/afro-mask.png",
    };
    this.subt = this.subt.bind(this);
    this.bazuka = this.bazuka.bind(this);
  }
  bazuka() {}
  subt(price) {
    this.state.amount = price;

    this.props.bazuka(this.state.amount);
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
