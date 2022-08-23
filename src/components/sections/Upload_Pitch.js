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


 
class UploadPitch extends React.Component {
    constructor() {
      super();
      this.state = {
        pitchuploadAllDets: [],
        currentraise: null,
        currentraiseIndex: -1,
        input: {},
        errors: {},
        ID: null,
        MTUSER_ID: null,
        EMAIL: null,
        MODULE: null, 
        PITCH_UPLOAD_DOC: "",
        STATUS: "",
        COMMENTS: "",
        DESCRIPTION: "",
        CREATED_USER: "",
        CREATED_DATE: "",
        MODIFIED_USER: "",
        MODIFIED_DATE: "", 
      };
  
      this.saveUploadPitch = this.saveUploadPitch.bind(this);
      this.retrieveAllPitchUpload = this.retrieveAllPitchUpload.bind(this); 
    //   this.deleteUploadPitch=this.deleteUploadPitch.bind(this); 
    }

    componentDidMount() {
      this.retrieveAllPitchUpload();
    }
  
    retrieveAllPitchUpload() {
      var querySet = "/uploadpitch?EMAIL=" + sessionStorage.getItem("sessEmail");
      console.log(querySet);
      DataService.findByTitle(querySet)
        .then(response => {
          this.setState({
            pitchuploadAllDets: response.data, 
          });

         

        
  
           $.each(this.state.pitchuploadAllDets, function (index, value) {
  
          // if(index != 0){
          //   $("#teaminfoAddmem").click(); 
          // } 
   
          $("#uploadpitchform").find(".btnsubmit").html('');
          $("#uploadpitchform #uploadpitchid").attr("value", value.ID).val(value.ID); 
            console.log("value.PITCH_UPLOAD_DOC.length"+value.PITCH_UPLOAD_DOC.length)
           if(value.PITCH_UPLOAD_DOC.length > 0){
   
             $("#uploadpitchform").find(".uploadAreaUp").html("<p>Download file: <a class='text-primary' target='_blank' href="+window.mt_backend_url+value.PITCH_UPLOAD_DOC+">"+extractFilename(value.PITCH_UPLOAD_DOC)+"</a>&nbsp;&nbsp;<button  id='btnuploaddelete' type='button' data-attr="+value.ID+" class='btn btn-light'  '><i class='fa fa-trash'></i></button></p>")
             $("#uploadpitchform").find(".btnsubmit").html("");
             $("#btnuploaddelete").click(function(){

                var delquerySet = "/uploadpitch/" + Number($(this).attr("data-attr"));
                console.log(delquerySet);
        DataService.delete(querySet)
        .then(response => {
            window.showAlert("Deleted Successfully", "/Upload_Pitch");
        });
                 
            });
            }
 
            // else{
            // $("#uploadpitchform").find(".uploadAreaUp").html('<div class="form-group files"><input type="file"  className="form-control"  multiple  name="uploadpitchDoc" id="uploadpitchDoc" /></div>');
            // $("#uploadpitchform").find(".btnsubmit").html('');   
            // }
          
  
         }); 
  
        }) 
        .catch(e => {
          console.log(e);
        });
    }
  
  
   
   
    saveUploadPitch(event) {
      event.preventDefault();
      if (this.validateUploadPitch()) {
        if (!window.isEmpty(sessionStorage.getItem("sessEmail"))) {
             
          let uptchformData = new FormData();  
          uptchformData.append("ID",Number($("#uploadpitchform #uploadpitchid").val()));
          uptchformData.append("MTUSER_ID",$("#mtuser_id").val());
          uptchformData.append("EMAIL",$("#mtuser_email").val()); 
          uptchformData.append("MODULE",$("#mtuser_module").val()); 
          uptchformData.append("STATUS","Active");
          uptchformData.append("COMMENTS", "TEST");
          uptchformData.append("DESCRIPTION", "TEST");
          uptchformData.append("CREATED_USER", $("#mtuser_fname").val());
          uptchformData.append("CREATED_DATE", Moment(date).format("YYYY-MM-DD"));
          uptchformData.append("MODIFIED_USER", $("#mtuser_fname").val());
          uptchformData.append("MODIFIED_DATE", Moment(date).format("YYYY-MM-DD"));
           
       
          if (window.isEmpty($("#uploadpitchform #uploadpitchid").val())) {
            uptchformData.append("PITCH_UPLOAD_DOC", $("#uploadpitchform #uploadpitchDoc")[0].files[0],$("#uploadpitchform #uploadpitchDoc")[0].files[0].name);
            // rsformData.RAISE_UPLOAD_DOC = $("#Raiseform #rsuploadfile").files[0];
            // rsformData.RAISE_UPLOAD_DOC_NAME = $("#Raiseform #rsuploadfile").files[0].name;
           
          }
  
          console.log(uptchformData);
  
          if (window.isEmpty($("#uploadpitchform #uploadpitchid").val())) {
  
            UploadService.create("/uploadpitch", uptchformData)
              .then(response => {
                console.log("inside");
                window.showLoader();
                window.showAlert("Pitch Upload Document is submittted", "/Startup_Dashboard");
              })
              .catch(e => {
                window.showLoader();
                window.showAlert("OOps!!! Something went wrong", "/Upload_Pitch");
              });
  
          } else {
  
  
            UploadService.update("/uploadpitch/" + Number($("#uploadpitchform #uploadpitchid").val()), uptchformData)
              .then(response => {
                window.showLoader();
                window.showAlert("Pitch Upload Document is submittted", "/Startup_Dashboard");
              })
              .catch(e => {
                window.showLoader();
                window.showAlert("OOps!!! Something went wrong", "/Upload_Pitch");
              });
  
          }
  
  
          // });
  
  
  
        } else {
          window.showAlert("Please Login", "/Login");
        }
      }
  
    }
  
  
  
    validateUploadPitch() {
      console.log("inside validateUploadPitch validations")
       
      let errors = {};
      let isValid = true;
  
      if (!$("#uploadpitchDoc").get(0).files.length  > 0) {
        isValid = false;
        errors["uploadpitchDoc"] = "Please Upload Pitch";
        $("#uploadpitchDoc").focus();
      }
    
  
      this.setState({
        errors: errors
      });
  
      return isValid;
    }
  
    render() {
      
  
      return (
  
        <>
          <body className='bg-white' >
            <div className='container'>
  
              <div className='row' style={{ height: 'auto', marginTop: 100 }}>
                <div className='row'>
                  <div className="hero-content">
  
                  <nav className="navbar navbar-expand-sm bg-Secondary navbar-white " >
                            <div className="container-fluid"  >
                                  <ul className="navbar-nav" style={{fontSize:13}}> 
                                      <li className="nav-item">
                                          <NavLink to="/Startup_Dashboard" className="nav-link arrow-right" style={{color:"#B1B0AD"}}>&nbsp;Back to Dashboard</NavLink>
                                        </li>
                                  
                                    </ul>
                              </div>
                            </nav>


                    <div className='container'>
                      <form name="uploadpitchform" id="uploadpitchform" method="POST" className="row m-5 g-3"  >
  
  
                        <div className='row' style={{ height: 'auto' }}>
                          <div className='col-md-12'>
                            <h1>Pitch</h1>
                             <h4>Upload Pitch Deck</h4>
                            {/* <p className="font20">
                              <b>Upload Pitch Deck</b></p> */}
                            <div className="row m-1">
                            <div className="col-md-8 mb-3" >
                                    <label className="form-label">Upload your Pitch<span className='maroon'>*</span></label>
                                    <br />
                                    <small className='font12 text-secondary'>Max. Size: 10MB</small>
                                    <input type="hidden" id="uploadpitchid" name="uploadpitchid"/>
                                          <div className='uploadAreaUp mt-2'>
                                          <div class="form-group files"> 
                                                    <input type="file" id="uploadpitchDoc" name="uploadpitchDoc" class="form-control" multiple=""/>
                                            </div>
                                    </div>  
                                    <div className="text-danger errors" style={{ fontSize: 15 }}>{this.state.errors.uploadpitchDoc}</div>
                               
                                  </div>
                                  </div>
                          </div>
                        </div>
  
                        <div className="col-md-6 ">
                                           <div className="row  m-1 btnsubmit">
    {/* <div className="col-md-3 mb-3" > */}
    {/* <button type="button" className="btn btn-outline-secondary btn-sm w-100" data-attr-id="teamInfoDivisionIter" id="teaminfoAddmem">Add Members</button> */}
      {/* </div> */}
      {/* <div className="col-md-3 mb-3 text-right" > */}
    
      {/* </div> */}
      <button type="button" class="btn btn-success btn-sm col-md-4"  onClick={this.saveUploadPitch}>Submit</button>
  
  
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
  
  
  
  
  
  export default UploadPitch;