import React from "react";

import "../Css/styles.css";
import ButtonGroup from "../elements/ButtonGroup";
import Button from "../elements/Button";
import classNames from "classnames";
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

const tilesClasses = classNames("tiles-wrap center-content");

const current = new Date();
const date = `${current.getFullYear()}-${
  current.getMonth() + 1
}-${current.getDate()}`; //mysql insert date format

class Investor_Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      invSignAllDets: [],
      currentinvSign: null,
      currentinvSignIndex: -1,
      input: {},
      errors: {},
      ID: null,
      MTUSER_ID: null,
      EMAIL: null,
      MODULE: null,
      NATIONALITY: "",
      STATUS: "",
      COMMENTS: "",
      DESCRIPTION: "",
      CREATED_USER: "",
      CREATED_DATE: "",
      MODIFIED_USER: "",
      MODIFIED_DATE: "",
    };

    this.saveNationality = this.saveNationality.bind(this);
    this.retrieveNationality = this.retrieveNationality.bind(this);
  }

  componentDidMount() {
    this.retrieveNationality();
  }

  retrieveNationality() {
    if (!window.isEmpty(sessionStorage.getItem("sessEmail"))) {
      var querySet =
        "/inv_nationality?EMAIL=" + sessionStorage.getItem("sessEmail");
      console.log(querySet);
      DataService.findByTitle(querySet)
        .then((response) => {
          this.setState({
            invSignAllDets: response.data,
          });

          $.each(this.state.invSignAllDets, function (index, value) {
            $("#nationalityform #nationid")
              .attr("value", value.ID)
              .val(value.ID);
            $("#nationalityform #investorNationality").val(value.NATIONALITY);
          });
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }

  saveNationality(event) {
    event.preventDefault();
    if (this.validateNationality()) {
      if (!window.isEmpty(sessionStorage.getItem("sessEmail"))) {
        var data = {
          ID: Number($("#nationalityform #nationid").val()),
          MTUSER_ID: $("#mtuser_id").val(),
          EMAIL: $("#mtuser_email").val(),
          MODULE: $("#mtuser_module").val(),
          NATIONALITY: $("#nationalityform #investorNationality").val(),
          STATUS: "Active",
          COMMENTS: "TEST",
          DESCRIPTION: "Logged User",
          CREATED_DATE: Moment(date).format("YYYY-MM-DD"),
          CREATED_USER: $("#mtuser_fname").val(),
          MODIFIED_DATE: Moment(date).format("YYYY-MM-DD"),
          MODIFIED_USER: $("#mtuser_fname").val(),
        };

        console.log(data);

        if (window.isEmpty($("#nationalityform #nationid").val())) {
          DataService.create("/inv_nationality", data)
            .then((response) => {
              console.log("inside");
              window.showLoader();
              window.showAlert(
                "Investor Nationality updated",
                "/Investors_Terms"
              );
            })
            .catch((e) => {
              window.showLoader();
              console.log(e);
              window.errorMessage(
                "OOps!!! Something went wrong ! Please try again or Contact support team.",
                "investorsignupmessage"
              );
              // window.showAlert(
              //   "Not updated.Something is wrong!",
              //   "/Investor_Signup"
              // );
              // window.location.href = "/Signup";//to redirect to normal links
            });
        } else {
          DataService.update("/inv_nationality/" + $("#nationid").val(), data)
            .then((response) => {
              window.showLoader();
              window.showAlert(
                "Investor Nationality updated",
                "/Investors_Terms"
              );
            })
            .catch((e) => {
              window.showLoader();
              // window.showAlert(
              //   "OOps!!! Something went wrong",
              //   "/Investors_Terms"
              // );
              window.errorMessage(
                "OOps!!! Something went wrong ! Please try again or Contact support team.",
                "investorsignupmessage"
              );
            });
        }
      } else {
        window.showAlert("Please Login", "/Login");
      }
    }
  }

  validateNationality() {
    console.log("Into nationality company info----------->>>");
    let input = this.state.input;
    let errors = {};
    let isValid = true;

    if (window.isEmpty($("#nationalityform #investorNationality").val())) {
      isValid = false;
      errors["investorNationality"] = "Please select one Nationality";
      $("#investorNationality").focus();
    }
    this.setState({
      errors: errors,
    });

    return isValid;
  }

  render() {
    return (
      <body className="bg-white">
        <div className="row mb-5">
          <div className="col-md-1"></div>
          <div className="col-md-5 frambg">
            <div className="row" align="Left" style={{ paddingLeft: 70 }}>
              <h4 className="text-light" style={{ marginTop: 70 }}>
                <img src={MyntInvestLogo} style={{ width: 200 }} />
              </h4>
              <p className="text-white">
                <strong>Invest</strong> In The Best <strong>Startups</strong>
                <br />
                Raised Right From Their
                <br />
                <strong>Community</strong>
              </p>
              <a
                href="#"
                className="fa fa-google"
                style={{
                  fontSize: 20,
                  width: 30,
                  borderRadius: 50,
                  color: "white",
                }}
              ></a>
              <a
                href="#"
                className="fa fa-twitter"
                style={{
                  fontSize: 20,
                  width: 30,
                  borderRadius: 50,
                  color: "white",
                }}
              ></a>
              <a
                href="#"
                className="fa fa-instagram"
                style={{
                  fontSize: 20,
                  width: 30,
                  borderRadius: 50,
                  color: "white",
                }}
              ></a>
              <a
                href="#"
                className="fa fa-linkedin"
                style={{
                  fontSize: 20,
                  width: 30,
                  borderRadius: 50,
                  color: "white",
                }}
              ></a>
            </div>
            &nbsp;
            <div className={tilesClasses} align="center">
              <div className="col-sm-4">
                <h5 className="text-white" align="Right">
                  <strong>$700M+</strong>
                  <p
                    className="text-white"
                    align="Right"
                    style={{ fontSize: 9 }}
                  >
                    Invested Since 2022
                  </p>
                </h5>
              </div>

              <div className="col-sm-4">
                <h5 className="text-white">
                  <strong>1.5Million+</strong>
                  <p className="text-white" style={{ fontSize: 10 }}>
                    Members
                  </p>
                </h5>
              </div>

              <div className="col-sm-4">
                <h5 className="text-white" align="left">
                  <strong>600K+</strong>
                  <p className="text-white" style={{ fontSize: 10 }}>
                    Deals Done
                  </p>
                </h5>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <p
                  className="text-white"
                  style={{ paddingLeft: 70, fontSize: 20 }}
                >
                  Trusted By Hundreds
                  <br /> Of Companies
                </p>
              </div>
            </div>
            <div className={tilesClasses}>
              <div className="col-md-12">
                <div className="reveal-from-bottom" data-reveal-delay="600">
                  <ButtonGroup className="align-item-center">
                    <Button
                      tag="a"
                      className="text-white"
                      style={{
                        backgroundColor: "#000",
                        borderRadius: 5,
                        color: "grey",
                      }}
                      wideMobile
                      href=""
                    >
                      9UNICORNS
                    </Button>
                    <Button
                      tag="a"
                      color="primary"
                      style={{ backgroundColor: "white", color: "#000" }}
                      wideMobile
                      href=""
                    >
                      Better
                    </Button>
                    <Button
                      tag="a"
                      color="secondary"
                      style={{
                        backgroundColor: "#000",
                        borderRadius: 5,
                        color: "white",
                      }}
                      wideMobile
                      href=""
                    >
                      L I V W E L L
                    </Button>
                  </ButtonGroup>
                  <br />
                  <ButtonGroup>
                    <Button
                      tag="a"
                      color="primary"
                      style={{ backgroundColor: "#000", color: "white" }}
                      wideMobile
                      href=""
                    >
                      Microsoft
                    </Button>
                    <Button
                      tag="a"
                      color="primary"
                      style={{ backgroundColor: "#000", color: "white" }}
                      wideMobile
                      href=""
                    >
                      teradata
                    </Button>
                    <Button
                      tag="a"
                      color="primary"
                      style={{ backgroundColor: "#000", color: "white" }}
                      wideMobile
                      href=""
                    >
                      Google
                    </Button>
                  </ButtonGroup>

                  <br />
                  <br />
                  <br />
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 framrightbg">
            <form
              name="nationalityform"
              id="nationalityform"
              method="POST"
              className="row m-5 g-3"
            >
              <div className="col-12 text-left">
                <h3>Complete Sign Up Process</h3>
              </div>
              <div className="d-flex">
                <div className=" col-md-12 justify-content-center ">
                  <div className="row">
                    <input type="hidden" id="nationid" name="nationid" />
                    <label for="investorNationality" className="form-label">
                      <h3>Nationality</h3>
                    </label>
                    <p className="para">
                      Please select the option that best suits you
                    </p>
                    <select
                      className="form-control  "
                      id="investorNationality"
                      name="investorNationality"
                    >
                      <option value="">-- Select Country --</option>
                      <option value="AF">Afghanistan</option>
                      <option value="AX">Aland Islands</option>
                      <option value="AL">Albania</option>
                      <option value="DZ">Algeria</option>
                      <option value="AS">American Samoa</option>
                      <option value="AD">Andorra</option>
                      <option value="AO">Angola</option>
                      <option value="AI">Anguilla</option>
                      <option value="AQ">Antarctica</option>
                      <option value="AG">Antigua and Barbuda</option>
                      <option value="AR">Argentina</option>
                      <option value="AM">Armenia</option>
                      <option value="AW">Aruba</option>
                      <option value="AU">Australia</option>
                      <option value="AT">Austria</option>
                      <option value="AZ">Azerbaijan</option>
                      <option value="BS">Bahamas</option>
                      <option value="BH">Bahrain</option>
                      <option value="BD">Bangladesh</option>
                      <option value="BB">Barbados</option>
                      <option value="BY">Belarus</option>
                      <option value="BE">Belgium</option>
                      <option value="BZ">Belize</option>
                      <option value="BJ">Benin</option>
                      <option value="BM">Bermuda</option>
                      <option value="BT">Bhutan</option>
                      <option value="BO">Bolivia</option>
                      <option value="BQ">
                        Bonaire, Sint Eustatius and Saba
                      </option>
                      <option value="BA">Bosnia and Herzegovina</option>
                      <option value="BW">Botswana</option>
                      <option value="BV">Bouvet Island</option>
                      <option value="BR">Brazil</option>
                      <option value="IO">British Indian Ocean Territory</option>
                      <option value="BN">Brunei Darussalam</option>
                      <option value="BG">Bulgaria</option>
                      <option value="BF">Burkina Faso</option>
                      <option value="BI">Burundi</option>
                      <option value="KH">Cambodia</option>
                      <option value="CM">Cameroon</option>
                      <option value="CA">Canada</option>
                      <option value="CV">Cape Verde</option>
                      <option value="KY">Cayman Islands</option>
                      <option value="CF">Central African Republic</option>
                      <option value="TD">Chad</option>
                      <option value="CL">Chile</option>
                      <option value="CN">China</option>
                      <option value="CX">Christmas Island</option>
                      <option value="CC">Cocos (Keeling) Islands</option>
                      <option value="CO">Colombia</option>
                      <option value="KM">Comoros</option>
                      <option value="CG">Congo</option>
                      <option value="CD">
                        Congo, Democratic Republic of the Congo
                      </option>
                      <option value="CK">Cook Islands</option>
                      <option value="CR">Costa Rica</option>
                      <option value="CI">Cote D'Ivoire</option>
                      <option value="HR">Croatia</option>
                      <option value="CU">Cuba</option>
                      <option value="CW">Curacao</option>
                      <option value="CY">Cyprus</option>
                      <option value="CZ">Czech Republic</option>
                      <option value="DK">Denmark</option>
                      <option value="DJ">Djibouti</option>
                      <option value="DM">Dominica</option>
                      <option value="DO">Dominican Republic</option>
                      <option value="EC">Ecuador</option>
                      <option value="EG">Egypt</option>
                      <option value="SV">El Salvador</option>
                      <option value="GQ">Equatorial Guinea</option>
                      <option value="ER">Eritrea</option>
                      <option value="EE">Estonia</option>
                      <option value="ET">Ethiopia</option>
                      <option value="FK">Falkland Islands (Malvinas)</option>
                      <option value="FO">Faroe Islands</option>
                      <option value="FJ">Fiji</option>
                      <option value="FI">Finland</option>
                      <option value="FR">France</option>
                      <option value="GF">French Guiana</option>
                      <option value="PF">French Polynesia</option>
                      <option value="TF">French Southern Territories</option>
                      <option value="GA">Gabon</option>
                      <option value="GM">Gambia</option>
                      <option value="GE">Georgia</option>
                      <option value="DE">Germany</option>
                      <option value="GH">Ghana</option>
                      <option value="GI">Gibraltar</option>
                      <option value="GR">Greece</option>
                      <option value="GL">Greenland</option>
                      <option value="GD">Grenada</option>
                      <option value="GP">Guadeloupe</option>
                      <option value="GU">Guam</option>
                      <option value="GT">Guatemala</option>
                      <option value="GG">Guernsey</option>
                      <option value="GN">Guinea</option>
                      <option value="GW">Guinea-Bissau</option>
                      <option value="GY">Guyana</option>
                      <option value="HT">Haiti</option>
                      <option value="HM">
                        Heard Island and Mcdonald Islands
                      </option>
                      <option value="VA">Holy See (Vatican City State)</option>
                      <option value="HN">Honduras</option>
                      <option value="HK">Hong Kong</option>
                      <option value="HU">Hungary</option>
                      <option value="IS">Iceland</option>
                      <option value="IN">India</option>
                      <option value="ID">Indonesia</option>
                      <option value="IR">Iran, Islamic Republic of</option>
                      <option value="IQ">Iraq</option>
                      <option value="IE">Ireland</option>
                      <option value="IM">Isle of Man</option>
                      <option value="IL">Israel</option>
                      <option value="IT">Italy</option>
                      <option value="JM">Jamaica</option>
                      <option value="JP">Japan</option>
                      <option value="JE">Jersey</option>
                      <option value="JO">Jordan</option>
                      <option value="KZ">Kazakhstan</option>
                      <option value="KE">Kenya</option>
                      <option value="KI">Kiribati</option>
                      <option value="KP">
                        Korea, Democratic People's Republic of
                      </option>
                      <option value="KR">Korea, Republic of</option>
                      <option value="XK">Kosovo</option>
                      <option value="KW">Kuwait</option>
                      <option value="KG">Kyrgyzstan</option>
                      <option value="LA">
                        Lao People's Democratic Republic
                      </option>
                      <option value="LV">Latvia</option>
                      <option value="LB">Lebanon</option>
                      <option value="LS">Lesotho</option>
                      <option value="LR">Liberia</option>
                      <option value="LY">Libyan Arab Jamahiriya</option>
                      <option value="LI">Liechtenstein</option>
                      <option value="LT">Lithuania</option>
                      <option value="LU">Luxembourg</option>
                      <option value="MO">Macao</option>
                      <option value="MK">
                        Macedonia, the Former Yugoslav Republic of
                      </option>
                      <option value="MG">Madagascar</option>
                      <option value="MW">Malawi</option>
                      <option value="MY">Malaysia</option>
                      <option value="MV">Maldives</option>
                      <option value="ML">Mali</option>
                      <option value="MT">Malta</option>
                      <option value="MH">Marshall Islands</option>
                      <option value="MQ">Martinique</option>
                      <option value="MR">Mauritania</option>
                      <option value="MU">Mauritius</option>
                      <option value="YT">Mayotte</option>
                      <option value="MX">Mexico</option>
                      <option value="FM">
                        Micronesia, Federated States of
                      </option>
                      <option value="MD">Moldova, Republic of</option>
                      <option value="MC">Monaco</option>
                      <option value="MN">Mongolia</option>
                      <option value="ME">Montenegro</option>
                      <option value="MS">Montserrat</option>
                      <option value="MA">Morocco</option>
                      <option value="MZ">Mozambique</option>
                      <option value="MM">Myanmar</option>
                      <option value="NA">Namibia</option>
                      <option value="NR">Nauru</option>
                      <option value="NP">Nepal</option>
                      <option value="NL">Netherlands</option>
                      <option value="AN">Netherlands Antilles</option>
                      <option value="NC">New Caledonia</option>
                      <option value="NZ">New Zealand</option>
                      <option value="NI">Nicaragua</option>
                      <option value="NE">Niger</option>
                      <option value="NG">Nigeria</option>
                      <option value="NU">Niue</option>
                      <option value="NF">Norfolk Island</option>
                      <option value="MP">Northern Mariana Islands</option>
                      <option value="NO">Norway</option>
                      <option value="OM">Oman</option>
                      <option value="PK">Pakistan</option>
                      <option value="PW">Palau</option>
                      <option value="PS">
                        Palestinian Territory, Occupied
                      </option>
                      <option value="PA">Panama</option>
                      <option value="PG">Papua New Guinea</option>
                      <option value="PY">Paraguay</option>
                      <option value="PE">Peru</option>
                      <option value="PH">Philippines</option>
                      <option value="PN">Pitcairn</option>
                      <option value="PL">Poland</option>
                      <option value="PT">Portugal</option>
                      <option value="PR">Puerto Rico</option>
                      <option value="QA">Qatar</option>
                      <option value="RE">Reunion</option>
                      <option value="RO">Romania</option>
                      <option value="RU">Russian Federation</option>
                      <option value="RW">Rwanda</option>
                      <option value="BL">Saint Barthelemy</option>
                      <option value="SH">Saint Helena</option>
                      <option value="KN">Saint Kitts and Nevis</option>
                      <option value="LC">Saint Lucia</option>
                      <option value="MF">Saint Martin</option>
                      <option value="PM">Saint Pierre and Miquelon</option>
                      <option value="VC">
                        Saint Vincent and the Grenadines
                      </option>
                      <option value="WS">Samoa</option>
                      <option value="SM">San Marino</option>
                      <option value="ST">Sao Tome and Principe</option>
                      <option value="SA">Saudi Arabia</option>
                      <option value="SN">Senegal</option>
                      <option value="RS">Serbia</option>
                      <option value="CS">Serbia and Montenegro</option>
                      <option value="SC">Seychelles</option>
                      <option value="SL">Sierra Leone</option>
                      <option value="SG">Singapore</option>
                      <option value="SX">Sint Maarten</option>
                      <option value="SK">Slovakia</option>
                      <option value="SI">Slovenia</option>
                      <option value="SB">Solomon Islands</option>
                      <option value="SO">Somalia</option>
                      <option value="ZA">South Africa</option>
                      <option value="GS">
                        South Georgia and the South Sandwich Islands
                      </option>
                      <option value="SS">South Sudan</option>
                      <option value="ES">Spain</option>
                      <option value="LK">Sri Lanka</option>
                      <option value="SD">Sudan</option>
                      <option value="SR">Suriname</option>
                      <option value="SJ">Svalbard and Jan Mayen</option>
                      <option value="SZ">Swaziland</option>
                      <option value="SE">Sweden</option>
                      <option value="CH">Switzerland</option>
                      <option value="SY">Syrian Arab Republic</option>
                      <option value="TW">Taiwan, Province of China</option>
                      <option value="TJ">Tajikistan</option>
                      <option value="TZ">Tanzania, United Republic of</option>
                      <option value="TH">Thailand</option>
                      <option value="TL">Timor-Leste</option>
                      <option value="TG">Togo</option>
                      <option value="TK">Tokelau</option>
                      <option value="TO">Tonga</option>
                      <option value="TT">Trinidad and Tobago</option>
                      <option value="TN">Tunisia</option>
                      <option value="TR">Turkey</option>
                      <option value="TM">Turkmenistan</option>
                      <option value="TC">Turks and Caicos Islands</option>
                      <option value="TV">Tuvalu</option>
                      <option value="UG">Uganda</option>
                      <option value="UA">Ukraine</option>
                      <option value="AE">United Arab Emirates</option>
                      <option value="GB">United Kingdom</option>
                      <option value="US">United States</option>
                      <option value="UM">
                        United States Minor Outlying Islands
                      </option>
                      <option value="UY">Uruguay</option>
                      <option value="UZ">Uzbekistan</option>
                      <option value="VU">Vanuatu</option>
                      <option value="VE">Venezuela</option>
                      <option value="VN">Viet Nam</option>
                      <option value="VG">Virgin Islands, British</option>
                      <option value="VI">Virgin Islands, U.s.</option>
                      <option value="WF">Wallis and Futuna</option>
                      <option value="EH">Western Sahara</option>
                      <option value="YE">Yemen</option>
                      <option value="ZM">Zambia</option>
                      <option value="ZW">Zimbabwe</option>
                    </select>
                    <div
                      className="text-danger errors"
                      style={{ fontSize: 15 }}
                    >
                      {this.state.errors.investorNationality}
                    </div>
                    <br /> <br />
                    <p
                      className="font16 text-danger b"
                      id="investorsignupmessage"
                    ></p>
                    <button
                      type="button"
                      className="btn btn-dark btn-sm col-md-5"
                      onClick={this.saveNationality}
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </body>
    );
  }
}

export default Investor_Signup;
