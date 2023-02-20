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
class Protential_returns extends React.Component {
    constructor() {
    super();
    this.state = {
      PtPotreturnAllDets: [],
      currentPtPotret: null,
      currentPtPotretIndex: -1,
      input: {},
      errors: {},
      ID:null,
      MTUSER_ID:null,
      EMAIL:null,
      MODULE:null,
      PIT_POTRET_HEADER:"",
      PIT_POTRET_BODY:"",
      PIT_POTRET_IMAGE:"",
      PIT_POTRET_VIDEO:"", 
      STATUS:"",
      COMMENTS:"",
      DESCRIPTION:"",
      CREATED_USER:"",
      CREATED_DATE:"",
      MODIFIED_USER:"",
      MODIFIED_DATE:"", 
    };
     
    this.savePtPotRet = this.savePtPotRet.bind(this);  
    this.retrieveAllPtPotRet = this.retrieveAllPtPotRet.bind(this);
    this.setActivePtPotRet = this.setActivePtPotRet.bind(this);
  }
    
  
  
  componentDidMount() {
    this.retrieveAllPtPotRet(); 
  }


  retrieveAllPtPotRet() {
    var querySet = "/potreturns?EMAIL=" + sessionStorage.getItem("sessEmail");
    console.log(querySet);
    DataService.findByTitle(querySet)
      .then(response => {
        this.setState({
          PtPotreturnAllDets: response.data, 
        });

         $.each(this.state.PtPotreturnAllDets, function (index, value) {
  

        $("#PtPotReturnsform #potreturnsid").attr("value", value.ID).val(value.ID);
        $("#PtPotReturnsform #ptpotretheader").attr("value", value.PIT_POTRET_HEADER).val(value.PIT_POTRET_HEADER).prop("readonly","true");
        $("#PtPotReturnsform").find("label[for=ptpotretbody]").closest("div").find("div").find("span[data-offset-key]").text(value.PIT_POTRET_BODY)
        // $($(".imagePreview")[index]).css("background-image","url("+window.mt_backend_url+value.PROFILE_PIC+")");
        // $($("#TeamInfoform #tmuploadprofile")[index]).closest("label").css("visibility","hidden");
        $("#PtPotReturnsform #ptpotretimage").closest(".imgUp").find('.imagePreview').css("background-image", "url("+window.mt_backend_url+value.PIT_POTRET_IMAGE+")");
        $("#PtPotReturnsform #ptpotretimage").closest("label").css("visibility","hidden");
       //uploadAreaRaise
         if(value.PIT_POTRET_VIDEO.length > 0){ 
          $("#PtPotReturnsform #ptpotretvideo").closest("div").html("<p>Download file: <a class='text-primary' target='_blank' href="+window.mt_backend_url+value.PIT_POTRET_VIDEO+">"+extractFilename(value.PIT_POTRET_VIDEO)+"</a></p>");
        }else{
          $("#PtPotReturnsform #ptpotretvideo").closest("div").html('<input type="file" id="ptpotretvideo" name="ptpotretvideo" className="form-control"  multiple />');
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


  setActivePtPotRet(PtPotreturnAllDets, index) {
    this.setState({
      currentPtPotret: PtPotreturnAllDets,
      currentPtPotretIndex: index,
      // tfcurrentFile:this.state.tfcurrentFile
    });
  }


  savePtPotRet(event) {
    event.preventDefault();
    if (this.validatePtPotRet()) {
      if (!window.isEmpty(sessionStorage.getItem("sessEmail"))) {
           
        let PtPotretformData = new FormData();  
        PtPotretformData.append("ID",Number($("#PtPotReturnsform #potreturnsid").val()));
        PtPotretformData.append("MTUSER_ID",$("#mtuser_id").val());
        PtPotretformData.append("EMAIL",$("#mtuser_email").val()); 
        PtPotretformData.append("MODULE",$("#mtuser_module").val());
        PtPotretformData.append("PIT_POTRET_HEADER",$("#PtPotReturnsform #ptpotretheader").val());
        PtPotretformData.append("PIT_POTRET_BODY",$("#PtPotReturnsform").find("label[for=ptpotretbody]").closest("div").find("div").find("span[data-text=true]").text());
        PtPotretformData.append("STATUS","Active");
        PtPotretformData.append("COMMENTS", "TEST");
        PtPotretformData.append("DESCRIPTION", "TEST");
        PtPotretformData.append("CREATED_USER", $("#mtuser_fname").val());
        PtPotretformData.append("CREATED_DATE", Moment(date).format("YYYY-MM-DD"));
        PtPotretformData.append("MODIFIED_USER", $("#mtuser_fname").val());
        PtPotretformData.append("MODIFIED_DATE", Moment(date).format("YYYY-MM-DD"));
         
     
        if (window.isEmpty($("#PtPotReturnsform #potreturnsid").val())) {
          PtPotretformData.append("PIT_POTRET_IMAGE", $("#PtPotReturnsform #ptpotretimage")[0].files[0],$("#PtPotReturnsform #ptpotretimage")[0].files[0].name);
          PtPotretformData.append("PIT_POTRET_VIDEO", $("#PtPotReturnsform #ptpotretvideo")[0].files[0],$("#PtPotReturnsform #ptpotretvideo")[0].files[0].name);
          
        }

        // console.log(rsformData);

        if (window.isEmpty($("#PtPotReturnsform #potreturnsid").val())) {

          UploadService.create("/potreturns", PtPotretformData)
            .then(response => {
              console.log("inside");
              window.showLoader();
              window.showAlert("The Pitch Potential Returns is submittted", "/Potential_Returns");
            })
            .catch(e => {
              window.showLoader();
              window.showAlert("OOps!!! Something went wrong", "/Potential_Returns");
            });

        } else {


          UploadService.update("/potreturns/" + Number($("#PtPotReturnsform #potreturnsid").val()), PtPotretformData)
            .then(response => {
              window.showLoader();
              window.showAlert("The Pitch Potential Returns is submittted", "/Potential_Returns");
            })
            .catch(e => {
              window.showLoader();
              window.showAlert("OOps!!! Something went wrong", "/Potential_Returns");
            });

        }


        // });



      } else {
        window.showAlert("Please Login", "/Login");
      }
    }

  }



  validatePtPotRet(){
    console.log("inside validatePtPotRet validations")
    let input = this.state.input;
    let errors = {};
    let isValid = true;

    if (window.isEmpty($("#PtPotReturnsform #ptpotretheader").val())) {
      isValid = false;
      errors["ptpotretheader"] = "Please enter header.";
      $("#PtPotReturnsform #ptpotretheader").focus();
    }
 
    if (window.isEmpty($("#PtPotReturnsform").find("label[for=ptpotretbody]").closest("div").find("div").find("span[data-text=true]").text())) {
      isValid = false;
      errors["ptpotretbody"] = "Please enter Body";
      $("#PtPotReturnsform #ptpotretbody").focus();
    }

    if (window.isEmpty($("#PtPotReturnsform #potreturnsid").val())) {
    if (!$("#PtPotReturnsform #ptpotretimage").get(0).files.length  > 0) {
      isValid = false;
      errors["ptpotretimage"] = "Please Upload Image";
      $("#PtPotReturnsform #ptpotretimage").focus();
    }
  
    if (!$("#PtPotReturnsform #ptpotretvideo").get(0).files.length  > 0) {
      isValid = false;
      errors["ptpotretvideo"] = "Please Upload Video";
      $("#PtPotReturnsform #ptpotretvideo").focus();
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
                     <a  class="nav-link" href='/Vision'><Image  style={{opacity:"0.5"}}     src={require('./../../assets/images/900.png')}alt="Features tile icon 01"  width={50} height={50}  /><p style={{fontSize:13}}>Vision</p></a>  
                   </li>
                   <li class="nav-item">
                  <a class="nav-link active"  style={{border:"1px solid #ccc"}}  aria-current="page"   href='/Potential_Returns'><Image src={require('./../../assets/images/p10.webp')}alt="Features tile icon 01"  width={50} height={50}  /><p style={{fontSize:13}}>Potential<br/>Reutrns</p></a> 
                   </li>
</ul>

 </div> 
                  
                    <div className='row' style={{height:'auto'}}>
                    <div className='col-md-12'>
                                        <h4>Potential Returns</h4>


                                        <form name="PtPotReturnsform" id="PtPotReturnsform" method="POST" enctype="multipart/form-data"  >  

<div className="col-md-12"  > 
  
    <div className="col-md-8 mb-3 ">
    <label for="ptpotretheader" className="form-label">Header</label>
    <input name="potreturnsid" id="potreturnsid" type="hidden"  />
     
    <input
                              name="ptpotretheader" 
                              type="text" 
                              value={this.state.input.ptpotretheader} 
                              className="form-control" 
                              placeholder="Enter Your header/title here"
                              length="150" 
                              id="ptpotretheader"/>
                         
          <div className="text-danger errors" style={{fontSize:15}}>{this.state.errors.ptpotretheader}</div>
    </div> 

    
    <div className="col-md-8 mb-3 mt-3" >
    <label for="ptpotretbody" className="form-label">Body</label>
    <div style={{ height:'300px',backgroundColor:"white"}} className="border">
                  
    <Editor  
                      toolbarClassName="toolbarClassName"
                      wrapperClassName="wrapperClassName"
                      editorClassName="editorClassName"
                      name="ptpotretbody"
                      value={this.state.input.ptpotretbody}
                      maxlength="500"
                      id="ptpotretbody" 
                    />
                    </div>
          <div className="text-danger errors" style={{fontSize:15}}>{this.state.errors.ptpotretbody}</div>
    </div> 
 

  <div className="col-md-8 mb-3 mt-3">
    <div className="row mb-3">
    <div className="col-md-8">
    <label for="ptpotretimage" className="col-sm-2 form-label">Images</label>
    </div>

    <div className="col-md-4 imgUp">    
     
          <label className="col-md-12 btn btn-outline-secondary btn-sm">
                Upload a picture<br/>
                <input type="file" id="ptpotretimage" name="ptpotretimage" 
                accept="image/*"   multiple 
                style={{height:"0px",width:"0px",overflow : "hidden"}}/>
                  </label>
                  <div className="text-danger errors" style={{fontSize:15}}>{this.state.errors.ptpotretimage}</div>
            
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
                <input type="file" id="ptpotretvideo" name="ptpotretvideo" className="form-control"  multiple 
                /> 
                  <div className="text-danger errors" style={{fontSize:15}}>{this.state.errors.ptpotretvideo}</div>
              
             
            </div>   

    </div>
 

  </div>
     
 </div>
 <div className="col-md-12 mt-5">
 <div className="row">
  <div className="col-md-3 mb-3">
  <button type="button" className="btn btn-success btn-sm  w-100"  onClick={this.savePtPotRet}>Submit</button>

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



export default Protential_returns;