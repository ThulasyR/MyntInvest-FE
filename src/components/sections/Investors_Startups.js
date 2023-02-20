import React, { Component } from "react";
import "../Css/styles.css";
import { NavLink, Link } from "react-router-dom";
import DataService from "../../service/DataService";
import line from "./../../assets/images/yellowline.png";
import Moment from "moment";
import $ from "jquery";

const current = new Date();
const date = `${current.getFullYear()}-${
  current.getMonth() + 1
}-${current.getDate()}`; //mysql insert date format
const formatDate = Moment("12/09/2002").format("YYYY-MM-DD"); //2002-12-09

let linkRaise = "";

const extractFilename = (path) => {
  const pathArray = path.split("/");
  const lastIndex = pathArray.length - 1;
  return pathArray[lastIndex];
};

class Investors_Startups extends React.Component {
  constructor() {
    super();
    this.retriveInvestorStartups = this.retriveInvestorStartups.bind(this);
  }

  componentDidMount() {
    this.retriveInvestorStartups();
  }
  retriveInvestorStartups() {
    if ( !window.isEmpty(sessionStorage.getItem("sessEmail"))){
    var inv_kyc = [];
    let status = "";
    var kycquerySet =
      "/investordetails?EMAIL=" + sessionStorage.getItem("sessEmail");
    DataService.findByTitle(kycquerySet)
      .then((response) => {
        inv_kyc = response.data; 
        $.each(inv_kyc, function (index, value) {
          status = value.STATUS;
          if (status == "Dormant") {
            $(".investorpage .invstatusbtn").html(
              '<a href="/Inv_Signup"><button type="button" class="btn btn-success btn-sm" >SIGNUP NOW</button></a>'
            );
          } else if ( 
            status == "Active"
          ) {
            $(".investorpage .invstatusbtn").html(
              '<a href="/Investor_Signup"><button type="button" class="btn btn-success btn-sm" >Investor Dashboard</button></a>'
            );
          }
        });
      })
      .catch((e) => {
        console.log(e);
      });
    }
  }

  render() {
    return (
      <>
        <div className="container-fluid ">
          <div className="container">
            <div className="row wow fadeInRight" data-wow-delay="0.1s">
              <div className="col-lg-12 text-center">
                <h2 className="text-dark  text-center h2line">
                  Invest, Diversify, Enable
                </h2>
                <div className="d-flex justify-content-center  text-center">
                  <img className="img-fluid" src={line} alt="line " />
                </div>
              </div>
            </div>
            {/*  Row */}
            <div className="row d-flex justify-content-center investorpage">
              <div
                className="card border-0 mt-5"
                style={{ background: "#e4b21f" }}
              >
                <div className="card-body  ">
                  <div className="row">
                    <div className="col-md-6">
                      <h3 class="card-title text-center">
                        Imagine if you would have invested*
                      </h3>
                      <br />
                      <br />
                      <p class="card-text text-center">
                        <range-slider
                          min="1000"
                          max="10000"
                          step="1"
                          dir="rtl"
                        ></range-slider>
                      </p>
                      <br /> <br />
                      <p className="para text-white">
                        Investments Are Risky And May Result in Total <br />
                        Loss Of Capital.&nbsp;
                        <a href="#" className="alert-link  text-white">
                          <u>Learn More</u>
                        </a>
                      </p>
                    </div>
                    {/* investWid */}
                    <div className="col-md-6 ">
                      <div class="card  profile-card-4">
                        {/* <img src="..." class="card-img-top" alt="..."/> */}
                        <div class="card-body text-center">
                          {/* <div class="progress">
                            <div class="progress-bar bg-info" role="progressbar" style={{width: "50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                          </div> */}
                          <p className="para text-muted">
                            You could have made in
                          </p>
                          <hr />
                        </div>
                        <div style={{ height: "300px", paddingLeft: "43px" }}>
                          <table
                            className="table table-borderless table-hover table-sm"
                            border="0"
                          >
                            {/* <marquee
                              direction="up"
                              loop="true"
                              scrollamount="10"
                            > */}
                            <tr className="border-0 para b">
                              <td>
                                <img
                                  src={require("./../../assets/images/ola.png")}
                                  alt="Features tile icon 01"
                                  width={100}
                                  height={100}
                                />
                              </td>
                              <td> Ola Cabs</td>
                              <td className="font20">
                                <i class="rupeeIcon"></i>
                                &nbsp;12.5M
                              </td>
                            </tr>
                            <tr className="border-0 para b">
                              <td>
                                <img
                                  src={require("./../../assets/images/byjus.png")}
                                  alt="Features tile icon 01"
                                  width={100}
                                  height={100}
                                />
                              </td>
                              <td>Byjus</td>
                              <td className="font20">
                                <i class="rupeeIcon"></i>
                                &nbsp;3.3M
                              </td>
                            </tr>
                            <tr className="border-0 para b">
                              <td>
                                <img
                                  src={require("./../../assets/images/unacedamy.png")}
                                  alt="Features tile icon 01"
                                  width={100}
                                  height={100}
                                />
                              </td>
                              <td>Unacademy</td>
                              <td className="font20">
                                <i class="rupeeIcon"></i>
                                &nbsp;&nbsp;1.7M
                              </td>
                            </tr>
                            <tr className="border-0 para b">
                              <td>
                                <img
                                  src={require("./../../assets/images/razor.png")}
                                  alt="Features tile icon 01"
                                  width={100}
                                  height={100}
                                />
                              </td>
                              <td>RazorPay</td>
                              <td className="font20">
                                <i class="rupeeIcon"></i>
                                &nbsp;625K
                              </td>
                            </tr>
                            {/* </marquee> */}
                            <tr className="border-0 para text-center">
                              <td colspan="3" className="para text-muted">
                                *In the initial rounds
                              </td>
                            </tr>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>

                  <br />
                </div>
              </div>
            </div>
            <div className="row mt-3 g-5  wow fadeInLeft" data-wow-delay="0.5s">
              <div className="col-md-12">
                <h3 className="text-center">
                  Discover highly curated, vetted investment opportunities today
                  and enable the future
                </h3>
              </div>
              <div className="row invstatusbtn mt-2 d-flex text-center">
                <a href="/Investor_Signup">
                  <button type="button" class="btn btn-dark btn-lg">
                    SIGNUP NOW
                  </button>
                </a>
              </div>{" "}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Investors_Startups;
