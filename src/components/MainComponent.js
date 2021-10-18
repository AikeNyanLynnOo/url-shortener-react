import Navbar from "./NavBarComponent";
import Intro from "./IntroComponent";
import Mid from "./MidComponent";
import Footer from "./FooterComponent";

import React from "react";
class Main extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Intro />
        <Mid />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Main;
