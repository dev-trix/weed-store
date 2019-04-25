"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
var KushApp = function (_React$Component) {
  _inherits(KushApp, _React$Component);

  function KushApp(props) {
    _classCallCheck(this, KushApp);

    var _this = _possibleConstructorReturn(this, (KushApp.__proto__ || Object.getPrototypeOf(KushApp)).call(this, props));

    _this.bazuka = _this.bazuka.bind(_this);
    _this.purple = _this.purple.bind(_this);
    _this.godzilla = _this.godzilla.bind(_this);
    _this.jedi = _this.jedi.bind(_this);
    _this.dip = _this.dip.bind(_this);
    _this.sour = _this.sour.bind(_this);
    _this.hangover = _this.hangover.bind(_this);
    _this.goodTime = _this.goodTime.bind(_this);
    _this.state = {
      bazuka: 0,
      purple: 0,
      godzilla: 0,
      jedi: 0,
      funDip: 0,
      sourPatch: 0,
      hangover: 0,
      goodTime: 0
    };
    return _this;
  }

  _createClass(KushApp, [{
    key: "bazuka",
    value: function bazuka(bazukaTotal) {
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
  }, {
    key: "purple",
    value: function purple(purpleTotal) {
      this.state.purple = purpleTotal;
      this.forceUpdate();
    }
  }, {
    key: "godzilla",
    value: function godzilla(godzillaPrice) {
      this.state.godzilla = godzillaPrice;
      this.forceUpdate();
    }
  }, {
    key: "jedi",
    value: function jedi(jediPrice) {
      this.state.jedi = jediPrice;
      this.forceUpdate();
    }
  }, {
    key: "dip",
    value: function dip(dipPrice) {
      this.state.funDip = dipPrice;
      this.forceUpdate();
    }
  }, {
    key: "sour",
    value: function sour(sourPrice) {
      this.state.sourPatch = sourPrice;
      this.forceUpdate();
    }
  }, {
    key: "hangover",
    value: function hangover(hangoverPrice) {
      this.state.hangover = hangoverPrice;
      this.forceUpdate();
    }
  }, {
    key: "goodTime",
    value: function goodTime(goodTimePrice) {
      this.state.goodTime = goodTimePrice;
      this.forceUpdate();
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement("br", null),
        React.createElement("br", null),
        React.createElement("br", null),
        React.createElement("br", null),
        React.createElement(Purple_Kush, { purple: this.purple }),
        React.createElement(Bazuka_buble_gum, { bazuka: this.bazuka }),
        React.createElement(Godzilla, { godzilla: this.godzilla }),
        React.createElement(Jedi_Skywalker, { jedi: this.jedi }),
        React.createElement(Fun_Dip, { dip: this.dip }),
        React.createElement(Sour_Patch_Kids, { sour: this.sour }),
        React.createElement(The_Hangover, { hangover: this.hangover }),
        React.createElement(Good_Time, { goodTime: this.goodTime }),
        React.createElement(Subtotal, {
          bazuka: this.state.bazuka,
          purple: this.state.purple,
          godzilla: this.state.godzilla,
          jedi: this.state.jedi,
          funDip: this.state.funDip,
          sourPatch: this.state.sourPatch,
          hangover: this.state.hangover,
          goodTime: this.state.goodTime
        })
      );
    }
  }]);

  return KushApp;
}(React.Component);

var Subtotal = function (_React$Component2) {
  _inherits(Subtotal, _React$Component2);

  function Subtotal(props) {
    _classCallCheck(this, Subtotal);

    var _this2 = _possibleConstructorReturn(this, (Subtotal.__proto__ || Object.getPrototypeOf(Subtotal)).call(this, props));

    _this2.state = {
      total: 0
    };
    return _this2;
  }

  _createClass(Subtotal, [{
    key: "testingSubtotal",
    value: function testingSubtotal() {
      if (this.props.purple || this.props.bazuka || this.props.godzilla || this.props.jedi || this.props.funDip || this.props.sourPatch || this.props.hangover || this.props.goodTime) this.state.total = this.props.purple + this.props.bazuka + this.props.godzilla + this.props.jedi + this.props.funDip + this.props.sourPatch + this.props.hangover + this.props.goodTime;

      return ReactDOM.createPortal(React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          null,
          React.createElement(
            "h3",
            null,
            this.state.total > 0 && this.state.total.toFixed(2)
          )
        )
      ), subtotal);
    }
  }, {
    key: "render",
    value: function render() {
      return ReactDOM.createPortal(React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          null,
          this.testingSubtotal()
        )
      ), subtotal);
    }
  }]);

  return Subtotal;
}(React.Component);

var Purple_Kush = function (_React$Component3) {
  _inherits(Purple_Kush, _React$Component3);

  function Purple_Kush(props) {
    _classCallCheck(this, Purple_Kush);

    var _this3 = _possibleConstructorReturn(this, (Purple_Kush.__proto__ || Object.getPrototypeOf(Purple_Kush)).call(this, props));

    _this3.state = {
      prize: 10.99,
      title: "Purple K...",
      amount: 0,
      subtitle: "Purple Kush"
    };
    _this3.purple = _this3.purple.bind(_this3);
    _this3.subt = _this3.subt.bind(_this3);
    return _this3;
  }

  _createClass(Purple_Kush, [{
    key: "purple",
    value: function purple() {}
  }, {
    key: "subt",
    value: function subt(price) {
      this.state.amount = price;

      this.props.purple(this.state.amount);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(QuantityCounter_checkoutButton, {
          prize: this.state.prize,
          title: this.state.title,
          subtitle: this.state.subtitle,
          subt: this.subt
        })
      );
    }
  }]);

  return Purple_Kush;
}(React.Component);

var Bazuka_buble_gum = function (_React$Component4) {
  _inherits(Bazuka_buble_gum, _React$Component4);

  function Bazuka_buble_gum(props) {
    _classCallCheck(this, Bazuka_buble_gum);

    var _this4 = _possibleConstructorReturn(this, (Bazuka_buble_gum.__proto__ || Object.getPrototypeOf(Bazuka_buble_gum)).call(this, props));

    _this4.state = {
      title: "Bazuka...",
      prize: 15.0,
      amount: 0,
      subtitle: "Bazuka Buble Gum"
    };
    _this4.subt = _this4.subt.bind(_this4);
    _this4.bazuka = _this4.bazuka.bind(_this4);
    return _this4;
  }

  _createClass(Bazuka_buble_gum, [{
    key: "bazuka",
    value: function bazuka() {}
  }, {
    key: "subt",
    value: function subt(price) {
      this.state.amount = price;
      console.log("Here I am" + " " + this.state.amount);
      this.props.bazuka(this.state.amount);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(QuantityCounter_checkoutButton, {
          prize: this.state.prize,
          title: this.state.title,
          subtitle: this.state.subtitle,
          subt: this.subt
        })
      );
    }
  }]);

  return Bazuka_buble_gum;
}(React.Component);

var Godzilla = function (_React$Component5) {
  _inherits(Godzilla, _React$Component5);

  function Godzilla(props) {
    _classCallCheck(this, Godzilla);

    var _this5 = _possibleConstructorReturn(this, (Godzilla.__proto__ || Object.getPrototypeOf(Godzilla)).call(this, props));

    _this5.state = {
      title: "Godzilla",
      prize: 10.5,
      subtitle: "Godzilla",
      amount: 0
    };
    _this5.subt = _this5.subt.bind(_this5);
    _this5.godzilla = _this5.godzilla.bind(_this5);
    return _this5;
  }

  _createClass(Godzilla, [{
    key: "godzilla",
    value: function godzilla() {}
  }, {
    key: "subt",
    value: function subt(price) {
      this.state.amount = price;
      console.log("Here I am" + " " + this.state.amount);
      this.props.godzilla(this.state.amount);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(QuantityCounter_checkoutButton, {
          prize: this.state.prize,
          title: this.state.title,
          subtitle: this.state.subtitle,
          subt: this.subt
        })
      );
    }
  }]);

  return Godzilla;
}(React.Component);

var Jedi_Skywalker = function (_React$Component6) {
  _inherits(Jedi_Skywalker, _React$Component6);

  function Jedi_Skywalker(props) {
    _classCallCheck(this, Jedi_Skywalker);

    var _this6 = _possibleConstructorReturn(this, (Jedi_Skywalker.__proto__ || Object.getPrototypeOf(Jedi_Skywalker)).call(this, props));

    _this6.state = {
      title: "Jedi...",
      prize: 10.99,
      subtitle: "Jedi Skywalker",
      amount: 0
    };
    _this6.jedi = _this6.jedi.bind(_this6);
    _this6.subt = _this6.subt.bind(_this6);
    return _this6;
  }

  _createClass(Jedi_Skywalker, [{
    key: "jedi",
    value: function jedi() {}
  }, {
    key: "subt",
    value: function subt(price) {
      this.state.amount = price;
      console.log("Here I am" + " " + this.state.amount);
      this.props.jedi(this.state.amount);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(QuantityCounter_checkoutButton, {
          prize: this.state.prize,
          title: this.state.title,
          subtitle: this.state.subtitle,
          subt: this.subt
        })
      );
    }
  }]);

  return Jedi_Skywalker;
}(React.Component);

var Fun_Dip = function (_React$Component7) {
  _inherits(Fun_Dip, _React$Component7);

  function Fun_Dip(props) {
    _classCallCheck(this, Fun_Dip);

    var _this7 = _possibleConstructorReturn(this, (Fun_Dip.__proto__ || Object.getPrototypeOf(Fun_Dip)).call(this, props));

    _this7.state = {
      title: "Fun Dip",
      prize: 13.5,
      subtitle: "Fun Dip",
      amount: 0
    };
    _this7.subt = _this7.subt.bind(_this7);
    _this7.dip = _this7.dip.bind(_this7);
    return _this7;
  }

  _createClass(Fun_Dip, [{
    key: "dip",
    value: function dip() {}
  }, {
    key: "subt",
    value: function subt(price) {
      this.state.amount = price;
      console.log("Here I am" + " " + "Fun DIP" + this.state.amount);
      this.props.dip(this.state.amount);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(QuantityCounter_checkoutButton, {
          prize: this.state.prize,
          title: this.state.title,
          subtitle: this.state.subtitle,
          subt: this.subt
        })
      );
    }
  }]);

  return Fun_Dip;
}(React.Component);

var Sour_Patch_Kids = function (_React$Component8) {
  _inherits(Sour_Patch_Kids, _React$Component8);

  function Sour_Patch_Kids(props) {
    _classCallCheck(this, Sour_Patch_Kids);

    var _this8 = _possibleConstructorReturn(this, (Sour_Patch_Kids.__proto__ || Object.getPrototypeOf(Sour_Patch_Kids)).call(this, props));

    _this8.state = {
      prize: 10.0,
      title: "Sour Patch...",
      subtitle: "Sour Patch Kids",
      amount: 0
    };
    _this8.subt = _this8.subt.bind(_this8);
    _this8.sour = _this8.sour.bind(_this8);
    return _this8;
  }

  _createClass(Sour_Patch_Kids, [{
    key: "sour",
    value: function sour() {}
  }, {
    key: "subt",
    value: function subt(price) {
      this.state.amount = price;
      console.log("Here I am" + " " + this.state.amount);
      this.props.sour(this.state.amount);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(QuantityCounter_checkoutButton, {
          prize: this.state.prize,
          title: this.state.title,
          subtitle: this.state.subtitle,
          subt: this.subt
        })
      );
    }
  }]);

  return Sour_Patch_Kids;
}(React.Component);

var The_Hangover = function (_React$Component9) {
  _inherits(The_Hangover, _React$Component9);

  function The_Hangover(props) {
    _classCallCheck(this, The_Hangover);

    var _this9 = _possibleConstructorReturn(this, (The_Hangover.__proto__ || Object.getPrototypeOf(The_Hangover)).call(this, props));

    _this9.state = {
      prize: 14.5,
      title: "The Hangover",
      subtitle: "The Hangover",
      amount: 0
    };
    _this9.subt = _this9.subt.bind(_this9);
    _this9.hangover = _this9.hangover.bind(_this9);
    return _this9;
  }

  _createClass(The_Hangover, [{
    key: "hangover",
    value: function hangover() {}
  }, {
    key: "subt",
    value: function subt(price) {
      this.state.amount = price;
      console.log("Here I am" + " " + this.state.amount);
      this.props.hangover(this.state.amount);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(QuantityCounter_checkoutButton, {
          prize: this.state.prize,
          title: this.state.title,
          subtitle: this.state.subtitle,
          subt: this.subt
        })
      );
    }
  }]);

  return The_Hangover;
}(React.Component);

var Good_Time = function (_React$Component10) {
  _inherits(Good_Time, _React$Component10);

  function Good_Time(props) {
    _classCallCheck(this, Good_Time);

    var _this10 = _possibleConstructorReturn(this, (Good_Time.__proto__ || Object.getPrototypeOf(Good_Time)).call(this, props));

    _this10.state = {
      prize: 13.5,
      title: "Good Time",
      subtitle: "Good Time",
      amount: 0
    };
    _this10.goodTime = _this10.goodTime.bind(_this10);
    _this10.subt = _this10.subt.bind(_this10);
    return _this10;
  }

  _createClass(Good_Time, [{
    key: "goodTime",
    value: function goodTime() {}
  }, {
    key: "subt",
    value: function subt(price) {
      this.state.amount = price;
      console.log("Here I am" + " " + this.state.amount);
      this.props.goodTime(this.state.amount);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(QuantityCounter_checkoutButton, {
          prize: this.state.prize,
          title: this.state.title,
          subtitle: this.state.subtitle,
          subt: this.subt
        })
      );
    }
  }]);

  return Good_Time;
}(React.Component);

var QuantityCounter_checkoutButton = function (_React$Component11) {
  _inherits(QuantityCounter_checkoutButton, _React$Component11);

  function QuantityCounter_checkoutButton(props) {
    _classCallCheck(this, QuantityCounter_checkoutButton);

    var _this11 = _possibleConstructorReturn(this, (QuantityCounter_checkoutButton.__proto__ || Object.getPrototypeOf(QuantityCounter_checkoutButton)).call(this, props));

    _this11.addOne = _this11.addOne.bind(_this11);
    _this11.minusOne = _this11.minusOne.bind(_this11);
    _this11.addToCart = _this11.addToCart.bind(_this11);
    _this11.subt = _this11.subt.bind(_this11);

    _this11.state = {
      count: 0,
      subtotal: 0,
      price: 0,
      grandTotal: 0,
      priceCheck: _this11.props.prize,
      count2: 0,
      productName: _this11.props.title
    };
    return _this11;
  }

  _createClass(QuantityCounter_checkoutButton, [{
    key: "subt",
    value: function subt() {}
  }, {
    key: "addOne",
    value: function addOne() {
      var _this12 = this;

      this.setState(function (prevCount) {
        return {
          count: prevCount.count + 1,
          count2: _this12.state.count + 1
        };
      });

      // localStorage.setItem('this_portal', num)
    }
  }, {
    key: "minusOne",
    value: function minusOne() {
      var _this13 = this;

      this.setState(function (prevState) {
        if (prevState.count < 1) {
          return {
            count: prevState.count = 0,
            count2: _this13.state.count
          };
        } else {
          return {
            count: prevState.count - 1,
            count2: _this13.state.count - 1
          };
        }
      });
    }
  }, {
    key: "addToCart",
    value: function addToCart(price) {
      this.state.grandTotal = price;
      var destroy_count = this.setState(function (prevState) {
        return {
          count: prevState.count = 0,
          grandTotal: price
        };
      });
      this.props.subt(this.state.grandTotal);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "b",
          null,
          this.props.subtitle
        ),
        React.createElement("br", null),
        React.createElement("br", null),
        React.createElement(
          "a",
          { href: "javascript:void(0)", id: "bazuka_add", onClick: this.addOne },
          React.createElement(
            "i",
            { className: "material-icons " },
            "add_circle_outline"
          )
        ),
        React.createElement(
          "a",
          { href: "javascript:void(0)", id: "bazuka_remove", onClick: this.minusOne },
          React.createElement(
            "i",
            { className: "material-icons " },
            "remove_circle_outline"
          )
        ),
        React.createElement(
          "p",
          { id: "qty" },
          "qty: ",
          this.state.count >= 1 ? this.state.count : ""
        ),
        React.createElement(Cart, {
          count: this.state.count,
          addToCart: this.addToCart,
          getPrice: this.getPrice,
          subtotal: this.state.subtotal,
          priceCheck: this.state.priceCheck
        }),
        React.createElement(GetFinalPrice, {
          grandTotal: this.state.grandTotal,
          count: this.state.count,
          count2: this.state.count2,
          productName: this.state.productName
        }),
        React.createElement(Price, { grandTotal: this.state.grandTotal }),
        React.createElement(Subtotal, { grandTotal: this.state.grandTotal })
      );
    }
  }]);

  return QuantityCounter_checkoutButton;
}(React.Component);

var Price = function (_React$Component12) {
  _inherits(Price, _React$Component12);

  function Price(props) {
    _classCallCheck(this, Price);

    return _possibleConstructorReturn(this, (Price.__proto__ || Object.getPrototypeOf(Price)).call(this, props));
  }

  _createClass(Price, [{
    key: "render",
    value: function render() {
      return ReactDOM.createPortal(React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          null,
          this.props.grandTotal > 0 && this.props.grandTotal.toFixed(2)
        )
      ), price);
    }
  }]);

  return Price;
}(React.Component);

var GetFinalPrice = function (_React$Component13) {
  _inherits(GetFinalPrice, _React$Component13);

  function GetFinalPrice(props) {
    _classCallCheck(this, GetFinalPrice);

    var _this15 = _possibleConstructorReturn(this, (GetFinalPrice.__proto__ || Object.getPrototypeOf(GetFinalPrice)).call(this, props));

    _this15.passCartTotal = _this15.passCartTotal(_this15);
    return _this15;
  }

  _createClass(GetFinalPrice, [{
    key: "passCartTotal",
    value: function passCartTotal() {}
  }, {
    key: "render",
    value: function render() {
      return ReactDOM.createPortal(React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          null,
          React.createElement(
            "div",
            null,
            this.props.grandTotal > 0 && this.props.productName
          )
        )
      ), sub);
    }
  }]);

  return GetFinalPrice;
}(React.Component);

var Cart = function (_React$Component14) {
  _inherits(Cart, _React$Component14);

  function Cart(props) {
    _classCallCheck(this, Cart);

    var _this16 = _possibleConstructorReturn(this, (Cart.__proto__ || Object.getPrototypeOf(Cart)).call(this, props));

    _this16.addToCart = _this16.addToCart.bind(_this16);
    return _this16;
  }

  _createClass(Cart, [{
    key: "addToCart",
    value: function addToCart() {
      this.props.addToCart(this.props.count * this.props.priceCheck);
    }
  }, {
    key: "render",
    value: function render() {
      var price = this.props.count * this.props.priceCheck;
      return React.createElement(
        "div",
        null,
        React.createElement(
          "a",
          {
            className: "cartButton waves-effect waves-light btn-small",
            onClick: this.addToCart
          },
          React.createElement(
            "i",
            { className: "material-icons right " },
            "shopping_cart"
          ),
          React.createElement(
            "b",
            null,
            "Add"
          )
        ),
        React.createElement(
          "h5",
          null,
          "Price: ",
          price.toFixed(2)
        ),
        React.createElement("br", null)
      );
    }
  }]);

  return Cart;
}(React.Component);

// class FinalTotal extends React.Component {
//   render() {}
// }

ReactDOM.render(React.createElement(KushApp, null), document.getElementById("kushapp"));
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
