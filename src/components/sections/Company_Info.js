import React from 'react';
import '../Css/styles.css';
import {NavLink,Link} from "react-router-dom";
import Image from '../elements/Image'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import DataService from '../../service/DataService'; 
import Moment from 'moment';
import $ from "jquery";
const current = new Date();
const date = `${current.getFullYear()}-${current.getMonth()+1}-${current.getDate()}`;//mysql insert date format
const formatDate = Moment("12/09/2002").format('YYYY-MM-DD')//2002-12-09


class Company_Info extends React.Component {
    constructor() {
    super();
    
    this.state = {
      companyAllDets: [],
      currentCinfo: null,
      currentCinfoIndex: -1,
      input: {},
      errors: {},
      ID: null,
      MTUSER_ID:null,
      EMAIL:null,
      MODULE:null,
      COUNTRY:"",
      STATE:"",
      CITY:"",
      PINCODE:"",
      ADDRESS:"",
      COMPANY_WEBSITE:"",
      FB_LINK:"",
      INSTA_LINK:"",
      LINKEDIN_LINK:"",
      LEGAL_NAME:"",
      CIN_NUMBER:"",
      DATE_OF_INCORPORATATION:"",
      ABOUT_COMPANY:"",
      AMOUNT_INVESTED:"",
      NO_OF_EMPLOYEES:"",
      STATUS:"",
      COMMENTS:"",
      DESCRIPTION:"",
      CREATED_USER:"",
      CREATED_DATE:"",
      MODIFIED_USER:"",
      MODIFIED_DATE:""
    };
     
    this.saveCompanyInfo = this.saveCompanyInfo.bind(this);  
    this.retrieveAllCompanyInfo = this.retrieveAllCompanyInfo.bind(this);
    this.setActiveCinfo = this.setActiveCinfo.bind(this);

  }
     
  componentDidMount() {
    this.retrieveAllCompanyInfo();
    // console.log(formatDate)
  }
  retrieveAllCompanyInfo() {
    console.log(sessionStorage.getItem("sessEmail"));
    var querySet = "/company_info?EMAIL="+sessionStorage.getItem("sessEmail");
    console.log(querySet);
    DataService.findByTitle(querySet)
     .then(response => {
       this.setState({
        companyAllDets: response.data, 
       });
       
        this.state.companyAllDets.map((cinfo, index) => (
            $("#companyinfoid").attr("value",cinfo.ID),
            $("#cicountry").attr("value",cinfo.COUNTRY),
            $("#cistate").attr("value",cinfo.STATE),
            $("#cicity").attr("value",cinfo.CITY),
            $("#cipincode").attr("value",cinfo.PINCODE),
            $("#ciaddress").attr("value",cinfo.ADDRESS),
            $("#ciCompanyWebsite").attr("value",cinfo.COMPANY_WEBSITE),
            $("#ciFacebookLink").attr("value",cinfo.FB_LINK),
            $("#ciInstagramLink").attr("value",cinfo.INSTA_LINK),
            $("#ciLinkedInLink").attr("value",cinfo.LINKEDIN_LINK),
            $("#ciLegalName").attr("value",cinfo.LEGAL_NAME),
            $("#ciCinNumber").attr("value",cinfo.CIN_NUMBER),
            $("#ciDate").attr("value",Moment(cinfo.DATE_OF_INCORPORATATION).format("DD/MM/YYYY")),
            $("#ciIncorporation").attr("value",cinfo.INCORPORATION_TYPE),
            $("#ciSector").val(cinfo.ABOUT_COMPANY),
            $("#ciAmountInvested").attr("value",cinfo.AMOUNT_INVESTED),
            $("#ciEmployees").attr("value",cinfo.NO_OF_EMPLOYEES)
            
          ));
      

       console.log(response.data.COUNTRY);
     })
     .catch(e => {
       console.log(e);
     });
 }
 setActiveCinfo(companyAllDets, index) {
  this.setState({
    currentCinfo: companyAllDets,
    currentCinfoIndex: index
  });
} 
  saveCompanyInfo(event) {
    event.preventDefault();  
    if(this.validateCompanyInfo()){
    if(!window.isEmpty(sessionStorage.getItem("sessEmail"))){   
    var cidata = {
      ID:Number($("#companyinfoid").val()),
      MTUSER_ID:$("#mtuser_id").val(),
      EMAIL:$("#mtuser_email").val(),
      MODULE:$("#mtuser_module").val(),
      COUNTRY:$("#cicountry").val(),
      STATE:$("#cistate").val(),
      CITY:$("#cicity").val(),
      PINCODE:$("#cipincode").val(),
      ADDRESS:$("#ciaddress").val(),
      COMPANY_WEBSITE:$("#ciCompanyWebsite").val(),
      FB_LINK:$("#ciFacebookLink").val(),
      INSTA_LINK:$("#ciInstagramLink").val(),
      LINKEDIN_LINK:$("#ciLinkedInLink").val(),
      LEGAL_NAME:$("#ciLegalName").val(),
      CIN_NUMBER:$("#ciCinNumber").val(),
      DATE_OF_INCORPORATATION:Moment($("#ciDate").val()).format("YYYY-MM-DD"),
      INCORPORATION_TYPE:$("#ciIncorporation").val(),
      ABOUT_COMPANY:$("#ciSector").val(),
      AMOUNT_INVESTED:$("#ciAmountInvested").val(),
      NO_OF_EMPLOYEES:$("#ciEmployees").val(),
      STATUS:"Active",
      COMMENTS:"TEST",
      DESCRIPTION:"TEST",
      CREATED_USER:$("#mtuser_fname").val(),
      CREATED_DATE:Moment(date).format("YYYY-MM-DD"),
      MODIFIED_USER:$("#mtuser_fname").val(),
      MODIFIED_DATE:Moment(date).format("YYYY-MM-DD")
    };
   

   if(window.isEmpty($("#companyinfoid").val())){ 

    DataService.create("/company_info",cidata)
      .then(response => {  
          window.showLoader();  
          window.showAlert("Company Information is submittted","/Startup_Dashboard");
      })
      .catch(e => {
        window.showLoader();  
        window.showAlert("OOps!!! Something went wrong","/Company_Info");
      });
    }else{
       
      DataService.update("/company_info/"+$("#companyinfoid").val(),cidata)
      .then(response => {  
          window.showLoader();  
        window.showAlert("Company Information is submittted","/Startup_Dashboard");
      })
      .catch(e => {
        window.showLoader();  
        window.showAlert("OOps!!! Something went wrong","/Company_Info");
      });
    }
    }else{
      window.showAlert("Please Login","/Login");
    }
  }

  }  
   
  validateCompanyInfo(){

    console.log("Into validation company info----------->>>")
      let input = this.state.input;
      let errors = {};
      let isValid = true;
   
      if (window.isEmpty($("#cicountry").val())) {
        isValid = false;
        errors["cicountry"] = "Please enter your country.";
        $("#cicountry").focus();
      }
   
  
      if (window.isEmpty($("#cistate").val())) {
        isValid = false;
        errors["cistate"] = "Please enter your state.";
        $("#cistate").focus();
      } 
      

      if (window.isEmpty($("#cicity").val())) {
        isValid = false;
        errors["cicity"] = "Please enter your city.";
        $("#cicity").focus();
      }
   
      if (window.isEmpty($("#cipincode").val())) {
        isValid = false;
        errors["cipincode"] = "Please enter your pincode.";
        $("#cipincode").focus();
      }
   

      if (window.isEmpty($("#ciaddress").val())) {
        isValid = false;
        errors["ciaddress"] = "Please enter your address.";
        $("#ciaddress").focus();
      }
   

      if (window.isEmpty($("#ciCompanyWebsite").val())) {
        isValid = false;
        errors["ciCompanyWebsite"] = "Please enter your Company website.";
        $("#ciCompanyWebsite").focus();
      }

      // console.log(window.isEmpty($("#ciFacebookLink"])
   
      if (window.isEmpty($("#ciFacebookLink").val())) {
        isValid = false;
        errors["ciFacebookLink"] = "Please enter your Facebook Link.";
        $("#ciFacebookLink").focus();
      }
   

      if (window.isEmpty($("#ciInstagramLink").val())) {
        isValid = false;
        errors["ciInstagramLink"] = "Please enter your Instagram Link.";
        $("#ciInstagramLink").focus();
      }
   

      if (window.isEmpty($("#ciLinkedInLink").val())) {
        isValid = false;
        errors["ciLinkedInLink"] = "Please enter your Linked In Link.";
        $("#ciLinkedInLink").focus();
      }
   

      if (window.isEmpty($("#ciLegalName").val())) {
        isValid = false;
        errors["ciLegalName"] = "Please enter your Legal Name.";
        $("#ciLegalName").focus();
      }
   

      if (window.isEmpty($("#ciCinNumber").val())) {
        isValid = false;
        errors["ciCinNumber"] = "Please enter your CIN Number.";
        $("#ciCinNumber").focus();
      }
   

      if (window.isEmpty($("#ciDate").val())) {
        isValid = false;
        errors["ciDate"] = "Please enter Date of Incorporation.";
        $("#ciDate").focus();
      }

      if (window.isEmpty($("#ciIncorporation").val())) {
        isValid = false;
        errors["ciIncorporation"] = "Please enter your Incorporation Type.";
        $("#ciIncorporation").focus();
      }
   
      if (window.isEmpty($("#ciSector").val())) {
        isValid = false;
        errors["ciSector"] = "Please enter Sector.";
        $("#ciSector").focus();
      }
   

      if (window.isEmpty($("#ciAmountInvested").val())) {
        isValid = false;
        errors["ciAmountInvested"] = "Enter Amount Invested in Business till date.";
        $("#ciAmountInvested").focus();
      }
   


      if (window.isEmpty($("#ciEmployees").val())) {
        isValid = false;
        errors["ciEmployees"] = "Enter No. of Employees.";
        $("#ciEmployees").focus();
      } 

      this.setState({
        errors: errors
      });
  
      return isValid;
  }
     
  render() {
    const {  companyAllDets, currentCinfo, currentCinfoIndex } = this.state;
    return (
        <>
        <body className='bg-white' >
            <div className='container'>
                       
                <div className='row' style={{height:'auto',marginTop:100}}>
                    <div className='row'>
                      <div className="hero-content">
                         <nav className="navbar navbar-expand-sm bg-Secondary navbar-white " >
                            <div className="container-fluid"  >
                                  <ul className="navbar-nav" style={{fontSize:13}}> 
                                      <li className="nav-item ">
                                          <NavLink to="/Startup_Dashboard" className="nav-link arrow-right"
                                           style={{color:"#B1B0AD"}}> Back to Dashboard</NavLink>
                                        </li>
                                  
                                    </ul>
                              </div>
                            </nav>

                           <div className='container'>
                           <form name="CompanyInfoform" id="CompanyInfoform" method="POST" className="row m-5 g-3"  > 
                           
    
                           <div className='row' style={{height:'auto'}}>
                                    <div className='col-md-12'>
                                        <h3>Company Info</h3>
                                        <div className="row">
                            <ul class="nav nav-tabs">
  <li class="nav-item">
    <a class="nav-link active font16" data-bs-toggle="tab" href="#companyinfo"> 
    <b>Application</b></a>
  </li>
  
</ul>
 
<div class="tab-content">
  <div class="tab-pane container active" id="companyinfo">
  {/* <p className='para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt libero vel elementum at cum tupis eget. Viverra ultrices lacus, lectus volutpat sociis vitae mauris<br/>porta faugiat. Nec, vitae facilisi elementum eu est vel quis platea. Diam pharetra nec malesuada mi purus erat.</p> */}
  <div class="col-md-6 mb-3 mt-3">
    <label for="cicountry" class="form-label">Country</label>
    <input 
       name="companyinfoid"  
       id="companyinfoid" 
       type="hidden"
    />
    <input  name="cicountry" 
          value={this.state.input.cicountry}
          onChange={this.handleChange}
          type="text" 
          class="form-control"  
          maxlength="150"  
          placeholder="Enter Your Country here"
          id="cicountry"
           />
             <div className="text-danger errors" style={{fontSize:15}}>{this.state.errors.cicountry}</div>
            
  </div>
  <div class="col-md-6 mb-3">
    <label for="cistate" class="form-label">State</label>
    <input 
            name="cistate" 
            value={this.state.input.cistate}
            onChange={this.handleChange}                                            
            type="text" 
            class="form-control"  
            maxlength="150"  
            placeholder="Enter Your State here"
            id="cistate"
            />
               <div className="text-danger errors" style={{fontSize:15}}>{this.state.errors.cistate}</div>
  </div>   




  <div className="col-md-6 mb-3"  >   
  <label for="cicity" class="form-label">City</label>
                                            
            <input 
            name="cicity"
            value={this.state.input.cicity}
            onChange={this.handleChange}
            type="text" 
            class="form-control"  
            maxlength="75"  
            placeholder="Enter Your City here"
            id='cicity'
            />
               <div className="text-danger errors" style={{fontSize:15}}>{this.state.errors.cicity}</div>
      </div>
      <div class="col-md-6 mb-3"  >
              <label for="cipincode" class="form-label">Pin Code</label>
                    <input 
                    name='cipincode'
                    value={this.state.input.cipincode}
                    onChange={this.handleChange}
                    type="text" 
                    class="form-control"  
                    maxlength="6"  
                    placeholder="Enter Your Pin Code here"
                    id='cipincode'
                    />
                     <div className="text-danger errors" style={{fontSize:15}}>{this.state.errors.cipincode}</div>
              </div>

    <div class="col-md-6 mb-3" >
<label for="ciaddress" class="form-label">Address</label>
<input 
    name='ciaddress'
    value={this.state.input.ciaddress}
    onChange={this.handleChange}
    type="text" 
    class="form-control"  
    maxlength="250"  
    placeholder="Enter Your Company Address here"
    id='ciaddress'/>
     <div className="text-danger errors" style={{fontSize:15}}>{this.state.errors.ciaddress}</div>
</div>                           

    </div> 
</div>


                            </div>


 {/* 2nd Online presence */}
 <div className='col-md-12'>
                                         
                                        <div className="row">
                            <ul className="nav nav-tabs">
  <li className="nav-item">
    <a className="nav-link active font16" data-bs-toggle="tab" href="#onlinepresence"> 
    <b>Online presence</b></a>
  </li>
  
</ul>
 
  <div className="tab-content">
  <div className="tab-pane container active" id="onlinepresence">

  <div className="col-md-6 mb-3" >
          <label for="ciCompanyWebsite" className="form-label">Company Website</label>
          <input
              name='ciCompanyWebsite' 
              value={this.state.input.ciCompanyWebsite}
              onChange={this.handleChange}
              type="text" 
              className="form-control"  
              maxlength="250"  
              placeholder="Enter Your Company Website here" 
              id='ciCompanyWebsite'/>
               <div className="text-danger errors" style={{fontSize:15}}>{this.state.errors.ciCompanyWebsite}</div>
          </div>
          
          <div className="col-md-6 mb-3"  >
          <label   className="form-label">Social Media Handles</label>

          <div className="input-group ">
          <Image  src={require('./../../assets/images/face.png')} alt="Features tile icon 01"  width={50} height={50}/>
          <input
              name='ciFacebookLink' 
              value={this.state.input.ciFacebookLink}
              onChange={this.handleChange}
              type="text" 
              className="form-control"  
              maxlength="500"  
              placeholder="Facebook Link"
              id='ciFacebookLink'/>  
              
          </div>
          <div className="text-danger errors" style={{fontSize:15}}>{this.state.errors.ciFacebookLink}</div>
          </div>
        
          <div className="col-md-6 mb-3" >
          <div className="input-group ">
             <Image   src={require('./../../assets/images/insta.jpg')}alt="Features tile icon 01"  width={50} height={50}/> 
          <input
              name='ciInstagramLink' 
              value={this.state.input.ciInstagramLink}
              onChange={this.handleChange}
              type="text" 
              className="form-control"  
              maxlength="500"  
              placeholder="Instagram Link"
              id='ciInstagramLink'/></div>
               <div className="text-danger errors" style={{fontSize:15}}>{this.state.errors.ciInstagramLink}</div>
          </div>
          
          <div className="col-md-6 mb-3" >
          <div className="input-group ">
            <Image   src={require('./../../assets/images/lin.png')}alt="Features tile icon 01"  width={50} height={50}/> 
          <input
                name='ciLinkedInLink' 
                value={this.state.input.ciLinkedInLink}
                onChange={this.handleChange}
                type="text" 
                className="form-control"  
                maxlength="500"  
                placeholder="Linked In Link"
                id='ciLinkedInLink'/>
                </div>
                <div className="text-danger errors" style={{fontSize:15}}>{this.state.errors.ciLinkedInLink}</div>
          </div>
          
  </div>
  </div>
  </div>
  </div>


 



 {/* 3nd Legal */}
 <div className='col-md-12'>
                                         
                                        <div className="row">
                            <ul class="nav nav-tabs">
  <li class="nav-item">
    <a class="nav-link active font16" data-bs-toggle="tab" href="#Legal"> 
    <b>Legal</b></a>
  </li>
  
</ul>
 
<div class="tab-content">
  <div class="tab-pane container active" id="Legal">

  <div class="col-md-6 mb-3" >
                                            <label for="ciLegalName" class="form-label">Legal Name</label>
                                            <input 
                                                  name='ciLegalName'
                                                  value={this.state.input.ciLegalName}
                                                  onChange={this.handleChange}
                                                  type="text" 
                                                  class="form-control"  
                                                  maxlength="250"  
                                                  placeholder="Enter Your Legal Name" 
                                                  id='ciLegalName'/>
                                                   <div className="text-danger errors" style={{fontSize:15}}>{this.state.errors.ciLegalName}</div>
                                            </div>
                                             
                                            
                                            <div class="col-md-6 mb-3" >
                                            <label for="ciCinNumber" class="form-label">CIN Number</label>
                                            <input 
                                                   name='ciCinNumber'
                                                   value={this.state.input.ciCinNumber}
                                                   onChange={this.handleChange}
                                                   type="text" 
                                                   class="form-control"  
                                                   maxlength="250"  
                                                   placeholder="Enter CIN Number"
                                                   id='ciCinNumber'/>
                                                    <div className="text-danger errors" style={{fontSize:15}}>{this.state.errors.ciCinNumber}</div>
                                            </div>
                                            
                                           
                                            <div class="col-md-6 mb-3" >
                                            <label for="ciDate" class="form-label">Date of Incorporation (DD/MM/YYYY)</label>
                                            <input
                                                   className='form-control' 
                                                   id="ciDate"
                                                   type="text"                                   
                                                   name="ciDate" 
                                                   placeholder="Enter date DD/MM/YYYY"
                                                   maxlength="10" 
                                                   value={this.state.input.ciDate}
                                                   onChange={this.handleChange}
                                                />  
                                                 <div className="text-danger errors" style={{fontSize:15}}>{this.state.errors.ciDate}</div>
                                            </div> 

                                            
                                            <div class="col-md-6 mb-3" >
                                            <label for="ciIncorporation" class="form-label">Incorporation Type</label>
                                            <input
                                                  name='ciIncorporation' 
                                                  value={this.state.input.ciIncorporation}
                                                  onChange={this.handleChange}
                                                  type="text" 
                                                  class="form-control"  
                                                  maxlength="500"  
                                                  placeholder="Private,Public etc."
                                                  id='ciIncorporation'/>
                                                   <div className="text-danger errors" style={{fontSize:15}}>{this.state.errors.ciIncorporation}</div>
                                            </div>
  </div>
  </div> 
  </div>
  </div>









 {/* 3nd About Company */}
 <div className='col-md-12'>
                                         
                                        <div className="row">
                            <ul class="nav nav-tabs">
  <li class="nav-item">
    <a class="nav-link active font16" data-bs-toggle="tab" href="#AboutCompany"> 
    <b>About Company</b></a>
  </li>
  
</ul>
 
<div class="tab-content">
  <div class="tab-pane container active" id="AboutCompany">
  <div class="col-md-6 mb-3" >
                                            <label for="ciSector" class="form-label">Sector</label>
                                            <select
                                                name='ciSector' 
                                                value={this.state.input.ciSector}
                                                onChange={this.handleChange} 
                                                class="form-control"   
                                                id='ciSector'>
                                                  <option value="">Select from the list or type</option> 
                                                  <option value="Public">Public</option> 
                                                  <option value="Private">Private</option> 
                                                </select>
                                                <div className="text-danger errors" style={{fontSize:15}}>{this.state.errors.ciSector}</div>
                                            </div>
                                             
                                            
                                            <div class="col-md-6 mb-3" >
                                            <label for="ciAmountInvested" class="form-label">Amount Invested in Business till date</label>
                                            <input
                                                  name='ciAmountInvested' 
                                                  value={this.state.input.ciAmountInvested}
                                                  onChange={this.handleChange}
                                                  type="text" 
                                                  class="form-control"  
                                                  maxlength="500"  
                                                  placeholder="7,50,0000"
                                                  id='ciAmountInvested'/>
                                                   <div className="text-danger errors" style={{fontSize:15}}>{this.state.errors.ciAmountInvested}</div>
                                            </div>
                                             
                                           
                                            <div class="col-md-6 mb-3" >
                                            <label for="ciEmployees" class="form-label">No. of Employees </label>
                                            <input    
                                                      name='ciEmployees'
                                                      value={this.state.input.ciEmployees}
                                                      onChange={this.handleChange}
                                                      type="text" 
                                                      class="form-control"  
                                                      maxlength="150"  
                                                      placeholder="12"
                                                      id='ciEmployees'/>
                                                       <div className="text-danger errors" style={{fontSize:15}}>{this.state.errors.ciEmployees}</div>
                                            </div>
                                            
  </div>
  </div>
  </div>
  <div className="row">
  <div class="col-md-3 mb-3" >
  <button type="button" class="btn btn-outline-secondary btn-sm w-100">Cancel</button>
    </div>
    <div class="col-md-3 mb-3" >
  <button type="button" class="btn btn-success btn-sm  w-100"  onClick={this.saveCompanyInfo}>Submit</button>
    </div>


  </div>
  </div>

 
                                     </div>

                                 </div>
                                 </form>


          


                                 <div className="container" style={{display:"none"}}>
        <h3 align="center" style={{marginTop:100}}>Company Information</h3> 
      <div className="table-responsive"> 

 <table id="companyInfoTable" class="dataTable table-bordered table-striped display hover"  > 
        <thead className="bg-success text-white">
          <tr>
          <th>ID</th>  
      <th>EMAIL</th>  
      <th>COUNTRY</th> 
      <th>STATE</th> 
      <th>CITY</th> 
      <th>PINCODE</th> 
      <th>ADDRESS</th> 
      <th>COMPANY_WEBSITE</th> 
      <th>FB_LINK</th> 
      <th>INSTA_LINK</th> 
      <th>LINKEDIN_LINK</th> 
      <th>LEGAL_NAME</th> 
      <th>CIN_NUMBER</th> 
      <th>DATE_OF_INCORPORATATION</th> 
      <th>ABOUT_COMPANY</th> 
      <th>AMOUNT_INVESTED</th>
      <th>NO_OF_EMPLOYEES</th> 
      <th>STATUS</th> 
      <th>COMMENTS</th> 
      <th>DESCRIPTION</th> 
      <th>CREATED_USER</th> 
      <th>CREATED_DATE</th> 
      <th>MODIFIED_USER</th> 
      <th>MODIFIED_DATE</th> 
      <th>OPTIONS</th> 
      </tr>
        </thead>
        <tbody>
        {companyAllDets &&
              companyAllDets.map((cinfo, index) => (
            <tr>
            <td>{cinfo.ID}</td>  
            <td>{cinfo.EMAIL}</td>  
            <td>{cinfo.COUNTRY}</td> 
            <td>{cinfo.STATE}</td> 
            <td>{cinfo.CITY}</td> 
            <td>{cinfo.PINCODE}</td> 
            <td>{cinfo.ADDRESS}</td> 
            <td>{cinfo.COMPANY_WEBSITE}</td> 
            <td>{cinfo.FB_LINK}</td> 
            <td>{cinfo.INSTA_LINK}</td> 
            <td>{cinfo.LINKEDIN_LINK}</td> 
            <td>{cinfo.LEGAL_NAME}</td> 
            <td>{cinfo.CIN_NUMBER}</td> 
            <td>{cinfo.DATE_OF_INCORPORATATION}</td> 
            <td>{cinfo.ABOUT_COMPANY}</td> 
            <td>{cinfo.AMOUNT_INVESTED}</td> 
            <td>{cinfo.NO_OF_EMPLOYEES}</td> 
            <td>{cinfo.STATUS}</td> 
            <td>{cinfo.COMMENTS}</td> 
            <td>{cinfo.DESCRIPTION}</td> 
            <td>{cinfo.CREATED_USER}</td> 
            <td>{cinfo.CREATED_DATE}</td> 
            <td>{cinfo.MODIFIED_USER}</td> 
            <td>{cinfo.MODIFIED_DATE}</td>   
            <td>
              <button class="btn btn-primary"><i className="fa fa-edit"></i>
              </button ><button  class="btn btn-danger"><i className="fa fa-trash"></i></button></td>
            </tr>
           
          ))}
        </tbody>
      </table>
      </div></div>
                                 
                               </div>
                             
                        </div>

                     </div>

                </div>     


                        

                        
                
            
            
            
            
            
            
            
            
            
            
            
            </div> 

                    
                    

        </body>


            
            
        </>
    );
    }
}





export default Company_Info;