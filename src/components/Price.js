import React from "react";
import ReactDOM from "react-dom";
export default class Price extends React.Component {
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
