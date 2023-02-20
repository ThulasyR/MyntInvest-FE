import React, { Component } from "react";
import "./../components/Css/styles.css";
import { NavLink, Link } from "react-router-dom";
import DataService from "./../service/DataService";
import UploadService from "./../service/file-upload.service";
import line from "./../assets/images/yellowline.png";
import brand1 from "./../assets/images/brand1.png";
import brand2 from "./../assets/images/brand2.png";
import brand3 from "./../assets/images/brand3.png";
import brand4 from "./../assets/images/brand4.png";

import Mob1 from "./../assets/images/mob1.png";
import Mob2 from "./../assets/images/mob2.png";
import Mob4 from "./../assets/images/mob4.png";

import News1 from "./../assets/images/news1.png";
import News2 from "./../assets/images/news2.png";
import News3 from "./../assets/images/news3.png";
import News4 from "./../assets/images/news4.png";

import Boy from "./../assets/images/Boyoyo.png";
import Girl from "./../assets/images/Girloyo.png";

import Net1 from "./../assets/images/Net1.png";
import Net2 from "./../assets/images/Net2.png";
import Net3 from "./../assets/images/Net3.png";

import Moment from "moment";
import $ from "jquery";
const current = new Date();
const date = `${current.getFullYear()}-${
  current.getMonth() + 1
}-${current.getDate()}`; //mysql insert date format
const formatDate = Moment("12/09/2002").format("YYYY-MM-DD"); //2002-12-09

let getstartlink = "";

const extractFilename = (path) => {
  const pathArray = path.split("/");
  const lastIndex = pathArray.length - 1;
  return pathArray[lastIndex];
};

class Home extends React.Component {
  constructor() {
    super();
    this.retriveLiveDeals = this.retriveLiveDeals.bind(this);
  }

  componentDidMount() {
    this.retriveLiveDeals();
  }

  retriveLiveDeals() {
    /*Campaign information*/

    var campaignAllDets = [];
    var bannerUnique = "";
    var bannerImg = [];
    var bannerId = [];
    var bannerName = [];
    var pressHeader = "";
    var pressBody = "";
    var pressImg = "";
    var growthPer = [];
    var teaminfo = [];
    var memName = [];
    var memDesc = [];
    var memPosition = [];
    var original = [];
    var output = [];

    var raiseDets = [];
    let status = "";
    var raisequerySet = "/raise?EMAIL=" + sessionStorage.getItem("sessEmail");
    DataService.findByTitle(raisequerySet)
      .then((response) => {
        raiseDets = response.data;
        $.each(raiseDets, function (index, value) {
          status = value.STATUS;
          console.log("LENGTH OF COMPANY INFO" + value.STATUS);
          if (status == "Dormant") {
            $(".founderpage .statusbtn").html(
              '<a href="/Raise"  >' +
                '<button  class="btn btn-sm btn-dark w-full w-lg-auto">' +
                " Get Started" +
                "</button>" +
                '</a><br/> Are you a founder?&nbsp;<a href="/Raise" id="applytoraise"  class="text-gold">Raise Capital on Mynt</a>'
            );
          } else if (
            status == "Active" &&
            !window.isEmpty(sessionStorage.getItem("sessEmail"))
          ) {
            $(".founderpage .statusbtn").html(
              '<a href="/Startup_Dashboard"  >' +
                '<button  class="btn btn-sm btn-dark w-full w-lg-auto">' +
                " Get Started" +
                "</button>" +
                "</a><br/>"
            );
          }
        });
      })
      .catch((e) => {
        console.log(e);
      });

    var campaignquerySet = "/campaignAllDets";
    DataService.findByTitle(campaignquerySet)
      .then((response) => {
        campaignAllDets = response.data;
        console.log(campaignAllDets);

        $.each(campaignAllDets, function (index, value) {
          if (value.length == 0) {
            $(".campaignDealsArrange").html("");
            // $(".addnewcampaign").css("display","block");
          } else {
            if (index == "CAMPAIGN_BANNER") {
              var uniqueEmail = [];
              $.each(value, function (cb, value) {
                if (!uniqueEmail.includes(value.EMAIL)) {
                  uniqueEmail.push(value.EMAIL);
                }
                bannerImg.push(window.mt_backend_url + value.CAM_BAN_IMAGE);
                bannerId.push(value.EMAIL);
                bannerUnique = value.MODULE;
                original.push(value.EMAIL);
              });
            }
            if (index == "CAMPAIGN_PRESS") {
              $.each(value, function (cb, cbvalue) {
                pressHeader = cbvalue.CAMP_PRESS_HEADER;
                pressBody = cbvalue.CAMP_PRESS_BODY;
                pressImg = window.mt_backend_url + cbvalue.CAMP_PRESS_IMAGE;
              });
            }
            if (index == "CAMPAIGN_INVEST") {
              var uniqueEmail = [];
              $.each(value, function (cb, invalue) {
                if (!uniqueEmail.includes(invalue.EMAIL)) {
                  uniqueEmail.push(invalue.EMAIL);
                  memName.push(
                    invalue.CINV_MEMBER_NAME +
                      "&nbsp;,&nbsp;" +
                      invalue.CINV_MEMBER_POSITION
                  );
                  memDesc.push(invalue.CINV_BIO);
                }
              });
            }

            if (index == "COMPANY_INFO") {
              $.each(value, function (campany, infovalue) {
                bannerName.push(infovalue.LEGAL_NAME);
              });
            }
            if (index == "TEAM_INFO") {
              var uniqueEmail = [];
              $.each(value, function (campany, teamvalue) {
                if (!uniqueEmail.includes(teamvalue.EMAIL)) {
                  uniqueEmail.push(teamvalue.EMAIL);
                  teaminfo.push(teamvalue.TEAM_BIO);
                }
              });
            }

            if (index == "CAMPAIGN_ANALYTICS") {
              $.each(value, function (an, ianltvalue) {
                var valuei = "0";
                if (!window.isEmpty(ianltvalue.ANLYSTICS_GROWTHPROFIT)) {
                  growthPer.push(ianltvalue.ANLYSTICS_GROWTHPROFIT);
                }

                growthPer.push(valuei);
                //  alert(growthPer)
              });
            }

            // $(".addnewcampaign").css("display","none");
          }
        });

        for (let iterval in original) {
          $("#deals-slider").append(
            ' <div class="post-slide">' +
              '<a id="' +
              bannerId[iterval] +
              '" href="/Deals_Realm/' +
              bannerId[iterval] +
              '"><div class="card p-3  shadow bg-purple text-center border-0" >' +
              // '<marquee  direction="up"  loop="true" scrollamount="10">'+
              '<div class="card-body ">' +
              '<div class="d-flex align-items-center">' +
              '<div class="flex-shrink-0">' +
              '<img  src="' +
              bannerImg[iterval] +
              '"  class="card-img-top" alt="..." style="height: 10vh;" />' +
              "</div>" +
              '<div class="text-start   ms-3" >' +
              '<h5 style="lineHeight: 0px;" class="eclipse_wrap">' +
              bannerName[iterval] +
              "</h5>" +
              '<p class="para"  style="lineHeight: 0px;height:70px">' +
              teaminfo[iterval] +
              "</p>" +
              " </div>" +
              "</div>" +
              '<div class=" flex-shrink-0">' +
              '<div  class="row"> ' +
              '<table class="table table-borderless table-hover table-sm" border="0">' +
              "<tbody>" +
              '<tr class="border-0 para">' +
              '<td class="text-muted">Raised</td><td class="text-muted">Closes in</td><td colspan="2">&nbsp;</td></tr>' +
              '<tr class="border-0 para">' +
              "" +
              "<td><b>" +
              growthPer[iterval] +
              "</b></td>" +
              '<td><b>14 days</b></td><td><span class="btn btn-sm bg-light font12 eclipse_wrap"> ' +
              memDesc[iterval] +
              " </span></td>" +
              '<td><span class="btn btn-sm bg-light font12"> FINTECH </span></td></tr>' +
              "</tbody>" +
              "</table>  " +
              "</div>" +
              "</div>" +
              "</div></a>" +
              "</div>"
          );
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    return (
      <div className="container-fluid col-md-12">
        <div className="background-land">
          <div className="row  wow fadeInRight" data-wow-delay="0.1s">
            <div className="col-lg-12 text-center">
              <h2 className="text-dark  text-center h2line">
                Making The Best Investment <br />
                Opportunities Accessible
              </h2>
              <div className="d-flex justify-content-center  text-center">
                <img className="img-fluid" src={line} alt="line " />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="container">
                <div className="row">
                  <div id="deals-slider" className="owl-carousel  p-5 "></div>
                </div>
                <div className="row">
                  <Link to="/Deals" className="para font16 text-center">
                    View All &nbsp;<i className="fa fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row  wow fadeInUp" data-wow-delay="0.3s">
          <div className="col-lg-12 p-5 text-center">
            <h5 className="text-dark  text-center ">
              Own a small stake in the next big startup and diversify
              <br />
              your portfolio ten folds
            </h5>

            <div className="d-flex justify-content-center  text-center founderpage pt-1">
              <p className="para statusbtn">
                <a href="/Raise">
                  <button className="btn btn-sm btn-dark w-full w-lg-auto">
                    Get Started
                  </button>
                </a>
                <br />
                Are you a founder?
                <a href="/Raise" className="text-gold">
                  &nbsp;Raise Capital on Mynt
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="row wow fadeInLeft" data-wow-delay="0.3s">
          <div className="container bg-grey h-100">
            <div className=" align-items-center h-100">
              <div className=" rounded">
                <h3 className="text-center">
                  BROUGHT TO YOU BY THE NETWORKS THAT HAVE FUNDED
                </h3>
                <div className="d-flex justify-content-center  text-center">
                  <img className="img-fluid" src={line} alt="line " />
                </div>
                <div className="mb-5">
                  <div className="d-flex justify-content-center align-items-center row ">
                    <div className="col-md-1 col-lg-1">
                      <div className="thumbnail">
                        <img src={brand1} className="d-block " alt="..." />
                      </div>
                    </div>
                    <div className="col-md-2 col-lg-2">
                      <div className="thumbnail">
                        <img src={brand4} className="d-block" alt="..."  style={{width:"200px"}}/>
                      </div>
                    </div>
                    <div className="col-md-2 col-lg-2">
                      <div className="thumbnail">
                        <img src={brand2} className="d-block" alt="..."   style={{width:"250px"}}/>
                      </div>
                    </div>
                    <div className="col-md-2 col-lg-2">
                      <div className="thumbnail">
                        <img src={brand3} className="d-block" alt="..."   style={{width:"200px"}}/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container-xxl py-5">
            <div className="container">
              <div className="row g-5">
                <h3 className="text-center">FOR INVESTORS</h3>
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                  <div className="h-100">
                    <h5 className="text-start font20">Investment Made Easy</h5>
                    {/* <h1 className="display-6 mb-4">We Are Creative And Professional Photographer</h1> */}
                    <p className="para font16 text-justify">
                      Discover startups, sign your documents and diversify your
                      portfolio seamlessly at our one-stop shop.
                    </p>
                  </div>
                </div>
                <div
                  className="col-lg-6 wow fadeInUp  m-0 p-0"
                  data-wow-delay="0.1s"
                >
                  <div className="row d-flex justify-content-center ">
                    <img
                      className="img-fluid"
                      src={require("./../assets/blurimages/MYNT-GIF-1.gif")}
                      alt=""
                      style={{ width: "500px" }}
                    />
                  </div>
                </div>
              </div>

              <div className="row g-5">
                <div
                  className="col-lg-6 wow fadeInUp  m-0 p-0"
                  data-wow-delay="0.1s"
                >
                  <div className="row d-flex justify-content-center ">
                    <img
                      className="img-fluid"
                      src={require("./../assets/blurimages/MYNT-GIF-2.gif")}
                      alt=""
                      style={{ width: "500px" }}
                    />
                  </div>
                </div>

                <div className="col-lg-6 wow fadeInUp  " data-wow-delay="0.5s">
                  <div className="h-100">
                    <h5 className="text-start font20">Track and Monitor</h5>
                    {/* <h1 className="display-6 mb-4">We Are Creative And Professional Photographer</h1> */}
                    <p className="para font16  text-justify">
                      Our analytics section will help you review, monitor and
                      track your consolidated portfolio via our easy to use
                      dashboard all in one place.
                    </p>
                  </div>
                </div>
              </div>

              <div className="row g-5">
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                  <div className="h-100">
                    <h5 className="text-start font20">Community Access</h5>
                    {/* <h1 className="display-6 mb-4">We Are Creative And Professional Photographer</h1> */}
                    <p className="para font16  text-justify">
                      Join our community of seasoned professionals and
                      experience better investment opportunities with industry
                      leaders and pioneers.
                    </p>
                  </div>
                </div>

                <div
                  className="col-lg-6 wow fadeInUp  m-0 p-0"
                  data-wow-delay="0.1s"
                >
                  <div className="row d-flex justify-content-center">
                    <img
                      className="img-fluid"
                      src={require("./../assets/blurimages/MYNT-GIF-3.gif")}
                      alt=""
                      style={{ width: "500px" }}
                    />
                  </div>
                </div>
              </div>

              <div className="d-flex justify-content-center  text-center founderpage pt-1">
                <p className="para statusbtn">
                  <a href="/Raise">
                    <button className="btn btn-sm btn-dark w-full w-lg-auto">
                      Get Started
                    </button>
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="row wow fadeInLeft" data-wow-delay="0.3s">
            <div className="container-fluid bg-grey h-100">
              <div className=" align-items-center h-100">
                <div className=" rounded">
                  <h3 className="text-center">IN THE MEDIA</h3>
                  <div className="d-flex justify-content-center  text-center">
                    <img className="img-fluid" src={line} alt="line " />
                  </div>
                  <div className="mb-5">
                    <div className="d-flex justify-content-center row ">
                      <div className="col-md-2 col-lg-2">
                        <div className="thumbnail">
                          <img
                            src={News1}
                            className="d-block"   style={{width:"200px"}}
                            alt="..."
                          />
                        </div>
                      </div>
                      <div className="col-md-2 col-lg-2">
                        <div className="thumbnail">
                          <img
                            src={News4}
                            className="d-block"   style={{width:"200px"}}
                            alt="..."
                          />
                        </div>
                      </div>
                      <div className="col-md-2 col-lg-2">
                        <div className="thumbnail">
                          <img
                            src={News2}
                            className="d-block"   style={{width:"200px"}}
                            alt="..."
                          />
                        </div>
                      </div>
                      <div className="col-md-2 col-lg-2">
                        <div className="thumbnail">
                          <img
                            src={News3}
                            className="d-block"   style={{width:"200px"}}
                            alt="..."
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container-xxl py-5">
            <div className="container">
              <div className="row g-5">
                {/* <h3 className="text-center">FOR INVESTORS</h3> */}
                <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.5s">
                  <div className="d-flex align-items-center">
                    <div className="flex-shrink-0">
                      <img src={Boy} alt="..." style={{ width: "115px" }} />
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <p className=" para font14">
                        {" "}
                        Glad that everyone will now have access to stellar
                        Startups
                      </p>
                      <h5></h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.5s">
                  <div className="d-flex align-items-center">
                    <div className="flex-shrink-0">
                      <img src={Girl} alt="..." style={{ width: "115px" }} />
                    </div>
                    <div className="flex-grow-1 ms-3 ">
                      <p className=" para font14">
                        {" "}
                        Glad that everyone will now have access to stellar
                        Startups
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row wow fadeInRight" data-wow-delay="0.3s">
                <div className="align-items-center h-100">
                  <h3 className="text-center">FOR FOUNDER</h3>
                  <div className="d-flex justify-content-center  text-center">
                    <img className="img-fluid" src={line} alt="line " />
                  </div>
                  <div className="row m-5">
                    <div className="col-lg-4  mb-3">
                      <div className="card  h-100  border-0">
                        <div className="card-body d-flex flex-column">
                          <div className="text-center">
                            <img
                              className="img-fluid"
                              src={require("./../assets/blurimages/MYNT-GIF-4.gif")}
                              alt=""
                              style={{ width: "500px" }}
                            />
                          </div>

                          <div
                            className="card-title mb-4 text-center h6"
                            style={{ height: "50px" }}
                          >
                            Share Your Mission & Vision With the Masses
                          </div>
                          <p
                            className="card-text font16  text-center"
                            style={{ height: "230px" }}
                          >
                            At Mynt, we help integrate your
                            professional/personal network with a global
                            community of angel investors and users to be part of
                            your mission.
                          </p>
                          <div className="text-center">
                            <a href="/Founders">
                              <button className="btn btn-sm btn-dark w-full w-lg-auto">
                                Get Started
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-4 mb-3  ">
                      <div className="card  h-100  border-0">
                        <div className="card-body d-flex flex-column">
                          <div className="text-center">
                            <img
                              className="img-fluid"
                              src={require("./../assets/blurimages/MYNT-GIF-7.gif")}
                              alt=""
                              style={{ width: "500px" }}
                            />
                          </div>

                          <div
                            className="card-title mb-4 text-center h6"
                            style={{ height: "50px" }}
                          >
                            {" "}
                            Raising Capital Made Easy
                          </div>

                          <p
                            className="card-text font16  text-center"
                            style={{ height: "230px" }}
                          >
                            Let our seamless technology help streamline your
                            fundraising process and impress your investors with
                            easy-to-understand pitches and enriched data. We
                            support Founders, Angel Networks, Syndicates and VCs
                            with our efficient deal management options to take
                            their fundraising process online.
                          </p>
                          <div className="text-center">
                            <a href="/Founders">
                              <button className="btn btn-sm btn-dark w-full w-lg-auto">
                                Know More
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-4  mb-3">
                      <div className="card h-100 border-0">
                        <div className="card-body d-flex flex-column">
                          <div className="text-center">
                            <img
                              className="img-fluid"
                              src={require("./../assets/blurimages/MYNT-GIF-5.gif")}
                              alt=""
                              style={{ width: "500px" }}
                            />
                          </div>

                          <div
                            className="card-title mb-4 text-center h6"
                            style={{ height: "50px" }}
                          >
                            Growing Customers Base
                          </div>

                          <p
                            className="card-text font16  text-center"
                            style={{ height: "230px" }}
                          >
                            We ensure that you not only get new investors but
                            also loyal lifetime customers. Keep them engaged and
                            impressed with our Analytics.
                          </p>
                          <div className="text-center">
                            <a href="/Founders">
                              <button className="btn btn-sm btn-dark w-full w-lg-auto">
                                Know More
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- row --> */}
                </div>{" "}
                {/* <!-- align-center --> */}
              </div>{" "}
              {/* <!-- row --> */}
            </div>
            {/* <!-- container --> */}
          </div>
          {/* <!-- container-xxl --> */}

          <div className="container-xxl bg-grey py-5">
            <div className="container">
              <div className="row g-5">
                <div className="container-fluid  h-100">
                  <div className=" align-items-center h-100">
                    <div className=" rounded">
                      <h3 className="text-center">
                        BACKED BY LEADING NETWORKS
                      </h3>
                      <div className="d-flex justify-content-center  text-center">
                        <img className="img-fluid" src={line} alt="line " />
                      </div>
                      <div className=" m-5">
                        <div className="d-flex justify-content-center row ">
                          <div className="col-md-2">
                            <div className="thumbnail">
                              <img
                                src={Net1}
                                className="d-block w-100"
                                alt="..."
                              />
                            </div>
                          </div>
                          <div className="col-md-2">
                            <div className="thumbnail">
                              <img
                                src={Net2}
                                className="d-block w-100"
                                alt="..."
                              />
                            </div>
                          </div>
                          <div className="col-md-2">
                            <div className="thumbnail">
                              <img
                                src={Net3}
                                className="d-block w-100"
                                alt="..."
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                  {/* <!-- row --> */}
                </div>
                {/* <!-- container --> */}
              </div>
              {/* <!-- container-xxl --> */}
            </div>
          </div>
        </div>

        <div className="container-xxl">
          <div className="container">
            <div className="row  wow fadeInUp" data-wow-delay="0.3s">
              <div className="col-lg-12 p-5 text-center">
                <h1 className="text-dark  text-center ">
                  Join the 'best in class' today!
                </h1>

                <div className="d-flex justify-content-center  text-center ">
                  <p className="para ">
                    <a href="/Investors">
                      <button className="btn btn-lg btn-dark w-full w-lg-auto">
                        Investors
                      </button>
                    </a>{" "}
                    &nbsp;
                    <a href="/Founders">
                      <button className="btn btn-lg btn-warning w-full w-lg-auto">
                        Founders
                      </button>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*  className="container-xxl */}
      </div>
    );
  }
}

export default Home;
