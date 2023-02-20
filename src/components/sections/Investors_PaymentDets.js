import React, { useState } from "react";
import "../Css/styles.css";
import { NavLink, Link } from "react-router-dom";
import Image from "../elements/Image";
import "bootstrap/dist/css/bootstrap.min.css";
import DataService from "../../service/DataService";
import UploadService from "../../service/file-upload.service";
import Moment from "moment";
import $ from "jquery";
import Button from "../elements/Button";

const current = new Date();
const date = `${current.getFullYear()}-${
  current.getMonth() + 1
}-${current.getDate()}`; //mysql insert date format
const formatDate = Moment("12/09/2002").format("YYYY-MM-DD"); //2002-12-09

// function Investors_Details() {
class Investors_PaymentDets extends React.Component {
  constructor() {
    super();

    this.state = {
      pyDetPayAllDets: [],
      currentpyDetPayinfo: null,
      currentpyDetPayinfoIndex: -1,
      input: {},
      errors: {},
      ID: null,
      MTUSER_ID: null,
      EMAIL: null,
      MODULE: null,
      INV_BANKACCNO: "",
      INV_IFSCCODE: "",
      STATUS: "",
      COMMENTS: "",
      DESCRIPTION: "",
      CREATED_USER: "",
      CREATED_DATE: "",
      MODIFIED_USER: "",
      MODIFIED_DATE: "",
    };

    this.saveInvestorPyInfo = this.saveInvestorPyInfo.bind(this);
    this.retrieveInvestorPyInfo = this.retrieveInvestorPyInfo.bind(this);

    this.validatePaymentGateway = this.validatePaymentGateway.bind(this);
  }

  componentDidMount() {
    this.retrieveInvestorPyInfo();
    // console.log(formatDate)
  }

  retrieveInvestorPyInfo() {
    console.log(sessionStorage.getItem("sessEmail"));
    if (!window.isEmpty(sessionStorage.getItem("sessEmail"))) {
      var querySet =
        "/investorpydetails?EMAIL=" + sessionStorage.getItem("sessEmail");
      console.log(querySet);
      DataService.findByTitle(querySet)
        .then((response) => {
          this.setState({
            pyDetPayAllDets: response.data,
          });

          this.state.pyDetPayAllDets.map(
            (cinfo, index) => (
              $("#investorPYid").attr("value", cinfo.ID),
              $("#bankaccnumber").attr("value", cinfo.INV_BANKACCNO),
              $("#bankifsccode").attr("value", cinfo.INV_IFSCCODE)
            )
          );
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }
  saveInvestorPyInfo(event) {
    event.preventDefault();
    if (this.validatePaymentGateway()) {
      if (!window.isEmpty(sessionStorage.getItem("sessEmail"))) {
        var invdata = {
          ID: Number($("#investorPYid").val()),
          MTUSER_ID: $("#mtuser_id").val(),
          EMAIL: $("#mtuser_email").val(),
          MODULE: $("#mtuser_module").val(),
          INV_BANKACCNO: $("#bankaccnumber").val(),
          INV_IFSCCODE: $("#bankifsccode").val(),
          STATUS: "Active",
          COMMENTS: "TEST",
          DESCRIPTION: "TEST",
          CREATED_USER: $("#mtuser_fname").val(),
          CREATED_DATE: Moment(date).format("YYYY-MM-DD"),
          MODIFIED_USER: $("#mtuser_fname").val(),
          MODIFIED_DATE: Moment(date).format("YYYY-MM-DD"),
        };

        if (window.isEmpty($("#investorPYid").val())) {
          DataService.create("/investorpydetails", invdata)
            .then((response) => {
              window.showLoader();
              window.showAlert(
                "Investor Information is submittted",
                "/Deals"
              );
            })
            .catch((e) => {
              window.showLoader();
              // window.showAlert(
              //   "OOps!!! Something went wrong",
              //   "/Investors_Details"
              // );
              window.errorMessage(
                "OOps!!! Something went wrong ! Please try again or Contact support team.",
                "invPyDetailsmessage"
              );
            });
        } else {
          DataService.update(
            "/investorpydetails/" + $("#investorPYid").val(),
            invdata
          )
            .then((response) => {
              window.showLoader();
              window.showAlert(
                "Investor Information is submittted",
                "/Deals"
              );
            })
            .catch((e) => {
              window.showLoader();
              // window.showAlert(
              //   "OOps!!! Something went wrong",
              //   "/Investors_Details"
              // );
              window.errorMessage(
                "OOps!!! Something went wrong ! Please try again or Contact support team.",
                "invDetailsmessage"
              );
            });
        }
      } else {
        window.showAlert("Please Login", "/Login");
      }
    }
  }

  validatePaymentGateway() {
    console.log("Into validation validateInvestorInfo----------->>>");
    let input = this.state.input;
    let errors = {};
    let isValid = true;

    if (window.isEmpty($("#bankaccnumber").val())) {
      isValid = false;
      errors["bankaccnumber"] = "Please enter your Bank Account Number";
      $("#bankaccnumber").focus();
    }

    // console.log(window.isEmpty($("#ciFacebookLink"])

    if (window.isEmpty($("#bankifsccode").val())) {
      isValid = false;
      errors["bankifsccode"] = "Please enter your Bank IFSC Code.";
      $("#bankifsccode").focus();
    }

    this.setState({
      errors: errors,
    });

    return isValid;
  }

  render() {
    return (
      <body className="bg-white">
        <div className="container">
          <div className="row" style={{ height: "auto" }}>
            <div className="row">
              <div className="hero-content">
                <nav className="navbar navbar-expand-sm bg-Secondary navbar-white ">
                  <div className="container-fluid">
                    <ul className="navbar-nav" style={{ fontSize: 13 }}>
                      <li className="nav-item btn btn-warning btn-sm">
                        <NavLink
                          to="/Investors_Dashboard"
                          id="PaymentToDashboard"
                          // to={{
                          //   pathname: "/Investors_Dashboard",
                          //   userProps: { name: "portfolio" },
                          // }}
                          className="nav-link arrow-right para font14 text-dark"
                        >
                          &nbsp;Back to Dashboard
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </nav>
                <br/>
  <p className="font16 text-danger b" id="paybackerrormessage"></p>
                <div className="container">
                  <div className="row" style={{ height: "auto" }}>
                    <div className="col-md-12">
                      <h3>Complete Your Profile</h3>
                      <p style={{ fontSize: 13 }}>
                        Enter your phone number that's linked to your Aadhaar
                        and we'll take care of the rest!
                      </p>
                      <div className="row">
                        <div class="row ">
                          <div class=" col-lg-8 text-center  mb-2">
                            <div class="  px-0 pt-4 pb-0 mb-3 p-5">
                              <p
                                className="font16 text-danger b"
                                id="invPyDetailsmessage"
                              ></p>
                              <form id="msform">
                                <ul id="progressbar">
                                  <li class="active" id="payment">
                                    <strong>Payment Gateway</strong>
                                  </li>
                                  <li id="personal" style={{ display: "none" }}>
                                    <strong>Verify OTP</strong>
                                  </li>
                                  <li id="payment" style={{ display: "none" }}>
                                    <strong>PAN Details</strong>
                                  </li>
                                  <li id="confirm" style={{ display: "none" }}>
                                    <strong>Submitted</strong>
                                  </li>
                                </ul>
                                <p
                                  className="font16 text-danger b"
                                  id=" invDetailsmessage"
                                ></p>

                                <fieldset>
                                  <div class="form-card">
                                    <div class="row">
                                      <div class="col-7">
                                        <h6 className="text-start">
                                          Payment Details
                                        </h6>
                                      </div>
                                      <div class="col-5">
                                        <h2 class="steps">Step 1 - 1</h2>
                                      </div>
                                      <div class="container mt-3 mb-3 text-start">
                                        <label
                                          style={{ textAlign: "left" }}
                                          className="para text-start b"
                                          for="bankaccnumber"
                                        >
                                          Bank Account Number
                                        </label>
                                        <input
                                          type="hidden"
                                          id="investorPYid"
                                          name="investorPYid"
                                        />
                                        <input
                                          type="text"
                                          class="form-control"
                                          id="bankaccnumber"
                                          name="bankaccnumber"
                                          placeholder="Enter Bank Account No."
                                          maxlength="35"
                                        />
                                        <div
                                          className="text-danger errors"
                                          style={{ fontSize: 15 }}
                                        >
                                          {this.state.errors.bankaccnumber}
                                        </div>

                                        <label
                                          style={{ textAlign: "left" }}
                                          className="para text-start b"
                                          for="bankifsccode"
                                        >
                                          IFSC Code
                                        </label>
                                        <input
                                          type="text"
                                          class="form-control"
                                          id="bankifsccode"
                                          name="bankifsccode"
                                          placeholder="Enter IFSC Code"
                                          maxlength="35"
                                        />
                                        <div
                                          className="text-danger errors"
                                          style={{ fontSize: 15 }}
                                        >
                                          {this.state.errors.bankifsccode}
                                        </div>
                                      </div>
                                    </div>
                                    <input
                                      type="button"
                                      name="next"
                                      class="btn btn-dark btn-sm"
                                      value="Submit"
                                      onClick={this.saveInvestorPyInfo}
                                    />
                                  </div>
                                </fieldset>
                              </form>
                            </div>
                          </div>
                        </div>

                        {/* // */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    );
  }
}

export default Investors_PaymentDets;
