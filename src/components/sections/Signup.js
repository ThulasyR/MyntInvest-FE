import React from "react";

import "../Css/styles.css";
import ButtonGroup from "../elements/ButtonGroup";
import Button from "../elements/Button";
import classNames from "classnames";
import DataService from "../../service/DataService";
import MyntInvestLogo from "../../assets/images/MyntInvest.png";
import Google from "../../assets/images/google.png";
import $ from "jquery";
import BoyImage from "../../assets/da_img/login1.png";
import Image from "../elements/Image";

const boyImageCom = {
  backgroundImage: `url(${BoyImage}`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
  // backgroundR
};

const tilesClasses = classNames("tiles-wrap center-content");

const current = new Date();
const date = `${current.getFullYear()}-${
  current.getMonth() + 1
}-${current.getDate()}`; //mysql insert date format

class Registration extends React.Component {
  constructor() {
    super();
    this.state = {
      input: {},
      errors: {},
      id: null,
      FIRSTNAME: "",
      LASTNAME: "",
      EMAIL: "",
      SCHOOL: "",
      PASSWORD: "",
      CONPASSWORD: "",
      AGREECHK: null,
      COMMENTS: null,
      CREATED_DATE: null,
      CREATED_USER: null,
      DESCRIPTION: null,
      MODIFIED_DATE: null,
      MODIFIED_USER: null,
      MODULE: null,
      ROLE: null,
      STATUS: null,
    };

    this.saveUser = this.saveUser.bind(this);
    this.newUser = this.newUser.bind(this);

    this.handleChange = this.handleChange.bind(this);
    this.handleChkChange = this.handleChkChange.bind(this);
  }
  handleChkChange(event) {
    event.preventDefault();
    let input = this.state.input;
    var chk = event.target.checked;
    console.log(chk);

    if (chk) {
      event.target.value = "T";
    } else {
      event.target.value = "F";
    }

    input[event.target.name] = event.target.value;
  }
  handleChange(event) {
    event.preventDefault();
    let input = this.state.input;
    input[event.target.name] = event.target.value;

    this.setState({
      FIRSTNAME: this.state.input.firstname,
      LASTNAME: this.state.input.lastname,
      EMAIL: this.state.input.email,
      SCHOOL: "Live",
      PASSWORD: this.state.input.password,
      CONPASSWORD: this.state.input.confirm_password,
      AGREECHK: this.state.input.agreechk,
      COMMENTS: "test login",
      CREATED_DATE: date,
      CREATED_USER: this.state.input.firstname,
      DESCRIPTION: "Logged User",
      MODIFIED_DATE: null,
      MODIFIED_USER: null,
      MODULE: "Start Up",
      ROLE: "User",
      STATUS: "Active",
    });
  }
  componentDidMount() {}
  saveUser(event) {
    event.preventDefault();
    if (this.validateSignup()) {
      var data = {
        FIRSTNAME: this.state.input.firstname,
        LASTNAME: this.state.input.lastname,
        EMAIL: this.state.input.email,
        SCHOOL: "Live",
        PASSWORD: this.state.input.password,
        CONPASSWORD: this.state.input.confirm_password,
        AGREECHK: "T",
        COMMENTS: "test login",
        CREATED_DATE: date,
        CREATED_USER: this.state.input.firstname,
        DESCRIPTION: "Logged User",
        MODIFIED_DATE: date,
        MODIFIED_USER: this.state.input.firstname,
        MODULE: "Start Up",
        ROLE: "User",
        STATUS: "Active",
      };

      // alert(data);

      DataService.create("/mt_user", data)
        .then((response) => {
          window.showLoader();
          this.setState({
            id: response.data.id,
            FIRSTNAME: response.data.FIRSTNAME,
            LASTNAME: response.data.LASTNAME,
            EMAIL: response.data.EMAIL,
            SCHOOL: response.data.SCHOOL,
            PASSWORD: response.data.PASSWORD,
            CONPASSWORD: response.data.CONPASSWORD,
            AGREECHK: response.data.AGREECHK,
            COMMENTS: response.data.COMMENTS,
            CREATED_DATE: response.data.CREATED_DATE,
            CREATED_USER: response.data.CREATED_USER,
            DESCRIPTION: response.data.DESCRIPTION,
            MODIFIED_DATE: response.data.MODIFIED_DATE,
            MODIFIED_USER: response.data.MODIFIED_USER,
            MODULE: response.data.MODULE,
            ROLE: response.data.ROLE,
            STATUS: response.data.STATUS,
          });

          // window.showAlert("User Successfully Registered!!!!", "/Login");

          window.location.href = "/Login";
        })
        .catch((e) => {
          window.showLoader();
          console.log(e);
          window.errorMessage(
            "Your Account Not registered ! Please try again.",
            "signupmessage"
          );
          // window.showAlert("User Not registered", "/Signup");
          // window.location.href = "/Signup";//to redirect to normal links
        });
    }
  }
  newUser() {
    this.setState({
      id: null,
      FIRSTNAME: "",
      LASTNAME: "",
      EMAIL: "",
      SCHOOL: "",
      PASSWORD: "",
      CONPASSWORD: "",
      AGREECHK: null,
      COMMENTS: null,
      CREATED_DATE: null,
      CREATED_USER: null,
      DESCRIPTION: null,
      MODIFIED_DATE: null,
      MODIFIED_USER: null,
      MODULE: null,
      ROLE: null,
      STATUS: null,
    });
  }
  validateSignup() {
    let input = this.state.input;
    let errors = {};
    let isValid = true;

    if (!input["firstname"]) {
      isValid = false;
      errors["firstname"] = "Please enter your firstname.";
      $("#firstname").focus();
    }

    if (!input["lastname"]) {
      isValid = false;
      errors["lastname"] = "Please enter your lastname.";
      $("#lastname").focus();
    }

    if (!input["email"]) {
      isValid = false;
      errors["email"] = "Please enter your email Address.";
      $("#email").focus();
    }

    // if (!input["schoolname"]) {
    //   isValid = false;
    //   errors["schoolname"] = "Please enter your schoolname.";
    //   $("#schoolname").focus();
    // }

    // if (typeof input["schoolname"] !== "undefined") {
    //   const re = /^\S*$/;
    //   if(input["schoolname"].length < 6 || !re.test(input["schoolname"])){
    //       isValid = false;
    //       errors["schoolname"] = "Please enter valid schoolname.";
    //   }
    // }

    if (!input["password"]) {
      isValid = false;
      errors["password"] = "Please enter your password.";
      $("#password").focus();
    }

    if (!input["confirm_password"]) {
      isValid = false;
      errors["confirm_password"] = "Please Re-enter your password.";
      $("#confirm_password").focus();
    }

    if (typeof input["password"] !== "undefined") {
      if (input["password"].length < 6) {
        isValid = false;
        errors["password"] =
          "Please add at least 10 -12(Combination eg.Test@123!)";
        $("#password").focus();
      }
    }

    if (
      typeof input["password"] !== "undefined" &&
      typeof input["confirm_password"] !== "undefined"
    ) {
      if (input["password"] != input["confirm_password"]) {
        isValid = false;
        errors["password"] = "Passwords don't match.";
        $("#password").focus();
      }
    }

    if (!document.getElementById("agreechk").checked) {
      isValid = false;
      errors["agreechk"] =
        "Please you agree to our Terms, Privacy Policy and Cookies Policy. ";
      $("#agreechk").focus();
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
                  <p>&nbsp;Sign up with Google</p>
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

              <div class="input-group">
                <span class="d-input-group-text">
                  <i class="fa fa-key" aria-hidden="true"></i>
                </span>
                <div class="form-floating  border-0">
                  <input
                    type="password"
                    className="form-control w-100  border-0"
                    id="logconpassword"
                    name="logconpassword"
                    value={this.state.input.logpassword}
                    onChange={this.handleLogChange}
                    placeholder="*************"
                  />
                  <label for="logpassword">Confirm Password</label>
                </div>
                <span class="d-input-group-text border-0">
                  <i class="fa fa-eye themeCol-orange" aria-hidden="true"></i>
                </span>
              </div>

              <div className="col-12">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="agreechk"
                    id="agreechk"
                    onChange={this.handleChkChange}
                  />
                  <label className="form-label" for="agreechk">
                    <span class="font14">I accept all Terms & Conditions</span>
                  </label>
                  <div className="text-danger errors" style={{ fontSize: 15 }}>
                    {this.state.errors.agreechk}
                  </div>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="agreechk"
                    id="agreechk"
                    onChange={this.handleChkChange}
                  />
                  <label className="form-label" for="agreechk">
                    <span class="font14">
                      Keep me posted on updates from DoAram
                    </span>
                  </label>
                  <div className="text-danger errors" style={{ fontSize: 15 }}>
                    {this.state.errors.agreechk}
                  </div>
                </div>
              </div>

              <div className="col-12">
                <p className="font16 text-danger b" id="signupmessage"></p>
                <div className="d-flex  justify-content-center">
                  <button
                    type="button"
                    className="btn col-md-5  logbtn"
                    // onClick={this.saveUser}
                  >
                    Create Account
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </body>
    );
  }
}

export default Registration;
