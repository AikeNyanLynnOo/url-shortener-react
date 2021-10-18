import Navbar from "./NavBarComponent";
import Intro from "./IntroComponent";

import React from "react";
class Main extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Intro />
      </React.Fragment>
    );
  }
}

export default Main;
