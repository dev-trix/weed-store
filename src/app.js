// <Purple_Kush />
// <Bazuka_buble_gum />
// <Good_Time />
// <The_Hangover />
// <Fun_Dip />
// <Sour_Patch_Kids />
// <Jedi_Skywalker />

// class Cart extends React.Component {
//   constructor(props) {
//     super(props);
//     this.addOne = this.addOne.bind(this);
//     this.minusOne = this.minusOne.bind(this);

//     this.state = {
//       count: 0
//     };
//   }
//   addOne() {
//     this.setState(prevCount => {
//       return {
//         count: prevCount.count + 1
//       };
//     });
//   }
//   minusOne() {
//     this.setState(prevState => {
//       if (prevState.count < 1) {
//         return {
//           count: (prevState.count = 0)
//         };
//       } else {
//         return {
//           count: prevState.count - 1
//         };
//       }
//     });
//   }

//   render() {
//     const test = "Is anything printing?";

//     return (
//       <div>
//         <Godzilla
//           addOne={this.addOne}
//           count={this.state.count}
//           minusOne={this.minusOne}
//         />
//       </div>
//     );
//   }
// }
class KushApp extends React.Component {
  constructor(props) {
    super(props);
    this.bazuka = this.bazuka.bind(this);
    this.purple = this.purple.bind(this);
    this.godzilla = this.godzilla.bind(this);
    this.jedi = this.jedi.bind(this);
    this.dip = this.dip.bind(this);
    this.sour = this.sour.bind(this);
    this.hangover = this.hangover.bind(this);
    this.goodTime = this.goodTime.bind(this);
    this.state = {
      bazuka: 0,
      purple: 0,
      godzilla: 0,
      jedi: 0,
      funDip: 0,
      sourPatch: 0,
      hangover: 0,
      goodTime: 0
    };
  }

  bazuka(bazukaTotal) {
    this.state.bazuka = bazukaTotal;
    this.forceUpdate();
    console.log("HEY" + " Bazuka " + bazukaTotal);

    // this.setState(prevState => {
    //   return {
    //     bazuka: bazukaTotal,
    //     total: this.state.total + bazukaTotal
    //   };
    // });
  }
  purple(purpleTotal) {
    this.state.purple = purpleTotal;
    this.forceUpdate();
  }
  godzilla(godzillaPrice) {
    this.state.godzilla = godzillaPrice;
    this.forceUpdate();
  }
  jedi(jediPrice) {
    this.state.jedi = jediPrice;
    this.forceUpdate();
  }
  dip(dipPrice) {
    this.state.funDip = dipPrice;
    this.forceUpdate();
  }
  sour(sourPrice) {
    this.state.sourPatch = sourPrice;
    this.forceUpdate();
  }
  hangover(hangoverPrice) {
    this.state.hangover = hangoverPrice;
    this.forceUpdate();
  }
  goodTime(goodTimePrice) {
    this.state.goodTime = goodTimePrice;
    this.forceUpdate();
  }

  render() {
    return (
      <div>
        <br />
        <br />
        <br />
        <br />

        <Purple_Kush purple={this.purple} />
        <Bazuka_buble_gum bazuka={this.bazuka} />
        <Godzilla godzilla={this.godzilla} />
        <Jedi_Skywalker jedi={this.jedi} />
        <Fun_Dip dip={this.dip} />
        <Sour_Patch_Kids sour={this.sour} />
        <The_Hangover hangover={this.hangover} />
        <Good_Time goodTime={this.goodTime} />

        <Subtotal
          bazuka={this.state.bazuka}
          purple={this.state.purple}
          godzilla={this.state.godzilla}
          jedi={this.state.jedi}
          funDip={this.state.funDip}
          sourPatch={this.state.sourPatch}
          hangover={this.state.hangover}
          goodTime={this.state.goodTime}
        />
      </div>
    );
  }
}

class Subtotal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0
    };
  }
  testingSubtotal() {
    if (
      this.props.purple ||
      this.props.bazuka ||
      this.props.godzilla ||
      this.props.jedi ||
      this.props.funDip ||
      this.props.sourPatch ||
      this.props.hangover ||
      this.props.goodTime
    )
      this.state.total =
        this.props.purple +
        this.props.bazuka +
        this.props.godzilla +
        this.props.jedi +
        this.props.funDip +
        this.props.sourPatch +
        this.props.hangover +
        this.props.goodTime;

    return ReactDOM.createPortal(
      <div>
        <div>
          <h3>{this.state.total > 0 && this.state.total.toFixed(2)}</h3>
        </div>
      </div>,
      subtotal
    );
  }
  render() {
    return ReactDOM.createPortal(
      <div>
        <div>{this.testingSubtotal()}</div>
      </div>,
      subtotal
    );
  }
}

class Purple_Kush extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prize: 10.99,
      title: "Purple K...",
      amount: 0,
      subtitle: "Purple Kush"
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
          subt={this.subt}
        />
      </div>
    );
  }
}

class Bazuka_buble_gum extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Bazuka...",
      prize: 15.0,
      amount: 0,
      subtitle: "Bazuka Buble Gum"
    };
    this.subt = this.subt.bind(this);
    this.bazuka = this.bazuka.bind(this);
  }
  bazuka() {}
  subt(price) {
    this.state.amount = price;
    console.log("Here I am" + " " + this.state.amount);
    this.props.bazuka(this.state.amount);
  }

  render() {
    return (
      <div>
        <QuantityCounter_checkoutButton
          prize={this.state.prize}
          title={this.state.title}
          subtitle={this.state.subtitle}
          subt={this.subt}
        />
      </div>
    );
  }
}

class Godzilla extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Godzilla",
      prize: 10.5,
      subtitle: "Godzilla",
      amount: 0
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
          subt={this.subt}
        />
      </div>
    );
  }
}

class Jedi_Skywalker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Jedi...",
      prize: 10.99,
      subtitle: "Jedi Skywalker",
      amount: 0
    };
    this.jedi = this.jedi.bind(this);
    this.subt = this.subt.bind(this);
  }
  jedi() {}
  subt(price) {
    this.state.amount = price;
    console.log("Here I am" + " " + this.state.amount);
    this.props.jedi(this.state.amount);
  }
  render() {
    return (
      <div>
        <QuantityCounter_checkoutButton
          prize={this.state.prize}
          title={this.state.title}
          subtitle={this.state.subtitle}
          subt={this.subt}
        />
      </div>
    );
  }
}

class Fun_Dip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Fun Dip",
      prize: 13.5,
      subtitle: "Fun Dip",
      amount: 0
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
          subt={this.subt}
        />
      </div>
    );
  }
}
class Sour_Patch_Kids extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prize: 10.0,
      title: "Sour Patch...",
      subtitle: "Sour Patch Kids",
      amount: 0
    };
    this.subt = this.subt.bind(this);
    this.sour = this.sour.bind(this);
  }
  sour() {}
  subt(price) {
    this.state.amount = price;
    console.log("Here I am" + " " + this.state.amount);
    this.props.sour(this.state.amount);
  }
  render() {
    return (
      <div>
        <QuantityCounter_checkoutButton
          prize={this.state.prize}
          title={this.state.title}
          subtitle={this.state.subtitle}
          subt={this.subt}
        />
      </div>
    );
  }
}

class The_Hangover extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prize: 14.5,
      title: "The Hangover",
      subtitle: "The Hangover",
      amount: 0
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
          subt={this.subt}
        />
      </div>
    );
  }
}
class Good_Time extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prize: 13.5,
      title: "Good Time",
      subtitle: "Good Time",
      amount: 0
    };
    this.goodTime = this.goodTime.bind(this);
    this.subt = this.subt.bind(this);
  }
  goodTime() {}
  subt(price) {
    this.state.amount = price;
    console.log("Here I am" + " " + this.state.amount);
    this.props.goodTime(this.state.amount);
  }
  render() {
    return (
      <div>
        <QuantityCounter_checkoutButton
          prize={this.state.prize}
          title={this.state.title}
          subtitle={this.state.subtitle}
          subt={this.subt}
        />
      </div>
    );
  }
}
class QuantityCounter_checkoutButton extends React.Component {
  constructor(props) {
    super(props);
    this.addOne = this.addOne.bind(this);
    this.minusOne = this.minusOne.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.subt = this.subt.bind(this);

    this.state = {
      count: 0,
      subtotal: 0,
      price: 0,
      grandTotal: 0,
      priceCheck: this.props.prize,
      count2: 0,
      productName: this.props.title
    };
  }
  subt() {}
  addOne() {
    this.setState(prevCount => {
      return {
        count: prevCount.count + 1,
        count2: this.state.count + 1
      };
    });

    // localStorage.setItem('this_portal', num)
  }
  minusOne() {
    this.setState(prevState => {
      if (prevState.count < 1) {
        return {
          count: (prevState.count = 0),
          count2: this.state.count
        };
      } else {
        return {
          count: prevState.count - 1,
          count2: this.state.count - 1
        };
      }
    });
  }

  addToCart(price) {
    this.state.grandTotal = price;
    const destroy_count = this.setState(prevState => {
      return {
        count: (prevState.count = 0),
        grandTotal: price
      };
    });
    this.props.subt(this.state.grandTotal);
  }
  render() {
    return (
      <div>
        <b>{this.props.subtitle}</b>
        <br />
        <br />
        <a href="javascript:void(0)" id="bazuka_add" onClick={this.addOne}>
          <i className="material-icons ">add_circle_outline</i>
        </a>
        <a href="javascript:void(0)" id="bazuka_remove" onClick={this.minusOne}>
          <i className="material-icons ">remove_circle_outline</i>
        </a>

        <p id="qty">qty: {this.state.count >= 1 ? this.state.count : ""}</p>

        <Cart
          count={this.state.count}
          addToCart={this.addToCart}
          getPrice={this.getPrice}
          subtotal={this.state.subtotal}
          priceCheck={this.state.priceCheck}
        />
        <GetFinalPrice
          grandTotal={this.state.grandTotal}
          count={this.state.count}
          count2={this.state.count2}
          productName={this.state.productName}
        />
        <Price grandTotal={this.state.grandTotal} />
        <Subtotal grandTotal={this.state.grandTotal} />
      </div>
    );
  }
}

class Price extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return ReactDOM.createPortal(
      <div>
        <div>
          {this.props.grandTotal > 0 && this.props.grandTotal.toFixed(2)}
        </div>
      </div>,
      price
    );
  }
}

class GetFinalPrice extends React.Component {
  constructor(props) {
    super(props);
    this.passCartTotal = this.passCartTotal(this);
  }

  passCartTotal() {}
  render() {
    return ReactDOM.createPortal(
      <div>
        <div>
          <div>{this.props.grandTotal > 0 && this.props.productName}</div>
        </div>
      </div>,
      sub
    );
  }
}

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.addToCart = this.addToCart.bind(this);
  }

  addToCart() {
    this.props.addToCart(this.props.count * this.props.priceCheck);
  }

  render() {
    const price = this.props.count * this.props.priceCheck;
    return (
      <div>
        <a
          className="cartButton waves-effect waves-light btn-small"
          onClick={this.addToCart}
        >
          <i className="material-icons right ">shopping_cart</i>
          <b>Add</b>
        </a>
        <h5>Price: {price.toFixed(2)}</h5>
        <br />
      </div>
    );
  }
}

// class FinalTotal extends React.Component {
//   render() {}
// }

ReactDOM.render(<KushApp />, document.getElementById("kushapp"));
// ReactDOM.render(<Subtotal />, document.getElementById("subTotal"));
// ReactDOM.render(<Price />, document.getElementById("price"));
// ReactDOM.render(<GetFinalPrice />, document.getElementById("sub"));
// ReactDOM.render(<Bazuka_buble_gum />, document.getElementById("bazuka"));
// ReactDOM.render(<Jedi_Skywalker />, document.getElementById("jedi"));
// ReactDOM.render(<Fun_Dip />, document.getElementById("fun"));
// ReactDOM.render(<Good_Time />, document.getElementById("good"));
// ReactDOM.render(<Sour_Patch_Kids />, document.getElementById("sour"));
// ReactDOM.render(<The_Hangover />, document.getElementById("hangover"));
// ReactDOM.render(<Purple_Kush />, document.getElementById("purps"));
// ReactDOM.render(<Godzilla />, document.getElementById("godzillaKush"));

// ReactDOM.render(
//   <QuantityCounter_checkoutButton />,
//   document.getElementById("godzillaKush")
// );
// ReactDOM.render(<Cart />, document.getElementById("kushapp"));

// class Purple_Kush extends React.Component {
//   constructor(props) {
//     super(props);
//     this.addOne = this.addOne.bind(this);
//     this.minusOne = this.minusOne.bind(this);

//     this.state = {
//       count: 0
//     };
//   }
//   addOne() {
//     this.setState(prevCount => {
//       return {
//         count: prevCount.count + 1
//       };
//     });
//   }
//   minusOne() {
//     this.setState(prevState => {
//       if (prevState.count < 1) {
//         return {
//           count: (prevState.count = 0)
//         };
//       } else {
//         return {
//           count: prevState.count - 1
//         };
//       }
//     });
//   }
//   render() {
//     const test = "Is anything printing?";

//     return (
//       <div>
//         <QuantityCounter_CheckoutButton
//           count={this.state.count}
//           addOne={this.addOne}
//           minusOne={this.minusOne}
//         />
//       </div>
//     );
//   }
// }

// class The_Hangover extends React.Component {
//   render() {
//     const test = "Is anything printing?";

//     return (
//       <div>
//         <QuantityCounter_CheckoutButton />
//       </div>
//     );
//   }
// }

// class Good_Time extends React.Component {
//   render() {
//     const test = "Is anything printing?";

//     return (
//       <div>
//         <QuantityCounter_CheckoutButton />
//       </div>
//     );
//   }
// }
// class Fun_Dip extends React.Component {
//   render() {
//     const test = "Is anything printing?";

//     return (
//       <div>
//         <QuantityCounter_CheckoutButton />
//       </div>
//     );
//   }
// }
// class Sour_Patch_Kids extends React.Component {
//   render() {
//     const test = "Is anything printing?";

//     return (
//       <div>
//         <QuantityCounter_CheckoutButton />
//       </div>
//     );
//   }
// }
// class Jedi_Skywalker extends React.Component {
//   render() {
//     const test = "Is anything printing?";

//     return (
//       <div>
//         <QuantityCounter_CheckoutButton />
//       </div>
//     );
//   }
// }

// class Bazuka_buble_gum extends React.Component {
//   render() {
//     const test = "Is anything printing?";

//     return (
//       <div>
//         <QuantityCounter_CheckoutButton />
//       </div>
//     );
//   }
// }
