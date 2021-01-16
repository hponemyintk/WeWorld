import React, { Component } from "react";

import "../../utilities.css";
import "../pages/Skeleton.css";

//Gives info on a user

class UserInfo extends Component {
    constructor(props) {
      super(props);
      // Initialize Default State
      this.state = {
      };
    }

    //Give information on the user
    render() {
        return (
            <>
            <p>{this.props.userNameInfo}</p>
            </>
        );
    }
}

export default UserInfo;