import React, { Component } from "react";
import "./../components/Css/styles.css";
import { NavLink, Link } from "react-router-dom";
import DataService from "./../service/DataService";
import UploadService from "./../service/file-upload.service";

import line from "./../assets/images/yellowline.png";
import graphic1 from "./../assets/images/Data extraction.gif";
// import sections
import Founders_Tiles from "../components/sections/Founders_Tiles";
import Investors_Manager from "../components/sections/Investors_Manager";
import Accord from "../components/sections/Accord";
import Founders_Community from "../components/sections/Founders_Community";
import Founders_Raising from "../components/sections/Founders_Raising";
import Founders_Process from "../components/sections/Founders_Process";
import Founders_Calender from "../components/sections/Founders_Calender";

import Boy from "./../assets/images/Boyoyo.png";
import Girl from "./../assets/images/Girloyo.png";

import Mob1 from "./../assets/images/mob1.png";
import Mob2 from "./../assets/images/mob2.png";
import Mob4 from "./../assets/images/mob4.png";

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

class Founders extends React.Component {
  constructor() {
    super();
    this.retriveFounders = this.retriveFounders.bind(this);
  }

  componentDidMount() {
    this.retriveFounders();
  }
  retriveFounders() {
    var raiseDets = [];
    let status = "";
    var raisequerySet = "/raise?EMAIL=" + sessionStorage.getItem("sessEmail");
    DataService.findByTitle(raisequerySet)
      .then((response) => {
        raiseDets = response.data;
        $.each(raiseDets, function (index, value) {
          status = value.STATUS;
          console.log("LENGTH OF COMPANY INFO" + value.STATUS);
          if( !window.isEmpty( sessionStorage.getItem("sessEmail"))){
          if (status == "Dormant" ) {
            $(".founderpage .statusbtn").html(
              '<a href="/Raise"><button type="button" class="btn btn-dark btn-sm" id="applytoraise"> APPLY TO RAISE</button></a>'
            );
            linkRaise = "/Raise";
          } else {
            $(".founderpage .statusbtn").html(
              '<a href="/Startup_Dashboard"><button type="button" class="btn btn-dark btn-sm" id="startupdashboard"> STARTUP DASHBOARD  </button></a>'
            );
            linkRaise = "/Startup_Dashboard";
          }
        }
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    return (
      <>
        <div className="container-fluid ">
          <div className="col-md-12">
            <div className="row wow fadeInRight" data-wow-delay="0.1s">
              <div className="col-lg-12 text-center">
                <h2 className="text-dark  text-center h2line">
                  Community = Capital
                </h2>
                <div className="d-flex justify-content-center  text-center">
                  <img className="img-fluid" src={line} alt="line " />
                </div>
              </div>
            </div>
            {/*  Row */}
            <div className="row wow fadeInRight bg-gold" data-wow-delay="0.1s">
              <div className="col-md-8">
                <div className="d-flex justify-content-center mt-5 mb-5 text-center">
                  <img src={graphic1} /> <br />
                </div>
                <div className="row d-flex justify-content-center text-center">
                  <h5 class="text-dark col-md-6">
                    Use the power of community and raise funds while growing
                    your brand, & increasing sales.
                  </h5>
                </div>

                <div className="row d-flex justify-content-center text-center founderpage">
                  <div className="row statusbtn col-md-6">
                    <a href="/Raise">
                      <button
                        type="button"
                        class="btn btn-dark btn-lg"
                        id="applytoraise"
                      >
                        {" "}
                        APPLY TO RAISE
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div class="card  profile-card-4">
                  {/* <img src="..." class="card-img-top" alt="..."/> */}
                  <div class="card-body text-center">
                    <h6 class="card-title">
                      <span className="profile-card-2">
                        <i className="fa fa-cloud text-primary"></i>
                      </span>
                      &nbsp;Your Startup
                    </h6>

                    <div class="row">
                      <div class="col-md-6">
                        <span className="text-secondary font12">COMMUNITY</span>
                      </div>
                      <div class="col-md-6">
                        <span className="text-primary font12">
                          +100 Members
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <marquee direction="up" loop="true">
                      <div class="d-flex  justify-content-center">
                        <div class="flex-shrink-0 circle-mt-img">
                          <img
                            class="mr-3"
                            src={require("./../assets/blurimages/1.jpg")}
                            alt="Generic placeholder image"
                            width={32}
                            height={32}
                          />
                        </div>
                        <div class="  ms-3">
                          <h5 class="mt-0 para font14 b">
                            A.D.
                            <br />
                            <span className=" text-muted para font14">
                              INVESTED <i className="fa fa-rupee"></i>
                              &nbsp;38,000
                            </span>
                          </h5>
                        </div>{" "}
                      </div>

                      <div class="d-flex  justify-content-center">
                        <div class="flex-shrink-0 circle-mt-img">
                          <img
                            class="mr-3"
                            src={require("./../assets/blurimages/2.jpg")}
                            alt="Generic placeholder image"
                            width={32}
                            height={32}
                          />
                        </div>
                        <div class="  ms-3">
                          <h5 class="mt-0 para font14 b">
                            P.A.
                            <br />
                            <span className=" text-muted para  font14">
                              INVESTED <i className="fa fa-rupee"></i>
                              &nbsp;43,000
                            </span>
                          </h5>
                        </div>{" "}
                      </div>

                      <div class="d-flex  justify-content-center">
                        <div class="flex-shrink-0 circle-mt-img">
                          <img
                            class="mr-3"
                            src={require("./../assets/blurimages/3.jpg")}
                            alt="Generic placeholder image"
                            width={32}
                            height={32}
                          />
                        </div>
                        <div class="  ms-3">
                          <h5 class="mt-0 para  font14 b">
                            A.A.
                            <br />
                            <span className=" text-muted para  font14">
                              INVESTED <i className="fa fa-rupee"></i>
                              &nbsp;13,000
                            </span>
                          </h5>
                        </div>
                      </div>

                      <div class="d-flex  justify-content-center">
                        <div class="flex-shrink-0 circle-mt-img">
                          <img
                            class="mr-3"
                            src={require("./../assets/blurimages/4.jpg")}
                            alt="Generic placeholder image"
                            width={32}
                            height={32}
                          />
                        </div>
                        <div class="  ms-3">
                          <h5 class="mt-0 para  font14 b">
                            P.P.
                            <br />
                            <span className=" text-muted para  font14">
                              INVESTED <i className="fa fa-rupee"></i>
                              &nbsp;28,000
                            </span>
                          </h5>
                        </div>
                      </div>

                      <div class="d-flex  justify-content-center">
                        <div class="flex-shrink-0 circle-mt-img">
                          <img
                            class="mr-3"
                            src={require("./../assets/blurimages/5.jpg")}
                            alt="Generic placeholder image"
                            width={32}
                            height={32}
                          />
                        </div>
                        <div class="  ms-3">
                          <h5 class="mt-0 para  font14 b">
                            D.A.
                            <br />
                            <span className=" text-muted para  font14">
                              INVESTED <i className="fa fa-rupee"></i>
                              &nbsp;15,000
                            </span>
                          </h5>
                        </div>
                      </div>

                      <div class="d-flex  justify-content-center">
                        <div class="flex-shrink-0 circle-mt-img">
                          <img
                            class="mr-3"
                            src={require("./../assets/blurimages/6.jpg")}
                            alt="Generic placeholder image"
                            width={32}
                            height={32}
                          />
                        </div>
                        <div class="  ms-3">
                          <h5 class="mt-0 para  font14 b">
                            D.B.
                            <br />
                            <span className=" text-muted para  font14">
                              INVESTED <i className="fa fa-rupee"></i>
                              &nbsp;44,000
                            </span>
                          </h5>
                        </div>
                      </div>

                      <div class="d-flex  justify-content-center">
                        <div class="flex-shrink-0 circle-mt-img">
                          <img
                            class="mr-3"
                            src={require("./../assets/blurimages/7.jpg")}
                            alt="Generic placeholder image"
                            width={32}
                            height={32}
                          />
                        </div>
                        <div class="  ms-3">
                          <h5 class="mt-0 para  font14 b">
                            A.B.
                            <br />
                            <span className=" text-muted para  font14">
                              INVESTED <i className="fa fa-rupee"></i>
                              &nbsp;9,000
                            </span>
                          </h5>
                        </div>
                      </div>

                      <div class="d-flex  justify-content-center">
                        <div class="flex-shrink-0 circle-mt-img">
                          <img
                            class="mr-3"
                            src={require("./../assets/blurimages/8.jpg")}
                            alt="Generic placeholder image"
                            width={32}
                            height={32}
                          />
                        </div>
                        <div class="  ms-3">
                          <h5 class="mt-0 para  font14 b">
                            C.C.
                            <br />
                            <span className=" text-muted para  font14">
                              INVESTED <i className="fa fa-rupee"></i>
                              &nbsp;40,000
                            </span>
                          </h5>
                        </div>
                      </div>

                      <div class="d-flex  justify-content-center">
                        <div class="flex-shrink-0 circle-mt-img">
                          <img
                            class="mr-3"
                            src={require("./../assets/blurimages/9.jpg")}
                            alt="Generic placeholder image"
                            width={32}
                            height={32}
                          />
                        </div>
                        <div class="  ms-3">
                          <h5 class="mt-0 para  font14 b">
                            C.P.
                            <br />
                            <span className=" text-muted para  font14">
                              INVESTED <i className="fa fa-rupee"></i>
                              &nbsp;53,000
                            </span>
                          </h5>
                        </div>
                      </div>

                      <div class="d-flex  justify-content-center">
                        <div class="flex-shrink-0 circle-mt-img">
                          <img
                            class="mr-3"
                            src={require("./../assets/blurimages/10.jpg")}
                            alt="Generic placeholder image"
                            width={32}
                            height={32}
                          />
                        </div>
                        <div class="  ms-3">
                          <h5 class="mt-0 para  font14 b">
                            P.A.
                            <br />
                            <span className=" text-muted para  font14">
                              INVESTED <i className="fa fa-rupee"></i>
                              &nbsp;17,000
                            </span>
                          </h5>
                        </div>
                      </div>
                    </marquee>

                    <p className="para text-muted text-center">
                      *In the initial rounds
                    </p>
                    <div class="d-flex text-center justify-content-center">
                      <div class="col-md-6">
                        <span className="text-secondary para text-muted">
                          INVESTORS
                        </span>
                        <br />
                        <span className="text-dark para b">326</span>
                      </div>
                      <div class="col-md-6">
                        <span className="text-secondary para">AMT RAISED</span>
                        <br />
                        <span className="text-dark para b">2.4 Million</span>
                      </div>
                    </div>
                  </div>
                  {/* marquee row */}

                  {/* <div class="card-body">
<a href="#" class="card-link">Card link</a>
<a href="#" class="card-link">Another link</a>
</div> */}
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div className="container h-100">
              <div class="d-flex  justify-content-center">
                <h1 class="text-center">
                  Trusted By Over{" "}
                  <span class="text-gold">
                    50k+ <br />
                    Partners And Organizations
                  </span>
                </h1>
              </div>
            </div>
          </div>{" "}
          {/*  row */}
          <div className="container-xxl py-5">
            <div className="container">
              <div className="row g-5  wow fadeInLeft" data-wow-delay="0.5s">
                {/* <h3 className="text-center">FOR INVESTORS</h3> */}
                <div id="testimonicals-slider" className="owl-carousel  p-5 ">
                  <div className="post-slide">
                    <div className="d-flex align-items-center">
                      <div className="flex-shrink-0">
                        <div class="post-img">
                          <img
                            src={require("./../assets/images/tm1.png")}
                            alt="..."
                            style={{ width: "115px" }}
                          />
                        </div>
                      </div>
                      <div className="flex-grow-1 ms-3">
                        <p className=" para font14">
                          {" "}
                          The entire process is seamless and quick. Glad that we
                          were able to raise capital using Mynt Platform. Kudos
                          to Team Mynt !
                        </p>
                        <h5>Dhumil - Founder, Klassroom </h5>
                      </div>
                    </div>
                  </div>
                  <div className="post-slide">
                    <div className="d-flex align-items-center">
                      <div className="flex-shrink-0">
                        <div class="post-img">
                          <img
                            src={require("./../assets/images/tm2.png")}
                            alt="..."
                            style={{ width: "115px" }}
                          />
                        </div>
                      </div>
                      <div className="flex-grow-1 ms-3 ">
                        <p className=" para font14">
                          Mynt's dashboard for startups and automated analytical
                          reports is super impressive. Very happy that we did
                          our fundraise with them.
                        </p>
                        <h5>Mayank - Ezyschooling</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="container-xxl py-5  ">
              <div className="container">
                <div className="row g-5">
                  {/* <h3 className="text-center">FOR INVESTORS</h3> */}
                  <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="h-100">
                      <h5 className="text-start font20">Get Growth Funds</h5>
                      {/* <h1 className="display-6 mb-4">We Are Creative And Professional Photographer</h1> */}
                      <p className="para font20">
                        We partake in raising a part of your current round while
                        assuring a strong foundation is being built for your
                        brand through our various services.
                      </p>
                      <div className="row   col-md-6">
                        <a
                          href={linkRaise}
                          class="text-primary stretched-link font16"
                        >
                          {/* <button type="button" class="btn btn-dark btn-sm"> */}
                          Start Now!
                          {/* </button> */}
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="row g-3  d-flex justify-content-center  img-twice position-relative h-100">
                    <img
                      className="img-fluid"
                      src={require("./../assets/blurimages/MYNT-GIF-7.gif")}
                      alt=""
                      style={{ width: "500px" }}
                    />
                    </div>
                  </div>
                </div>

                <div className="row g-5">
                  <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="row g-3  d-flex justify-content-center  img-twice position-relative h-100">
                    <img
                      className="img-fluid"
                      src={require("./../assets/blurimages/MYNT-GIF-8.gif")}
                      alt=""
                      style={{ width: "500px" }}
                    />
                    </div>
                  </div>

                  <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="h-100">
                      <h5 className="text-start font20">Community Effect</h5>
                      {/* <h1 className="display-6 mb-4">We Are Creative And Professional Photographer</h1> */}
                      <p className="para font20">
                        We create a community of new customers and investors.
                        Campaign launches, reports, and engagement have never
                        been easier. We help you to get connected to your
                        biggest flag bearers.
                      </p>
                      <div className="row   col-md-6">
                        <a
                          href={linkRaise}
                          class="text-primary stretched-link font16"
                        >
                          {/* <button
                            type="button"
                            class="btn btn-dark  btn-sm"
                            id="applytoraise"
                          > */}{" "}
                          Community
                          {/* </button> */}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row g-5">
                  <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="h-100">
                      <h5 className="text-start font20">Seamless Analytics</h5>
                      {/* <h1 className="display-6 mb-4">We Are Creative And Professional Photographer</h1> */}
                      <p className="para font20">
                        Let our seamless technology help you track all your key
                        performance indicators in one place. Your investor
                        updates can also be sent from our highly curated
                        dashboard with one click. We make your reporting process
                        seamless.
                      </p>
                      <div className="row statusbtn col-md-6">
                        <a
                          href={linkRaise}
                          class="text-primary stretched-link font16"
                        >
                          {/* <button type="button" class="btn btn-dark  btn-sm"> */}
                          Learn More!
                          {/* </button> */}
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="row g-3  d-flex justify-content-center  img-twice position-relative h-100">
                    <img
                      className="img-fluid"
                      src={require("./../assets/blurimages/MYNT-GIF-9.gif")}
                      alt=""
                      style={{ width: "500px" }}
                    />
                    </div>
                  </div>
                </div>

                <div className="row g-5">
                  <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="row g-3  d-flex justify-content-center  img-twice position-relative h-100">
                    <img
                      className="img-fluid"
                      src={require("./../assets/blurimages/MYNT-GIF-6.gif")}
                      alt=""
                      style={{ width: "500px" }}
                    />
                    </div>
                  </div>

                  <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="h-100">
                      <h5 className="text-start font20">
                        Start Growth Hacking
                      </h5>
                      {/* <h1 className="display-6 mb-4">We Are Creative And Professional Photographer</h1> */}
                      <p className="para font20">
                        Get industry leaders as your mentors and engage with our
                        lead generation partners and grow your business 10x
                        while we help you raise multiple rounds from our set of
                        investors. Impress your investors with easy to
                        understand pitches & enriched data without affecting
                        your prior, current or future VC rounds!
                      </p>
                      <div className="row statusbtn col-md-6">
                        <a
                          href={linkRaise}
                          class="text-primary stretched-link font16"
                        >
                          {/* <button type="button" class="btn btn-dark  btn-sm"> */}{" "}
                          Learn More!
                          {/* </button> */}
                        </a>
                      </div>
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
          </div>
          <div className="container-xxl py-5">
            <div className="container">
              <div className="row g-5  wow fadeInRight" data-wow-delay="0.5s">
                <div className=" align-items-center h-100">
                  <div className=" rounded">
                    <h3 className="text-center">
                      SEAMLESS DEAL CLOSING WITH Mynt!
                    </h3>
                    <p class="text-center">
                      We enable Angel Networks, Founders, Family offices,
                      Syndicates and VCs to carry out their fundraising process
                      online seamlessly, accessible only to their audience via
                      our efficient exclusive deal management system.
                    </p>
                    <p class="text-center">
                      <a
                        href={linkRaise}
                        class="text-primary stretched-link font16"
                      >
                        Learn More!
                      </a>
                    </p>
                    <div className="d-flex justify-content-center  text-center">
                      <img className="img-fluid" src={line} alt="line " />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Founders_Calender />
        <Founders_Process />
        {/* <Founders_Raising/> */}
        <Investors_Manager split />
        <Accord />
      </>
    );
  }
}

export default Founders;
