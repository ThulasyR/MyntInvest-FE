import React, {Component} from "react"; 
import Button from '../elements/Button'; 
import Image from "../elements/Image"; 
import '../Css/styles.css';
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import ButtonGroup from "../elements/ButtonGroup"; 
import {NavLink,Link} from "react-router-dom"; 
import DataService from '../../service/DataService'; 
import UploadService from "../../service/file-upload.service";
import Moment from 'moment';
import $ from "jquery";
const current = new Date();
const date = `${current.getFullYear()}-${current.getMonth()+1}-${current.getDate()}`;//mysql insert date format
const formatDate = Moment("12/09/2002").format('YYYY-MM-DD')//2002-12-09




const extractFilename = (path) => {
  const pathArray = path.split("/");
  const lastIndex = pathArray.length - 1;
  return pathArray[lastIndex];
};
class Campaign_Press extends React.Component {
    constructor() {
    super();
    this.state = {
      campressAllDets: [],
      currentcampress: null,
      currentcampressIndex: -1,
      input: {},
      errors: {},
      ID:null,
      MTUSER_ID:null,
      EMAIL:null,
      MODULE:null,
      CAMP_PRESS_HEADER:"",
      CAMP_PRESS_BODY:"",
      CAMP_PRESS_IMAGE:"",
      CAMP_PRESS_VIDEO:"", 
      STATUS:"",
      COMMENTS:"",
      DESCRIPTION:"",
      CREATED_USER:"",
      CREATED_DATE:"",
      MODIFIED_USER:"",
      MODIFIED_DATE:"", 
    };
     
    this.saveCampPress = this.saveCampPress.bind(this);  
    this.retrieveAllCamPress = this.retrieveAllCamPress.bind(this);
    this.setActiveCamPress = this.setActiveCamPress.bind(this);
  }
    
  
  
  componentDidMount() {
    this.retrieveAllCamPress(); 
  }


  retrieveAllCamPress() {
    // var sessionCampaign = sessionStorage.getItem("sessionCampaign");
    // console.log("sessionCampaign"+sessionCampaign)

    var querySet = "/campress?EMAIL=" + sessionStorage.getItem("sessEmail");
    console.log(querySet);
    DataService.findByTitle(querySet)
      .then(response => {
        this.setState({
          campressAllDets: response.data, 
        });

         $.each(this.state.campressAllDets, function (index, value) {
  
   

        $("#CampPressform #campressid").attr("value", value.ID).val(value.ID);
        $("#CampPressform #campressheader").attr("value", value.CAMP_PRESS_HEADER).val(value.CAMP_PRESS_HEADER);
        $("#CampPressform").find("label[for=campressbody]").closest("div").find("div").find("span:eq(2)").text(value.CAMP_PRESS_BODY);
        // $($(".imagePreview")[index]).css("background-image","url("+window.mt_backend_url+value.PROFILE_PIC+")");
        // $($("#TeamInfoform #tmuploadprofile")[index]).closest("label").css("visibility","hidden");
        $("#CampPressform #campressimage").closest(".imgUp").find('.imagePreview').css("background-image", "url("+window.mt_backend_url+value.CAMP_PRESS_IMAGE+")");
        $("#CampPressform #campressimage").closest("label").css("visibility","hidden");
       //uploadAreaRaise
         if(value.CAMP_PRESS_VIDEO.length > 0){ 
          $("#CampPressform #campressvideo").closest("div").html("<p>Download file: <a class='text-primary' target='_blank' href="+window.mt_backend_url+value.CAMP_PRESS_VIDEO+">"+extractFilename(value.CAMP_PRESS_VIDEO)+"</a></p>");
        }else{
          $("#CampPressform #campressvideo").closest("div").html('<input type="file" id="campressvideo" name="campressvideo" className="form-control"  multiple />');
        }
        


        // $("#Raiseform #rsuploadfile").attr("value",response.data.TEAM_BIO).val(response.data.TEAM_BIO);
        // $($(".imagePreview")[index]).css("background-image","url("+window.mt_backend_url+response.data.PROFILE_PIC+")");
        // $($("#TeamInfoform #tmuploadprofile")[index]).closest("label").css("visibility","hidden");
        }); 

      })
      .catch(e => {
        console.log(e);
      });
  }


  setActiveCamPress(campressAllDets, index) {
    this.setState({
      currentcampress: campressAllDets,
      currentcampressIndex: index,
      // tfcurrentFile:this.state.tfcurrentFile
    });
  }


  saveCampPress(event) {
    event.preventDefault();
    if (this.validateCampPress()) {
      if (!window.isEmpty(sessionStorage.getItem("sessEmail"))) {
           
        let camppressformData = new FormData();  
        camppressformData.append("ID",Number($("#CampPressform #campressid").val()));
        camppressformData.append("MTUSER_ID",$("#mtuser_id").val());
        camppressformData.append("EMAIL",$("#mtuser_email").val()); 
        camppressformData.append("MODULE",sessionStorage.getItem("sessionCampaign"));
        camppressformData.append("CAMP_PRESS_HEADER",$("#CampPressform #campressheader").val());
        camppressformData.append("CAMP_PRESS_BODY",$("#CampPressform").find("label[for=campressbody]").closest("div").find("div").find("span").text());
        camppressformData.append("STATUS","Active");
        camppressformData.append("COMMENTS", "TEST");
        camppressformData.append("DESCRIPTION", "TEST");
        camppressformData.append("CREATED_USER", $("#mtuser_fname").val());
        camppressformData.append("CREATED_DATE", Moment(date).format("YYYY-MM-DD"));
        camppressformData.append("MODIFIED_USER", $("#mtuser_fname").val());
        camppressformData.append("MODIFIED_DATE", Moment(date).format("YYYY-MM-DD"));
         
     
        if (window.isEmpty($("#CampPressform #campressid").val())) {
          camppressformData.append("CAMP_PRESS_IMAGE", $("#CampPressform #campressimage")[0].files[0],$("#CampPressform #campressimage")[0].files[0].name);
          camppressformData.append("CAMP_PRESS_VIDEO", $("#CampPressform #campressvideo")[0].files[0],$("#CampPressform #campressvideo")[0].files[0].name);
          
        }

        // console.log(rsformData);

        if (window.isEmpty($("#CampPressform #campressid").val())) {

          UploadService.create("/campress", camppressformData)
            .then(response => {
              console.log("inside");
              window.showLoader();
              window.showAlert("Campaign Press is submittted", "/Campaign_Press");
            })
            .catch(e => {
              window.showLoader();
              window.showAlert("OOps!!! Something went wrong", "/Campaign_Press");
            });

        } else {


          UploadService.update("/campress/" + Number($("#CampPressform #campressid").val()), camppressformData)
            .then(response => {
              window.showLoader();
              window.showAlert("Campaign Press is submittted", "/Campaign_Press");
            })
            .catch(e => {
              window.showLoader();
              window.showAlert("OOps!!! Something went wrong", "/Campaign_Press");
            });

        }


        // });



      } else {
        window.showAlert("Please Login", "/Login");
      }
    }

  }



  validateCampPress(){
    console.log("inside validateCampPress validations")
    let input = this.state.input;
    let errors = {};
    let isValid = true;

    if (window.isEmpty($("#CampPressform #campressheader").val())) {
      isValid = false;
      errors["campressheader"] = "Please enter header.";
      $("#CampPressform #campressheader").focus();
    }
 
    if (window.isEmpty($("#CampPressform").find("label[for=campressbody]").closest("div").find("div").find("span").text())) {
      isValid = false;
      errors["campressbody"] = "Please enter Body";
      $("#CampPressform #campressbody").focus();
    }
    

    if (window.isEmpty($("#CampPressform #campressid").val())) {
    if (!$("#CampPressform #campressimage").get(0).files.length  > 0) {
      isValid = false;
      errors["campressimage"] = "Please Upload Image";
      $("#CampPressform #campressimage").focus();
    }
  
    if (!$("#CampPressform #campressvideo").get(0).files.length  > 0) {
      isValid = false;
      errors["campressvideo"] = "Please Upload Video";
      $("#CampPressform #campressvideo").focus();
    }
    }
 

    this.setState({
      errors: errors
    });

    return isValid;
  }
     
 render() {
    
 

return (

  <body className='' >
  <div className='container'>  
      <div className='row' style={{height:'auto',marginTop:100}}>
          <div className='row'>
            <div className="hero-content">
               <nav className="navbar navbar-expand-sm bg-Secondary navbar-white " >
                  <div className="container-fluid"  >
                        <ul className="navbar-nav" style={{fontSize:13}}> 
                            <li className="nav-item">
                                <NavLink to="/Campaign" className="nav-link arrow-right" style={{color:"#B1B0AD"}}>&nbsp;Back to Dashboard</NavLink>
                              </li>
                        
                          </ul>
                    </div>
                  </nav>

                 <div className='container bg-white p-5'> 
                 
                 <div className='row'> 
                 <h3>Campaign Press</h3>  

                 </div> 
                  
                    <div className='row' style={{height:'auto'}}>
                    <div className='col-md-12'> 

                                        <form name="CampPressform" id="CampPressform" method="POST" enctype="multipart/form-data"  >  

<div className="col-md-12"  > 
  
    <div className="col-md-8 mb-3 ">
    <label for="campressheader" className="form-label">Header</label>
    <input name="campressid" id="campressid" type="hidden"  />
     
    <input
                              name="campressheader" 
                              type="text" 
                              value={this.state.input.campressheader} 
                              className="form-control" 
                              placeholder="Enter Your header/title here"
                              length="150" 
                              id="campressheader"/>
                         
          <div className="text-danger errors" style={{fontSize:15}}>{this.state.errors.campressheader}</div>
    </div> 

    
    <div className="col-md-8 mb-3 mt-3" >
    <label for="campressbody" className="form-label">Body</label>
    <div style={{ height:'300px',backgroundColor:"white"}} className="border">
                  
    <Editor  
                      toolbarClassName="toolbarClassName"
                      wrapperClassName="wrapperClassName"
                      editorClassName="editorClassName"
                      name="campressbody" 
                      maxlength="500"
                      id="campressbody" 
                    />
                    </div>
          <div className="text-danger errors" style={{fontSize:15}}>{this.state.errors.campressbody}</div>
    </div> 
 

  <div className="col-md-8 mb-3 mt-3">
    <div className="row mb-3">
    <div className="col-md-8">
    <label for="campressimage" className="col-sm-2 form-label">Images</label>
    </div>

    <div className="col-md-4 imgUp">    
     
          <label className="col-md-12 btn btn-outline-secondary btn-sm">
                Upload a picture<br/>
                <input type="file" id="campressimage" name="campressimage" 
                accept="image/*"   multiple 
                style={{height:"0px",width:"0px",overflow : "hidden"}}/>
                  </label>
                  <div className="text-danger errors" style={{fontSize:15}}>{this.state.errors.campressimage}</div>
            
            <div className="imagePreview"> </div>
            
            
            </div>  
             

    </div>
   
  </div>



  <div className="col-md-8 mb-3 mt-3">
    <div className="row mb-3">
    <div className="col-md-8">
    <label className="col-sm-2 form-label">Video(s)</label>
    </div>

    <div className="col-md-4">      
                <input type="file" id="campressvideo" name="campressvideo" className="form-control"  multiple 
                /> 
                  <div className="text-danger errors" style={{fontSize:15}}>{this.state.errors.campressvideo}</div>
              
             
            </div>   

    </div>
 

  </div>
     
 </div>
 <div className="col-md-12 mt-5">
 <div className="row">
  <div className="col-md-3 mb-3">
  <button type="button" className="btn btn-success btn-sm  w-100"  onClick={this.saveCampPress}>Submit</button>

  </div>
  <div className="col-md-3 mb-3">&nbsp;
{/* <a href="/Solution">
  <button type="button" className="btn btn-secondary btn-sm   w-100"  >Next</button></a> */}
  </div>




</div>
 </div>


</form>




                                        </div>

                    </div></div>
    
                    </div>
                    
                    </div>
                    
                    
                    </div></div> 
 

    </body>          
              
              

              


              
               
               

) ;       
 }
};



export default Campaign_Press;