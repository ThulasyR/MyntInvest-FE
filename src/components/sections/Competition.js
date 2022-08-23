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
class Competition extends React.Component {
    constructor() {
    super();
    this.state = {
      ptcompAllDets: [],
      currentptcom: null,
      currentptcomIndex: -1,
      input: {},
      errors: {},
      ID:null,
      MTUSER_ID:null,
      EMAIL:null,
      MODULE:null,
      PIT_COMPT_HEADER:"",
      PIT_COMPT_BODY:"",
      PIT_COMPT_IMAGE:"",
      PIT_COMPT_VIDEO:"", 
      STATUS:"",
      COMMENTS:"",
      DESCRIPTION:"",
      CREATED_USER:"",
      CREATED_DATE:"",
      MODIFIED_USER:"",
      MODIFIED_DATE:"", 
    };
     
    this.savePtComp = this.savePtComp.bind(this);  
    this.retrieveAlPtComp = this.retrieveAlPtComp.bind(this);
    this.setActivePtComp = this.setActivePtComp.bind(this);
  }
    
  
  
  componentDidMount() {
    this.retrieveAlPtComp(); 
  }


  retrieveAlPtComp() {
    var querySet = "/ptcomp?EMAIL=" + sessionStorage.getItem("sessEmail");
    console.log(querySet);
    DataService.findByTitle(querySet)
      .then(response => {
        this.setState({
          ptcompAllDets: response.data, 
        });

         $.each(this.state.ptcompAllDets, function (index, value) {
  

        $("#PtCompform #ptcomid").attr("value", value.ID).val(value.ID);
        $("#PtCompform #ptcompheader").attr("value", value.PIT_COMPT_HEADER).val(value.PIT_COMPT_HEADER);
        $("#PtCompform").find("label[for=ptcompbody]").closest("div").find("div").find("span[data-offset-key]").text(value.PIT_COMPT_BODY)
        // $($(".imagePreview")[index]).css("background-image","url("+window.mt_backend_url+value.PROFILE_PIC+")");
        // $($("#TeamInfoform #tmuploadprofile")[index]).closest("label").css("visibility","hidden");
        $("#PtCompform #ptcompimage").closest(".imgUp").find('.imagePreview').css("background-image", "url("+window.mt_backend_url+value.PIT_COMPT_IMAGE+")");
        $("#PtCompform #ptcompimage").closest("label").css("visibility","hidden");
       //uploadAreaRaise
         if(value.PIT_COMPT_VIDEO.length > 0){ 
          $("#PtCompform #ptcompvideo").closest("div").html("<p>Download file: <a class='text-primary' target='_blank' href="+window.mt_backend_url+value.PIT_COMPT_VIDEO+">"+extractFilename(value.PIT_COMPT_VIDEO)+"</a></p>");
        }else{
          $("#PtCompform #ptcompvideo").closest("div").html('<input type="file" id="ptcompvideo" name="ptcompvideo" className="form-control"  multiple />');
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


  setActivePtComp(ptcompAllDets, index) {
    this.setState({
      currentptcom: ptcompAllDets,
      currentptcomIndex: index,
      // tfcurrentFile:this.state.tfcurrentFile
    });
  }


  savePtComp(event) {
    event.preventDefault();
    if (this.validatePtComp()) {
      if (!window.isEmpty(sessionStorage.getItem("sessEmail"))) {
           
        let ptcompformData = new FormData();  
        ptcompformData.append("ID",Number($("#PtCompform #ptcomid").val()));
        ptcompformData.append("MTUSER_ID",$("#mtuser_id").val());
        ptcompformData.append("EMAIL",$("#mtuser_email").val()); 
        ptcompformData.append("MODULE",$("#mtuser_module").val());
        ptcompformData.append("PIT_COMPT_HEADER",$("#PtCompform #ptcompheader").val());
        ptcompformData.append("PIT_COMPT_BODY",$("#PtCompform").find("label[for=ptcompbody]").closest("div").find("div").find("span[data-text=true]").text());
        ptcompformData.append("STATUS","Active");
        ptcompformData.append("COMMENTS", "TEST");
        ptcompformData.append("DESCRIPTION", "TEST");
        ptcompformData.append("CREATED_USER", $("#mtuser_fname").val());
        ptcompformData.append("CREATED_DATE", Moment(date).format("YYYY-MM-DD"));
        ptcompformData.append("MODIFIED_USER", $("#mtuser_fname").val());
        ptcompformData.append("MODIFIED_DATE", Moment(date).format("YYYY-MM-DD"));
         
     
        if (window.isEmpty($("#PtCompform #ptcomid").val())) {
          ptcompformData.append("PIT_COMPT_IMAGE", $("#PtCompform #ptcompimage")[0].files[0],$("#PtCompform #ptcompimage")[0].files[0].name);
          ptcompformData.append("PIT_COMPT_VIDEO", $("#PtCompform #ptcompvideo")[0].files[0],$("#PtCompform #ptcompvideo")[0].files[0].name);
          
        }

        // console.log(rsformData);

        if (window.isEmpty($("#PtCompform #ptcomid").val())) {

          UploadService.create("/ptcomp", ptcompformData)
            .then(response => {
              console.log("inside");
              window.showLoader();
              window.showAlert("The Pitch Competition is submittted", "/Competition");
            })
            .catch(e => {
              window.showLoader();
              window.showAlert("OOps!!! Something went wrong", "/Competition");
            });

        } else {


          UploadService.update("/ptcomp/" + Number($("#PtCompform #ptcomid").val()), ptcompformData)
            .then(response => {
              window.showLoader();
              window.showAlert("The Pitch Competition is submittted", "/Competition");
            })
            .catch(e => {
              window.showLoader();
              window.showAlert("OOps!!! Something went wrong", "/Competition");
            });

        }


        // });



      } else {
        window.showAlert("Please Login", "/Login");
      }
    }

  }



  validatePtComp(){
    console.log("inside validatePtComp validations")
    let input = this.state.input;
    let errors = {};
    let isValid = true;

    if (window.isEmpty($("#PtCompform #ptcompheader").val())) {
      isValid = false;
      errors["ptcompheader"] = "Please enter header.";
      $("#PtCompform #ptcompheader").focus();
    }
 
    if (window.isEmpty($("#PtCompform").find("label[for=ptcompbody]").closest("div").find("div").find("span[data-text=true]").text())) {
      isValid = false;
      errors["ptcompbody"] = "Please enter Body";
      $("#PtCompform #ptcompbody").focus();
    }

    if (window.isEmpty($("#PtCompform #ptcomid").val())) {
    if (!$("#PtCompform #ptcompimage").get(0).files.length  > 0) {
      isValid = false;
      errors["ptcompimage"] = "Please Upload Image";
      $("#PtCompform #ptcompimage").focus();
    }
  
    if (!$("#PtCompform #ptcompvideo").get(0).files.length  > 0) {
      isValid = false;
      errors["ptcompvideo"] = "Please Upload Video";
      $("#PtCompform #ptcompvideo").focus();
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
                  <li class="nav-item"> <a   class="nav-link active"  style={{border:"1px solid #ccc"}}  aria-current="page"   href='/Competition'><Image src={require('./../../assets/images/p6.png')}alt="Features tile icon 01"  width={50} height={50}  /><p style={{fontSize:13}}>Competition</p></a>  
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
                                        <h4>Competition</h4>


                                        <form name="PtCompform" id="PtCompform" method="POST" enctype="multipart/form-data"  >  

<div className="col-md-12"  > 
  
    <div className="col-md-8 mb-3 ">
    <label for="ptcompheader" className="form-label">Header</label>
    <input name="ptcomid" id="ptcomid" type="hidden"  />
     
    <input
                              name="ptcompheader" 
                              type="text" 
                              value={this.state.input.ptcompheader} 
                              className="form-control" 
                              placeholder="Enter Your header/title here"
                              length="150" 
                              id="ptcompheader"/>
                         
          <div className="text-danger errors" style={{fontSize:15}}>{this.state.errors.ptcompheader}</div>
    </div> 

    
    <div className="col-md-8 mb-3 mt-3" >
    <label for="ptcompbody" className="form-label">Body</label>
    <div style={{ height:'300px',backgroundColor:"white"}} className="border">
                  
    <Editor  
                      toolbarClassName="toolbarClassName"
                      wrapperClassName="wrapperClassName"
                      editorClassName="editorClassName"
                      name="ptcompbody"
                      value={this.state.input.ptcompbody}
                      maxlength="500"
                      id="ptcompbody" 
                    />
                    </div>
          <div className="text-danger errors" style={{fontSize:15}}>{this.state.errors.ptcompbody}</div>
    </div> 
 

  <div className="col-md-8 mb-3 mt-3">
    <div className="row mb-3">
    <div className="col-md-8">
    <label for="ptcompimage" className="col-sm-2 form-label">Images</label>
    </div>

    <div className="col-md-4 imgUp">    
     
          <label className="col-md-12 btn btn-outline-secondary btn-sm">
                Upload a picture<br/>
                <input type="file" id="ptcompimage" name="ptcompimage" 
                accept="image/*"   multiple 
                style={{height:"0px",width:"0px",overflow : "hidden"}}/>
                  </label>
                  <div className="text-danger errors" style={{fontSize:15}}>{this.state.errors.ptcompimage}</div>
            
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
                <input type="file" id="ptcompvideo" name="ptcompvideo" className="form-control"  multiple 
                /> 
                  <div className="text-danger errors" style={{fontSize:15}}>{this.state.errors.ptcompvideo}</div>
              
             
            </div>   

    </div>
 

  </div>
     
 </div>
 <div className="col-md-12 mt-5">
 <div className="row">
  <div className="col-md-3 mb-3">
  <button type="button" className="btn btn-success btn-sm  w-100"  onClick={this.savePtComp}>Submit</button>

  </div>
  <div className="col-md-3 mb-3">
<a href="/Customer">
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



export default Competition;