import React, {useState} from 'react';
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

class Campaign_Investors extends React.Component {
    constructor() {
    super();
    this.state = {
      cinvestorAllDets: [],
      currentcinvestor: null,
      currentcinvestorIndex: -1,
      input: {},
      errors: {},
      profile : "Upload a Profile",
      ID:null,
      MTUSER_ID:null,
      EMAIL:null,
      MODULE:null,
      INVESTOR_SNO:"",
      INV_TEAM_NAME:"",
      TEAM_POSITION:"",
      FB_LINK:"",
      INSTA_LINK:"",
      LINKEDIN_LINK:"",
      BIO:"",
      PRO_PIC:"",
      STATUS:"",
      COMMENTS:"",
      DESCRIPTION:"",
      CREATED_USER:"",
      CREATED_DATE:"",
      MODIFIED_USER:"",
      MODIFIED_DATE:""
    };
     
    this.saveCInvestor = this.saveCInvestor.bind(this);  
    this.retrieveAllCInvestor = this.retrieveAllCInvestor.bind(this);
    this.setActiveCInvestor = this.setActiveCInvestor.bind(this);
    
  }
     
  componentDidMount() {
    this.retrieveAllCInvestor();
  }

  retrieveAllCInvestor() {
    var querySet = "/investorsDets?EMAIL="+sessionStorage.getItem("sessEmail");
    console.log(querySet);
    DataService.findByTitle(querySet)
     .then(response => {
       this.setState({
        cinvestorAllDets: response.data, 
       });
       
        this.state.cinvestorAllDets.map((cinvestor, index) => (
            $("#cinvestorid").attr("value",cinvestor.ID),
            $("#spancssno").attr("value",cinvestor.INVESTOR_SNO),
            $("#cssno").attr("value",cinvestor.INVESTOR_SNO),
            $("#csname").attr("value",cinvestor.INV_TEAM_NAME),
            $("#csposition").attr("value",cinvestor.TEAM_POSITION),
            $("#csfblink").attr("value",cinvestor.FB_LINK),
            $("#csinstalink").attr("value",cinvestor.INSTA_LINK),
            $("#cslinklink").attr("value",cinvestor.LINKEDIN_LINK),
            $("#csteambio").attr("value",cinvestor.BIO)
            // $("#tmprofileinfo").attr("value",cinfo.PROFILE_PIC)
            
          ));
       
     })
     .catch(e => {
       console.log(e);
     });
 }


 setActiveCInvestor(cinvestorAllDets, index) {
  this.setState({
    currentcinvestor: cinvestorAllDets,
    currentcinvestorIndex: index
  });
} 
     
 
saveCInvestor(event) {
  event.preventDefault();  
  if(this.validateCInvestor()){
    console.log("inside Campaign Investors save")
  if(!window.isEmpty(sessionStorage.getItem("sessEmail"))){ 
    
    // var teaminfodata={}
     
    $("#InvestorsDetsForm #csname").each(function (cinvestorset) {
      // console.log(teamset)
      //  console.log($($("#TeamInfoform #tmname")[teamset]).val()) 
       
      var cinvestordata = {
        ID:Number($($("#InvestorsDetsForm #cinvestorid")[cinvestorset]).val()),
        MTUSER_ID:$("#mtuser_id").val(),
        EMAIL:$("#mtuser_email").val(),
        MODULE:$("#mtuser_module").val(),
        INVESTOR_SNO:$($("#InvestorsDetsForm #cssno")[cinvestorset]).val(),
        INV_TEAM_NAME:$($("#InvestorsDetsForm #csname")[cinvestorset]).val(),
        TEAM_POSITION:$($("#InvestorsDetsForm #csposition")[cinvestorset]).val(),
        FB_LINK:$($("#InvestorsDetsForm #csfblink")[cinvestorset]).val(),
        INSTA_LINK:$($("#InvestorsDetsForm #csinstalink")[cinvestorset]).val(),
        LINKEDIN_LINK:$($("#InvestorsDetsForm #cslinklink")[cinvestorset]).val(),
        BIO:$($("#InvestorsDetsForm #csteambio")[cinvestorset]).val(),
        PRO_PIC:null,
        STATUS:"Active",
        COMMENTS:"TEST",
        DESCRIPTION:"TEST",
        CREATED_USER:$("#mtuser_fname").val(),
        CREATED_DATE:Moment(date).format("YYYY-MM-DD"),
        MODIFIED_USER:$("#mtuser_fname").val(),
        MODIFIED_DATE:Moment(date).format("YYYY-MM-DD")
       }
 
  if(window.isEmpty($("#cinvestorid").val())){ 

  DataService.create("/investorsDets",cinvestordata)
    .then(response => {  
        window.showLoader();  
        window.showAlert("Campaign Investors is submittted","/Campaign");
    })
    .catch(e => {
      window.showLoader();  
      window.showAlert("OOps!!! Something went wrong","/Campaign_Investors");
    });

  }else{ 

    DataService.update("/investorsDets"+$("#cinvestorid").val(),cinvestordata)
    .then(response => {  
        window.showLoader();  
      window.showAlert("Campaign Investors is submittted","/Campaign");
    })
    .catch(e => {
      window.showLoader();  
      window.showAlert("OOps!!! Something went wrong","/Campaign_Investors");
    });

  }


      });
    
   

  }else{
    window.showAlert("Please Login","/Login");
  }
}

}  
validateCInvestor(){
  console.log("inside Campaign Investors validations")
      let input = this.state.input;
      let errors = {};
      let isValid = true;
   
      $("#InvestorsDetsForm #csname").each(function (index) {
        if (window.isEmpty($($("#InvestorsDetsForm #csname")[index]).val())) {
          isValid = false;
          errors["csname"]= "Please enter your Team Member Name.";
        } 
    
        if (window.isEmpty($($("#InvestorsDetsForm #csposition")[index]).val())) {
          isValid = false;
          errors["csposition"]= "Please enter Position Name.";
        }
     
        if (window.isEmpty($($("#InvestorsDetsForm #csfblink")[index]).val())) {
          isValid = false;
          errors["csfblink"] = "Please enter your Facebook Link.";
        }
     
        if (window.isEmpty($($("#InvestorsDetsForm #csinstalink")[index]).val())) {
          isValid = false;
          errors["csinstalink"] = "Please enter your Instagram Link.";
        }
     
        if (window.isEmpty($($("#InvestorsDetsForm #cslinklink")[index]).val())) {
          isValid = false;
          errors["cslinklink"] = "Please enter your Linked In Link.";
        }
     
        if (window.isEmpty($($("#InvestorsDetsForm #csteambio")[index]).val())) {
          isValid = false;
          errors["csteambio"] = "Please Enter Your Team Bio ";
        }
      });
      
     
       
      this.setState({
        errors: errors
      });
  
      return isValid;
  }
     
 render() {
  const {  cinvestorAllDets, currentcinvestor, currentcinvestorIndex } = this.state;
    return (
        <>
        <body className='' >
            <div className='container'>  
                <div className='row' style={{height:'auto',marginTop:100}}>
                    <div className='row'>
                      <div className="hero-content">
                         <nav className="navbar navbar-expand-sm bg-Secondary navbar-white " >
                            <div className="container-fluid"  >
                                  <ul className="navbar-nav" style={{fontSize:13}}> 
                                      <li className="nav-item">
                                          <NavLink to="/Campaign" className="nav-link arrow-right" style={{color:"#B1B0AD"}}>Back to Campaign</NavLink>
                                        </li>
                                  
                                    </ul>
                              </div>
                            </nav>

                           <div className='container'>
                              <div className='row' style={{height:'auto'}}>
                              
                                    <div className='col-md-12'>
                                        <h3>Investors</h3>
                                         <p className='para'>
                                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                          Tincidunt libero vel elementum at cum tupis eget. Viverra ultrices lacus,
                                           lectus volutpat sociis vitae mauris<br/>porta faugiat. Nec, vitae facilisi 
                                           elementum eu est vel quis platea. Diam pharetra nec malesuada mi purus erat.</p>
                                    
                                         
                                        
                                     <div className='row'>
                                     <form name="InvestorsDetsForm" id="InvestorsDetsForm" method="POST" className="row m-5 g-3"  >  

                                        <div className="col-md-12 cinvestormem" id="cinvestorDivisionIter">
                                        <span id="spancssno" className='spanbgcircle'>1</span> 
                                          
                                            <div className="col-md-6 mb-3 mt-3">
                                            <label for="csname" className="form-label">Name</label>
                                            <input name="cinvestorid" id="cinvestorid" type="hidden"  />
                                            <input name="cssno" id="cssno" type="hidden" value="1"/>
                                            <input
                                                  name='csname' 
                                                  type="text" 
                                                  value={this.state.input.csname}
                                                  onChange={this.handleChange}
                                                  className="form-control"  
                                                  maxlength="150"  
                                                  placeholder="Enter Your Team Member Name" 
                                                  id='csname'/>
                                                  <div className="text-danger errors" style={{fontSize:15}}>{this.state.errors.csname}</div>
                                            </div> 

                                            
                                            <div className="col-md-6 mb-3 mt-3">
                                            <label for="csposition" className="form-label">Position in the Company</label>
                                            <input
                                                 name='csposition' 
                                                 type="text"
                                                 value={this.state.input.csposition}
                                                 onChange={this.handleChange} 
                                                 className="form-control"  
                                                 maxlength="150"  
                                                 placeholder="Position Name"
                                                 id='csposition'/>
                                                  <div className="text-danger errors" style={{fontSize:15}}>{this.state.errors.csposition}</div>
                                            </div> 

                                       
                                        <div className="col-md-6 mb-3 mt-3"> 
                                        <div className="input-group "><Image   src={require('./../../assets/images/face.png')}alt="Features tile icon 01"  width={50} height={50}/>
                                            <input
                                                 name='csfblink' 
                                                 value={this.state.input.csfblink}
                                                 onChange={this.handleChange}
                                                 type="text" 
                                                 className="form-control"  
                                                 maxlength="150"  
                                                 placeholder="Facebook Link"
                                                 id='csfblink'/>
                                                    </div>
                                                    <div className="text-danger errors" style={{fontSize:15}}>{this.state.errors.csfblink}</div>
                                              
                                            </div>
                                             
                                        
                                            <div className="col-md-6 mb-3 mt-3">
                                            <div className="input-group ">
                                              <Image   src={require('./../../assets/images/insta.jpg')}alt="Features tile icon 01"  width={50} height={50}/> 
                                            <input
                                                 name='csinstalink' 
                                                 value={this.state.input.csinstalink}
                                                 onChange={this.handleChange}
                                                 type="text" 
                                                 className="form-control"  
                                                 maxlength="150"  
                                                 placeholder="Instagram Link"
                                                 id='csinstalink'/>
                                                 
                                                 </div>
                                                     <div className="text-danger errors" style={{fontSize:15}}>{this.state.errors.csinstalink}</div>
                                            </div> 

                                            <div className="col-md-6 mb-3 mt-3">
                                            <div className="input-group ">
                                              <Image   src={require('./../../assets/images/lin.png')}alt="Features tile icon 01"  width={50} height={50}/> 
                                            <input
                                                  name='cslinklink' 
                                                  value={this.state.input.cslinklink}
                                                  onChange={this.handleChange}
                                                  type="text" 
                                                  className="form-control"  
                                                  maxlength="150"  
                                                  placeholder="LinkedIn Link"
                                                  id='cslinklink'/>
                                                  </div>
                                                  <div className="text-danger errors" style={{fontSize:15}}>{this.state.errors.cslinklink}</div>
                                              
                                            </div>
                                           
                                            <div className="col-md-6 mb-3 mt-3">
                                          <label for="csteambio" className="form-label">Bio</label>
                                          <div className="input-group ">
                                            <textarea  name='csteambio' 
                                                 value={this.state.input.csteambio}
                                                  onChange={this.handleChange}
                                                 type="text" 
                                                 className="form-control"  
                                                 maxlength="250"  
                                                 rows="10"
                                                 placeholder="Enter Your Bio" 
                                                 id='csteambio'></textarea>
                                            </div> 
                                            <div className="text-danger errors" style={{fontSize:15}}>{this.state.errors.csteambio}</div>
                                            </div>

                                          <div className="col-md-6 mb-3 mt-3">
                                            <div className="row mb-3">
                                            <div className="col-md-6">
                                            <label for="csuploadprofile" className="col-sm-2 form-label">Profile</label>
                                            </div>

                                            <div className="col-md-6 imgUp"> 
                                                      <div className="imagePreview"></div>
                                                  <label className="col-md-12 btn btn-outline-secondary btn-sm">
                                                        Upload<br/><input type="file" id="csuploadprofile" name="csuploadprofile" className=" uploadFile img"  style={{height:"0px",width:"0px",overflow : "hidden"}}/>
                                                          </label>
                                                          <div className="text-danger errors" style={{fontSize:15}}>{this.state.errors.csuploadprofile}</div>
                                                    </div>   

                                                  
                                            </div>
                                          </div>
                                         </div>
                                         <div className="col-md-12">
                                         <div className="row">
                                        <div className="col-md-3 mb-3" >
                                        <button type="button" className="btn btn-outline-secondary btn-sm w-100" data-attr-id="cinvestorDivisionIter" id="cinvestorAddmem">Add Members</button>
                                          </div>
                                          <div className="col-md-3 mb-3" >
                                        <button type="button" className="btn btn-success btn-sm  w-100"  onClick={this.saveCInvestor}>Submit</button>
                                          </div>
                                         </div>
                                         </div>
                                        </form>
                                        </div>
                                     </div>
                                     
                                     
                                 </div>
                                 
                              
                             </div>
                             
                        </div>
                       
                     </div>
                    
                </div>      
            
            </div> 

                    
                     
        </body>


            
            
        </>
    );

  }
};






export default Campaign_Investors;