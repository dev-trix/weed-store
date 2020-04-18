import React from "react";

import QuantityCounter_checkoutButton from "./QuantityCount_checkButton";

export default class Purple_Kush extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prize: 59.99,
      title: "3M Mask Resp",
      amount: 0,
      subtitle: "3M Mask with Respirator",
      image: "/images/img/3m-mask2.png",
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
