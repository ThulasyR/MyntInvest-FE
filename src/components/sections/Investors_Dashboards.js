import React, { Component } from "react";
import "../Css/styles.css";
import { NavLink, Link } from "react-router-dom";
import DataService from "../../service/DataService";
import Button from "../elements/Button";
import Image from "../elements/Image";
import Moment from "moment";
import $ from "jquery";

import ButtonGroup from "../elements/ButtonGroup";
import Input from "../elements/Input";

const extractFilename = (path) => {
  const pathArray = path.split("/");
  const lastIndex = pathArray.length - 1;
  return pathArray[lastIndex].replace(/\.[^/.]+$/, "");
};

const getGreeting = () => {
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime = hours + ":" + minutes + " " + ampm;
  if (ampm == "am") {
    return "Good Morning";
  } else {
    return "Good Evening";
  }
};
const checkStatusKYCPayment = () => {
  alert("hi");
};
const getArrayDets = () => {
  var getKeyword = $("#analysisKeyword").val();
  if (!window.isEmpty(getKeyword)) {
    var arrAllDets = [];
    let sumval = 0;
    let counter = 0;
    var compaName = "";
    var cmpPayOnlinequerySet = "/CmpPayOnline?INVESTOR_CMP_NAME=" + getKeyword;
    DataService.findByTitle(cmpPayOnlinequerySet)
      .then((response) => {
        arrAllDets = response.data;
        counter = arrAllDets.length;
        if (arrAllDets.length > 0) {
          $.each(arrAllDets, function (index, value) {
            sumval += parseInt(value.INVESTOR_TOT_AMT_TOBEPAID);
            compaName = value.INVESTOR_CMP_NAME;
            if (!window.isEmpty(sumval)) {
              // $("#analysisInvestval").html(sumval);
              // $("#noOfInvestor").html(counter);

              $(".SetAnalysisInvestor").html(
                '<div class="row mt-3">' +
                  "<h1>" +
                  compaName +
                  "</h1>" +
                  '<div class=" col-md-6">' +
                  '<div  class="card light-blue" style="border-left:4px solid  #00648b">' +
                  '<div class="card-body">' +
                  '<h6 class="text-dark  font20">' +
                  '<i class="fa fa-rupee"></i>' +
                  "&nbsp;" +
                  sumval +
                  "</h6>" +
                  '<p class="card-text b font16 text-muted">' +
                  "Amount Invested" +
                  "</p>" +
                  "</div>" +
                  "</div>" +
                  "</div> " +
                  '<div class=" col-md-6">' +
                  '<div class="card bg-pinklight" style="border-left:4px solid rgb(139 44 139)">' +
                  '<div class="card-body">' +
                  '<h6 class="text-dark  font20">' +
                  "Startups Invested" +
                  "</h6>" +
                  '<p class="card-text b font16 text-muted">' +
                  counter +
                  "</p>" +
                  "</div>" +
                  "</div> " +
                  "</div>" +
                  "</div>"
              );
            } else {
              $(".SetAnalysisInvestor").html("");
            }
          });
        } else {
          $(".SetAnalysisInvestor").html("No Records Found!!!");
          $(".SetAnalysisInvestor").prop("style","color:maroon")
        }
      })
      .catch((e) => {
        console.log(e);
      });
  } else {
    $("#analysisInvestval").html("0");
    $("#noOfInvestor").html("0");
  }
};

class Investors_Dashboard extends React.Component {
  constructor(props) {
    // console.log(props.location.userProps["name"]);
    // $("#navigationInvDash").find("li:eq(0)").find("a").addClass("active");
    // $(".investDashboardBodyScroll").addClass("active show");
    // if (!(props.location.userProps == undefined)) {
    //   $("#navigationInvDash")
    //     .find("li")
    //     .each(function () {
    //       $(this).find("a").removeClass("active");
    //     });
    //   $(".investDashboardBodyScroll").each(function () {
    //     $(this).removeClass("active show");
    //   });

    //   if (props.location.userProps["name"] == "dashboard") {
    //     $("#navigationInvDash").find("li:eq(0)").find("a").addClass("active");
    //   }
    //   if (props.location.userProps["name"] == "portfolio") {
    //     $("#navigationInvDash").find("li:eq(1)").find("a").addClass("active");
    //   }
    //   if (props.location.userProps["name"] == "analytics") {
    //     $("#navigationInvDash").find("li:eq(2)").find("a").addClass("active");
    //   }
    //   $("#" + props.location.userProps["name"]).addClass("active show");
    // }
    super();

    this.state = {
      allCompanyInvestmentDets: [],
      // filterInvestmentDets: [],
    };
    this.retriveInvestorDash = this.retriveInvestorDash.bind(this);
    this.retrievPaymentDetails = this.retrievPaymentDetails.bind(this);
  }

  componentDidMount() {
    this.retriveInvestorDash();
    this.retrievPaymentDetails();
    
  }
  retrievPaymentDetails() {
    /*Company information*/
    var pydetsAllDets = [];
    let summingInvestmentval = 0;
    let countPay = 0;
    var cmpPayOnlinequerySet =
      "/CmpPayOnline?EMAIL=" + sessionStorage.getItem("sessEmail");
    DataService.findByTitle(cmpPayOnlinequerySet)
      .then((response) => {
        pydetsAllDets = response.data;
        this.setState({
          allCompanyInvestmentDets: pydetsAllDets,
        });

        countPay = pydetsAllDets.length;
        if (pydetsAllDets.length > 0) {
          $.each(pydetsAllDets, function (index, value) {
            summingInvestmentval += parseInt(value.INVESTOR_TOT_AMT_TOBEPAID);

            if (!window.isEmpty(summingInvestmentval)) {
              $("#TotInvestmentValue").html(summingInvestmentval);
              $("#TotStartupInvested").html(countPay);
            } else {
              $("#TotInvestmentValue").html("0");
              $("#TotStartupInvested").html("0");
            }
          });
        } else {
          $("#TotInvestmentValue").html("0");
          $("#TotStartupInvested").html("0");
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }
  retriveInvestorDash() {
    /*Company information*/
    var kycAllDets = [];
    $(".logout").click(function () {
      sessionStorage.removeItem("key");
      sessionStorage.clear();
      window.location.href = "/";
    });

    var cdquerySet =
      "/investordetails?EMAIL=" + sessionStorage.getItem("sessEmail");
    DataService.findByTitle(cdquerySet)
      .then((response) => {
        kycAllDets = response.data;

        window.ChooseStartupModel();
        if (kycAllDets.length > 0) {
          $.each(kycAllDets, function (index, value) {
            console.log("kyc" + value.INV_MOBILE_NUMBER.length);
            if (value.INV_MOBILE_NUMBER.length > 0) {
              $(".kycsts").html(
                '<button type="button" class="btn btn-warning btn-sm" id="cpcompleted">COMPLETED</button>'
              );
            } else {
              $(".kycsts").html(
                '<button type="button" class="btn btn-danger btn-sm" id="cppending">PENDING</button>'
              );
            }
          });
        } else {
          $(".kycsts").html(
            '<button type="button" class="btn btn-danger btn-sm" id="cppending">PENDING</button>'
          );
        }
      })
      .catch((e) => {
        console.log(e);
      });

    var pyDtAllDets = [];

    var cdquerySet1 =
      "/investorpydetails?EMAIL=" + sessionStorage.getItem("sessEmail");
    DataService.findByTitle(cdquerySet1)
      .then((response) => {
        pyDtAllDets = response.data;

        // window.ChooseStartupModel();
        if (pyDtAllDets.length > 0) {
          $.each(pyDtAllDets, function (index, value) {
            if (value.INV_BANKACCNO.length > 0) {
              $(".pysts").html(
                '<button type="button" class="btn btn-warning btn-sm" id="pycompleted">COMPLETED</button>'
              );
            } else {
              $(".pysts").html(
                '<button type="button" class="btn btn-danger btn-sm" id="pypending">PENDING</button>'
              );
            }
          });
        } else {
          $(".pysts").html(
            '<button type="button" class="btn btn-danger btn-sm" id="pypending">PENDING</button>'
          );
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    const { allCompanyInvestmentDets } = this.state;

    return (
      <div className="container-fluid bg-white">
        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-2 bg-light">
                <ul
                  id="navigationInvDash"
                  class="nav nav-tabs flex-column"
                  style={{ paddingTop: "150px" }}
                >
                  <li class="nav-item">
                    <a
                      class="nav-link active para"
                      data-bs-toggle="tab"
                      href="#dashboard"
                      
                    >
                      <i class="fa fa-pie-chart  text-gold"></i>&nbsp;Dashboard
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link para"
                      data-bs-toggle="tab"
                      href="#portfolio"
                     
                    >
                      <i class="fa fa-suitcase  text-gold"></i>&nbsp;Portfolio
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link para"
                      data-bs-toggle="tab"
                      href="#analytics"
                      
                    >
                      <i class="fa fa-bar-chart text-gold"></i>&nbsp;Analytics
                    </a>
                  </li>



                  <li class="nav-item logout">
                    <a
                      class="nav-link para logout" 
                      
                    >
                      <i class="fa fa-sign-out text-gold"></i>&nbsp;Logout
                    </a>
                  </li>


                </ul>
              </div>
              <div className="col-md-10">
                {/* <!-- Nav tabs --> */}

                {/* 
<!-- Tab panes --> */}
                <div class="tab-content">
                  <div
                    class="tab-pane container active investDashboardBodyScroll"
                    id="dashboard"
                  >
                    <div className="row">
                      <div className="row">
                        <h3 align="left">Overview</h3>
                        <p className="para" align="left">
                          {getGreeting()}
                          <b className="font16 text-success">
                            {" "}
                            {sessionStorage.getItem("sessFirstname")}
                          </b>
                        </p>

                        <p className="font16 text-danger b" id="kycbackdashboarderrormessage"></p>
                      </div>
                      {/**Row end */}

                      <div className="row mt-3">
                        <div className=" col-md-5">
                          <div
                            className="card light-blue"
                            style={{ borderLeft: "4px solid #00648b" }}
                          >
                            <div className="card-body">
                              <h6 className="text-muted  font14">
                                Total Investment Value
                              </h6>
                              <p className="card-text b font20">
                                <i className="fa fa-rupee"></i>
                                &nbsp;<span id="TotInvestmentValue"></span>
                              </p>
                              {/* <a href="#" className="card-link">Card link</a>
                            <a href="#" className="card-link">Another link</a> */}
                            </div>
                          </div>
                        </div>
                        {/**card Row end */}
                        <div className=" col-md-5">
                          <div
                            className="card bg-pinklight"
                            style={{
                              borderLeft: "4px solid rgb(139 44 139)",
                            }}
                          >
                            <div className="card-body">
                              <h6 className="text-muted  font14">
                                Startups Invested
                              </h6>
                              <p className="card-text b font20">
                                <span id="TotStartupInvested"></span>
                              </p>
                              {/* <a href="#" className="card-link">Card link</a>
                            <a href="#" className="card-link">Another link</a> */}
                            </div>
                          </div>
                          {/**card Row end */}
                        </div>
                        <div className=" col-md-2">
                          <div className="card light-violet">
                            <div className="card-body">
                              <h6 className="text-muted  font14 text-center">
                                View All Investment
                              </h6>
                              <p className="card-text text-center b font14">
                                <i className="fa fa-arrow-right"></i>
                              </p>
                              {/* <p className="card-text text-center b font14">
                                </p> */}
                              {/* <a href="#" className="card-link">Card link</a>
                        <a href="#" className="card-link">Another link</a> */}
                            </div>
                          </div>
                        </div>
                        {/**card Row end */}
                      </div>
                      {/**Row end */}

                      <div className="row mt-3">
                        <h3 align="left">Complete Your Profile</h3>
                        <p className="para text-secondary b" align="left">
                          Complete your profile to start investing!
                        </p>
                      </div>
                      {/**Row end */}

                      <div className="row mt-3">
                        <div className=" col-md-6">
                          <a href="/Investors_Details">
                            {" "}
                            {/**id="openChooseStartup"*/}
                            <div className="card ">
                              <div className="card-body">
                                <div className="row ">
                                  <div className="col-md-8">
                                    <h3 className="">KYC</h3>
                                  </div>
                                  <div className="col-md-4 pt-4">
                                    <a className="kycsts">
                                      <button
                                        type="button"
                                        class="btn btn-danger btn-sm"
                                      >
                                        PENDING
                                      </button>
                                    </a>
                                  </div>
                                  <p className="card-text para" align="left">
                                    Complete your online KYC to start investing
                                    on MyntInvest .Keep your PAN card handy!
                                    &nbsp;
                                    <br />
                                    &nbsp;
                                  </p>
                                </div>
                              </div>
                            </div>
                          </a>
                        </div>
                        {/**card Row end */}
                        <div className=" col-md-6">
                          <a href="/Investors_PaymentDets">
                            <div className="card ">
                              <div className="card-body">
                                <div className="row ">
                                  <div className="col-md-8">
                                    <h3 className="">Payment Details</h3>
                                  </div>
                                  <div className="col-md-4 pt-4">
                                    <a className="pysts">
                                      <button
                                        type="button"
                                        class="btn btn-danger btn-sm"
                                      >
                                        PENDING
                                      </button>
                                    </a>
                                  </div>
                                  <p className="card-text para" align="left">
                                    {" "}
                                    Complete your Payment Details &nbsp;
                                    <br />
                                    &nbsp;
                                  </p>
                                </div>
                              </div>
                            </div>
                            {/**card Row end */}
                          </a>
                        </div>
                      </div>
                      {/**Row end */}

                      <div className="row mt-5">
                        <h3 align="left">Our Community</h3>
                        {/* <p className="para text-secondary b"
                          align="left" > 
                          Complete your profile to start investing!
                           </p> */}

                        <div className=" d-flex justify-content-center">
                          <div
                            className=" col-md-8 p-2"
                            style={{ border: "1px solid #e7e5e5" }}
                          >
                            <div className=" d-flex align-items-center">
                              <div className="flex-shrink-0">
                                <Image
                                  src={require("./../../assets/images/inv1.jpg")}
                                  alt="Features tile icon 01"
                                  width={80}
                                  height={80}
                                />
                              </div>
                              <div className="flex-grow-1 ms-3">
                                <h5>
                                  Gerald Becker
                                  <br />
                                  <span className="para text-muted">
                                    2 months ago
                                  </span>
                                </h5>
                              </div>
                            </div>
                            <p className="para">
                              {" "}
                              Recommendation oj jeff Brown in Day One
                              newsletter. The concept is so good that it's
                              obvious to me that this is a very good
                              investment.Go Team!!{" "}
                            </p>
                          </div>
                        </div>
                        {/**END */}

                        <div className="mt-5 d-flex justify-content-center">
                          <div
                            className=" col-md-8 p-2"
                            style={{ border: "1px solid #e7e5e5" }}
                          >
                            <div className=" d-flex align-items-center">
                              <div className="flex-shrink-0">
                                <Image
                                  src={require("./../../assets/images/inv2.webp")}
                                  alt="Features tile icon 01"
                                  width={80}
                                  height={80}
                                />
                              </div>
                              <div className="flex-grow-1 ms-3">
                                <h5>
                                  Johnathan
                                  <br />
                                  <span className="para text-muted">
                                    2 months ago
                                  </span>
                                </h5>
                              </div>
                            </div>
                            <p className="para">
                              {" "}
                              Recommendation oj jeff Brown in Day One
                              newsletter. The concept is so good that it's
                              obvious to me that this is a very good
                              investment.Go Team!!{" "}
                            </p>
                          </div>
                        </div>
                        {/**END */}
                      </div>
                      {/**Row end */}

                      <div className="row mt-5 mb-5">
                        <div className="col-12">
                          <div className="d-flex justify-content-center">
                            <button
                              type="button"
                              className="btn btn-warning btn-sm col-md-4"
                            >
                              View All
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane container fade investDashboardBodyScroll"
                    id="portfolio"
                  >
                    <div className="row">
                      <div className="row">
                        <div className="col-md-11">
                          <div className="">
                            <div className="row">
                              <div className="col-md-6">
                                <strong style={{ fontSize: 30 }}>
                                  Your Portfolio
                                </strong>
                              </div>
                              <div className="col-md-6">&nbsp;</div>
                            </div>

                            <br />
                            <div className="row">
                              <form className="row col-md-12">
                                <div className="col-md-8">
                                  <div className="input-group mb-3">
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Enter the Keyword Here"
                                      aria-label="Recipient's username"
                                      aria-describedby="button-addon2"
                                    />
                                    <button
                                      className="btn btn-outline-secondary"
                                      type="button"
                                      id="button-addon2"
                                    >
                                      <i className="fa fa-arrow-right"></i>
                                    </button>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="mb-3 row">
                                    <label
                                      for="staticEmail"
                                      className="col-md-4 text-right"
                                    >
                                      Sort By:
                                    </label>
                                    <div className="col-md-8">
                                      <select className="form-control form-select-md">
                                        <option value="MF" selected>
                                          Most Funded
                                        </option>
                                        <option value="MT">
                                          Most Transaction
                                        </option>
                                        <option value="CS">Closing Soon</option>
                                      </select>
                                    </div>
                                  </div>
                                </div>
                              </form>
                            </div>

                            <br />
                            <div className="row">
                              <div className="col-md-12">
                                <div className="table-responsive-xxl m-5">
                                  <table class="table table-borderless table-striped table-hover">
                                    <thead>
                                      <tr>
                                        <th class="text-center">Company</th>
                                        <th class="text-center">
                                          Amt Invested
                                        </th>
                                        <th class="text-center">
                                          Date of Investment
                                        </th>
                                        <th class="text-center">Documents</th>
                                        <th class="text-center">Action</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {allCompanyInvestmentDets &&
                                        allCompanyInvestmentDets.map(
                                          (investDetails, index) => (
                                            <tr className="border-0">
                                              <td>
                                                {
                                                  investDetails.INVESTOR_CMP_NAME
                                                }
                                              </td>
                                              <td>
                                                {
                                                  investDetails.INVESTOR_TOT_AMT_TOBEPAID
                                                }
                                              </td>
                                              <td>
                                                {investDetails.CREATED_DATE}
                                              </td>
                                              <td>
                                                <Image
                                                  src={require("./../../assets/images/t01.jpg")}
                                                  alt="Features tile icon 01"
                                                  width={45}
                                                  height={45}
                                                />
                                              </td>
                                              <td>
                                                {" "}
                                                <Button
                                                  tag="a"
                                                  color="warning"
                                                  className="text-white"
                                                  style={{
                                                    backgroundColor: "#2ECC71",
                                                    borderRadius: 8,
                                                    height: 50,
                                                    fontSize: 15,
                                                    width: 200,
                                                  }}
                                                  wideMobile
                                                >
                                                  Download Agreement
                                                </Button>
                                              </td>
                                            </tr>
                                          )
                                        )}

                                      {/* <tr className="border-0">
                                        <td>
                                          <Image
                                            src={require("./../../assets/images/susvest.png")}
                                            alt="Features tile icon 01"
                                            width={70}
                                            height={70}
                                            className="rounded-circle"
                                          />
                                          <p
                                            class="para"
                                            style={{ fontSize: 18 }}
                                          >
                                            SustVest
                                          </p>
                                        </td>
                                        <td>
                                          <p>
                                            <i class="fa fa-inr"></i>&nbsp;8,000
                                          </p>
                                        </td>
                                        <td>
                                          <p className=" text-xs font-weight-bold mb-0">
                                            29 Jan, 2022
                                          </p>
                                        </td>

                                        <td>
                                          <Image
                                            src={require("./../../assets/images/t01.jpg")}
                                            alt="Features tile icon 01"
                                            width={45}
                                            height={45}
                                          />
                                        </td>

                                        <td>
                                          <Button
                                            tag="a"
                                            color="warning"
                                            className="text-white"
                                            style={{
                                              backgroundColor: "#2ECC71",
                                              borderRadius: 8,
                                              height: 50,
                                              fontSize: 15,
                                              width: 200,
                                            }}
                                            wideMobile
                                            href="/"
                                          >
                                            Download Agreement
                                          </Button>
                                        </td>
                                      </tr>

                                      <tr className="border-0">
                                        <td>
                                          <Image
                                            src={require("./../../assets/images/deciwood.png")}
                                            alt="Features tile icon 01"
                                            width={70}
                                            height={70}
                                            className="rounded-circle"
                                          />
                                          <p
                                            class="para"
                                            style={{ fontSize: 18 }}
                                          >
                                            Deciwood
                                          </p>
                                        </td>
                                        <td>
                                          <p>
                                            <i class="fa fa-inr"></i>&nbsp;6,000
                                          </p>
                                        </td>
                                        <td>
                                          <p>29 Jan, 2022</p>
                                        </td>

                                        <td>
                                          <Image
                                            src={require("./../../assets/images/t01.jpg")}
                                            alt="Features tile icon 01"
                                            width={45}
                                            height={45}
                                            className="img-rounded"
                                          />
                                        </td>

                                        <td>
                                          <Button
                                            tag="a"
                                            color="secondary"
                                            style={{
                                              backgroundColor: "#E5E8E8",
                                              borderRadius: 8,
                                              height: 50,
                                              fontSize: 15,
                                              width: 250,
                                            }}
                                            wideMobile
                                            href="/"
                                          >
                                            Pending Sign Up from Startup
                                          </Button>
                                        </td>
                                      </tr> */}
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane container fade investDashboardBodyScroll"
                    id="analytics"
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <strong style={{ fontSize: 30 }}>Analytics</strong>
                      </div>
                    </div>

                    <div className="row">
                      <div className="input-group mt-5 mb-3">
                        <input
                          type="text"
                          className="form-control reactcs"
                          placeholder="Enter the Keyword Here"
                          id="analysisKeyword"
                          // value="SolarGridX Ventures Private Limited"
                        />
                        <button
                          className="btn btn-outline-secondary reactcs"
                          type="button"
                          id="searchForInvAnalytics"
                          onClick={getArrayDets}
                        >
                          <i className="fa fa-arrow-right"></i>
                        </button>
                      </div>
                    </div>
                    <div className="SetAnalysisInvestor"></div>

                    {/* <div className="row mt-3">
                      <h1>{filterDetails.INVESTOR_CMP_NAME}</h1>
                      <div className=" col-md-6">
                        <div
                          className="card light-blue"
                          style={{ borderLeft: "4px solid #00648b" }}
                        >
                          <div className="card-body">
                            <h6 className="text-dark  font20">
                              <i className="fa fa-rupee"></i>
                              &nbsp;12,000.00
                            </h6>
                            <p className="card-text b font16 text-muted">
                              Amount Invested
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className=" col-md-6">
                        <div
                          className="card bg-pinklight"
                          style={{
                            borderLeft: "4px solid rgb(139 44 139)",
                          }}
                        >
                          <div className="card-body">
                            <h6 className="text-dark  font20">
                              Startups Invested
                            </h6>
                            <p className="card-text b font16 text-muted">5</p>
                          </div>
                        </div>
                      </div>
                    </div> */}

                    <div className="container mt-5">
                      <div
                        className="accordion bg-white"
                        id="accordionAnalytics"
                      >
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingOne">
                            <button
                              className="accordion-button"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#analyticsCollOne"
                              aria-expanded="true"
                              aria-controls="analyticsCollOne"
                            >
                              Total Revenue(TR)
                            </button>
                          </h2>
                          <div
                            id="analyticsCollOne"
                            className="accordion-collapse collapse show"
                            aria-labelledby="headingOne"
                            data-bs-parent="#accordionAnalytics"
                          >
                            <div className="accordion-body">
                              <input type="hidden" id="analytichid" />
                              <p>
                                Additionally,the SEC limits the maximum amount
                                you can invest across all startup using the Reg
                                CF legel framework based on your finalcial
                                situation.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingTwo">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#analyticsCollTwo"
                              aria-expanded="false"
                              aria-controls="analyticsCollTwo"
                            >
                              Growth Profit Amrgin(%)
                            </button>
                          </h2>
                          <div
                            id="analyticsCollTwo"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingTwo"
                            data-bs-parent="#accordionAnalytics"
                          >
                            <div className="accordion-body">
                              The gross profit margin is calculated by
                              subtracting direct expenses or cost of goods sold
                              (COGS) from net sales (gross revenues minus
                              returns, allowances and discounts).
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingThree">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#analyticsCollThree"
                              aria-expanded="false"
                              aria-controls="analyticsCollThree"
                            >
                              Monthly Recurring Revenue (MRR)
                            </button>
                          </h2>
                          <div
                            id="analyticsCollThree"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingThree"
                            data-bs-parent="#accordionAnalytics"
                          >
                            <div className="accordion-body">
                              Monthly Recurring Revenue (MRR) is the predictable
                              total revenue generated by your business from all
                              the active subscriptions in a particular month. It
                              includes recurring charges from discounts,
                              coupons, and recurring add-ons, but excludes
                              one-time fees.
                            </div>
                          </div>
                        </div>

                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingFour">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#analyticsCollFour"
                              aria-expanded="false"
                              aria-controls="analyticsCollFour"
                            >
                              Customer Churn Rate (%)
                            </button>
                          </h2>
                          <div
                            id="analyticsCollFour"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingFour"
                            data-bs-parent="#accordionAnalytics"
                          >
                            <div className="accordion-body">
                              Monthly Recurring Revenue (MRR) is the predictable
                              total revenue generated by your business from all
                              the active subscriptions in a particular month. It
                              includes recurring charges from discounts,
                              coupons, and recurring add-ons, but excludes
                              one-time fees.
                            </div>
                          </div>
                        </div>

                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingFive">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#analyticsCollFive"
                              aria-expanded="false"
                              aria-controls="analyticsCollFive"
                            >
                              Monthly Active Users (MAU)
                            </button>
                          </h2>
                          <div
                            id="analyticsCollFive"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingFive"
                            data-bs-parent="#accordionAnalytics"
                          >
                            <div className="accordion-body">
                              Key performance indicator (KPI) used by social
                              networking and other companies to count the number
                              of unique users who visit a site within the past
                              month.
                            </div>
                          </div>
                        </div>

                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingSix">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#analyticsCollSix"
                              aria-expanded="false"
                              aria-controls="analyticsCollSix"
                            >
                              LTV: CAC Ratio
                            </button>
                          </h2>
                          <div
                            id="analyticsCollSix"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingSix"
                            data-bs-parent="#accordionAnalytics"
                          >
                            <div className="accordion-body">
                              The ideal scenario would be as follows: what you
                              are spending on acquiring a new customer (CAC) is
                              approximately three times less than the lifetime
                              value of that customer (LTV).
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Investors_Dashboard;
