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
class Product extends React.Component {
    constructor() {
    super();
    this.state = {
      ptProductAllDets: [],
      currentptProduct: null,
      currentptProductIndex: -1,
      input: {},
      errors: {},
      ID:null,
      MTUSER_ID:null,
      EMAIL:null,
      MODULE:null,
      PIT_PROD_HEADER:"",
      PIT_PROD_BODY:"",
      PIT_PROD_IMAGE:"",
      PIT_PROD_VIDEO:"", 
      STATUS:"",
      COMMENTS:"",
      DESCRIPTION:"",
      CREATED_USER:"",
      CREATED_DATE:"",
      MODIFIED_USER:"",
      MODIFIED_DATE:"", 
    };
     
    this.savePtProduct = this.savePtProduct.bind(this);  
    this.retrieveAllPtProduct = this.retrieveAllPtProduct.bind(this);
    this.setActivePtProduct = this.setActivePtProduct.bind(this);
  }
    
  
  
  componentDidMount() {
    this.retrieveAllPtProduct(); 
  }


  retrieveAllPtProduct() {
    var querySet = "/ptproduct?EMAIL="+ sessionStorage.getItem("sessEmail");
    console.log(querySet);
    DataService.findByTitle(querySet)
      .then(response => {
        this.setState({
          ptProductAllDets: response.data, 
        });


         $.each(this.state.ptProductAllDets, function (index, value) { 
        
        $("#ptProductform #ptproductid").attr("value", value.ID).val(value.ID);
        $("#ptProductform #ptproductheader").attr("value", value.PIT_PROD_HEADER).val(value.PIT_PROD_HEADER).prop("readonly","true");
        $("#ptProductform").find("label[for=ptproductbody]").closest("div").find("div").find("span[data-offset-key]").text(value.PIT_PROD_BODY)
        // $($(".imagePreview")[index]).css("background-image","url("+window.mt_backend_url+value.PROFILE_PIC+")");
        // $($("#TeamInfoform #tmuploadprofile")[index]).closest("label").css("visibility","hidden");
        $("#ptProductform #ptproductimage").closest(".imgUp").find('.imagePreview').css("background-image", "url("+window.mt_backend_url+value.PIT_PROD_IMAGE+")");
        $("#ptProductform #ptproductimage").closest("label").css("visibility","hidden");
       //uploadAreaRaise
         if(value.PIT_PROD_VIDEO.length > 0){ 
          $("#ptProductform #ptproductvideo").closest("div").html("<p>Download file: <a class='text-primary' target='_blank' href="+window.mt_backend_url+value.PIT_PROD_VIDEO+">"+extractFilename(value.PIT_PROD_VIDEO)+"</a></p>");
        }else{
          $("#ptProductform #ptproductvideo").closest("div").html('<input type="file" id="ptproductvideo" name="ptproductvideo" className="form-control"  multiple />');
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


  setActivePtProduct(ptProductAllDets, index) {
    this.setState({
      currentptProduct: ptProductAllDets,
      currentptProductIndex: index,
      // tfcurrentFile:this.state.tfcurrentFile
    });
  }


  savePtProduct(event) {
    event.preventDefault();
    if (this.validatePtProduct()) {
      if (!window.isEmpty(sessionStorage.getItem("sessEmail"))) {
           
        let ptproductformData = new FormData();  
        ptproductformData.append("ID",Number($("#ptProductform #ptproductid").val()));
        ptproductformData.append("MTUSER_ID",$("#mtuser_id").val());
        ptproductformData.append("EMAIL",$("#mtuser_email").val()); 
        ptproductformData.append("MODULE",$("#mtuser_module").val());
        ptproductformData.append("PIT_PROD_HEADER",$("#ptProductform #ptproductheader").val());
        ptproductformData.append("PIT_PROD_BODY",$("#ptProductform").find("label[for=ptproductbody]").closest("div").find("div").find("span[data-text=true]").text());
        ptproductformData.append("STATUS","Active");
        ptproductformData.append("COMMENTS", "TEST");
        ptproductformData.append("DESCRIPTION", "TEST");
        ptproductformData.append("CREATED_USER", $("#mtuser_fname").val());
        ptproductformData.append("CREATED_DATE", Moment(date).format("YYYY-MM-DD"));
        ptproductformData.append("MODIFIED_USER", $("#mtuser_fname").val());
        ptproductformData.append("MODIFIED_DATE", Moment(date).format("YYYY-MM-DD"));
         
     
        if (window.isEmpty($("#ptProductform #ptproductid").val())) {
          ptproductformData.append("PIT_PROD_IMAGE", $("#ptProductform #ptproductimage")[0].files[0],$("#ptProductform #ptproductimage")[0].files[0].name);
          ptproductformData.append("PIT_PROD_VIDEO", $("#ptProductform #ptproductvideo")[0].files[0],$("#ptProductform #ptproductvideo")[0].files[0].name); 
        }

        // console.log(rsformData);

        if (window.isEmpty($("#ptProductform #ptproductid").val())) { 
          UploadService.create("/ptproduct", ptproductformData)
            .then(response => {
              console.log("inside");
              window.showLoader();
              window.showAlert("The Pitch Product is submittted", "/Startup_Dashboard");
            })
            .catch(e => {
              window.showLoader();
              window.showAlert("OOps!!! Something went wrong", "/Product");
            });

        } else {


          UploadService.update("/ptproduct/" + Number($("#ptProductform #ptproductid").val()), ptproductformData)
            .then(response => {
              window.showLoader();
              window.showAlert("The Pitch Product is submittted", "/Startup_Dashboard");
            })
            .catch(e => {
              window.showLoader();
              window.showAlert("OOps!!! Something went wrong", "/Product");
            });

        }


        // });



      } else {
        window.showAlert("Please Login", "/Login");
      }
    }

  }



  validatePtProduct(){
    console.log("inside validatePtProduct validations")
    let input = this.state.input;
    let errors = {};
    let isValid = true;

    if (window.isEmpty($("#ptProductform #ptproductheader").val())) {
      isValid = false;
      errors["ptproductheader"] = "Please enter header.";
      $("#ptProductform #ptproductheader").focus();
    }
 
    if (window.isEmpty($("#ptProductform").find("label[for=ptproductbody]").closest("div").find("div").find("span[data-text=true]").text())) {
      isValid = false;
      errors["ptproductbody"] = "Please enter Body";
      $("#ptProductform #ptproductbody").focus();
    }

    if (window.isEmpty($("#ptProductform #ptproductid").val())) {
    if (!$("#ptProductform #ptproductimage").get(0).files.length  > 0) {
      isValid = false;
      errors["ptproductimage"] = "Please Upload Image";
      $("#ptProductform #ptproductimage").focus();
    }
  
    if (!$("#ptProductform #ptproductvideo").get(0).files.length  > 0) {
      isValid = false;
      errors["ptproductvideo"] = "Please Upload Video";
      $("#ptProductform #ptproductvideo").focus();
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
  <a  class="nav-link active"  style={{border:"1px solid #ccc"}}  aria-current="page"   href='/Product'><Image  src={require('./../../assets/images/p003.png')} alt="Features tile icon 01"  width={50} height={50} /><p style={{fontSize:13}}>Product</p></a>  
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
                                        <h4>Product</h4>


                                        <form name="ptProductform" id="ptProductform" method="POST" enctype="multipart/form-data"  >  

<div className="col-md-12"  > 
  
    <div className="col-md-8 mb-3 ">
    <label for="ptproductheader" className="form-label">Header</label>
    <input name="ptproductid" id="ptproductid" type="hidden"  />
     
    <input
                              name="ptproductheader" 
                              type="text" 
                              value={this.state.input.ptproductheader} 
                              className="form-control" 
                              placeholder="Enter Your header/title here"
                              length="150" 
                              id="ptproductheader"/>
                         
          <div className="text-danger errors" style={{fontSize:15}}>{this.state.errors.ptproductheader}</div>
    </div> 

    
    <div className="col-md-8 mb-3 mt-3" >
    <label for="ptproductbody" className="form-label">Body</label>
    <div style={{ height:'300px',backgroundColor:"white"}} className="border">
                  
    <Editor  
                      toolbarClassName="toolbarClassName"
                      wrapperClassName="wrapperClassName"
                      editorClassName="editorClassName"
                      name="ptproductbody"
                      value={this.state.input.ptproductbody}
                      maxlength="500"
                      id="ptproductbody" 
                    />
                    </div>
          <div className="text-danger errors" style={{fontSize:15}}>{this.state.errors.ptproductbody}</div>
    </div> 
 

  <div className="col-md-8 mb-3 mt-3">
    <div className="row mb-3">
    <div className="col-md-8">
    <label for="ptproductimage" className="col-sm-2 form-label">Images</label>
    </div>

    <div className="col-md-4 imgUp">    
     
          <label className="col-md-12 btn btn-outline-secondary btn-sm">
                Upload a picture<br/>
                <input type="file" id="ptproductimage" name="ptproductimage" 
                accept="image/*"   multiple 
                style={{height:"0px",width:"0px",overflow : "hidden"}}/>
                  </label>
                  <div className="text-danger errors" style={{fontSize:15}}>{this.state.errors.ptproductimage}</div>
            
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
                <input type="file" id="ptproductvideo" name="ptproductvideo" className="form-control"  multiple 
                /> 
                  <div className="text-danger errors" style={{fontSize:15}}>{this.state.errors.ptproductvideo}</div>
              
             
            </div>   

    </div>
 

  </div>
     
 </div>
 <div className="col-md-12 mt-5">
 <div className="row">
  <div className="col-md-3 mb-3">
  <button type="button" className="btn btn-success btn-sm  w-100"  onClick={this.savePtProduct}>Submit</button>

  </div>
  <div className="col-md-3 mb-3">
<a href="/Transaction">
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



export default Product;