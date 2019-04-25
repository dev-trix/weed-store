import React from "react";
import ReactDOM from "react-dom";

export default class Subtotal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0
    };
  }
  subtotal() {
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
        <div>{this.subtotal()}</div>
      </div>,
      subtotal
    );
  }
}
