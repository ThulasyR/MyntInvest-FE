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
class Transaction extends React.Component {
    constructor() {
    super();
    this.state = {
      ptTransactionAllDets: [],
      currentptTransction: null,
      currentptTransctionIndex: -1,
      input: {},
      errors: {},
      ID:null,
      MTUSER_ID:null,
      EMAIL:null,
      MODULE:null,
      PIT_TRANS_HEADER:"",
      PIT_TRANS_BODY:"",
      PIT_TRANS_IMAGE:"",
      PIT_TRANS_VIDEO:"", 
      STATUS:"",
      COMMENTS:"",
      DESCRIPTION:"",
      CREATED_USER:"",
      CREATED_DATE:"",
      MODIFIED_USER:"",
      MODIFIED_DATE:"", 
    };
     
    this.saveptTransaction = this.saveptTransaction.bind(this);  
    this.retrieveAllptTransaction = this.retrieveAllptTransaction.bind(this);
    this.setActivePtTransaction = this.setActivePtTransaction.bind(this);
  }
    
  
  
  componentDidMount() {
    this.retrieveAllptTransaction(); 
  }


  retrieveAllptTransaction() {
    var querySet = "/pttransaction?EMAIL=" + sessionStorage.getItem("sessEmail");
    console.log(querySet);
    DataService.findByTitle(querySet)
      .then(response => {
        this.setState({
          ptTransactionAllDets: response.data, 
        });

         $.each(this.state.ptTransactionAllDets, function (index, value) {
  

        $("#Transactionform #pttransid").attr("value", value.ID).val(value.ID);
        $("#Transactionform #pttransheader").attr("value", value.PIT_TRANS_HEADER).val(value.PIT_TRANS_HEADER).prop("readonly","true");
        $("#Transactionform").find("label[for=pttransbody]").closest("div").find("div").find("span[data-offset-key]").text(value.PIT_TRANS_BODY)
        // $($(".imagePreview")[index]).css("background-image","url("+window.mt_backend_url+value.PROFILE_PIC+")");
        // $($("#TeamInfoform #tmuploadprofile")[index]).closest("label").css("visibility","hidden");
        $("#Transactionform #pttransimage").closest(".imgUp").find('.imagePreview').css("background-image", "url("+window.mt_backend_url+value.PIT_TRANS_IMAGE+")");
        $("#Transactionform #pttransimage").closest("label").css("visibility","hidden");
       //uploadAreaRaise
         if(value.PIT_TRANS_VIDEO.length > 0){ 
          $("#Transactionform #pttransvideo").closest("div").html("<p>Download file: <a class='text-primary' target='_blank' href="+window.mt_backend_url+value.PIT_TRANS_VIDEO+">"+extractFilename(value.PIT_TRANS_VIDEO)+"</a></p>");
        }else{
          $("#Transactionform #pttransvideo").closest("div").html('<input type="file" id="pttransvideo" name="pttransvideo" className="form-control"  multiple />');
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


  setActivePtTransaction(ptTransactionAllDets, index) {
    this.setState({
      currentptTransction: ptTransactionAllDets,
      currentptTransctionIndex: index,
      // tfcurrentFile:this.state.tfcurrentFile
    });
  }


  saveptTransaction(event) {
    event.preventDefault();
    if (this.validatePtTransaction()) {
      if (!window.isEmpty(sessionStorage.getItem("sessEmail"))) {
           
        let pttransformData = new FormData();  
        pttransformData.append("ID",Number($("#Transactionform #pttransid").val()));
        pttransformData.append("MTUSER_ID",$("#mtuser_id").val());
        pttransformData.append("EMAIL",$("#mtuser_email").val()); 
        pttransformData.append("MODULE",$("#mtuser_module").val());
        pttransformData.append("PIT_TRANS_HEADER",$("#Transactionform #pttransheader").val());
        pttransformData.append("PIT_TRANS_BODY",$("#Transactionform").find("label[for=pttransbody]").closest("div").find("div").find("span[data-text=true]").text());
        pttransformData.append("STATUS","Active");
        pttransformData.append("COMMENTS", "TEST");
        pttransformData.append("DESCRIPTION", "TEST");
        pttransformData.append("CREATED_USER", $("#mtuser_fname").val());
        pttransformData.append("CREATED_DATE", Moment(date).format("YYYY-MM-DD"));
        pttransformData.append("MODIFIED_USER", $("#mtuser_fname").val());
        pttransformData.append("MODIFIED_DATE", Moment(date).format("YYYY-MM-DD"));
         
     
        if (window.isEmpty($("#Transactionform #pttransid").val())) {
          pttransformData.append("PIT_TRANS_IMAGE", $("#Transactionform #pttransimage")[0].files[0],$("#Transactionform #pttransimage")[0].files[0].name);
          pttransformData.append("PIT_TRANS_VIDEO", $("#Transactionform #pttransvideo")[0].files[0],$("#Transactionform #pttransvideo")[0].files[0].name);
          
        }

        // console.log(rsformData);

        if (window.isEmpty($("#Transactionform #pttransid").val())) {

          UploadService.create("/pttransaction", pttransformData)
            .then(response => {
              console.log("inside");
              window.showLoader();
              window.showAlert("The Pitch Transaction is submittted", "/Transaction");
            })
            .catch(e => {
              window.showLoader();
              window.showAlert("OOps!!! Something went wrong", "/Transaction");
            });

        } else {


          UploadService.update("/pttransaction/" + Number($("#Transactionform #pttransid").val()), pttransformData)
            .then(response => {
              window.showLoader();
              window.showAlert("The Pitch Transaction is submittted", "/Transaction");
            })
            .catch(e => {
              window.showLoader();
              window.showAlert("OOps!!! Something went wrong", "/Transaction");
            });

        }


        // });



      } else {
        window.showAlert("Please Login", "/Login");
      }
    }

  }



  validatePtTransaction(){
    console.log("inside validatePtTransaction validations")
    let input = this.state.input;
    let errors = {};
    let isValid = true;

    if (window.isEmpty($("#Transactionform #pttransheader").val())) {
      isValid = false;
      errors["pttransheader"] = "Please enter header.";
      $("#Transactionform #pttransheader").focus();
    }
 
    if (window.isEmpty($("#Transactionform").find("label[for=pttransbody]").closest("div").find("div").find("span[data-text=true]").text())) {
      isValid = false;
      errors["pttransbody"] = "Please enter Body";
      $("#Transactionform #pttransbody").focus();
    }

 
    if (window.isEmpty($("#Transactionform #pttransid").val())) {
    if (!$("#Transactionform #pttransimage").get(0).files.length  > 0) {
      isValid = false;
      errors["pttransimage"] = "Please Upload Image";
      $("#Transactionform #pttransimage").focus();
    }
  
    if (!$("#Transactionform #pttransvideo").get(0).files.length  > 0) {
      isValid = false;
      errors["pttransvideo"] = "Please Upload Video";
      $("#Transactionform #pttransvideo").focus();
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
   <a  class="nav-link active"  style={{border:"1px solid #ccc"}}  aria-current="page"  href='/Transaction'><Image src={require('./../../assets/images/p4.png')}alt="Features tile icon 01"  width={50} height={50}  /><p style={{fontSize:13}}>Transaction</p></a>   
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
                                        <h4>Transaction</h4>


                                        <form name="Transactionform" id="Transactionform" method="POST" enctype="multipart/form-data"  >  

<div className="col-md-12"  > 
  
    <div className="col-md-8 mb-3 ">
    <label for="pttransheader" className="form-label">Header</label>
    <input name="pttransid" id="pttransid" type="hidden"  />
     
    <input
                              name="pttransheader" 
                              type="text" 
                              value={this.state.input.pttransheader} 
                              className="form-control" 
                              placeholder="Enter Your header/title here"
                              length="150" 
                              id="pttransheader"/>
                         
          <div className="text-danger errors" style={{fontSize:15}}>{this.state.errors.pttransheader}</div>
    </div> 

    
    <div className="col-md-8 mb-3 mt-3" >
    <label for="pttransbody" className="form-label">Body</label>
    <div style={{ height:'300px',backgroundColor:"white"}} className="border">
                  
    <Editor  
                      toolbarClassName="toolbarClassName"
                      wrapperClassName="wrapperClassName"
                      editorClassName="editorClassName"
                      name="pttransbody"
                      value={this.state.input.pttransbody}
                      maxlength="500"
                      id="pttransbody" 
                    />
                    </div>
          <div className="text-danger errors" style={{fontSize:15}}>{this.state.errors.pttransbody}</div>
    </div> 
 

  <div className="col-md-8 mb-3 mt-3">
    <div className="row mb-3">
    <div className="col-md-8">
    <label for="pttransimage" className="col-sm-2 form-label">Images</label>
    </div>

    <div className="col-md-4 imgUp">    
     
          <label className="col-md-12 btn btn-outline-secondary btn-sm">
                Upload a picture<br/>
                <input type="file" id="pttransimage" name="pttransimage" 
                accept="image/*"   multiple 
                style={{height:"0px",width:"0px",overflow : "hidden"}}/>
                  </label>
                  <div className="text-danger errors" style={{fontSize:15}}>{this.state.errors.pttransimage}</div>
            
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
                <input type="file" id="pttransvideo" name="pttransvideo" className="form-control"  multiple 
                /> 
                  <div className="text-danger errors" style={{fontSize:15}}>{this.state.errors.pttransvideo}</div>
              
             
            </div>   

    </div>
 

  </div>
     
 </div>
 <div className="col-md-12 mt-5">
 <div className="row">
  <div className="col-md-3 mb-3">
  <button type="button" className="btn btn-success btn-sm  w-100"  onClick={this.saveptTransaction}>Submit</button>

  </div>
  <div className="col-md-3 mb-3">
<a href="/Business_Model">
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



export default Transaction;