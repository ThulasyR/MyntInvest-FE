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
class Create_Pitch extends React.Component {
    constructor() {
    super();
    this.state = {
      createpitchAllDets: [],
      currentcreatepitch: null,
      currentcreatepitchIndex: -1,
      input: {},
      errors: {},
      ID:null,
      MTUSER_ID:null,
      EMAIL:null,
      MODULE:null,
      CRT_PITCH_HEADER:"",
      CRT_PITCH_BODY:"",
      CRT_PITCH_IMAGE:"",
      CRT_PITCH_VIDEO:"", 
      STATUS:"",
      COMMENTS:"",
      DESCRIPTION:"",
      CREATED_USER:"",
      CREATED_DATE:"",
      MODIFIED_USER:"",
      MODIFIED_DATE:"", 
    };
     
    this.saveCreatePitch = this.saveCreatePitch.bind(this);  
    this.retrieveAllCreatePitch = this.retrieveAllCreatePitch.bind(this);
    this.setActiveCreatePitch = this.setActiveCreatePitch.bind(this);
  }
    
  
  
  componentDidMount() {
    this.retrieveAllCreatePitch(); 
  }


  retrieveAllCreatePitch() {
    var querySet = "/createpitch?EMAIL=" + sessionStorage.getItem("sessEmail");
    console.log(querySet);
    DataService.findByTitle(querySet)
      .then(response => {
        this.setState({
          createpitchAllDets: response.data, 
        });

         $.each(this.state.createpitchAllDets, function (index, value) {
  

        $("#CreatePitchform #createpitchid").attr("value", value.ID).val(value.ID);
        $("#CreatePitchform #createpitchheader").attr("value", value.CRT_PITCH_HEADER).val(value.CRT_PITCH_HEADER);
        $("#CreatePitchform").find("label[for=createpitchbody]").closest("div").find("div").find("span[data-offset-key]").text(value.CRT_PITCH_BODY)
        // $($(".imagePreview")[index]).css("background-image","url("+window.mt_backend_url+value.PROFILE_PIC+")");
        // $($("#TeamInfoform #tmuploadprofile")[index]).closest("label").css("visibility","hidden");
        $("#CreatePitchform #createpitchimage").closest(".imgUp").find('.imagePreview').css("background-image", "url("+window.mt_backend_url+value.CRT_PITCH_IMAGE+")");
        $("#CreatePitchform #createpitchimage").closest("label").css("visibility","hidden");
       //uploadAreaRaise
         if(value.CRT_PITCH_VIDEO.length > 0){ 
          $("#CreatePitchform #createpitchvideo").closest("div").html("<p>Download file: <a class='text-primary' target='_blank' href="+window.mt_backend_url+value.CRT_PITCH_VIDEO+">"+extractFilename(value.CRT_PITCH_VIDEO)+"</a></p>");
        }else{
          $("#CreatePitchform #createpitchvideo").closest("div").html('<input type="file" id="createpitchvideo" name="createpitchvideo" className="form-control"  multiple />');
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


  setActiveCreatePitch(createpitchAllDets, index) {
    this.setState({
      currentcreatepitch: createpitchAllDets,
      currentcreatepitchIndex: index,
      // tfcurrentFile:this.state.tfcurrentFile
    });
  }


  saveCreatePitch(event) {
    event.preventDefault();
    if (this.validateCreatePitch()) {
      if (!window.isEmpty(sessionStorage.getItem("sessEmail"))) {
           
        let cptchformData = new FormData();  
        cptchformData.append("ID",Number($("#CreatePitchform #createpitchid").val()));
        cptchformData.append("MTUSER_ID",$("#mtuser_id").val());
        cptchformData.append("EMAIL",$("#mtuser_email").val()); 
        cptchformData.append("MODULE",$("#mtuser_module").val());
        cptchformData.append("CRT_PITCH_HEADER",$("#CreatePitchform #createpitchheader").val());
        cptchformData.append("CRT_PITCH_BODY",$("#CreatePitchform").find("label[for=createpitchbody]").closest("div").find("div").find("span[data-text=true]").text());
        cptchformData.append("STATUS","Active");
        cptchformData.append("COMMENTS", "TEST");
        cptchformData.append("DESCRIPTION", "TEST");
        cptchformData.append("CREATED_USER", $("#mtuser_fname").val());
        cptchformData.append("CREATED_DATE", Moment(date).format("YYYY-MM-DD"));
        cptchformData.append("MODIFIED_USER", $("#mtuser_fname").val());
        cptchformData.append("MODIFIED_DATE", Moment(date).format("YYYY-MM-DD"));
         
     
        if (window.isEmpty($("#CreatePitchform #createpitchid").val())) {
          cptchformData.append("CRT_PITCH_IMAGE", $("#CreatePitchform #createpitchimage")[0].files[0],$("#CreatePitchform #createpitchimage")[0].files[0].name);
          cptchformData.append("CRT_PITCH_VIDEO", $("#CreatePitchform #createpitchvideo")[0].files[0],$("#CreatePitchform #createpitchvideo")[0].files[0].name);
          
        }

        // console.log(rsformData);

        if (window.isEmpty($("#CreatePitchform #createpitchid").val())) {

          UploadService.create("/createpitch", cptchformData)
            .then(response => {
              console.log("inside");
              window.showLoader();
              window.showAlert("Pitch is submittted", "/Create_Pitch");
            })
            .catch(e => {
              window.showLoader();
              window.showAlert("OOps!!! Something went wrong", "/Create_Pitch");
            });

        } else {


          UploadService.update("/createpitch/" + Number($("#CreatePitchform #createpitchid").val()), cptchformData)
            .then(response => {
              window.showLoader();
              window.showAlert("Pitch is submittted", "/Create_Pitch");
            })
            .catch(e => {
              window.showLoader();
              window.showAlert("OOps!!! Something went wrong", "/Create_Pitch");
            });

        }


        // });



      } else {
        window.showAlert("Please Login", "/Login");
      }
    }

  }



  validateCreatePitch(){
    console.log("inside validateCreatePitch validations")
    let input = this.state.input;
    let errors = {};
    let isValid = true;

    if (window.isEmpty($("#CreatePitchform #createpitchheader").val())) {
      isValid = false;
      errors["createpitchheader"] = "Please enter header.";
      $("#CreatePitchform #createpitchheader").focus();
    }
 
    if (window.isEmpty($("#CreatePitchform").find("label[for=createpitchbody]").closest("div").find("div").find("span[data-text=true]").text())) {
      isValid = false;
      errors["createpitchbody"] = "Please enter Body";
      $("#CreatePitchform #createpitchbody").focus();
    }

    if (window.isEmpty($("#CreatePitchform #createpitchid").val())) {
    if (!$("#CreatePitchform #createpitchimage").get(0).files.length  > 0) {
      isValid = false;
      errors["createpitchimage"] = "Please Upload Image";
      $("#CreatePitchform #createpitchimage").focus();
    }
  
    if (!$("#CreatePitchform #createpitchvideo").get(0).files.length  > 0) {
      isValid = false;
      errors["createpitchvideo"] = "Please Upload Video";
      $("#CreatePitchform #createpitchvideo").focus();
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
     <a class="nav-link active" style={{border:"1px solid #ccc"}}  aria-current="page"  href='/Create_Pitch'><Image   src={require('./../../assets/images/p1.png')}alt="Features tile icon 01"  width={50} height={50} borderRadius={50} /><p style={{fontSize:13}}>Problem</p></a> 
  </li>
  <li class="nav-item">
    
      <a class="nav-link " href='/Solution'><Image  style={{opacity:"0.5"}}  src={require('./../../assets/images/p002.png')}alt="Features tile icon 01"  width={50} height={50} /><p style={{fontSize:13}}>Solution</p></a>
     
  </li>
  <li class="nav-item">
  <a  class="nav-link" href='/Product'><Image style={{opacity:"0.5"}} src={require('./../../assets/images/p003.png')} alt="Features tile icon 01"  width={50} height={50} /><p style={{fontSize:13}}>Product</p></a>  
  </li>   
  <li class="nav-item">
   <a  class="nav-link" href='/Transaction'><Image   style={{opacity:"0.5"}} src={require('./../../assets/images/p4.png')}alt="Features tile icon 01"  width={50} height={50}  /><p style={{fontSize:13}}>Transaction</p></a>   
                   </li>   
                   <li class="nav-item">  <a  class="nav-link" href='/Business_Model'><Image  style={{opacity:"0.5"}}  src={require('./../../assets/images/p5.webp')}alt="Features tile icon 01"  width={50} height={50}  /><p style={{fontSize:13}}>Business<br/>Model</p></a> 
                  </li>
                  <li class="nav-item"> <a  class="nav-link" href='/Competition'><Image   style={{opacity:"0.5"}} src={require('./../../assets/images/p6.png')}alt="Features tile icon 01"  width={50} height={50}  /><p style={{fontSize:13}}>Competition</p></a>  
                   </li>
                   <li class="nav-item"> <a  class="nav-link" href='/Customer'><Image   style={{opacity:"0.5"}} src={require('./../../assets/images/p7.jpg')}alt="Features tile icon 01"  width={50} height={50}  /><p style={{fontSize:13}}>Customers</p></a>  
                   </li>
                   <li class="nav-item">  <a  class="nav-link" href='/Usage'><Image  style={{opacity:"0.5"}}  src={require('./../../assets/images/p8.jpg')}alt="Features tile icon 01"  width={50} height={50}  /><p style={{fontSize:13}}>Usage of<br/>Funds</p></a>  
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
                                        <h4>Problem</h4> 


                                        <form name="CreatePitchform" id="CreatePitchform" method="POST" enctype="multipart/form-data"  >  

<div className="col-md-12"  > 
  
    <div className="col-md-8 mb-3 ">
    <label for="createpitchheader" className="form-label">Header</label>
    <input name="createpitchid" id="createpitchid" type="hidden"  />
     
    <input
                              name="createpitchheader" 
                              type="text" 
                              value={this.state.input.createpitchheader} 
                              className="form-control" 
                              placeholder="Enter Your header/title here"
                              length="150" 
                              id="createpitchheader"/>
                         
          <div className="text-danger errors" style={{fontSize:15}}>{this.state.errors.createpitchheader}</div>
    </div> 

    
    <div className="col-md-8 mb-3 mt-3" >
    <label for="createpitchbody" className="form-label">Body</label>
    <div style={{ height:'300px',backgroundColor:"white"}} className="border">
                  
    <Editor  
                      toolbarClassName="toolbarClassName"
                      wrapperClassName="wrapperClassName"
                      editorClassName="editorClassName"
                      name="createpitchbody"
                      value={this.state.input.createpitchbody}
                      maxlength="500"
                      id="createpitchbody" 
                    />
                    </div>
          <div className="text-danger errors" style={{fontSize:15}}>{this.state.errors.createpitchbody}</div>
    </div> 
 

  <div className="col-md-8 mb-3 mt-3">
    <div className="row mb-3">
    <div className="col-md-8">
    <label for="createpitchimage" className="col-sm-2 form-label">Images</label>
    </div>

    <div className="col-md-4 imgUp">    
     
          <label className="col-md-12 btn btn-outline-secondary btn-sm">
                Upload a picture<br/>
                <input type="file" id="createpitchimage" name="createpitchimage" 
                accept="image/*"   multiple 
                style={{height:"0px",width:"0px",overflow : "hidden"}}/>
                  </label>
                  <div className="text-danger errors" style={{fontSize:15}}>{this.state.errors.createpitchimage}</div>
            
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
                <input type="file" id="createpitchvideo" name="createpitchvideo" className="form-control"  multiple 
                /> 
                  <div className="text-danger errors" style={{fontSize:15}}>{this.state.errors.createpitchvideo}</div>
              
             
            </div>   

    </div>
 

  </div>
     
 </div>
 <div className="col-md-12 mt-5">
 <div className="row">
  <div className="col-md-3 mb-3">
  <button type="button" className="btn btn-success btn-sm  w-100"  onClick={this.saveCreatePitch}>Submit</button>

  </div>
  <div className="col-md-3 mb-3">
<a href="/Solution">
  <button type="button" className="btn btn-secondary btn-sm   w-100"  >Next</button></a>
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



export default Create_Pitch;