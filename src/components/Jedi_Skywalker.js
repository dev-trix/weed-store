import React from "react";

import QuantityCounter_checkoutButton from "./QuantityCount_checkButton";

export default class Jedi_Skywalker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Cert",
      prize: 10.99,
      subtitle: "Back To School Certification",
      amount: 0,
      image: "/images/img/school.png",
    };
    this.jedi = this.jedi.bind(this);
    this.subt = this.subt.bind(this);
  }
  jedi() {}
  subt(price) {
    this.state.amount = price;

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
