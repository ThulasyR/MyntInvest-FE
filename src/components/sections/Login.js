import React, { useState, setState } from "react";
import "../Css/styles.css";
import ButtonGroup from "../elements/ButtonGroup";
import Button from "../elements/Button";
import Image from "../elements/Image";
import classNames from "classnames";
import BoyImage from "../../assets/da_img/login1.png";
import Google from "../../assets/images/google.png";
import DataService from "../../service/DataService";
import Moment from "moment";
import $ from "jquery";

const boyImageCom = {
  backgroundImage: `url(${BoyImage}`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
  // backgroundR
};

const tilesClasses = classNames("tiles-wrap center-content");
class Welcome extends React.Component {
  constructor() {
    super();
    this.state = {
      invSignAllDetails: [],
      input: {},
      errors: {},
      EMAIL: "",
      PASSWORD: "",
      MESSAGE: "",
    };

    this.handleLogChange = this.handleLogChange.bind(this);
    this.validateLogin = this.validateLogin.bind(this);
    this.openAdminPanel = this.openAdminPanel.bind(this);
  }

  handleLogChange(event) {
    event.preventDefault();
    let input = this.state.input;
    input[event.target.name] = event.target.value;

    this.setState({
      EMAIL: this.state.input.logemail,
      PASSWORD: this.state.input.logpassword,
    });
  }
  openAdminPanel(event) {
    event.preventDefault();
    window.showAlert(
      "Welcome to Admin Panel",
      window.mt_backend_url + "/admin"
    );
  }

  validateLogin(event) {
    event.preventDefault();
    // window.location.href = "/"
    var loginstatus = false;
    //alert("status======loginstatus====>>>>>>>>>>>>>" + loginstatus);
    var data = {
      EMAIL: this.state.input.logemail,
      PASSWORD: this.state.input.logpassword,
    };

    var querySet1 = "/inv_nationality?EMAIL=" + $("#logemail").val();
    console.log("loginstatus=>" + querySet1);
    DataService.findByTitle(querySet1).then((response) => {
      this.setState({
        invSignAllDetails: response.data,
      });

      $.each(this.state.invSignAllDetails, function (index, value) {
        // alert(value.NATIONALITY);
        if (value.EMAIL == $("#logemail").val()) {
          if (!window.isEmpty(value.NATIONALITY)) {
            loginstatus = true;
          }
        }
      });
    });

    //alert("status======loginstatus====>>>>>>>>>>>>>" + loginstatus);

    DataService.passData(
      "/userlogin?EMAIL=" +
        this.state.input.logemail +
        "&PASSWORD=" +
        this.state.input.logpassword
    )
      .then((response) => {
        window.showLoader();
        sessionStorage.setItem("sessFirstname", response.data.FIRSTNAME);
        sessionStorage.setItem("sessEmail", response.data.EMAIL);
        sessionStorage.setItem("sessRole", response.data.ROLE);
        sessionStorage.setItem("sessModule", response.data.MODULE);
        sessionStorage.setItem("sessUserId", response.data.MT_USERID);

        window.sessionSetting(sessionStorage);
        if (response.data.ROLE == "User") {
          // window.showAlert("Welcome " + response.data.FIRSTNAME, "/Investors");
          if (loginstatus == true) {
            window.location.href = "/Investors_Dashboard"; //to redirect to normal links
          }

          if (loginstatus == false) {
            window.location.href = "/Investor_Signup"; //to redirect to normal links
          }
        } else if (response.data.ROLE == "Admin") {
          // window.showAlert("Welcome To Administrator", "/Admin_Dashboard");
          window.location.href = window.mt_backend_url + "/admin"; //to redirect to normal links
        }
      })
      .catch((e) => {
        window.showLoader();
        // window.showAlert("Username or Password is incorrect", "/Login");
        window.errorMessage(
          "Username or Password is incorrect",
          "loginmessage"
        );
        // window.location.href = "/Login";//to redirect to normal links
      });
  }

  validate() {
    let input = this.state.input;
    let errors = {};
    let isValid = true;

    if (!input["email"]) {
      isValid = false;
      errors["email"] = "Please enter your email Address.";
    }

    if (typeof input["email"] !== "undefined") {
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(input["email"])) {
        isValid = false;
        errors["email"] = "Please enter valid email address.";
      }
    }

    if (!input["password"]) {
      isValid = false;
      errors["password"] = "Please enter your password.";
    }

    if (!input["confirm_password"]) {
      isValid = false;
      errors["confirm_password"] = "Please enter your confirm password.";
    }

    this.setState({
      errors: errors,
    });

    return isValid;
  }

  render() {
    return (
      <body className="bg_dtheme">
        <div className="row ">
          <div className="col-md-6" style={boyImageCom}></div>

          <div className="col-md-6 ">
            <form
              autocomplete="off"
              name="Signupform"
              id="Signupform"
              method="POST"
              className="row m-5 g-3"
            >
              <div className="col-12 text-center">
                <div className="col-12 text-center ">
                  <img
                    src={require("./../../assets/da_img/logo1.png")}
                    width={100}
                    height={50}
                    alt="DoAram_Logo"
                    className="rounded mx-auto d-block"
                  />
                </div>
                <br />
                <br />
                <small className="text-muted font20 text-sm ">
                  Let's Do Aram
                </small>
                <br />
                <br />
                <button
                  type="button"
                  className="btn button-white button-shadow m w-100  btnG googleintrgration"
                  wideMobile
                >
                  <span className="googleIcon"></span>
                  <p>&nbsp;Login with Google</p>
                </button>
              </div>

              <div className="row"></div>
              <div class="input-group">
                <span class="d-input-group-text">
                  <i
                    class="fa fa-envelope  themeCol-pink"
                    aria-hidden="true"
                  ></i>
                </span>
                <div class="form-floating  border-0">
                  <input
                    type="text"
                    className="form-control w-100  border-0"
                    id="logemail"
                    name="logemail"
                    value={this.state.input.logemail}
                    onChange={this.handleLogChange}
                    placeholder="example@gmail.com"
                  />
                  <label for="logemail">Email</label>
                </div>
              </div>

              <div class="input-group">
                <span class="d-input-group-text">
                  <i class="fa fa-key themeCol-pink" aria-hidden="true"></i>
                </span>
                <div class="form-floating  border-0">
                  <input
                    type="password"
                    className="form-control w-100  border-0"
                    id="logpassword"
                    name="logpassword"
                    value={this.state.input.logpassword}
                    onChange={this.handleLogChange}
                    placeholder="*************"
                  />
                  <label for="logpassword">Password</label>
                </div>
                <span class="d-input-group-text border-0">
                  <i class="fa fa-eye themeCol-orange" aria-hidden="true"></i>
                </span>
              </div>

              <div className="row g-3">
                <div class="col">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="agreechk"
                      id="agreechk"
                      onChange={this.handleChkChange}
                    />
                    <label className="form-label" for="agreechk">
                      <span class="font14">Remember me</span>
                    </label>
                    <div
                      className="text-danger errors"
                      style={{ fontSize: 15 }}
                    >
                      {this.state.errors.agreechk}
                    </div>
                  </div>
                </div>
                <div class="col text-end">
                  <a class="link-light font14 " href="">
                    Forgot Password?
                  </a>
                </div>
              </div>

              <div className="col-12">
                <p className="font16 text-danger b" id="signupmessage"></p>
                <div className="d-flex justify-content-center">
                  <button
                    type="button"
                    className="btn col-md-5  logbtn"
                    onClick={this.saveUser}
                  >
                    Log in
                  </button>
                </div>
              </div>

              <div className="row g-3">
                <div class="col text-center">
                  <span class="link-light font14 ">Not a member yet?</span>
                  <a class="link-warning font14 " href="/Signup">
                    &nbsp; Sign up Now
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </body>
    );
  }
}

export default Welcome;
