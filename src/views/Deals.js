import React, { Component } from "react";
import "./../components/Css/styles.css";
import { NavLink, Link } from "react-router-dom";
import DataService from "./../service/DataService";
import UploadService from "./../service/file-upload.service";
// import sections
import Livedeals from "../components/sections/Livedeals";
import Deals_Cta from "../components/sections/Deals_Cta";
import Funded_Company from "../components/sections/Funded_Company";
import Deals_Navbar from "../components/sections/Deals_Navbar";

import Moment from "moment";
import $ from "jquery";
const current = new Date();
const date = `${current.getFullYear()}-${
  current.getMonth() + 1
}-${current.getDate()}`; //mysql insert date format
const formatDate = Moment("12/09/2002").format("YYYY-MM-DD"); //2002-12-09

const extractFilename = (path) => {
  const pathArray = path.split("/");
  const lastIndex = pathArray.length - 1;
  return pathArray[lastIndex];
};
var calDays = (date) => {
  var date1 = new Date(date); //Current date
  var date2 = new Date(); //Today's date

  // To calculate the time difference of two dates
  var Difference_In_Time = date2.getTime() - date1.getTime();

  // To calculate the no. of days between two dates
  var Difference_In_Days =
    Number(30) - Number(Difference_In_Time / (1000 * 3600 * 24));
  console.log("date1/date2"+Number(Difference_In_Time / (1000 * 3600 * 24))+""+date2+"==========Different" +  Difference_In_Days);
  //To display the final no. of days (result)
  return Math.abs(Math.trunc(Difference_In_Days));
};
class Deals extends React.Component {
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
    var createDate = [];

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
                createDate.push(value.CREATED_DATE);
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
                  memDesc.push(
                    '<h6 class=" eclipse_wrap"><span  class="spanbg para bg-pinklight">' +
                      invalue.CINV_BIO +
                      "</span></h6>&nbsp;"
                  );
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

        // alert(uniqueEmail);createDate

        $(".campaignDealsArrange").html("");
        for (let iterval in original) {
          let days = Number(calDays(createDate[iterval]));
          var dealdid = "";
          var dealsts = "";
          var deaclr = "";
          if (days > 0) {
            dealdid = ".campaignDealsArrange";
            if (days >= 10) {
              dealsts = "NEW";
            }
            deaclr = "yellow";
          } else {
            dealdid = ".campaignClosedDealsArrange";
            dealsts = "CLOSED";
            deaclr = "grey";
          }

          $(dealdid).append(
            '<div class=" col-md-4"  ><div class="card"><a id="' +
              bannerId[iterval] +
              '" href="/Deals_Realm/' +
              bannerId[iterval] +
              '">' +
              // '<div className="card-header text-right"><a href="/Campaign"><button className="btn btn-warning"><i className="fa fa-edit"></i></button></a>'+
              // '<a href="/CampaigndeleteAll?MODULE='+bannerUnique+'"><button className="btn btn-danger"  data-attr="+value.ID+" ><i className="fa fa-trash"></i></button></a></div>'+
              '<img src="' +
              bannerImg[iterval] +
              '" class="card-img-top" alt="..." style="height: 40vh;"/>' +
              '<div class="badge-overlay"> ' +
              '<span class="top-left badge ' +
              deaclr +
              '">' +
              dealsts +
              "</span>" +
              " </div>" +
              '<div class="card-body">' +
              '<h5 class="card-title"  style="height: 10vh;">' +
              '<div style="font-size:14px" class="row d-flex align-items-center"><img class="image--cover align-middle" src="' +
              bannerImg[iterval] +
              '" >' +
              "&nbsp;" +
              bannerName[iterval] +
              "</div></h5>" +
              '<p class="font16" style="height: 10vh;">' +
              teaminfo[iterval] +
              "</p>" +
              '<table border="0" class="table table-borderless table-sm table-hover  para ">' +
              '<tr class="border-0">' +
              '<td class="font10 text-muted">PERCENT RAISED</td>' +
              '<td class="font10 text-muted">CLOSES IN</td>' +
              '<td class="font10 text-muted">BACKED BY</td>' +
              "</tr>" +
              '<tr class="border-0">' +
              '<td class="font14 b">' +
              growthPer[iterval] +
              " %</td>" +
              '<td class="font14 b">' +
              calDays(createDate[iterval]) +
              "</td>" +
              '<td class="font14 b">' +
              memName[iterval] +
              "</td>" +
              "</tr>" +
              "<table>" +
              "" +
              memDesc[iterval] +
              "&nbsp;" +
              "</div></a>" +
              "</div></div>"
          );
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    return (
      <div className="container">
        <div className="col-md-12">
          <div className="row wow fadeInRight" data-wow-delay="0.1s">
            <h1>Live Deals!</h1>
            <p className="para font20">
              Browse the latest investment opportunities on Mynt.{" "}
            </p>

            <form class="row g-3">
              <div class="col-md-8">
                <div class="input-group mb-3">
                  <input
                    type="text"
                    class="form-control"
                    name="txtFldDealsSortBy"
                    id="txtFldDealsSortBy"
                    placeholder="Search..."
                    aria-label="Search..."
                    aria-describedby="dealsearch"
                  />
                  <button
                    class="btn btn-outline-secondary"
                    type="button"
                    id="dealsearch"
                  >
                    <i class="fa fa-search"></i>
                  </button>
                </div>
              </div>
              <div class="col-md-4">
                <select
                  class="form-select"
                  name="selDealsSortBy"
                  id="selDealsSortBy"
                  aria-label="selDealsSortBy"
                >
                  <option value="" selected>
                    Sort By
                  </option>
                  <option value="1">Popularity</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </form>
          </div>
          {/* // row */}

          <div className="row col-md-12  wow fadeInLeft" data-wow-delay="0.3s">
            <div className="row campaignDealsArrange"></div>
          </div>

          <hr />

          <div className="row col-md-12  wow fadeInRight" data-wow-delay="0.5s">
            <h1>Closed Deals!</h1>
            <div className="row campaignClosedDealsArrange"></div>
          </div>
        </div>
        {/* // col-md-12 */}
      </div> // container
    );
  }
}

export default Deals;
