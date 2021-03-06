import React, { Component } from "react";
import "./Image_aesthetics.css";
// ref: https://loading.io/css/

import "./Loading.css";

class Loading extends Component {
  render() {
    return (
      <>
        <div className="u-flexColumn u-flex-alignCenter" style={{ width: "100%" }}>
          <p className="nametext">稍等一会儿</p>
          <div class="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </>
    );
  }
}

export default Loading;
