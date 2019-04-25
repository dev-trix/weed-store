import React from "react";
import ReactDOM from "react-dom";
export default class GetFinalPrice extends React.Component {
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
