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
class Business_Model extends React.Component {
    constructor() {
    super();
    this.state = {
      ptbsmodelAllDets: [],
      currentptbsmodel: null,
      currentptbsmodelIndex: -1,
      input: {},
      errors: {},
      ID:null,
      MTUSER_ID:null,
      EMAIL:null,
      MODULE:null,
      PIT_BSMODEL_HEADER:"",
      PIT_BSMODEL_BODY:"",
      PIT_BSMODEL_IMAGE:"",
      PIT_BSMODEL_VIDEO:"", 
      STATUS:"",
      COMMENTS:"",
      DESCRIPTION:"",
      CREATED_USER:"",
      CREATED_DATE:"",
      MODIFIED_USER:"",
      MODIFIED_DATE:"", 
    };
     
    this.savePtBSModel = this.savePtBSModel.bind(this);  
    this.retrieveAllPtBSModel = this.retrieveAllPtBSModel.bind(this);
    this.setActivePtBSModel = this.setActivePtBSModel.bind(this);
  }
    
  
  
  componentDidMount() {
    this.retrieveAllPtBSModel(); 
  }


  retrieveAllPtBSModel() {
    var querySet = "/ptbusiness?EMAIL=" + sessionStorage.getItem("sessEmail");
    console.log(querySet);
    DataService.findByTitle(querySet)
      .then(response => {
        this.setState({
          ptbsmodelAllDets: response.data, 
        });

         $.each(this.state.ptbsmodelAllDets, function (index, value) {
  

        $("#PtBSModelform #ptbsmodelid").attr("value", value.ID).val(value.ID);
        $("#PtBSModelform #ptbsmodelheader").attr("value", value.PIT_BSMODEL_HEADER).val(value.PIT_BSMODEL_HEADER).prop("readonly","true");
        $("#PtBSModelform").find("label[for=createpitchbody]").closest("div").find("div").find("span[data-offset-key]").text(value.PIT_BSMODEL_BODY)
        // $($(".imagePreview")[index]).css("background-image","url("+window.mt_backend_url+value.PROFILE_PIC+")");
        // $($("#TeamInfoform #tmuploadprofile")[index]).closest("label").css("visibility","hidden");
        $("#PtBSModelform #ptbsmodelimage").closest(".imgUp").find('.imagePreview').css("background-image", "url("+window.mt_backend_url+value.PIT_BSMODEL_IMAGE+")");
        $("#PtBSModelform #ptbsmodelimage").closest("label").css("visibility","hidden");
       //uploadAreaRaise
         if(value.PIT_BSMODEL_VIDEO.length > 0){ 
          $("#PtBSModelform #ptbsmodelvideo").closest("div").html("<p>Download file: <a class='text-primary' target='_blank' href="+window.mt_backend_url+value.PIT_BSMODEL_VIDEO+">"+extractFilename(value.PIT_BSMODEL_VIDEO)+"</a></p>");
        }else{
          $("#PtBSModelform #ptbsmodelvideo").closest("div").html('<input type="file" id="ptbsmodelvideo" name="ptbsmodelvideo" className="form-control"  multiple />');
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


  setActivePtBSModel(ptbsmodelAllDets, index) {
    this.setState({
      currentptbsmodel: ptbsmodelAllDets,
      currentptbsmodelIndex: index,
      // tfcurrentFile:this.state.tfcurrentFile
    });
  }


  savePtBSModel(event) {
    event.preventDefault();
    if (this.validatePtBsModel()) {
      if (!window.isEmpty(sessionStorage.getItem("sessEmail"))) {
           
        let ptbsmodelformData = new FormData();  
        ptbsmodelformData.append("ID",Number($("#PtBSModelform #ptbsmodelid").val()));
        ptbsmodelformData.append("MTUSER_ID",$("#mtuser_id").val());
        ptbsmodelformData.append("EMAIL",$("#mtuser_email").val()); 
        ptbsmodelformData.append("MODULE",$("#mtuser_module").val());
        ptbsmodelformData.append("PIT_BSMODEL_HEADER",$("#PtBSModelform #ptbsmodelheader").val());
        ptbsmodelformData.append("PIT_BSMODEL_BODY",$("#PtBSModelform").find("label[for=createpitchbody]").closest("div").find("div").find("span[data-text=true]").text());
        ptbsmodelformData.append("STATUS","Active");
        ptbsmodelformData.append("COMMENTS", "TEST");
        ptbsmodelformData.append("DESCRIPTION", "TEST");
        ptbsmodelformData.append("CREATED_USER", $("#mtuser_fname").val());
        ptbsmodelformData.append("CREATED_DATE", Moment(date).format("YYYY-MM-DD"));
        ptbsmodelformData.append("MODIFIED_USER", $("#mtuser_fname").val());
        ptbsmodelformData.append("MODIFIED_DATE", Moment(date).format("YYYY-MM-DD"));
         
     
        if (window.isEmpty($("#PtBSModelform #ptbsmodelid").val())) {
          ptbsmodelformData.append("PIT_BSMODEL_IMAGE", $("#PtBSModelform #ptbsmodelimage")[0].files[0],$("#PtBSModelform #ptbsmodelimage")[0].files[0].name);
          ptbsmodelformData.append("PIT_BSMODEL_VIDEO", $("#PtBSModelform #ptbsmodelvideo")[0].files[0],$("#PtBSModelform #ptbsmodelvideo")[0].files[0].name);
          
        }

        // console.log(rsformData);

        if (window.isEmpty($("#PtBSModelform #ptbsmodelid").val())) {

          UploadService.create("/ptbusiness", ptbsmodelformData)
            .then(response => {
              console.log("inside");
              window.showLoader();
              window.showAlert("The Pitch Business Model is submittted", "/Business_Model");
            })
            .catch(e => {
              window.showLoader();
              window.showAlert("OOps!!! Something went wrong", "/Business_Model");
            });

        } else {


          UploadService.update("/ptbusiness/" + Number($("#PtBSModelform #ptbsmodelid").val()), ptbsmodelformData)
            .then(response => {
              window.showLoader();
              window.showAlert("The Pitch Business Model is submittted", "/Business_Model");
            })
            .catch(e => {
              window.showLoader();
              window.showAlert("OOps!!! Something went wrong", "/Business_Model");
            });

        }


        // });



      } else {
        window.showAlert("Please Login", "/Login");
      }
    }

  }



  validatePtBsModel(){
    console.log("inside validatePtBsModel validations")
    let input = this.state.input;
    let errors = {};
    let isValid = true;

    if (window.isEmpty($("#PtBSModelform #ptbsmodelheader").val())) {
      isValid = false;
      errors["ptbsmodelheader"] = "Please enter header.";
      $("#PtBSModelform #ptbsmodelheader").focus();
    }
 
    if (window.isEmpty($("#PtBSModelform").find("label[for=createpitchbody]").closest("div").find("div").find("span[data-text=true]").text())) {
      isValid = false;
      errors["createpitchbody"] = "Please enter Body";
      $("#PtBSModelform #createpitchbody").focus();
    }

  if (window.isEmpty($("#PtBSModelform #ptbsmodelid").val())) {
    if (!$("#PtBSModelform #ptbsmodelimage").get(0).files.length  > 0) {
      isValid = false;
      errors["ptbsmodelimage"] = "Please Upload Image";
      $("#PtBSModelform #ptbsmodelimage").focus();
    }
  
    if (!$("#PtBSModelform #ptbsmodelvideo").get(0).files.length  > 0) {
      isValid = false;
      errors["ptbsmodelvideo"] = "Please Upload Video";
      $("#PtBSModelform #ptbsmodelvideo").focus();
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
                   <li class="nav-item">  <a  class="nav-link active"  style={{border:"1px solid #ccc"}}  aria-current="page"  href='/Business_Model'><Image src={require('./../../assets/images/p5.webp')}alt="Features tile icon 01"  width={50} height={50}  /><p style={{fontSize:13}}>Business<br/>Model</p></a> 
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
                                        <h4>Business Model</h4>


                                        <form name="PtBSModelform" id="PtBSModelform" method="POST" enctype="multipart/form-data"  >  

<div className="col-md-12"  > 
  
    <div className="col-md-8 mb-3 ">
    <label for="ptbsmodelheader" className="form-label">Header</label>
    <input name="ptbsmodelid" id="ptbsmodelid" type="hidden"  />
     
    <input
                              name="ptbsmodelheader" 
                              type="text" 
                              value={this.state.input.ptbsmodelheader} 
                              className="form-control" 
                              placeholder="Enter Your header/title here"
                              length="150" 
                              id="ptbsmodelheader"/>
                         
          <div className="text-danger errors" style={{fontSize:15}}>{this.state.errors.ptbsmodelheader}</div>
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
    <label for="ptbsmodelimage" className="col-sm-2 form-label">Images</label>
    </div>

    <div className="col-md-4 imgUp">    
     
          <label className="col-md-12 btn btn-outline-secondary btn-sm">
                Upload a picture<br/>
                <input type="file" id="ptbsmodelimage" name="ptbsmodelimage" 
                accept="image/*"   multiple 
                style={{height:"0px",width:"0px",overflow : "hidden"}}/>
                  </label>
                  <div className="text-danger errors" style={{fontSize:15}}>{this.state.errors.ptbsmodelimage}</div>
            
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
                <input type="file" id="ptbsmodelvideo" name="ptbsmodelvideo" className="form-control"  multiple 
                /> 
                  <div className="text-danger errors" style={{fontSize:15}}>{this.state.errors.ptbsmodelvideo}</div>
              
             
            </div>   

    </div>
 

  </div>
     
 </div>
 <div className="col-md-12 mt-5">
 <div className="row">
  <div className="col-md-3 mb-3">
  <button type="button" className="btn btn-success btn-sm  w-100"  onClick={this.savePtBSModel}>Submit</button>

  </div>
  <div className="col-md-3 mb-3">
<a href="/Competition">
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



export default Business_Model;