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
class Usage extends React.Component {
    constructor() {
    super();
    this.state = {
      ptusuageAllDets: [],
      currentptusage: null,
      currentptusageIndex: -1,
      input: {},
      errors: {},
      ID:null,
      MTUSER_ID:null,
      EMAIL:null,
      MODULE:null,
      PIT_USAGE_HEADER:"",
      PIT_USAGE_BODY:"",
      PIT_USAGE_IMAGE:"",
      PIT_USAGE_VIDEO:"", 
      STATUS:"",
      COMMENTS:"",
      DESCRIPTION:"",
      CREATED_USER:"",
      CREATED_DATE:"",
      MODIFIED_USER:"",
      MODIFIED_DATE:"", 
    };
     
    this.savePtusage = this.savePtusage.bind(this);  
    this.retrieveAllptusage = this.retrieveAllptusage.bind(this);
    this.setActivePtUsage = this.setActivePtUsage.bind(this);
  }
    
  
  
  componentDidMount() {
    this.retrieveAllptusage(); 
  }


  retrieveAllptusage() {
    var querySet = "/ptusage?EMAIL=" + sessionStorage.getItem("sessEmail");
    console.log(querySet);
    DataService.findByTitle(querySet)
      .then(response => {
        this.setState({
          ptusuageAllDets: response.data, 
        });

         $.each(this.state.ptusuageAllDets, function (index, value) {
  

        $("#PtUsageform #ptusageid").attr("value", value.ID).val(value.ID);
        $("#PtUsageform #ptusageheader").attr("value", value.PIT_USAGE_HEADER).val(value.PIT_USAGE_HEADER).prop("readonly","true");
        $("#PtUsageform").find("label[for=ptusagebody]").closest("div").find("div").find("span[data-offset-key]").text(value.PIT_USAGE_BODY)
        // $($(".imagePreview")[index]).css("background-image","url("+window.mt_backend_url+value.PROFILE_PIC+")");
        // $($("#TeamInfoform #tmuploadprofile")[index]).closest("label").css("visibility","hidden");
        $("#PtUsageform #ptusageimage").closest(".imgUp").find('.imagePreview').css("background-image", "url("+window.mt_backend_url+value.PIT_USAGE_IMAGE+")");
        $("#PtUsageform #ptusageimage").closest("label").css("visibility","hidden");
       //uploadAreaRaise
         if(value.PIT_USAGE_VIDEO.length > 0){ 
          $("#PtUsageform #ptusagevideo").closest("div").html("<p>Download file: <a class='text-primary' target='_blank' href="+window.mt_backend_url+value.PIT_USAGE_VIDEO+">"+extractFilename(value.PIT_USAGE_VIDEO)+"</a></p>");
        }else{
          $("#PtUsageform #ptusagevideo").closest("div").html('<input type="file" id="ptusagevideo" name="ptusagevideo" className="form-control"  multiple />');
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


  setActivePtUsage(ptusuageAllDets, index) {
    this.setState({
      currentptusage: ptusuageAllDets,
      currentptusageIndex: index,
      // tfcurrentFile:this.state.tfcurrentFile
    });
  }


  savePtusage(event) {
    event.preventDefault();
    if (this.validatePtUsage()) {
      if (!window.isEmpty(sessionStorage.getItem("sessEmail"))) {
           
        let ptusageformData = new FormData();  
        ptusageformData.append("ID",Number($("#PtUsageform #ptusageid").val()));
        ptusageformData.append("MTUSER_ID",$("#mtuser_id").val());
        ptusageformData.append("EMAIL",$("#mtuser_email").val()); 
        ptusageformData.append("MODULE",$("#mtuser_module").val());
        ptusageformData.append("PIT_USAGE_HEADER",$("#PtUsageform #ptusageheader").val());
        ptusageformData.append("PIT_USAGE_BODY",$("#PtUsageform").find("label[for=ptusagebody]").closest("div").find("div").find("span[data-text=true]").text());
        ptusageformData.append("STATUS","Active");
        ptusageformData.append("COMMENTS", "TEST");
        ptusageformData.append("DESCRIPTION", "TEST");
        ptusageformData.append("CREATED_USER", $("#mtuser_fname").val());
        ptusageformData.append("CREATED_DATE", Moment(date).format("YYYY-MM-DD"));
        ptusageformData.append("MODIFIED_USER", $("#mtuser_fname").val());
        ptusageformData.append("MODIFIED_DATE", Moment(date).format("YYYY-MM-DD"));
         
     
        if (window.isEmpty($("#PtUsageform #ptusageid").val())) {
          ptusageformData.append("PIT_USAGE_IMAGE", $("#PtUsageform #ptusageimage")[0].files[0],$("#PtUsageform #ptusageimage")[0].files[0].name);
          ptusageformData.append("PIT_USAGE_VIDEO", $("#PtUsageform #ptusagevideo")[0].files[0],$("#PtUsageform #ptusagevideo")[0].files[0].name);
          
        }

        // console.log(rsformData);

        if (window.isEmpty($("#PtUsageform #ptusageid").val())) {

          UploadService.create("/ptusage", ptusageformData)
            .then(response => {
              console.log("inside");
              window.showLoader();
              window.showAlert("The Pitch Usage is submittted", "/Usage");
            })
            .catch(e => {
              window.showLoader();
              window.showAlert("OOps!!! Something went wrong", "/Usage");
            });

        } else {


          UploadService.update("/ptusage/" + Number($("#PtUsageform #ptusageid").val()), ptusageformData)
            .then(response => {
              window.showLoader();
              window.showAlert("The Pitch Usage is submittted", "/Usage");
            })
            .catch(e => {
              window.showLoader();
              window.showAlert("OOps!!! Something went wrong", "/Usage");
            });

        }


        // });



      } else {
        window.showAlert("Please Login", "/Login");
      }
    }

  }



  validatePtUsage(){
    console.log("inside validatePtUsage validations")
    let input = this.state.input;
    let errors = {};
    let isValid = true;

    if (window.isEmpty($("#PtUsageform #ptusageheader").val())) {
      isValid = false;
      errors["ptusageheader"] = "Please enter header.";
      $("#PtUsageform #ptusageheader").focus();
    }
 
    if (window.isEmpty($("#PtUsageform").find("label[for=ptusagebody]").closest("div").find("div").find("span[data-text=true]").text())) {
      isValid = false;
      errors["ptusagebody"] = "Please enter Body";
      $("#PtUsageform #ptusagebody").focus();
    }
    if (window.isEmpty($("#PtUsageform #ptusageid").val())) {
 
    if (!$("#PtUsageform #ptusageimage").get(0).files.length  > 0) {
      isValid = false;
      errors["ptusageimage"] = "Please Upload Image";
      $("#PtUsageform #ptusageimage").focus();
    }
  
    if (!$("#PtUsageform #ptusagevideo").get(0).files.length  > 0) {
      isValid = false;
      errors["ptusagevideo"] = "Please Upload Video";
      $("#PtUsageform #ptusagevideo").focus();
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
                                <NavLink to="/Startup_Dashboard" className="nav-link arrow-right" style={{color:"#B1B0AD"}}>&nbsp;Back to Dashboard</NavLink>
                              </li>
                        
                          </ul>
                    </div>
                  </nav>

                 <div className='container bg-white p-5'>

                  
                 <div className='row'> 


                <h3>Create Pitch</h3>
                 <ul class="nav nav-tabs">
  <li class="nav-item">
     <a class="nav-link"  href='/Create_Pitch'><Image   style={{opacity:"0.5"}} src={require('./../../assets/images/p1.png')}alt="Features tile icon 01"  width={50} height={50} borderRadius={50} /><p style={{fontSize:13}}>Problem</p></a> 
  </li>
  <li class="nav-item">
    
      <a class="nav-link" href='/Solution'><Image   style={{opacity:"0.5"}} src={require('./../../assets/images/p002.png')}alt="Features tile icon 01"  width={50} height={50} /><p style={{fontSize:13}}>Solution</p></a>
     
  </li>
  <li class="nav-item">
  <a  class="nav-link"   href='/Product'><Image   style={{opacity:"0.5"}}  src={require('./../../assets/images/p003.png')} alt="Features tile icon 01"  width={50} height={50} /><p style={{fontSize:13}}>Product</p></a>  
  </li>   
  <li class="nav-item">
   <a  class="nav-link" href='/Transaction'><Image   style={{opacity:"0.5"}}  src={require('./../../assets/images/p4.png')} alt="Features tile icon 01"  width={50} height={50}  /><p style={{fontSize:13}}>Transaction</p></a>   
                   </li>   
                   <li class="nav-item">  <a class="nav-link" href='/Business_Model'><Image   style={{opacity:"0.5"}}  src={require('./../../assets/images/p5.webp')}alt="Features tile icon 01"  width={50} height={50}  /><p style={{fontSize:13}}>Business<br/>Model</p></a> 
                  </li>
                  <li class="nav-item"> <a  class="nav-link"   href='/Competition'><Image   style={{opacity:"0.5"}}  src={require('./../../assets/images/p6.png')}alt="Features tile icon 01"  width={50} height={50}  /><p style={{fontSize:13}}>Competition</p></a>  
                   </li>
                   <li class="nav-item"> <a  class="nav-link" href='/Customer'><Image  style={{opacity:"0.5"}}  src={require('./../../assets/images/p7.jpg')} alt="Features tile icon 01"  width={50} height={50}  /><p style={{fontSize:13}}>Customers</p></a>  
                   </li>
                   <li class="nav-item">  <a  class="nav-link active"  style={{border:"1px solid #ccc"}}  aria-current="page" href='/Usage'><Image  src={require('./../../assets/images/p8.jpg')}alt="Features tile icon 01"  width={50} height={50}  /><p style={{fontSize:13}}>Usage of<br/>Funds</p></a>  
                   </li>
                   <li class="nav-item">
                     <a  class="nav-link" href='/Vision'><Image  style={{opacity:"0.5"}}   src={require('./../../assets/images/900.png')}alt="Features tile icon 01"  width={50} height={50}  /><p style={{fontSize:13}}>Vision</p></a>  
                   </li>
                   <li class="nav-item">
                  <a class="nav-link"  href='/Potential_Returns'><Image  style={{opacity:"0.5"}}   src={require('./../../assets/images/p10.webp')}alt="Features tile icon 01"  width={50} height={50}  /><p style={{fontSize:13}}>Potential<br/>Reutrns</p></a> 
                   </li>
</ul>

 </div> 
                  
                    <div className='row' style={{height:'auto'}}>
                    <div className='col-md-12'>
                                        <h4>Usage</h4>


                                        <form name="PtUsageform" id="PtUsageform" method="POST" enctype="multipart/form-data"  >  

<div className="col-md-12"  > 
  
    <div className="col-md-8 mb-3 ">
    <label for="ptusageheader" className="form-label">Header</label>
    <input name="ptusageid" id="ptusageid" type="hidden"  />
     
    <input
                              name="ptusageheader" 
                              type="text" 
                              value={this.state.input.ptusageheader} 
                              className="form-control" 
                              placeholder="Enter Your header/title here"
                              length="150" 
                              id="ptusageheader"/>
                         
          <div className="text-danger errors" style={{fontSize:15}}>{this.state.errors.ptusageheader}</div>
    </div> 

    
    <div className="col-md-8 mb-3 mt-3" >
    <label for="ptusagebody" className="form-label">Body</label>
    <div style={{ height:'300px',backgroundColor:"white"}} className="border">
                  
    <Editor  
                      toolbarClassName="toolbarClassName"
                      wrapperClassName="wrapperClassName"
                      editorClassName="editorClassName"
                      name="ptusagebody"
                      value={this.state.input.ptusagebody}
                      maxlength="500"
                      id="ptusagebody" 
                    />
                    </div>
          <div className="text-danger errors" style={{fontSize:15}}>{this.state.errors.ptusagebody}</div>
    </div> 
 

  <div className="col-md-8 mb-3 mt-3">
    <div className="row mb-3">
    <div className="col-md-8">
    <label for="ptusageimage" className="col-sm-2 form-label">Images</label>
    </div>

    <div className="col-md-4 imgUp">    
     
          <label className="col-md-12 btn btn-outline-secondary btn-sm">
                Upload a picture<br/>
                <input type="file" id="ptusageimage" name="ptusageimage" 
                accept="image/*"   multiple 
                style={{height:"0px",width:"0px",overflow : "hidden"}}/>
                  </label>
                  <div className="text-danger errors" style={{fontSize:15}}>{this.state.errors.ptusageimage}</div>
            
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
                <input type="file" id="ptusagevideo" name="ptusagevideo" className="form-control"  multiple 
                /> 
                  <div className="text-danger errors" style={{fontSize:15}}>{this.state.errors.ptusagevideo}</div>
              
             
            </div>   

    </div>
 

  </div>
     
 </div>
 <div className="col-md-12 mt-5">
 <div className="row">
  <div className="col-md-3 mb-3">
  <button type="button" className="btn btn-success btn-sm  w-100"  onClick={this.savePtusage}>Submit</button>

  </div>
  <div className="col-md-3 mb-3">
<a href="/Vision">
  <button type="button" className="btn btn-secondary btn-sm w-100"  >Next</button></a>
  </div> 

</div>
 </div>


</form> 

                                        </div>

                    </div></div>
    
                    </div>
                    
                    </div>
                    
                    
                    </div>
                    
                    </div> 
 

    </body>          
              
              

              


              
               
               

) ;       
 }
};



export default Usage;