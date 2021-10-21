import React from "react";

// Third party
import axios from "axios";
import moment from "moment";
import CryptoJS from "crypto-js";

// components
import Navbar from "./NavBarComponent";
import Intro from "./IntroComponent";
import Mid from "./MidComponent";
import Footer from "./FooterComponent";

// const
import { API } from "../shared/api";

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      errMsg: null,
      isSuccess: false,
      orgLink: "",
      recentLinks:
        (localStorage.getItem("shrtLinks") &&
          this.dec(localStorage.getItem("shrtLinks"))) ||
        null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.shortenLink = this.shortenLink.bind(this);
    this.fireError = this.fireError.bind(this);
    this.deleteLink = this.deleteLink.bind(this);
  }
  shortenLink(e) {
    e.preventDefault();
    this.setState({
      isLoading: true,
      isSuccess: false,
      errMsg: null,
      orgLink: "",
    });
    var self = this;
    axios
      .get(`${API}/shorten?url=${this.state.orgLink}`)
      .then(function (response) {
        // handle success
        self.setState({
          isLoading: false,
          isSuccess: true,
          errMsg: null,
        });
        if (!localStorage.getItem("shrtLinks")) {
          localStorage.setItem(
            "shrtLinks",
            self.enc([
              {
                date: moment().calendar(),
                shortLink: response.data.result.short_link,
                orgLink: response.data.result.original_link,
              },
            ])
          );
          self.setState({
            recentLinks: [
              {
                date: moment().calendar(),
                shortLink: response.data.result.short_link,
                orgLink: response.data.result.original_link,
              },
            ],
          });
        } else {
          var newArr = [...self.dec(localStorage.getItem("shrtLinks"))];
          newArr.unshift({
            date: moment().calendar(),
            shortLink: response.data.result.short_link,
            orgLink: response.data.result.original_link,
          });
          localStorage.setItem("shrtLinks", self.enc(newArr));
          self.setState({
            recentLinks: newArr,
          });
        }
      })
      .catch(function (error) {
        // handle error
        console.clear();
        if (error.response) {
          switch (error.response.data.error_code) {
            case 1:
              self.fireError("Please insert a url.");
              break;
            case 2:
              self.fireError("Invalid url.");
              break;
            case 3:
              self.fireError("Wait a second and try again.");
              break;
            case 4:
              self.fireError(
                "Your IP is blocked for voilating api Terms of Service."
              );
              break;
            case 5:
              self.fireError("Already taken in use");
              break;
            case 6:
              self.fireError("Server error");
              break;
            case 7:
              self.fireError("There is no such short-link");
              break;
            case 8:
              self.fireError("Client error.");
              break;
            case 9:
              self.fireError("Please insert a url.");
              break;
            case 10:
              self.fireError("Trying to shorten disallowed link.");
              break;
            default:
              self.fireError("Bad request.");
          }
        } else {
          self.fireError("Unknown error");
        }
      })
      .then(function () {
        // always executed
      });
  }
  fireError(msg) {
    this.setState({
      isLoading: false,
      isSuccess: false,
      errMsg: msg,
    });
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value.trim(),
    });
  }
  enc(data) {
    return CryptoJS.AES.encrypt(JSON.stringify(data), "key").toString();
  }
  dec(cipher) {
    var bytes = CryptoJS.AES.decrypt(cipher, "key");
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  }
  deleteLink(id) {
    let updateLinks = this.dec(localStorage.getItem("shrtLinks")).filter(
      (link, idx) => id !== idx
    );
    localStorage.setItem("shrtLinks", this.enc(updateLinks));
    this.setState({
      recentLinks: updateLinks,
    });
  }
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Intro />
        <Mid
          handleChange={this.handleChange}
          shortenLink={this.shortenLink}
          appState={this.state}
          deleteLink={this.deleteLink}
        />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Main;
