import React, { useState, setState, Component } from "react";
import { NavLink, Link } from "react-router-dom";

import "../Css/styles.css";
import Switch from "react-switch";
import DataService from "../../service/DataService";
import MyntInvestLogo from "../../assets/images/MyntInvest.png";
import "bootstrap/dist/css/bootstrap.min.css";
import UploadService from "../../service/file-upload.service";
import Moment from "moment";
import $ from "jquery";
const formatDate = Moment("12/09/2002").format("YYYY-MM-DD"); //2002-12-09
const extractFilename = (path) => {
  const pathArray = path.split("/");
  const lastIndex = pathArray.length - 1;
  return pathArray[lastIndex];
};

const current = new Date();
const date = `${current.getFullYear()}-${
  current.getMonth() + 1
}-${current.getDate()}`; //mysql insert date format

class Investors_Terms extends Component {
  constructor() {
    super();
    this.state = {
      invTermsAllDets: [],
      currentinvTerms: null,
      currentinvTermsIndex: -1,
      input: {},
      errors: {},
      ID: null,
      MTUSER_ID: null,
      EMAIL: null,
      MODULE: null,
      INV_RISK: "",
      INV_LIMITED_TRANSFER: "",
      INV_DIVERSIFICATION: "",
      INV_CANCELLATION: "",
      INV_RESEARCH: "",
      STATUS: "",
      COMMENTS: "",
      DESCRIPTION: "",
      CREATED_USER: "",
      CREATED_DATE: "",
      MODIFIED_USER: "",
      MODIFIED_DATE: "",
    };

    this.saveInvTerms = this.saveInvTerms.bind(this);
    this.retrievTerms = this.retrievTerms.bind(this);
  }
  componentDidMount() {
    this.retrievTerms();
  }

  retrievTerms() {
    if (!window.isEmpty(sessionStorage.getItem("sessEmail"))) {
      var querySet = "/inv_terms?EMAIL=" + sessionStorage.getItem("sessEmail");
      console.log(querySet);
      DataService.findByTitle(querySet)
        .then((response) => {
          this.setState({
            invTermsAllDets: response.data,
          });

          $.each(this.state.invTermsAllDets, function (index, value) {
            console.log("Investor terms -------------"+value.INV_RISK)
            if (value.INV_RISK == "yes" || value.INV_RISK == "on") {
              // $("#invterm1").click();
              $("#invterm1").prop("checked",true).val(value.INV_RISK);
            }else{
              $("#invterm1").val(value.INV_RISK);
            }
            if (value.INV_LIMITED_TRANSFER == "yes" || value.INV_LIMITED_TRANSFER == "on") {
              // $("#invterm2").click();
              $("#invterm2").prop("checked",true).val(value.INV_LIMITED_TRANSFER);
            }else{
              $("#invterm2").val(value.INV_LIMITED_TRANSFER);
            }
            if (value.INV_DIVERSIFICATION == "yes" || value.INV_DIVERSIFICATION == "on") {
              // $("#invterm3").click();
              $("#invterm3").prop("checked",true).val(value.INV_DIVERSIFICATION);
            }else{
              $("#invterm3").val(value.INV_DIVERSIFICATION);
            }
            if (value.INV_CANCELLATION == "yes" || value.INV_CANCELLATION == "on") {
              // $("#invterm4").click();
              $("#invterm4").prop("checked",true).val(value.INV_CANCELLATION);
            }else{
              $("#invterm4").val(value.INV_CANCELLATION);
            }
            if (value.INV_RESEARCH == "yes" || value.INV_RESEARCH == "on") {
              // $("#invterm5").click();
              $("#invterm5").prop("checked",true).val(value.INV_RESEARCH);
            }else{
              $("#invterm5").val(value.INV_RESEARCH);
            }
          });
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }
  saveInvTerms(event) {
    event.preventDefault();
    if (this.validateInvTerms()) {
      if (!window.isEmpty(sessionStorage.getItem("sessEmail"))) {
        var data = {
          ID: Number($("#investTermsform #invTermsId").val()),
          MTUSER_ID: $("#mtuser_id").val(),
          EMAIL: $("#mtuser_email").val(),
          MODULE: $("#mtuser_module").val(),
          INV_RISK: $("#investTermsform #invterm1").val(),
          INV_LIMITED_TRANSFER: $("#investTermsform #invterm2").val(),
          INV_DIVERSIFICATION: $("#investTermsform #invterm3").val(),
          INV_CANCELLATION: $("#investTermsform #invterm4").val(),
          INV_RESEARCH: $("#investTermsform #invterm5").val(),
          STATUS: "Active",
          COMMENTS: "TEST",
          DESCRIPTION: "Logged User",
          CREATED_DATE: Moment(date).format("YYYY-MM-DD"),
          CREATED_USER: $("#mtuser_fname").val(),
          MODIFIED_DATE: Moment(date).format("YYYY-MM-DD"),
          MODIFIED_USER: $("#mtuser_fname").val(),
        };

        console.log(data);

        if (window.isEmpty($("#investTermsform #invTermsId").val())) {
          DataService.create("/inv_terms", data)
            .then((response) => {
              console.log("inside");
              window.showLoader();
              window.showAlert(
                "Investor Acknowledgment updated",
                "/Investors_Dashboard"
              );
            })
            .catch((e) => {
              window.showLoader();
              console.log(e);
              // window.showAlert(
              //   "Not updated.Something is wrong!",
              //   "/Investors_Terms"
              // );
              window.errorMessage(
                "OOps!!! Something went wrong ! Please try again or Contact support team.",
                "investortermsmessage"
              );
              // window.location.href = "/Signup";//to redirect to normal links
            });
        } else {
          DataService.update("/inv_terms/" + $("#invTermsId").val(), data)
            .then((response) => {
              window.showLoader();
              window.showAlert(
                "Investor Acknowledgment updated",
                "/Investors_Dashboard"
              );
            })
            .catch((e) => {
              window.showLoader();
              // window.showAlert(
              //   "Not updated.Something is wrong!",
              //   "/Investors_Terms"
              // );
              window.errorMessage(
                "OOps!!! Something went wrong ! Please try again or Contact support team.",
                "investortermsmessage"
              );
            });
        }
      } else {
        window.showAlert("Please Login", "/Login");
      }
    }
  }

  validateInvTerms() {
    console.log("Into validateInvTerms info----------->>>");
    let input = this.state.input;
    let errors = {};
    let isValid = true;

    if (!$("#invterm1").is(":checked")) {
      isValid = false;
      errors["invterm1"] = "01 Risk must be checked!!! ";
      $("#invterm1").focus();
    }

    if (!$("#invterm2").is(":checked")) {
      isValid = false;
      errors["invterm2"] = "02 Limited Transfer must be checked!!! ";
      $("#invterm2").focus();
    }

    if (!$("#invterm3").is(":checked")) {
      isValid = false;
      errors["invterm3"] = "03 Diversification must be checked!!! ";
      $("#invterm3").focus();
    }

    if (!$("#invterm4").is(":checked")) {
      isValid = false;
      errors["invterm4"] = "04 Cancellation must be checked!!! ";
      $("#invterm4").focus();
    }

    if (!$("#invterm1").is(":checked")) {
      isValid = false;
      errors["invterm5"] = "05 Research must be checked!!! ";
      $("#invterm5").focus();
    }

    this.setState({
      errors: errors,
    });

    return isValid;
  }

  render() {
    return (
      <div className="bg-white ">
        &nbsp;
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10" style={{ paddingright: 30 }}>
            <h2>
              Become An <strong style={{ color: "#e4b21f" }}>Investor</strong>
            </h2>
            <p className="font16">
              To invest through MyntInvest, you must understand the basics of
              Startup Investing, Please acknowledge that you are aware of the
              following:
            </p>
          </div>
          <div className="col-md-1"></div>
        </div>
        <form
          name="investTermsform"
          id="investTermsform"
          method="POST"
          className="row "
        >
          <div className="row" style={{ paddingLeft: 10 }}>
            <div className="col-md-1"></div>
            <div className="col-md-10">
              <input type="hidden" id="invTermsId" name="invTermsId" />
              <h5>01 Risk</h5>
              <p style={{ fontSize: 15 }}>
                Investing in startups is extremely risky. You should only invest
                an amount you can affort to lose completely without changing you
                lifestyle.
              </p>
              <div>
                <div className="row bg-light pb-3">
                  <div className="col-md-1">
                    <div id="switch">
                      <input
                        type="checkbox"
                        id="invterm1"
                        name="investTermsChecks"
                      />
                      <label for="invterm1">Toggle</label>
                    </div>
                  </div>
                  <div className="col-md-11 pt-4">
                    <label className="font18 b" for="invterm1">
                      I understand that I can lose the money i'm investing
                    </label>
                    <div
                      className="text-danger errors"
                      style={{ fontSize: 15 }}
                    >
                      {this.state.errors.invterm1}
                    </div>
                  </div>
                </div>
              </div>
              <hr />
            </div>
            <div className="col-md-1"></div>
          </div>

          <div className="row" style={{ paddingLeft: 10 }}>
            <div className="col-md-1"></div>
            <div className="col-md-10">
              <h5>02 Limited Transfer</h5>
              <p style={{ fontSize: 15 }}>
                Investment in startups in highly illiquid as such companies are
                unlisted/private and cannot be sold easily on an exchange or
                similar trading platform.
              </p>
              <div>
                <div className="row bg-light pb-3">
                  <div className="col-md-1">
                    <div id="switch">
                      <input
                        type="checkbox"
                        id="invterm2"
                        name="investTermsChecks1"
                      />
                      <label for="invterm2">Toggle</label>
                    </div>
                  </div>
                  <div className="col-md-11 pt-4">
                    <label className="font18 b" for="invterm2">
                      I understand that may be difficult to transfer my
                      investments
                    </label>
                    <div
                      className="text-danger errors"
                      style={{ fontSize: 15 }}
                    >
                      {this.state.errors.invterm2}
                    </div>
                  </div>
                </div>
              </div>
              <hr />
            </div>
            <div className="col-md-1"></div>
          </div>

          <div className="row" style={{ paddingLeft: 10 }}>
            <div className="col-md-1"></div>
            <div className="col-md-10">
              <h5>03 Diversification</h5>
              <p style={{ fontSize: 15 }}>
                Startup investing is highly speculative and every investmentmay
                result in a loss. By investing small amounts accross multiple
                deals, you can reduce your compared to a large investment in a
                single company.
              </p>
              <div>
                <div className="row bg-light pb-3">
                  <div className="col-md-1">
                    <div id="switch">
                      <input
                        type="checkbox"
                        id="invterm3"
                        name="investTermsChecks2"
                      />
                      <label for="invterm3">Toggle</label>
                    </div>
                  </div>
                  <div className="col-md-11 pt-4">
                    <label className="font18 b" for="invterm3">
                      I understand that it's safer to split money across many
                      investments across asset classes
                    </label>
                    <div
                      className="text-danger errors"
                      style={{ fontSize: 15 }}
                    >
                      {this.state.errors.invterm3}
                    </div>
                  </div>
                </div>
              </div>
              <hr />
            </div>
            <div className="col-md-1"></div>
          </div>

          <div className="row" style={{ paddingLeft: 10 }}>
            <div className="col-md-1"></div>
            <div className="col-md-10">
              <h5>04 Cancellation</h5>
              <p style={{ fontSize: 15 }}>
                You can cancel your investment up to 48 hours before the deal
                deadline. After that, your deal will be final , and you will not
                be able to get your money back.
              </p>
              <div>
                <div className="row bg-light pb-3">
                  <div className="col-md-1">
                    <div id="switch">
                      <input
                        type="checkbox"
                        id="invterm4"
                        name="investTermsChecks3"
                      />
                      <label for="invterm4">Toggle</label>
                    </div>
                  </div>
                  <div className="col-md-11 pt-4">
                    <label className="font18 b" for="invterm4">
                      I understand that I can't cancel after the 48-hour
                      cancellation deadline
                    </label>
                    <div
                      className="text-danger errors"
                      style={{ fontSize: 15 }}
                    >
                      {this.state.errors.invterm4}
                    </div>
                  </div>
                </div>
              </div>
              <hr />
            </div>
            <div className="col-md-1"></div>
          </div>

          <div className="row" style={{ paddingLeft: 10 }}>
            <div className="col-md-1"></div>
            <div className="col-md-10">
              <h5>05 Research</h5>
              <p style={{ fontSize: 15 }}>
                Do your own research. Read the documents provided by each
                company. Get independent legal, accounting and financial advice.
                if you have any questions or need more information, reach out to
                us via support
              </p>
              <div>
                <div className="row bg-light pb-3">
                  <div className="col-md-1">
                    <div id="switch">
                      <input
                        type="checkbox"
                        id="invterm5"
                        name="investTermsChecks4"
                      />
                      <label for="invterm5">Toggle</label>
                    </div>
                  </div>
                  <div className="col-md-11 pt-4">
                    <label className="font18 b" for="invterm5">
                      I understand that doing research is my own responsibility
                    </label>
                    <div
                      className="text-danger errors"
                      style={{ fontSize: 15 }}
                    >
                      {this.state.errors.invterm5}
                    </div>
                  </div>
                </div>
              </div>
              <hr />
            </div>
          </div>

          <div className="row">
          <p className="font16 text-danger b" id="investortermsmessage"></p>
            <div className="col-md-11 d-flex justify-content-end mb-5">
              <button
                type="button"
                className="btn btn-dark btn-sm col-md-3"
                onClick={this.saveInvTerms}
              >
                Finished
              </button>
              {/* <NavLink  to="/Investors_Dashboard" className="nav-link text-white " style={{width: 280,height:'auto',backgroundColor: "#2ECC71",borderRadius:10,textAlign:'center'}} >Finished</NavLink> */}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Investors_Terms;
