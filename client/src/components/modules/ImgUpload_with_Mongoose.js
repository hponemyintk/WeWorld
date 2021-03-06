//1/12/21 THIS IS MESSING AROUND

/*Should double check what is from where, but combines two sources*/

/*Medium code for a preview: WORKING*/
/*From https://medium.com/@650egor/react-30-day-challenge-day-2-image-upload-preview-2d534f8eaaa*/

/*Adding on https://reactjs.org/docs/uncontrolled-components.html#the-file-input-tag code for upload*/

/*Previously consulted https://www.webtrickshome.com/faq/how-to-display-uploaded-image-in-html-using-javascript-->*/
/*And obtained this code from https://reactjs.org/docs/uncontrolled-components.html#the-file-input-tag*/

/*Code to get and show name
From https://reactjs.org/docs/uncontrolled-components.html#the-file-input-tag
*/

/*
code for rating bar
https://material-ui.com/components/rating/
*/

import React, { Component } from "react";
import Ratings from "./Ratings.js";
import { NewPhoto } from "../modules/NewPhotoInput.js";

class ImgUpload extends React.Component {
/*from React and Medium websites above*/
  constructor(props){
    super(props);
    this.state = {
      file: null
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fileInput = React.createRef();
    this.curTag = React.createRef();
    this.postCaption = React.createRef(); /*for 2nd inputs*/
  }
  /*from Medium website above*/
  handleChange(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0])
    })
  }
  /*from React website above*/
  handleSubmit(event) {
    event.preventDefault();
    alert(
      "Selected file: " + this.fileInput.current.files[0].name 
      + '\nA tag was submitted: "' + this.curTag.current.value +'"'
      + '\nA thought was submitted: "'  + this.postCaption.current.value +'"'
    );
  }

  // from catbook 1/12 may want more elaborate adding story method
  //  // this gets called when the user pushes "Submit", so their
  // // post gets added to the screen right away
  // addNewStory = (storyObj) => {
  //   this.setState({
  //     stories: [storyObj].concat(this.state.stories),
  //   });
  // };

   // simple add new photo call to test, we don't have a feed yet so may not need
  addNewPhoto = () => {
    <p>Success! 1/12 test</p>
  };

  /*from React and Medium websites combined*/
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {/* Give a handle for uploading and previewing images */}
        <div className="u-offsetByX">
          <img className="u-showImg" src={this.state.file} height = "300" width="300"/>
          <Ratings />
        </div>

          Upload file:
          <input type="file" ref={this.fileInput} onChange={this.handleChange}/>

        <br />
        {/* Get tag and post info*/}
        Tag:
            <input type="text" ref={this.curTag} />
            Caption:
            <input type="text" ref={this.postCaption} />
        
        {/* <br /> */}

        <input type="submit" value="Submit" />   
        {/* 1/12 trying to run post request      */}
        {<NewPhoto addNewPhoto = {this.addNewPhoto} />}
      </form>
    );
  }
}

export default ImgUpload_with_Mongoose;