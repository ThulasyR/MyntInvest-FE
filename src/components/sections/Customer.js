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
class Customer extends React.Component {
    constructor() {
    super();
    this.state = {
      ptcustAllDets: [],
      currentptcust: null,
      currentptcustIndex: -1,
      input: {},
      errors: {},
      ID:null,
      MTUSER_ID:null,
      EMAIL:null,
      MODULE:null,
      PIT_CUST_HEADER:"",
      PIT_CUST_BODY:"",
      PIT_CUST_IMAGE:"",
      PIT_CUST_VIDEO:"", 
      STATUS:"",
      COMMENTS:"",
      DESCRIPTION:"",
      CREATED_USER:"",
      CREATED_DATE:"",
      MODIFIED_USER:"",
      MODIFIED_DATE:"", 
    };
     
    this.savePtCust = this.savePtCust.bind(this);  
    this.retrieveAllPtCust = this.retrieveAllPtCust.bind(this);
    this.setActivePtCust = this.setActivePtCust.bind(this);
  }
    
  
  
  componentDidMount() {
    this.retrieveAllPtCust(); 
  }


  retrieveAllPtCust() {
    var querySet = "/ptcustomer?EMAIL=" + sessionStorage.getItem("sessEmail");
    console.log(querySet);
    DataService.findByTitle(querySet)
      .then(response => {
        this.setState({
          ptcustAllDets: response.data, 
        });

         $.each(this.state.ptcustAllDets, function (index, value) {
  

        $("#PtCustomerform #ptcustid").attr("value", value.ID).val(value.ID);
        $("#PtCustomerform #ptcustheader").attr("value", value.PIT_CUST_HEADER).val(value.PIT_CUST_HEADER).prop("readonly","true");
        $("#PtCustomerform").find("label[for=ptcustbody]").closest("div").find("div").find("span[data-offset-key]").text(value.PIT_CUST_BODY)
        // $($(".imagePreview")[index]).css("background-image","url("+window.mt_backend_url+value.PROFILE_PIC+")");
        // $($("#TeamInfoform #tmuploadprofile")[index]).closest("label").css("visibility","hidden");
        $("#PtCustomerform #ptcustimage").closest(".imgUp").find('.imagePreview').css("background-image", "url("+window.mt_backend_url+value.PIT_CUST_IMAGE+")");
        $("#PtCustomerform #ptcustimage").closest("label").css("visibility","hidden");
       //uploadAreaRaise
         if(value.PIT_CUST_VIDEO.length > 0){ 
          $("#PtCustomerform #ptcustvideo").closest("div").html("<p>Download file: <a class='text-primary' target='_blank' href="+window.mt_backend_url+value.PIT_CUST_VIDEO+">"+extractFilename(value.PIT_CUST_VIDEO)+"</a></p>");
        }else{
          $("#PtCustomerform #ptcustvideo").closest("div").html('<input type="file" id="ptcustvideo" name="ptcustvideo" className="form-control"  multiple />');
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


  setActivePtCust(ptcustAllDets, index) {
    this.setState({
      currentptcust: ptcustAllDets,
      currentptcustIndex: index,
      // tfcurrentFile:this.state.tfcurrentFile
    });
  }


  savePtCust(event) {
    event.preventDefault();
    if (this.validatePtCustomer()) {
      if (!window.isEmpty(sessionStorage.getItem("sessEmail"))) {
           
        let ptcustformData = new FormData();  
        ptcustformData.append("ID",Number($("#PtCustomerform #ptcustid").val()));
        ptcustformData.append("MTUSER_ID",$("#mtuser_id").val());
        ptcustformData.append("EMAIL",$("#mtuser_email").val()); 
        ptcustformData.append("MODULE",$("#mtuser_module").val());
        ptcustformData.append("PIT_CUST_HEADER",$("#PtCustomerform #ptcustheader").val());
        ptcustformData.append("PIT_CUST_BODY",$("#PtCustomerform").find("label[for=ptcustbody]").closest("div").find("div").find("span[data-text=true]").text());
        ptcustformData.append("STATUS","Active");
        ptcustformData.append("COMMENTS", "TEST");
        ptcustformData.append("DESCRIPTION", "TEST");
        ptcustformData.append("CREATED_USER", $("#mtuser_fname").val());
        ptcustformData.append("CREATED_DATE", Moment(date).format("YYYY-MM-DD"));
        ptcustformData.append("MODIFIED_USER", $("#mtuser_fname").val());
        ptcustformData.append("MODIFIED_DATE", Moment(date).format("YYYY-MM-DD"));
         
     
        if (window.isEmpty($("#PtCustomerform #ptcustid").val())) {
          ptcustformData.append("PIT_CUST_IMAGE", $("#PtCustomerform #ptcustimage")[0].files[0],$("#PtCustomerform #ptcustimage")[0].files[0].name);
          ptcustformData.append("PIT_CUST_VIDEO", $("#PtCustomerform #ptcustvideo")[0].files[0],$("#PtCustomerform #ptcustvideo")[0].files[0].name);
          
        }

        // console.log(rsformData);

        if (window.isEmpty($("#PtCustomerform #ptcustid").val())) {

          UploadService.create("/ptcustomer", ptcustformData)
            .then(response => {
              console.log("inside");
              window.showLoader();
              window.showAlert("The Pitch Customer is submittted", "/Customer");
            })
            .catch(e => {
              window.showLoader();
              window.showAlert("OOps!!! Something went wrong", "/Customer");
            });

        } else {


          UploadService.update("/ptcustomer/" + Number($("#PtCustomerform #ptcustid").val()), ptcustformData)
            .then(response => {
              window.showLoader();
              window.showAlert("The Pitch Customer is submittted", "/Customer");
            })
            .catch(e => {
              window.showLoader();
              window.showAlert("OOps!!! Something went wrong", "/Customer");
            });

        }


        // });



      } else {
        window.showAlert("Please Login", "/Login");
      }
    }

  }



  validatePtCustomer(){
    console.log("inside validatePtCustomer validations")
    let input = this.state.input;
    let errors = {};
    let isValid = true;

    if (window.isEmpty($("#PtCustomerform #ptcustheader").val())) {
      isValid = false;
      errors["ptcustheader"] = "Please enter header.";
      $("#PtCustomerform #ptcustheader").focus();
    }
 
    if (window.isEmpty($("#PtCustomerform").find("label[for=ptcustbody]").closest("div").find("div").find("span[data-text=true]").text())) {
      isValid = false;
      errors["ptcustbody"] = "Please enter Body";
      $("#PtCustomerform #ptcustbody").focus();
    }
    if (window.isEmpty($("#PtCustomerform #ptcustid").val())) {
 
    if (!$("#PtCustomerform #ptcustimage").get(0).files.length  > 0) {
      isValid = false;
      errors["ptcustimage"] = "Please Upload Image";
      $("#PtCustomerform #ptcustimage").focus();
    }
  
    if (!$("#PtCustomerform #ptcustvideo").get(0).files.length  > 0) {
      isValid = false;
      errors["ptcustvideo"] = "Please Upload Video";
      $("#PtCustomerform #ptcustvideo").focus();
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
                   <li class="nav-item"> <a  class="nav-link active"  style={{border:"1px solid #ccc"}}  aria-current="page"  href='/Customer'><Image src={require('./../../assets/images/p7.jpg')}alt="Features tile icon 01"  width={50} height={50}  /><p style={{fontSize:13}}>Customers</p></a>  
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
                                        <h4>Customer</h4>


                                        <form name="PtCustomerform" id="PtCustomerform" method="POST" enctype="multipart/form-data"  >  

<div className="col-md-12"  > 
  
    <div className="col-md-8 mb-3 ">
    <label for="ptcustheader" className="form-label">Header</label>
    <input name="ptcustid" id="ptcustid" type="hidden"  />
     
    <input
                              name="ptcustheader" 
                              type="text" 
                              value={this.state.input.ptcustheader} 
                              className="form-control" 
                              placeholder="Enter Your header/title here"
                              length="150" 
                              id="ptcustheader"/>
                         
          <div className="text-danger errors" style={{fontSize:15}}>{this.state.errors.ptcustheader}</div>
    </div> 

    
    <div className="col-md-8 mb-3 mt-3" >
    <label for="ptcustbody" className="form-label">Body</label>
    <div style={{ height:'300px',backgroundColor:"white"}} className="border">
                  
    <Editor  
                      toolbarClassName="toolbarClassName"
                      wrapperClassName="wrapperClassName"
                      editorClassName="editorClassName"
                      name="ptcustbody"
                      value={this.state.input.ptcustbody}
                      maxlength="500"
                      id="ptcustbody" 
                    />
                    </div>
          <div className="text-danger errors" style={{fontSize:15}}>{this.state.errors.ptcustbody}</div>
    </div> 
 

  <div className="col-md-8 mb-3 mt-3">
    <div className="row mb-3">
    <div className="col-md-8">
    <label for="ptcustimage" className="col-sm-2 form-label">Images</label>
    </div>

    <div className="col-md-4 imgUp">    
     
          <label className="col-md-12 btn btn-outline-secondary btn-sm">
                Upload a picture<br/>
                <input type="file" id="ptcustimage" name="ptcustimage" 
                accept="image/*"   multiple 
                style={{height:"0px",width:"0px",overflow : "hidden"}}/>
                  </label>
                  <div className="text-danger errors" style={{fontSize:15}}>{this.state.errors.ptcustimage}</div>
            
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
                <input type="file" id="ptcustvideo" name="ptcustvideo" className="form-control"  multiple 
                /> 
                  <div className="text-danger errors" style={{fontSize:15}}>{this.state.errors.ptcustvideo}</div>
              
             
            </div>   

    </div>
 

  </div>
     
 </div>
 <div className="col-md-12 mt-5">
 <div className="row">
  <div className="col-md-3 mb-3">
  <button type="button" className="btn btn-success btn-sm  w-100"  onClick={this.savePtCust}>Submit</button>

  </div>
  <div className="col-md-3 mb-3">
<a href="/Usage">
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



export default Customer;