import React, { Component } from "react";
import { Redirect, Switch, Route } from "react-router-dom"; //from https://stackoverflow.com/questions/45089386/what-is-the-best-way-to-redirect-a-page-using-react-router
import { Router, navigate, Location } from "@reach/router";
import NotFound from "./pages/NotFound.js";
import Skeleton from "./pages/Skeleton.js";
import NavBar from "./modules/NavBar.js";
import Quiz from "./modules/Quiz.js";
import FAQ from "./pages/FAQ.js";
import ImgUpload_1716_try_no_prototype from "./modules/ImgUpload_1716_try_no_prototype.js";
import Home_Page from "./pages/Home_Page.js";
import Scavenger_Hunts from "./pages/Scavenger_Hunts.js";
import View_Flashcards from "./pages/View_Flashcards.js";
import Friends_1251 from "./pages/Friends_1251.js";
import { socket } from "../client-socket.js";
import { get, post } from "../utilities";
import QuizSelfMade_DS from "../components/modules/QuizSelfMade_DS.js";
// import 'bootstrap/dist/css/bootstrap.min.css'; //ref https://stackoverflow.com/questions/49853659/react-bootstrap-modal-appears-under-the-rest-of-the-content-instead-of-overlay

//ref for router from Piazza post https://stackoverflow.com/questions/53058110/stop-reach-router-scrolling-down-the-page-after-navigating-to-new-page, many thanks Claire!

import "../utilities.css";

class OnRouteChangeWorker extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.props.action()
    }
  }

  render() {
    return null
  }
}

const OnRouteChange = ({ action }) => (
  <Location>
    {({ location }) => <OnRouteChangeWorker location={location} action={action} />}
  </Location>
)

/**
 * Define the "App" component as a class.
 */
class App extends Component {
  // makes props available in this component
  constructor(props) {
    super(props);
    this.state = {
      userId: undefined,
      username: undefined,
      allUserList: [],
    };
  }

  componentDidMount() {
    get("/api/whoami").then((user) => {
      if (user._id) {
        // they are registed in the database, and currently logged in.
        this.setState({ userId: user._id, username: user.name });
      }
    });
    // if (this.props.userId && prevProps.userId !== this.props.userId) {
    //   this.getUsers();
    // }
  }

  //redo get request if previously failed, many thanks to Nikhil for explaining in 1/15 office hours
  // componentDidUpdate(prevProps) {
  //   get("/api/whoami").then((user) => {
  //     if (user._id) {
  //       // they are registed in the database, and currently logged in.
  //       this.setState({ userId: user._id, username: user.name });
  //     }
  //   });
  // if (this.props.userId && prevProps.userId !== this.props.userId) {
  //   this.getUsers();
  // }
  //}

  // getUsers = () => {
  //   get("/api/all_user_find").then((allUserInfo) => {
  //     this.setState({
  //       allUserList: allUserInfo,
  //     });
  //   });
  // };

  //Many thanks to Kye for help with navigate
  handleLogin = (res) => {
    console.log(`Logged in as ${res.profileObj.name}`);
    const userToken = res.tokenObj.id_token;
    post("/api/login", { token: userToken })
      .then((user) => {
        this.setState({ userId: user._id, username: user.name });
        post("/api/initsocket", { socketid: socket.id });
      })
      .then(() => navigate("/Home_Page"));
  };

  handleLogout = () => {
    this.setState({ userId: undefined });
    post("/api/logout").then(() => navigate("/Home_Page"));
  };

  render() {
    return (
      <>
        <NavBar
          handleLogin={this.handleLogin}
          handleLogout={this.handleLogout}
          userId={this.state.userId}
        />
        <br />

        {/* Only show image upload if logged in */}
        {this.state.userId ? <></> : <p></p>}

        <br />
        <Router>
          {/* don't see 2 pages at once https://stackoverflow.com/questions/45122800/react-router-switch-behavior */}
          {/* <Skeleton path="/" /> */}
          <Home_Page path="/Home_Page" userId={this.state.userId} name={this.state.username}/>
          <ImgUpload_1716_try_no_prototype path="/Upload" userId={this.state.userId} />
          {/*from catbook to link to different user pages*/}
          {/*from catbook to link to different user pages, also used https://stackoverflow.com/questions/57058879/how-to-create-dynamic-routes-with-react-router-dom*/}
          {/* {this.state.allUserList.map((u,i) => 
            <Link to={"/Flashcards/" + u._id}/>)}
            <Route path="Flashcards/:id" component = {View_Flashcards}/> */}

          {/* {this.state.allUserList.map((u,i) => 
            <Link to={"/Flashcards/" + u._id} key = {i}/>)}
            {this.state.allUserList.map((u,i) => 
            <View_Flashcards path={"/Flashcards/" + u._id} username = {u.name} key = {i}/>)} */}
          {/*Thanks to Justin for Piazza post on this! */}

          <View_Flashcards path="/Flashcards/:userId" requestingUserId={this.state.userId}/>

          <Friends_1251 path="/Friends" userId={this.state.userId} />
          <Skeleton path="/" handleLogin={this.handleLogin}/>
          <QuizSelfMade_DS path="/QuizSelfMade_DS" userId={this.state.userId} />
          <FAQ path ="/FAQ" userId={this.state.userId}/>
          <NotFound default />
        </Router>
        <OnRouteChange action={() => { window.scrollTo(0, 0) }} /> 
      </>
    );
  }
}

export default App;
