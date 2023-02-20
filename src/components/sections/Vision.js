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
class Vision extends React.Component {
    constructor() {
    super();
    this.state = {
      ptvisionAllDets: [],
      currentptvision: null,
      currentptvisionIndex: -1,
      input: {},
      errors: {},
      ID:null,
      MTUSER_ID:null,
      EMAIL:null,
      MODULE:null,
      PIT_VSN_HEADER:"",
      PIT_VSN_BODY:"",
      PIT_VSN_IMAGE:"",
      PIT_VSN_VIDEO:"", 
      STATUS:"",
      COMMENTS:"",
      DESCRIPTION:"",
      CREATED_USER:"",
      CREATED_DATE:"",
      MODIFIED_USER:"",
      MODIFIED_DATE:"", 
    };
     
    this.savePtVision = this.savePtVision.bind(this);  
    this.retrieveAllPtVision = this.retrieveAllPtVision.bind(this);
    this.setActivePtVision = this.setActivePtVision.bind(this);
  }
    
  
  
  componentDidMount() {
    this.retrieveAllPtVision(); 
  }


  retrieveAllPtVision() {
    var querySet = "/ptvision?EMAIL=" + sessionStorage.getItem("sessEmail");
    console.log(querySet);
    DataService.findByTitle(querySet)
      .then(response => {
        this.setState({
          ptvisionAllDets: response.data, 
        });

         $.each(this.state.ptvisionAllDets, function (index, value) {
  

        $("#PtVisionform #ptvisionid").attr("value", value.ID).val(value.ID);
        $("#PtVisionform #ptvisionheader").attr("value", value.PIT_VSN_HEADER).val(value.PIT_VSN_HEADER).prop("readonly","true");
        $("#PtVisionform").find("label[for=ptvisionbody]").closest("div").find("div").find("span[data-offset-key]").text(value.PIT_VSN_BODY)
        // $($(".imagePreview")[index]).css("background-image","url("+window.mt_backend_url+value.PROFILE_PIC+")");
        // $($("#TeamInfoform #tmuploadprofile")[index]).closest("label").css("visibility","hidden");
        $("#PtVisionform #ptvisionimage").closest(".imgUp").find('.imagePreview').css("background-image", "url("+window.mt_backend_url+value.PIT_VSN_IMAGE+")");
        $("#PtVisionform #ptvisionimage").closest("label").css("visibility","hidden");
       //uploadAreaRaise
         if(value.PIT_VSN_VIDEO.length > 0){ 
          $("#PtVisionform #ptvisionvideo").closest("div").html("<p>Download file: <a class='text-primary' target='_blank' href="+window.mt_backend_url+value.PIT_VSN_VIDEO+">"+extractFilename(value.PIT_VSN_VIDEO)+"</a></p>");
        }else{
          $("#PtVisionform #ptvisionvideo").closest("div").html('<input type="file" id="ptvisionvideo" name="ptvisionvideo" className="form-control"  multiple />');
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


  setActivePtVision(ptvisionAllDets, index) {
    this.setState({
      currentptvision: ptvisionAllDets,
      currentptvisionIndex: index,
      // tfcurrentFile:this.state.tfcurrentFile
    });
  }


  savePtVision(event) {
    event.preventDefault();
    if (this.validatePtVision()) {
      if (!window.isEmpty(sessionStorage.getItem("sessEmail"))) {
           
        let ptvsionformData = new FormData();  
        ptvsionformData.append("ID",Number($("#PtVisionform #ptvisionid").val()));
        ptvsionformData.append("MTUSER_ID",$("#mtuser_id").val());
        ptvsionformData.append("EMAIL",$("#mtuser_email").val()); 
        ptvsionformData.append("MODULE",$("#mtuser_module").val());
        ptvsionformData.append("PIT_VSN_HEADER",$("#PtVisionform #ptvisionheader").val());
        ptvsionformData.append("PIT_VSN_BODY",$("#PtVisionform").find("label[for=ptvisionbody]").closest("div").find("div").find("span[data-text=true]").text());
        ptvsionformData.append("STATUS","Active");
        ptvsionformData.append("COMMENTS", "TEST");
        ptvsionformData.append("DESCRIPTION", "TEST");
        ptvsionformData.append("CREATED_USER", $("#mtuser_fname").val());
        ptvsionformData.append("CREATED_DATE", Moment(date).format("YYYY-MM-DD"));
        ptvsionformData.append("MODIFIED_USER", $("#mtuser_fname").val());
        ptvsionformData.append("MODIFIED_DATE", Moment(date).format("YYYY-MM-DD"));
         
     
        if (window.isEmpty($("#PtVisionform #ptvisionid").val())) {
          ptvsionformData.append("PIT_VSN_IMAGE", $("#PtVisionform #ptvisionimage")[0].files[0],$("#PtVisionform #ptvisionimage")[0].files[0].name);
          ptvsionformData.append("PIT_VSN_VIDEO", $("#PtVisionform #ptvisionvideo")[0].files[0],$("#PtVisionform #ptvisionvideo")[0].files[0].name);
          
        }

        // console.log(rsformData);

        if (window.isEmpty($("#PtVisionform #ptvisionid").val())) {

          UploadService.create("/ptvision", ptvsionformData)
            .then(response => {
              console.log("inside");
              window.showLoader();
              window.showAlert("The Pitch Vision is submittted", "/Vision");
            })
            .catch(e => {
              window.showLoader();
              window.showAlert("OOps!!! Something went wrong", "/Vision");
            });

        } else {


          UploadService.update("/ptvision/" + Number($("#PtVisionform #ptvisionid").val()), ptvsionformData)
            .then(response => {
              window.showLoader();
              window.showAlert("The Pitch Vision is submittted", "/Vision");
            })
            .catch(e => {
              window.showLoader();
              window.showAlert("OOps!!! Something went wrong", "/Vision");
            });

        }


        // });



      } else {
        window.showAlert("Please Login", "/Login");
      }
    }

  }



  validatePtVision(){
    console.log("inside validatePtVision validations")
    let input = this.state.input;
    let errors = {};
    let isValid = true;

    if (window.isEmpty($("#PtVisionform #ptvisionheader").val())) {
      isValid = false;
      errors["ptvisionheader"] = "Please enter header.";
      $("#PtVisionform #ptvisionheader").focus();
    }
 
    if (window.isEmpty($("#PtVisionform").find("label[for=ptvisionbody]").closest("div").find("div").find("span[data-text=true]").text())) {
      isValid = false;
      errors["ptvisionbody"] = "Please enter Body";
      $("#PtVisionform #ptvisionbody").focus();
    }


    if (window.isEmpty($("#PtVisionform #ptvisionid").val())) {
    if (!$("#PtVisionform #ptvisionimage").get(0).files.length  > 0) {
      isValid = false;
      errors["ptvisionimage"] = "Please Upload Image";
      $("#PtVisionform #ptvisionimage").focus();
    }
  
    if (!$("#PtVisionform #ptvisionvideo").get(0).files.length  > 0) {
      isValid = false;
      errors["ptvisionvideo"] = "Please Upload Video";
      $("#PtVisionform #ptvisionvideo").focus();
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
                   <li class="nav-item">  <a  class="nav-link"  href='/Usage'><Image  style={{opacity:"0.5"}}  src={require('./../../assets/images/p8.jpg')}alt="Features tile icon 01"  width={50} height={50}  /><p style={{fontSize:13}}>Usage of<br/>Funds</p></a>  
                   </li>
                   <li class="nav-item">
                     <a  class="nav-link active"  style={{border:"1px solid #ccc"}}  aria-current="page"  href='/Vision'><Image   src={require('./../../assets/images/900.png')}alt="Features tile icon 01"  width={50} height={50}  /><p style={{fontSize:13}}>Vision</p></a>  
                   </li>
                   <li class="nav-item">
                  <a class="nav-link"  href='/Potential_Returns'><Image  style={{opacity:"0.5"}}   src={require('./../../assets/images/p10.webp')}alt="Features tile icon 01"  width={50} height={50}  /><p style={{fontSize:13}}>Potential<br/>Reutrns</p></a> 
                   </li>
</ul>

  </div> 
                  
                    <div className='row' style={{height:'auto'}}>
                    <div className='col-md-12'>
                                        <h4>Vision</h4>


                                        <form name="PtVisionform" id="PtVisionform" method="POST" enctype="multipart/form-data"  >  

<div className="col-md-12"  > 
  
    <div className="col-md-8 mb-3 ">
    <label for="ptvisionheader" className="form-label">Header</label>
    <input name="ptvisionid" id="ptvisionid" type="hidden"  />
     
    <input
                              name="ptvisionheader" 
                              type="text" 
                              value={this.state.input.ptvisionheader} 
                              className="form-control" 
                              placeholder="Enter Your header/title here"
                              length="150" 
                              id="ptvisionheader"/>
                         
          <div className="text-danger errors" style={{fontSize:15}}>{this.state.errors.ptvisionheader}</div>
    </div> 

    
    <div className="col-md-8 mb-3 mt-3" >
    <label for="ptvisionbody" className="form-label">Body</label>
    <div style={{ height:'300px',backgroundColor:"white"}} className="border">
                  
    <Editor  
                      toolbarClassName="toolbarClassName"
                      wrapperClassName="wrapperClassName"
                      editorClassName="editorClassName"
                      name="ptvisionbody"
                      value={this.state.input.ptvisionbody}
                      maxlength="500"
                      id="ptvisionbody" 
                    />
                    </div>
          <div className="text-danger errors" style={{fontSize:15}}>{this.state.errors.ptvisionbody}</div>
    </div> 
 

  <div className="col-md-8 mb-3 mt-3">
    <div className="row mb-3">
    <div className="col-md-8">
    <label for="ptvisionimage" className="col-sm-2 form-label">Images</label>
    </div>

    <div className="col-md-4 imgUp">    
     
          <label className="col-md-12 btn btn-outline-secondary btn-sm">
                Upload a picture<br/>
                <input type="file" id="ptvisionimage" name="ptvisionimage" 
                accept="image/*"   multiple 
                style={{height:"0px",width:"0px",overflow : "hidden"}}/>
                  </label>
                  <div className="text-danger errors" style={{fontSize:15}}>{this.state.errors.ptvisionimage}</div>
            
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
                <input type="file" id="ptvisionvideo" name="ptvisionvideo" className="form-control"  multiple 
                /> 
                  <div className="text-danger errors" style={{fontSize:15}}>{this.state.errors.ptvisionvideo}</div>
              
             
            </div>   

    </div>
 

  </div>
     
 </div>
 <div className="col-md-12 mt-5">
 <div className="row">
  <div className="col-md-3 mb-3">
  <button type="button" className="btn btn-success btn-sm  w-100"  onClick={this.savePtVision}>Submit</button>

  </div>
  <div className="col-md-3 mb-3">
<a href="/Potential_Returns">
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



export default Vision;