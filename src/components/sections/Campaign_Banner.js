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
class Campaign_Banner extends React.Component {
    constructor() {
    super();
    this.state = {
      cambanAllDets: [],
      currentcampban: null,
      currentcampbanIndex: -1,
      input: {},
      errors: {},
      ID:null,
      MTUSER_ID:null,
      EMAIL:null,
      MODULE:null, 
      CAM_BAN_IMAGE:"",
      CAM_BAN_VIDEO:"", 
      STATUS:"",
      COMMENTS:"",
      DESCRIPTION:"",
      CREATED_USER:"",
      CREATED_DATE:"",
      MODIFIED_USER:"",
      MODIFIED_DATE:"", 
    };
     
    this.saveCamBan = this.saveCamBan.bind(this);  
    this.retrieveAllCamBan = this.retrieveAllCamBan.bind(this);
    this.setActiveCamBan = this.setActiveCamBan.bind(this);
  }
    
  
  
  componentDidMount() {
    this.retrieveAllCamBan(); 
  }


  retrieveAllCamBan() {
   
    var querySet = "/campban?EMAIL=" + sessionStorage.getItem("sessEmail");
    console.log(querySet);
    DataService.findByTitle(querySet)
      .then(response => {
        this.setState({
          cambanAllDets: response.data, 
        });

         $.each(this.state.cambanAllDets, function (index, value) {
  

        $("#CampBanform #campbanid").attr("value", value.ID).val(value.ID);
        $("#CampBanform #campUniqueId").attr("value", value.MODULE).val(value.MODULE);
        $("#CampBanform #campbanimage").closest(".imgUp").find('.imagePreview').css("background-image", "url("+window.mt_backend_url+value.CAM_BAN_IMAGE+")");
        $("#CampBanform #campbanimage").closest("label").css("visibility","hidden");
        
        
        if(value.CAM_BAN_VIDEO.length > 0){ 
          $("#CampBanform #campbanvideo").closest("div").html("<p>Download file: <a class='text-primary' target='_blank' href="+window.mt_backend_url+value.CAM_BAN_VIDEO+">"+extractFilename(value.CAM_BAN_VIDEO)+"</a></p>");
        }else{
          $("#CampBanform #campbanvideo").closest("div").html('<input type="file" id="campbanvideo" name="campbanvideo" className="form-control"  multiple />');
        }
        
   }); 

      })
      .catch(e => {
        console.log(e);
      });
  }


  setActiveCamBan(cambanAllDets, index) {
    this.setState({
      currentcampban: cambanAllDets,
      currentcampbanIndex: index,
      // tfcurrentFile:this.state.tfcurrentFile
    });
  }


  saveCamBan(event) {
    event.preventDefault();
    if (this.validateCampBan()) {
      if (!window.isEmpty(sessionStorage.getItem("sessEmail"))) {
           
        let cambanformData = new FormData();  
        cambanformData.append("ID",Number($("#CampBanform #campbanid").val()));
        cambanformData.append("MTUSER_ID",$("#mtuser_id").val());
        cambanformData.append("EMAIL",$("#mtuser_email").val());  
        
        cambanformData.append("STATUS","Active");
        cambanformData.append("COMMENTS", "TEST");
        cambanformData.append("DESCRIPTION", "TEST");
        cambanformData.append("CREATED_USER", $("#mtuser_fname").val());
        cambanformData.append("CREATED_DATE", Moment(date).format("YYYY-MM-DD"));
        cambanformData.append("MODIFIED_USER", $("#mtuser_fname").val());
        cambanformData.append("MODIFIED_DATE", Moment(date).format("YYYY-MM-DD"));
         
     
        if (window.isEmpty($("#CampBanform #campbanid").val())) {
          cambanformData.append("CAM_BAN_IMAGE", $("#CampBanform #campbanimage")[0].files[0],$("#CampBanform #campbanimage")[0].files[0].name);
          cambanformData.append("CAM_BAN_VIDEO", $("#CampBanform #campbanvideo")[0].files[0],$("#CampBanform #campbanvideo")[0].files[0].name);
          var genCode = window.genRandomCode(); 
          cambanformData.append("MODULE",genCode);
          sessionStorage.setItem("sessionCampaign",genCode)
          $("#CampBanform #campUniqueId").val(genCode);
        }else{
          cambanformData.append("MODULE",$("#CampBanform #campUniqueId").val());
        }
       

        // console.log(rsformData);

        if (window.isEmpty($("#CampBanform #campbanid").val())) {

          UploadService.create("/campban", cambanformData)
            .then(response => {
              console.log("inside");
              window.showLoader();
              window.showAlert("The Campaign is submittted", "/Campaign_Banner");
            })
            .catch(e => {
              window.showLoader();
              window.showAlert("OOps!!! Something went wrong", "/Campaign_Banner");
            });

        } else {


          UploadService.update("/campban/" + Number($("#CampBanform #campbanid").val()), cambanformData)
            .then(response => {
              window.showLoader();
              window.showAlert("The Campaign is submittted", "/Campaign_Banner");
            })
            .catch(e => {
              window.showLoader();
              window.showAlert("OOps!!! Something went wrong", "/Campaign_Banner");
            });

        }


        // });



      } else {
        window.showAlert("Please Login", "/Login");
      }
    }

  }



  validateCampBan(){
    console.log("inside validateCampBan validations")
    let input = this.state.input;
    let errors = {};
    let isValid = true;
  
    if (window.isEmpty($("#CampBanform #campbanid").val())) {
    if (!$("#CampBanform #campbanimage").get(0).files.length  > 0) {
      isValid = false;
      errors["campbanimage"] = "Please Upload Image";
      $("#CampBanform #campbanimage").focus();
    }
  
    if (!$("#CampBanform #campbanvideo").get(0).files.length  > 0) {
      isValid = false;
      errors["campbanvideo"] = "Please Upload Video";
      $("#CampBanform #campbanvideo").focus();
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
                                <NavLink to="/Campaign" className="nav-link arrow-right" style={{color:"#B1B0AD"}}>&nbsp;Back to Campaign</NavLink>
                              </li>
                        
                          </ul>
                    </div>
                  </nav>

                 <div className='container bg-white p-5'> 
                 
                 <div className='row'> 
                 <h3>Banner Video</h3> 
                 </div> 
                  
                    <div className='row' style={{height:'auto'}}>
                    <div className='col-md-12'> 
 
                                        <form name="CampBanform" id="CampBanform" method="POST" enctype="multipart/form-data"  >  

<div className="col-md-12"  > 
   

<input type="hidden" id="campbanid" name="campbanid"/>
<input type="hidden" id="campUniqueId" name="campUniqueId"/>


  <div className="col-md-8 mb-3 mt-3">
    <div className="row mb-3">
    <div className="col-md-8">
    <label for="campbanimage" className="form-label">Banner Photo</label>
    </div>

    <div className="col-md-4 imgUp">    
          <label className="col-md-12 btn btn-outline-secondary btn-sm">
                Upload a picture<br/>
                <input type="file" id="campbanimage" name="campbanimage" 
                accept="image/*"   multiple 
                style={{height:"0px",width:"0px",overflow : "hidden"}}/>
                  </label>
                  <div className="text-danger errors" style={{fontSize:15}}>{this.state.errors.campbanimage}</div>
            
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
                <input type="file" id="campbanvideo" name="campbanvideo" className="form-control"  multiple 
                /> 
                  <div className="text-danger errors" style={{fontSize:15}}>{this.state.errors.campbanvideo}</div>
              
             
            </div>   

    </div>
 

  </div>
     
 </div>
 <div className="col-md-12 mt-5">
 <div className="row">
  <div className="col-md-3 mb-3">
  <button type="button" className="btn btn-success btn-sm  w-100"  onClick={this.saveCamBan}>Submit</button>

  </div>
  <div className="col-md-3 mb-3"> 
  &nbsp;
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



export default Campaign_Banner;