import React from 'react';
import '../Css/styles.css';
import { NavLink, Link } from "react-router-dom";
import Image from '../elements/Image';
import 'bootstrap/dist/css/bootstrap.min.css';
import DataService from '../../service/DataService';
import UploadService from "../../service/file-upload.service";
import Moment from 'moment';
import $ from "jquery";
const current = new Date();
const date = `${current.getFullYear()}-${current.getMonth() + 1}-${current.getDate()}`;//mysql insert date format
const formatDate = Moment("12/09/2002").format('YYYY-MM-DD')//2002-12-09
const extractFilename = (path) => {
  const pathArray = path.split("/");
  const lastIndex = pathArray.length - 1;
  return pathArray[lastIndex];
};

class Raise extends React.Component {
  constructor() {
    super();
    this.state = {
      raiseAllDets: [],
      currentraise: null,
      currentraiseIndex: -1,
      input: {},
      errors: {},
      ID: null,
      MTUSER_ID: null,
      EMAIL: null,
      MODULE: null,
      RAISE_NAME: "",
      RAISE_EMAIL: "",
      RAISE_PHONENO:"",
      RAISE_FOUNDER_URL1: "",
      RAISE_FOUNDER_URL2: "",
      RAISE_COMPANY_NAME: "",
      RAISE_COM_LINKPAGE: "",
      RAISE_WEBSITE: "",
      RAISE_FUNDRAISING: "",
      RAISE_PROD_DESC: "",
      RAISE_TRACTION: "",
      RAISE_REVENUE: "",
      RAISE_TEAM: "",
      RAISE_COMROUND: "",
      RAISE_MTRIGHTS: "",
      RAISE_EXIST_COM: "",
      RAISE_PRIVATEROUND: "",
      RAISE_UPLOAD_DOC: "",
      STATUS: "",
      COMMENTS: "",
      DESCRIPTION: "",
      CREATED_USER: "",
      CREATED_DATE: "",
      MODIFIED_USER: "",
      MODIFIED_DATE: "",
      RAISE_UPLOAD_DOC_NAME: "",
      fileInfos: [],
    };

    this.saveRaise = this.saveRaise.bind(this);
    this.retrieveAllRaise = this.retrieveAllRaise.bind(this);
    this.setActiveRaise = this.setActiveRaise.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(event) {
    event.preventDefault();
    let input = this.state.input;
    input[event.target.name] = event.target.value;
   
    this.setState({ 
       input
    });




  }
  componentDidMount() {
    this.retrieveAllRaise();
  }

  retrieveAllRaise() {
    var querySet = "/raise?EMAIL=" + sessionStorage.getItem("sessEmail");
    console.log(querySet);
    DataService.findByTitle(querySet)
      .then(response => {
        this.setState({
          raiseAllDets: response.data,
          fileInfos: response.data,
        });

         $.each(this.state.raiseAllDets, function (index, value) {

        // if(index != 0){
        //   $("#teaminfoAddmem").click(); 
        // } 

        console.log(value.RAISE_UPLOAD_DOC)

        $("#Raiseform #raiseid").attr("value", value.ID).val(value.ID);
        $("#Raiseform #rsName").attr("value", value.RAISE_NAME).val(value.RAISE_NAME);
        $("#Raiseform #rsemail").attr("value", value.RAISE_EMAIL).val(value.RAISE_EMAIL);
        $("#Raiseform #rsphone").attr("value", value.RAISE_PHONENO).val(value.RAISE_PHONENO);
       
        $("#Raiseform #rsfounderurl1").attr("value", value.RAISE_FOUNDER_URL1).val(value.RAISE_FOUNDER_URL1);
        $("#Raiseform #rsfounderurl2").attr("value", value.RAISE_FOUNDER_URL2).val(value.RAISE_FOUNDER_URL2);
        $("#Raiseform #rsRegCompanyname").attr("value", value.RAISE_COMPANY_NAME).val(value.RAISE_COMPANY_NAME);
        $("#Raiseform #rscomLinkpage").attr("value", value.RAISE_COM_LINKPAGE).val(value.RAISE_COM_LINKPAGE);
        $("#Raiseform #rswebsite").attr("value", value.RAISE_WEBSITE).val(value.RAISE_WEBSITE);
        $("#Raiseform #rsfundraisingrd").attr("value", value.RAISE_FUNDRAISING).val(value.RAISE_FUNDRAISING);
        $("#Raiseform #rsproductdesc").attr("value", value.RAISE_PROD_DESC).val(value.RAISE_PROD_DESC);
        $("#Raiseform #rstraction").attr("value", value.RAISE_TRACTION).val(value.RAISE_TRACTION);
        $("#Raiseform #rsrevenue").attr("value", value.RAISE_REVENUE).val(value.RAISE_REVENUE);
        $("#Raiseform #rsteam").attr("value", value.RAISE_TEAM).val(value.RAISE_TEAM);
        $("#Raiseform #rscommround").attr("value", value.RAISE_COMROUND).val(value.RAISE_COMROUND);
        $("#Raiseform #rsmtrights").attr("value", value.RAISE_MTRIGHTS).val(value.RAISE_MTRIGHTS);
        $("#Raiseform #rsexistingcomm").attr("value", value.RAISE_EXIST_COM).val(value.RAISE_EXIST_COM);
        // $("#Raiseform #rsprivateround").attr("value", value.RAISE_PRIVATEROUND).val(value.RAISE_PRIVATEROUND);
        
        if(value.RAISE_PRIVATEROUND == "Yes"){
          $("#btnrsprivateroundyes").click();
        }else{
          $("#btnrsprivateroundno").click();
        }

         
         //uploadAreaRaise
         if(value.RAISE_UPLOAD_DOC.length > 0){
 
           $("#Raiseform").find(".uploadAreaRaise").html("<p>Download file: <a class='text-primary' target='_blank' href="+window.mt_backend_url+value.RAISE_UPLOAD_DOC+">"+extractFilename(value.RAISE_UPLOAD_DOC)+"</a></p>")
         }else{
          $("#Raiseform").find(".uploadAreaRaise").html(' <div class="form-group files"> <input type="file"    className="form-control"  multiple  name="rsuploadfile" id="rsuploadfile" /></div>');
         }
        


        // $("#Raiseform #rsuploadfile").attr("value",response.data.TEAM_BIO).val(response.data.TEAM_BIO);
        // $($(".imagePreview")[index]).css("background-image","url("+window.mt_backend_url+response.data.PROFILE_PIC+")");
        // $($("#TeamInfoform #tmuploadprofile")[index]).closest("label").css("visibility","hidden");
        }); 

      })
      .then((files) => {
        this.setState({
          fileInfos: files.data,
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  setActiveRaise(raiseAllDets, index) {
    this.setState({
      currentraise: raiseAllDets,
      currentraiseIndex: index,
      // tfcurrentFile:this.state.tfcurrentFile
    });
  }



 
  saveRaise(event) {
    event.preventDefault();
    if (this.validateRaise()) {
      if (!window.isEmpty(sessionStorage.getItem("sessEmail"))) {
           
        let rsformData = new FormData();  
        rsformData.append("ID",Number($("#Raiseform #raiseid").val()));
        rsformData.append("MTUSER_ID",$("#mtuser_id").val());
        rsformData.append("EMAIL",$("#mtuser_email").val()); 
        rsformData.append("MODULE",$("#mtuser_module").val());
        rsformData.append("RAISE_NAME",$("#Raiseform #rsName").val());
        rsformData.append("RAISE_EMAIL",$("#Raiseform #rsemail").val());
        rsformData.append("RAISE_PHONENO",$("#Raiseform #rsphone").val());
        rsformData.append("RAISE_FOUNDER_URL1",$("#Raiseform #rsfounderurl1").val());
        rsformData.append("RAISE_FOUNDER_URL2",$("#Raiseform #rsfounderurl2").val());
        rsformData.append("RAISE_COMPANY_NAME",$("#Raiseform #rsRegCompanyname").val());
        rsformData.append("RAISE_COM_LINKPAGE",$("#Raiseform #rscomLinkpage").val());
        rsformData.append("RAISE_WEBSITE",$("#Raiseform #rswebsite").val()); 
        rsformData.append("RAISE_FUNDRAISING",$("#Raiseform #rsfundraisingrd").val()); 
        rsformData.append("RAISE_PROD_DESC",$("#Raiseform #rsproductdesc").val());
        rsformData.append("RAISE_TRACTION",$("#Raiseform #rstraction").val());
        rsformData.append("RAISE_REVENUE",$("#Raiseform #rsrevenue").val());
        rsformData.append("RAISE_TEAM",$("#Raiseform #rsteam").val());
        rsformData.append("RAISE_COMROUND", $("#Raiseform #rscommround").val());
        rsformData.append("RAISE_MTRIGHTS", $("#Raiseform #rsmtrights").val());
        rsformData.append("RAISE_EXIST_COM", $("#Raiseform #rsexistingcomm").val());
        rsformData.append("RAISE_PRIVATEROUND",$("#Raiseform").find("input[name=rsprivateround]:checked").val());  
        rsformData.append("STATUS","Dormant");
        rsformData.append("COMMENTS", "TEST");
        rsformData.append("DESCRIPTION", "TEST");
        rsformData.append("CREATED_USER", $("#mtuser_fname").val());
        rsformData.append("CREATED_DATE", Moment(date).format("YYYY-MM-DD"));
        rsformData.append("MODIFIED_USER", $("#mtuser_fname").val());
        rsformData.append("MODIFIED_DATE", Moment(date).format("YYYY-MM-DD"));
         
     
        if (window.isEmpty($("#Raiseform #raiseid").val())) {
          rsformData.append("RAISE_UPLOAD_DOC", $("#Raiseform #rsuploadfile")[0].files[0],$("#Raiseform #rsuploadfile")[0].files[0].name);
          // rsformData.RAISE_UPLOAD_DOC = $("#Raiseform #rsuploadfile").files[0];
          // rsformData.RAISE_UPLOAD_DOC_NAME = $("#Raiseform #rsuploadfile").files[0].name;
         
        }

        console.log(rsformData);

        if (window.isEmpty($("#Raiseform #raiseid").val())) {

          UploadService.create("/raise", rsformData)
            .then(response => {
              console.log("inside");
              window.showLoader();
              window.showAlert("Application is submittted", "/Founders");
            })
            .catch(e => {
              window.showLoader();
              window.showAlert("OOps!!! Something went wrong", "/Raise");
            });

        } else {


          UploadService.update("/raise/" + Number($("#Raiseform #raiseid").val()), rsformData)
            .then(response => {
              window.showLoader();
              window.showAlert("Application is submittted", "/Founders");
            })
            .catch(e => {
              window.showLoader();
              window.showAlert("OOps!!! Something went wrong", "/Raise");
            });

        }


        // });



      } else {
        window.showAlert("Please Login", "/Login");
      }
    }

  }



  validateRaise() {
    console.log("inside Raise validations")
    let input = this.state.input;
    let errors = {};
    let isValid = true;

    if (window.isEmpty($("#Raiseform #rsName").val())) {
      isValid = false;
      errors["rsName"] = "Please enter your name.";
      $("#rsName").focus();
    }
 
    if (window.isEmpty($("#Raiseform #rsemail").val())) {
      isValid = false;
      errors["rsemail"] = "Please enter your Company email Address.";
      $("#rsemail").focus();
    }


    if (window.isEmpty($("#Raiseform #rsphone").val())) {
      isValid = false;
      errors["rsphone"] = "Please enter your Phone number.";
      $("#rsphone").focus();
    }


    if (window.isEmpty($("#Raiseform #rsfounderurl1").val())) {
      isValid = false;
      errors["rsfounderurl1"] = "Please enter your Founder's LinkedIn URL 1.";
      $("#rsfounderurl1").focus();
    }


    if (window.isEmpty($("#Raiseform #rsRegCompanyname").val())) {
      isValid = false;
      errors["rsRegCompanyname"] = "Please enter your Registered Company Name.";
      $("#rsRegCompanyname").focus();
    }


    if (window.isEmpty($("#Raiseform #rscomLinkpage").val())) {
      isValid = false;
      errors["rscomLinkpage"] = "Please enter your Company's LinkedIn Page.";
      $("#rscomLinkpage").focus();
    }


    if (window.isEmpty($("#Raiseform #rswebsite").val())) {
      isValid = false;
      errors["rswebsite"] = "Please enter your Company Website.";
      $("#rswebsite").focus();
    }


    if (window.isEmpty($("#Raiseform #rsfundraisingrd").val())) {
      isValid = false;
      errors["rsfundraisingrd"] = "Please Describe your previous fundraising rounds.";
      $("#rsfundraisingrd").focus();
    }

    if (window.isEmpty($("#Raiseform #rsproductdesc").val())) {
      isValid = false;
      errors["rsproductdesc"] = "Please Describe your product.";
        $("#rsproductdesc").focus();
    }


    if (window.isEmpty($("#Raiseform #rstraction").val())) {
      isValid = false;
      errors["rstraction"] = "Please Describe the traction.";
      $("#rstraction").focus();
    }

    if (window.isEmpty($("#Raiseform #rsrevenue").val())) {
      isValid = false;
      errors["rsrevenue"] = "Please Describe the revenue you are making.";
      $("#rsrevenue").focus();
    }


    if (window.isEmpty($("#Raiseform #rsteam").val())) {
      isValid = false;
      errors["rsteam"] = "Please enter your Current Team Size.";
      $("#rsteam").focus();
    }


    if (window.isEmpty($("#Raiseform #rscommround").val())) {
      isValid = false;
      errors["rscommround"] = "Please enter Why do you want to raise a Community round";
      $("#rsName").focus();
    }

    if (window.isEmpty($("#Raiseform #rsmtrights").val())) {
      isValid = false;
      errors["rsmtrights"] = "Please enter What makes you think Myntinvest is the right fit for you";
      $("#rsmtrights").focus();
    }


    if (window.isEmpty($("#Raiseform #rsexistingcomm").val())) {
      isValid = false;
      errors["rsexistingcomm"] = "Please enter Do you have any existing commitments";
      $("#rsexistingcomm").focus();
    }

    if (!(document.getElementById("rsprivateroundyes").checked || document.getElementById("rsprivateroundno").checked )) {
      isValid = false;
      errors["rsprivateround"] = "Please select any one option for Would you be interested in raising a Private Round";
      $("#rsprivateround").focus();
    }

 

    this.setState({
      errors: errors
    });

    return isValid;
  }

  render() {
    const {fileInfos, currentraise, currentraiseIndex } = this.state;

    return (

      <>
        <body className='bg-white' >
          <div className='container'>

            <div className='row' style={{ height: 'auto',   }}>
              <div className='row'>
                <div className="hero-content"> 
                  <div className='container'>
                    <form name="Raiseform" id="Raiseform" method="POST" className="row m-5 g-3"  >


                      <div className='row' style={{ height: 'auto' }}>
                        <div className='col-md-12'>
                          <h1>Raise with Myntinvest</h1>
                          <p className="font20">
                            <b>Tell us a little about your company.
                              This will help us understand your business better.</b></p>
                          <div className="row m-1">
                            <ul className="nav nav-tabs">
                              <li className="nav-item">
                                <a className="para" data-bs-toggle="tab" href="#raisecapital">
                                  <b className='lightTxt '>Application</b></a>
                              </li>

                            </ul>

                            <div className="tab-content">
                              <div className="tab-pane container active" id="raisecapital">
                                {/* <p className='para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt libero vel elementum at cum tupis eget. Viverra ultrices lacus, lectus volutpat sociis vitae mauris<br/>porta faugiat. Nec, vitae facilisi elementum eu est vel quis platea. Diam pharetra nec malesuada mi purus erat.</p> */}
                                <div className="col-md-6 mb-3 mt-3">
                                  <label for="rsName" className="form-label">Your Name<span className='maroon'>*</span></label>
                                  <input
                                    name="raiseid"
                                    id="raiseid"
                                    type="hidden"
                                  />
                                  <input name="rsName"
                                    value={this.state.input.rsName}
                                    onChange={this.handleChange}
                                    type="text"
                                    className="form-control"
                                    maxlength="150"
                                    placeholder="Enter Your Name"
                                    id="rsName"
                                  />
                                  <div className="text-danger errors" style={{ fontSize: 15 }}>{this.state.errors.rsName}</div>

                                </div>
                                <div className="col-md-6 mb-3">
                                  <label for="rsemail" className="form-label">Company Email<span className='maroon'>*</span></label>
                                  <input
                                    name="rsemail"
                                    value={this.state.input.rsemail}
                                    onChange={this.handleChange}
                                    type="text"
                                    className="form-control"
                                    maxlength="150"
                                    placeholder="Enter Your Company Email"
                                    id="rsemail"
                                  />
                                  <div className="text-danger errors" style={{ fontSize: 15 }}>{this.state.errors.rsemail}</div>
                                </div>


                                <div className="col-md-6 mb-3">
                                  <label for="rsphone" className="form-label">Phone Number<span className='maroon'>*</span></label>
                                  <input
                                    name="rsphone"
                                    value={this.state.input.rsphone}
                                    onChange={this.handleChange}
                                    type="text"
                                    className="form-control"
                                    maxlength="15"
                                    placeholder="Enter Your Phone number"
                                    id="rsphone"
                                  />
                                  <div className="text-danger errors" style={{ fontSize: 15 }}>{this.state.errors.rsphone}</div>
                                </div>



                                <div className="col-md-6 mb-3"  >
                                  <label for="rsfounderurl1" className="form-label">Founder's LinkedIn URL<span className='maroon'>*</span></label>

                                  <input
                                    name="rsfounderurl1"
                                    value={this.state.input.rsfounderurl1}
                                    onChange={this.handleChange}
                                    type="text"
                                    className="form-control url_link"
                                    maxlength="250"
                                    placeholder="Founder's LinkedIn URL 1"
                                    id='rsfounderurl1'
                                  />
                                  <div className="text-danger errors" style={{ fontSize: 15 }}>{this.state.errors.rsfounderurl1}</div>
                                </div>


                                <div className="col-md-6 mb-3"  >
                                  <label for="rsfounderurl2" className="form-label">Founder's LinkedIn URL<span className='maroon'>*</span></label>

                                  <input
                                    name="rsfounderurl2"
                                    value={this.state.input.rsfounderurl2}
                                    onChange={this.handleChange}
                                    type="text"
                                    className="form-control  url_link"
                                    maxlength="250"
                                    placeholder="Founder's LinkedIn URL 2"
                                    id='rsfounderurl2'
                                  />
                                  <div className="text-danger errors" style={{ fontSize: 15 }}>{this.state.errors.rsfounderurl2}</div>
                                </div>

                                <div className="col-md-6 mb-3"  >
                                  <label for="rsRegCompanyname" className="form-label">Registered Company Name</label>
                                  <input
                                    name='rsRegCompanyname'
                                    value={this.state.input.rsRegCompanyname}
                                    onChange={this.handleChange}
                                    type="text"
                                    className="form-control "
                                    maxlength="250"
                                    placeholder="Enter Your company's registered name"
                                    id='rsRegCompanyname'
                                  />
                                  <div className="text-danger errors" style={{ fontSize: 15 }}>{this.state.errors.rsRegCompanyname}</div>
                                </div>

                                <div className="col-md-6 mb-3" >
                                  <label for="rscomLinkpage" className="form-label">Company's LinkedIn Page<span className='maroon'>*</span></label>
                                  <input
                                    name='rscomLinkpage'
                                    value={this.state.input.rscomLinkpage}
                                    onChange={this.handleChange}
                                    type="text"
                                    className="form-control"
                                    maxlength="250"
                                    placeholder="Enter Your Company's LinkedIn Page"
                                    id='rscomLinkpage' />
                                  <div className="text-danger errors" style={{ fontSize: 15 }}>{this.state.errors.rscomLinkpage}</div>
                                </div>


                                <div className="col-md-6 mb-3" >
                                  <label for="rswebsite" className="form-label">Website<span className='maroon'>*</span></label>
                                  <input
                                    name='rswebsite'
                                    value={this.state.input.rswebsite}
                                    onChange={this.handleChange}
                                    type="text"
                                    className="form-control"
                                    maxlength="250"
                                    placeholder="Enter Your Company's website URL"
                                    id='rswebsite' />
                                  <div className="text-danger errors" style={{ fontSize: 15 }}>{this.state.errors.rswebsite}</div>
                                </div>


                                <div className="col-md-6 mb-3" >
                                  <label for="rsfundraisingrd" className="form-label">Describe your previous fundraising rounds<span className='maroon'>*</span></label>
                                  <textarea rows="5"
                                    name='rsfundraisingrd'
                                    value={this.state.input.rsfundraisingrd}
                                    onChange={this.handleChange}
                                    type="text"
                                    className="form-control"
                                    maxlength="500"
                                    id='rsfundraisingrd'></textarea>
                                  <div className="text-danger errors" style={{ fontSize: 15 }}>{this.state.errors.rsfundraisingrd}</div>
                                </div>



                                <div className="col-md-6 mb-3" >
                                  <label for="rsproductdesc" className="form-label">Describe your product<span className='maroon'>*</span></label>
                                  <textarea rows="5"
                                    name='rsproductdesc'
                                    value={this.state.input.rsproductdesc}
                                    onChange={this.handleChange}
                                    type="text"
                                    className="form-control"
                                    maxlength="500"
                                    id='rsproductdesc'></textarea>
                                  <div className="text-danger errors" style={{ fontSize: 15 }}>{this.state.errors.rsproductdesc}</div>
                                </div>




                                <div className="col-md-6 mb-3" >
                                  <label for="rstraction" className="form-label">Describe the traction<span className='maroon'>*</span></label>
                                  <textarea rows="5"
                                    name='rstraction'
                                    value={this.state.input.rstraction}
                                    onChange={this.handleChange}
                                    type="text"
                                    className="form-control"
                                    maxlength="500"
                                    id='rstraction'></textarea>
                                  <div className="text-danger errors" style={{ fontSize: 15 }}>{this.state.errors.rstraction}</div>
                                </div>



                                <div className="col-md-6 mb-3" >
                                  <label for="rsrevenue" className="form-label">Describe the revenue you are making<span className='maroon'>*</span></label>
                                  <textarea rows="5"
                                    name='rsrevenue'
                                    value={this.state.input.rsrevenue}
                                    onChange={this.handleChange}
                                    type="text"
                                    className="form-control"
                                    maxlength="500"
                                    id='rsrevenue'></textarea>
                                  <div className="text-danger errors" style={{ fontSize: 15 }}>{this.state.errors.rsrevenue}</div>
                                </div>


                                <div className="col-md-6 mb-3" >
                                  <label for="rsteam" className="form-label">How big is the team?<span className='maroon'>*</span></label>
                                  <textarea rows="5"
                                    name='rsteam'
                                    value={this.state.input.rsteam}
                                    onChange={this.handleChange}
                                    type="text"
                                    className="form-control"
                                    maxlength="500"
                                    id='rsteam'></textarea>
                                  <div className="text-danger errors" style={{ fontSize: 15 }}>{this.state.errors.rsteam}</div>
                                </div>


                                <div className="col-md-6 mb-3" >
                                  <label for="rscommround" className="form-label">Why do you want to raise a Community round?<span className='maroon'>*</span></label>
                                  <textarea rows="5"
                                    name='rscommround'
                                    value={this.state.input.rscommround}
                                    onChange={this.handleChange}
                                    type="text"
                                    className="form-control"
                                    maxlength="500"
                                    id='rscommround'></textarea>
                                  <div className="text-danger errors" style={{ fontSize: 15 }}>{this.state.errors.rscommround}</div>
                                </div>


                                <div className="col-md-6 mb-3" >
                                  <label for="rsmtrights" className="form-label">What makes you think Myntinvest is the right fit for you?<span className='maroon'>*</span></label>
                                  <textarea rows="5"
                                    name='rsmtrights'
                                    value={this.state.input.rsmtrights}
                                    onChange={this.handleChange}
                                    type="text"
                                    className="form-control"
                                    maxlength="500"
                                    id='rsmtrights'></textarea>
                                  <div className="text-danger errors" style={{ fontSize: 15 }}>{this.state.errors.rsmtrights}</div>
                                </div>



                                <div className="col-md-6 mb-3" >
                                  <label for="rsexistingcomm" className="form-label">Do you have any existing commitments?<span className='maroon'>*</span></label>
                                  <textarea rows="5"
                                    name='rsexistingcomm'
                                    value={this.state.input.rsexistingcomm}
                                    onChange={this.handleChange}
                                    type="text"
                                    className="form-control"
                                    maxlength="500"
                                    id='rsexistingcomm'></textarea>
                                  <div className="text-danger errors" style={{ fontSize: 15 }}>{this.state.errors.rsexistingcomm}</div>
                                </div>

                                <div className="col-md-6 mb-3" >
                                  <label for="rsprivateround" className="form-label">Would you be interested in raising a Private Round?<span className='maroon'>*</span></label>
                                  <div className='row'>
                                    <div className="col-md" ><input type="radio" name="rsprivateround" id="rsprivateroundyes" style={{ visibility: "hidden" }} />
                                      <button type="button" name="btnrsprivateround" id="btnrsprivateroundyes" className='btn btn-light w-100'>Yes</button>
                                    </div>
                                    <div className="col-md" ><input type="radio" name="rsprivateround" id="rsprivateroundno" style={{ visibility: "hidden" }} />
                                      <button type="button" name="btnrsprivateround" id="btnrsprivateroundno" className='btn btn-light w-100'>No</button>
                                    </div>
                                    {/* $("input[name=rsprivateround]:checked").val(); */}

                                    <div className="text-danger errors" style={{ fontSize: 15 }}>{this.state.errors.rsprivateround}</div>
                         

                                  </div>
                                </div>



                                <div className="col-md-6 mb-3" >
                                  <label for="rsuploadfile" className="form-label">Upload your Pitch<span className='maroon'>*</span></label>
                                  <br />
                                  <small className='font12 text-secondary'>Max. Size: 10MB</small>
                                        <div className='uploadAreaRaise'>
                                        <div class="form-group files"> <input type="file"    className="form-control"  multiple  name="rsuploadfile" id="rsuploadfile" /></div>
                                  </div>


                                    
                                </div>
                                <div className="text-danger errors" style={{ fontSize: 15 }}>{this.state.errors.rsuploadfile}</div>
                   
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6 ">
                                         <div className="row ">
  {/* <div className="col-md-3 mb-3" > */}
  {/* <button type="button" className="btn btn-outline-secondary btn-sm w-100" data-attr-id="teamInfoDivisionIter" id="teaminfoAddmem">Add Members</button> */}
    {/* </div> */}
    {/* <div className="col-md-3 mb-3 text-right" > */}
  <button type="button" className="btn btn-success btn-sm col-md-4"  onClick={this.saveRaise}>Submit</button>
    {/* </div> */}


  </div>
                                         </div>

                    </form>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </body>
      </>

    );
  }
}





export default Raise;