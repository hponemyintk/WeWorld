import React, { Component } from "react";

import "../../utilities.css";
import "../modules/Image_aesthetics.css";
import "./LandingPage.css";
import ReactAnnotate from "../modules/ReactAnnotate.js";

class Goodbye extends Component {
  constructor(props) {
    super(props);
    // Initialize Default State
    this.state = {};
  }

  componentDidMount() {
    // remember -- api calls go here!
  }

  render() {
    return (
      <>
            <div className="u-flex u-flex-justifyCenter">
        <div className="postColumn paddedText" style={{ position: "relative" }}>
        <ReactAnnotate
                  allowEdits={false}
                  img_using="/public/images/Goodbye3.png"
                  alt="Image of developers waving goodbye"
                  onTagSubmit={this.onTagSubmit}
                  annotationslst={[{
                    "geometry": {
                      "x": 3.690957394330438,
                      "y": 5.746246629144671,
                      "width": 41.3007370143826,
                      "height": 85.53569241334166,
                      "type": "RECTANGLE"
                    },
                    "data": {
                      "text": "再见了，非常感谢您使用WeWorld！",
                      "textforBox": "Goodbye, and thank you so much for using WeWorld!",
                      "nativeLanguageTag": "Goodbye, and thank you so much for using WeWorld!",
                      "learningLanguageTag": "再见了，非常感谢您使用WeWorld！",
                      "id": 0.27776467076679323
                    }
                  }, {
                    "geometry": {
                      "x": 52.58723225043857,
                      "y": 7.950430400288985,
                      "width": 45.81058760790713,
                      "height": 82.90383327783009,
                      "type": "RECTANGLE"
                    },
                    "data": {
                      "text": "我们希望您能学到很多东西，并从中获得乐趣。 我们希望很快再见到你！",
                      "textforBox": "We hope that you learned a lot and had fun as you did so. We hope to see you again soon!",
                      "nativeLanguageTag": "We hope that you learned a lot and had fun as you did so. We hope to see you again soon!",
                      "learningLanguageTag": "我们希望您能学到很多东西，并从中获得乐趣。 我们希望很快再见到你！",
                      "id": 0.8609281392866777
                    }
                  }]}
                />
        </div>
        </div>
      </>
    );
  }
}

export default Goodbye;
