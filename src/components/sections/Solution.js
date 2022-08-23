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
class Solution extends React.Component {
    constructor() {
    super();
    this.state = {
      solutionAllDets: [],
      currentsolution: null,
      currentsolutionIndex: -1,
      input: {},
      errors: {},
      ID:null,
      MTUSER_ID:null,
      EMAIL:null,
      MODULE:null,
      PIT_SOL_HEADER:"",
      PIT_SOL_BODY:"",
      PIT_SOL_IMAGE:"",
      PIT_SOL_VIDEO:"", 
      STATUS:"",
      COMMENTS:"",
      DESCRIPTION:"",
      CREATED_USER:"",
      CREATED_DATE:"",
      MODIFIED_USER:"",
      MODIFIED_DATE:"", 
    };
     
    this.saveSolutions = this.saveSolutions.bind(this);  
    this.retrieveAllSolutions = this.retrieveAllSolutions.bind(this);
    this.setActiveSolutions = this.setActiveSolutions.bind(this);
  }
    
  
  
  componentDidMount() {
    this.retrieveAllSolutions(); 
  }


  retrieveAllSolutions() {
    var querySet = "/solution?EMAIL=" + sessionStorage.getItem("sessEmail");
    console.log(querySet);
    DataService.findByTitle(querySet)
      .then(response => {
        this.setState({
          solutionAllDets: response.data, 
        });

         $.each(this.state.solutionAllDets, function (index, value) {
  

        $("#Solutionform #solutionid").attr("value", value.ID).val(value.ID);
        $("#Solutionform #solutionheader").attr("value", value.PIT_SOL_HEADER).val(value.PIT_SOL_HEADER);
        $("#Solutionform").find("label[for=solutionbody]").closest("div").find("div").find("span[data-offset-key]").text(value.PIT_SOL_BODY)
        // $($(".imagePreview")[index]).css("background-image","url("+window.mt_backend_url+value.PROFILE_PIC+")");
        // $($("#TeamInfoform #tmuploadprofile")[index]).closest("label").css("visibility","hidden");
        $("#Solutionform #solutionimage").closest(".imgUp").find('.imagePreview').css("background-image", "url("+window.mt_backend_url+value.PIT_SOL_IMAGE+")");
        $("#Solutionform #solutionimage").closest("label").css("visibility","hidden");
       //uploadAreaRaise
         if(value.PIT_SOL_VIDEO.length > 0){ 
          $("#Solutionform #solutionvideo").closest("div").html("<p>Download file: <a class='text-primary' target='_blank' href="+window.mt_backend_url+value.PIT_SOL_VIDEO+">"+extractFilename(value.PIT_SOL_VIDEO)+"</a></p>");
        }else{
          $("#Solutionform #solutionvideo").closest("div").html('<input type="file" id="solutionvideo" name="solutionvideo" className="form-control"  multiple />');
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


  setActiveSolutions(solutionAllDets, index) {
    this.setState({
      currentsolution: solutionAllDets,
      currentsolutionIndex: index,
      // tfcurrentFile:this.state.tfcurrentFile
    });
  }


  saveSolutions(event) {
    event.preventDefault();
    if (this.validateSolution()) {
      if (!window.isEmpty(sessionStorage.getItem("sessEmail"))) {
           
        let solnformData = new FormData();  
        solnformData.append("ID",Number($("#Solutionform #solutionid").val()));
        solnformData.append("MTUSER_ID",$("#mtuser_id").val());
        solnformData.append("EMAIL",$("#mtuser_email").val()); 
        solnformData.append("MODULE",$("#mtuser_module").val());
        solnformData.append("PIT_SOL_HEADER",$("#Solutionform #solutionheader").val());
        solnformData.append("PIT_SOL_BODY",$("#Solutionform").find("label[for=solutionbody]").closest("div").find("div").find("span[data-text=true]").text());
        solnformData.append("STATUS","Active");
        solnformData.append("COMMENTS", "TEST");
        solnformData.append("DESCRIPTION", "TEST");
        solnformData.append("CREATED_USER", $("#mtuser_fname").val());
        solnformData.append("CREATED_DATE", Moment(date).format("YYYY-MM-DD"));
        solnformData.append("MODIFIED_USER", $("#mtuser_fname").val());
        solnformData.append("MODIFIED_DATE", Moment(date).format("YYYY-MM-DD"));
         
     
        if (window.isEmpty($("#Solutionform #solutionid").val())) {
          solnformData.append("PIT_SOL_IMAGE", $("#Solutionform #solutionimage")[0].files[0],$("#Solutionform #solutionimage")[0].files[0].name);
          solnformData.append("PIT_SOL_VIDEO", $("#Solutionform #solutionvideo")[0].files[0],$("#Solutionform #solutionvideo")[0].files[0].name);
          
        }

        // console.log(rsformData);

        if (window.isEmpty($("#Solutionform #solutionid").val())) {

          UploadService.create("/solution", solnformData)
            .then(response => {
              console.log("inside");
              window.showLoader();
              window.showAlert("The Pitch Solution is submittted", "/Solution");
            })
            .catch(e => {
              window.showLoader();
              window.showAlert("OOps!!! Something went wrong", "/Solution");
            });

        } else {


          UploadService.update("/solution/" + Number($("#Solutionform #solutionid").val()), solnformData)
            .then(response => {
              window.showLoader();
              window.showAlert("The Pitch Solution is submittted", "/Solution");
            })
            .catch(e => {
              window.showLoader();
              window.showAlert("OOps!!! Something went wrong", "/Solution");
            });

        }


        // });



      } else {
        window.showAlert("Please Login", "/Login");
      }
    }

  }



  validateSolution(){
    console.log("inside validateSolution validations")
    let input = this.state.input;
    let errors = {};
    let isValid = true;

    if (window.isEmpty($("#Solutionform #solutionheader").val())) {
      isValid = false;
      errors["solutionheader"] = "Please enter header.";
      $("#Solutionform #solutionheader").focus();
    }
 
    if (window.isEmpty($("#Solutionform").find("label[for=solutionbody]").closest("div").find("div").find("span[data-text=true]").text())) {
      isValid = false;
      errors["solutionbody"] = "Please enter Body";
      $("#Solutionform #solutionbody").focus();
    }
    if (window.isEmpty($("#Solutionform #solutionid").val())) {

 
    if (!$("#Solutionform #solutionimage").get(0).files.length  > 0) {
      isValid = false;
      errors["solutionimage"] = "Please Upload Image";
      $("#Solutionform #solutionimage").focus();
    }
  
    if (!$("#Solutionform #solutionvideo").get(0).files.length  > 0) {
      isValid = false;
      errors["solutionvideo"] = "Please Upload Video";
      $("#Solutionform #solutionvideo").focus();
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
    
      <a class="nav-link active"  style={{border:"1px solid #ccc"}}  aria-current="page"  href='/Solution'><Image src={require('./../../assets/images/p002.png')}alt="Features tile icon 01"  width={50} height={50} /><p style={{fontSize:13}}>Solution</p></a>
     
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
                                        <h4>Solution</h4>


                                        <form name="Solutionform" id="Solutionform" method="POST" enctype="multipart/form-data"  >  

<div className="col-md-12"  > 
  
    <div className="col-md-8 mb-3 ">
    <label for="solutionheader" className="form-label">Header</label>
    <input name="solutionid" id="solutionid" type="hidden"  />
     
    <input
                              name="solutionheader" 
                              type="text" 
                              value={this.state.input.solutionheader} 
                              className="form-control" 
                              placeholder="Enter Your header/title here"
                              length="150" 
                              id="solutionheader"/>
                         
          <div className="text-danger errors" style={{fontSize:15}}>{this.state.errors.solutionheader}</div>
    </div> 

    
    <div className="col-md-8 mb-3 mt-3" >
    <label for="solutionbody" className="form-label">Body</label>
    <div style={{ height:'300px',backgroundColor:"white"}} className="border">
                  
    <Editor  
                      toolbarClassName="toolbarClassName"
                      wrapperClassName="wrapperClassName"
                      editorClassName="editorClassName"
                      name="solutionbody"
                      value={this.state.input.solutionbody}
                      maxlength="500"
                      id="solutionbody" 
                    />
                    </div>
          <div className="text-danger errors" style={{fontSize:15}}>{this.state.errors.solutionbody}</div>
    </div> 
 

  <div className="col-md-8 mb-3 mt-3">
    <div className="row mb-3">
    <div className="col-md-8">
    <label for="solutionimage" className="col-sm-2 form-label">Images</label>
    </div>

    <div className="col-md-4 imgUp">    
     
          <label className="col-md-12 btn btn-outline-secondary btn-sm">
                Upload a picture<br/>
                <input type="file" id="solutionimage" name="solutionimage" 
                accept="image/*"   multiple 
                style={{height:"0px",width:"0px",overflow : "hidden"}}/>
                  </label>
                  <div className="text-danger errors" style={{fontSize:15}}>{this.state.errors.solutionimage}</div>
            
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
                <input type="file" id="solutionvideo" name="solutionvideo" className="form-control"  multiple 
                /> 
                  <div className="text-danger errors" style={{fontSize:15}}>{this.state.errors.solutionvideo}</div>
              
             
            </div>   

    </div>
 

  </div>
     
 </div>
 <div className="col-md-12 mt-5">
 <div className="row">
  <div className="col-md-3 mb-3">
  <button type="button" className="btn btn-success btn-sm  w-100"  onClick={this.saveSolutions}>Submit</button>

  </div>
  <div className="col-md-3 mb-3">
<a href="/Product">
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



export default Solution;