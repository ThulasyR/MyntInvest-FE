import React, {useState} from 'react';
import '../Css/styles.css';
import {NavLink,Link} from "react-router-dom";
import Image from '../elements/Image'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import DataService from '../../service/DataService'; 
import UploadService from "../../service/file-upload.service";
import Moment from 'moment';
import $ from "jquery";
const current = new Date();
const date = `${current.getFullYear()}-${current.getMonth()+1}-${current.getDate()}`;//mysql insert date format
const formatDate = Moment("12/09/2002").format('YYYY-MM-DD')//2002-12-09

class Campaign_Investors extends React.Component {
    constructor() {
    super();
    this.state = {
      campInvestAllDets: [],
      currentInvestinfo: null,
      currentInvestinfoIndex: -1,
      input: {},
      errors: {},
      profile : "Upload a Profile",
      ID:null,
      MTUSER_ID:null,
      EMAIL:null,
      MODULE:null,
      CINV_SNO:"",
      CINV_MEMBER_NAME:"",
      CINV_MEMBER_POSITION:"",
      CINV_FB_LINK:"",
      CINV_INSTA_LINK:"",
      CINV_LINKEDIN_LINK:"",
      CINV_BIO:"",
      CINV_PROFILE_PIC:"",
      STATUS:"",
      COMMENTS:"",
      DESCRIPTION:"",
      CREATED_USER:"",
      CREATED_DATE:"",
      MODIFIED_USER:"",
      MODIFIED_DATE:"",  
      CINV_PROFILE_NAME:"",  
    };
    
    this.saveCamInv = this.saveCamInv.bind(this);  
    this.retrieveAllCamInv = this.retrieveAllCamInv.bind(this);
    this.setActiveCamInv = this.setActiveCamInv.bind(this);
    // this.handleImagePreview=this.handleImagePreview.bind(this)
     
  }
  
  
  componentDidMount() {
    this.retrieveAllCamInv(); 
  }

  retrieveAllCamInv() {
    // var sessionCampaign = sessionStorage.getItem("sessionCampaign");
    // console.log("sessionCampaign"+sessionCampaign)
    var querySet = "/caminvest?EMAIL="+sessionStorage.getItem("sessEmail");
    console.log(querySet);
    DataService.findByTitle(querySet)
     .then(response => {
       this.setState({
        campInvestAllDets: response.data, 
       });
       
       $.each(this.state.campInvestAllDets, function (index, value) {
         
        if(index != 0){
          $("#caminvestAddmem").click();  
          // $("#caminvestAddmem").trigger('click');

        } 


          $($("#CamInvestform #campinvestid")[index]).attr("value",value.ID).val(value.ID);
          $($("#CamInvestform #spantcinvestsno")[index]).attr("value",value.CINV_SNO).val(value.CINV_SNO);
          $($("#CamInvestform #camivstsno")[index]).attr("value",value.CINV_SNO).val(value.CINV_SNO);
          $($("#CamInvestform #camivstname")[index]).attr("value",value.CINV_MEMBER_NAME).val(value.CINV_MEMBER_NAME);
          $($("#CamInvestform #camivstposition")[index]).attr("value",value.CINV_MEMBER_POSITION).val(value.CINV_MEMBER_POSITION);
          $($("#CamInvestform #camfblink")[index]).attr("value",value.CINV_FB_LINK).val(value.CINV_FB_LINK);
          $($("#CamInvestform #caminvinstalink")[index]).attr("value",value.CINV_INSTA_LINK).val(value.CINV_INSTA_LINK);
          $($("#CamInvestform #caminvlinklink")[index]).attr("value",value.CINV_LINKEDIN_LINK).val(value.CINV_LINKEDIN_LINK);
          $($("#CamInvestform #caminvbio")[index]).attr("value",value.CINV_BIO).val(value.CINV_BIO);
          $($(".imagePreview")[index]).css("background-image","url("+window.mt_backend_url+value.CINV_PROFILE_PIC+")");
          $($("#CamInvestform #caminvupdprofile")[index]).closest("label").css("visibility","hidden");


        }); 
    
     })
     .catch(e => {
       console.log(e);
     });
 }

 

 setActiveCamInv(campInvestAllDets, index) {
  this.setState({
    currentInvestinfo: campInvestAllDets,
    currentInvestinfoIndex: index,
    // tfcurrentFile:this.state.tfcurrentFile
  });
} 
     

saveCamInv(event) {
  event.preventDefault();  
  console.log("saveCamInv");
  if(this.validateCamInvest()){ 
  if(!window.isEmpty(sessionStorage.getItem("sessEmail"))){  
     
    $("#CamInvestform #camivstname").each(function (teamset) { 
       

    let camInvformData = new FormData();  
    camInvformData.append("ID",Number($($("#CamInvestform #campinvestid")[teamset]).val()));
    camInvformData.append("MTUSER_ID",$("#mtuser_id").val());
    camInvformData.append("EMAIL",$("#mtuser_email").val()); 
    camInvformData.append("MODULE",sessionStorage.getItem("sessionCampaign"));
    camInvformData.append("CINV_SNO",$($("#CamInvestform #camivstsno")[teamset]).val());
    camInvformData.append("CINV_MEMBER_NAME",$($("#CamInvestform #camivstname")[teamset]).val());
    camInvformData.append("CINV_MEMBER_POSITION",$($("#CamInvestform #camivstposition")[teamset]).val());
    camInvformData.append("CINV_FB_LINK",$($("#CamInvestform #camfblink")[teamset]).val());
    camInvformData.append("CINV_INSTA_LINK",$($("#CamInvestform #caminvinstalink")[teamset]).val());
    camInvformData.append("CINV_LINKEDIN_LINK",$($("#CamInvestform #caminvlinklink")[teamset]).val());
    camInvformData.append("CINV_BIO",$($("#CamInvestform #caminvbio")[teamset]).val()); 
    // camInvformData.append("CINV_PROFILE_PIC",null,""); 
    camInvformData.append("STATUS","Active");
    camInvformData.append("COMMENTS","TEST");
    camInvformData.append("DESCRIPTION","TEST");
    camInvformData.append("CREATED_USER",$("#mtuser_fname").val());
    camInvformData.append("CREATED_DATE",Moment(date).format("YYYY-MM-DD"));
    camInvformData.append("MODIFIED_USER",$("#mtuser_fname").val());
    camInvformData.append("MODIFIED_DATE",Moment(date).format("YYYY-MM-DD")); 

    if(window.isEmpty($($("#CamInvestform #campinvestid")[teamset]).val())){ 
      camInvformData.append("CINV_PROFILE_PIC",$("#CamInvestform #caminvupdprofile")[teamset].files[0],$("#CamInvestform #caminvupdprofile")[teamset].files[0].name); 
    } 
       
 
  if(window.isEmpty($($("#CamInvestform #campinvestid")[teamset]).val())){  
    console.log("insert"+camInvformData);
    UploadService.create("/caminvest",camInvformData)
    .then(response => {  
        window.showLoader();  
        window.showAlert("Campaign Investor Information is submittted","/Campaign_Investors");
    })
    .catch(e => {
      window.showLoader();  
      window.showAlert("OOps!!! Something went wrong","/Campaign_Investors");
    });

  }else{ 
    console.log("update"+camInvformData);
    
    UploadService.update("/caminvest/"+Number($($("#CamInvestform #campinvestid")[teamset]).val()),camInvformData)
    .then(response => {  
        window.showLoader();  
      window.showAlert("Campaign Investor Information is submittted","/Campaign_Investors");
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
validateCamInvest(){
  console.log("inside validateCamInvest")
      let input = this.state.input;
      let errors = {};
      let isValid = true;
   
      $("#CamInvestform #camivstname").each(function (index) {
        if (window.isEmpty($($("#CamInvestform #camivstname")[index]).val())) {
          isValid = false; 
          // errors["camivstname"]= "Please enter your Team Member Name.";
          $($("#CamInvestform #camivstname")[index]).parent().find("div").html("Please enter your Team Member's Name.");
         } 
    
        if (window.isEmpty($($("#CamInvestform #camivstposition")[index]).val())) {
          isValid = false;
          // errors["camivstposition"]= "Please enter Position Name.";
          $($("#CamInvestform #camivstposition")[index]).parent().find("div").html("Please enter Position Name.");
       
        }
     
        if (window.isEmpty($($("#CamInvestform #camfblink")[index]).val())) {
          isValid = false;
          // errors["camfblink"] = "Please enter your Facebook Link.";
          $($("#CamInvestform #camfblink")[index]).parent().parent().find("div:eq(1)").html("Please enter your Facebook Link.");
        }
     
        if (window.isEmpty($($("#CamInvestform #caminvinstalink")[index]).val())) {
          isValid = false;
          // errors["caminvinstalink"] = "Please enter your Instagram Link.";
          $($("#CamInvestform #caminvinstalink")[index]).parent().parent().find("div:eq(1)").html("Please enter your Instagram Link.");
        }
     
        if (window.isEmpty($($("#CamInvestform #caminvlinklink")[index]).val())) {
          isValid = false;
          // errors["caminvlinklink"] = "Please enter your Linked In Link.";
          $($("#CamInvestform #caminvlinklink")[index]).parent().parent().find("div:eq(1)").html("Please enter your Linked In Link.");
        }
     
        if (window.isEmpty($($("#CamInvestform #caminvbio")[index]).val())) {
          isValid = false;
          // errors["caminvbio"] = "Please Enter Your Team Bio ";
          $($("#CamInvestform #caminvbio")[index]).parent().find("div").html("Please Enter Your Team Bio");
        }
      
      
        if (window.isEmpty($("#CamInvestform #campinvestid").val())) {
        if (!Number($($("#CamInvestform #caminvupdprofile")[index]).get(0).files.length)  > 0) {
          isValid = false;
          // errors["caminvupdprofile"] = "Please Upload Image";
          $($("#CamInvestform #caminvupdprofiles")[index]).parent().find("div").html("Please Upload Image");
          $("#CamInvestform #caminvupdprofile").focus();
        }
        }
      
      });
      
       
      this.setState({
        errors: errors
      });
  
      return isValid;
  }
     
 render() {
 
  const {  campInvestAllDets, currentInvestinfo, currentInvestinfoIndex } = this.state;
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
                                      <NavLink to="/Campaign" className="nav-link arrow-right" style={{color:"#B1B0AD"}}>&nbsp;Back to Dashboard</NavLink>
                                        </li>
                                  
                                    </ul>
                              </div>
                            </nav>

                           <div className='container'>
                              <div className='row' style={{height:'auto'}}>
                              
                                    <div className='col-md-12'>
                                        <h3>Investors</h3>
                                        {/* <p className='para'>
                                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                          Tincidunt libero vel elementum at cum tupis eget. Viverra ultrices lacus,
                                           lectus volutpat sociis vitae mauris<br/>porta faugiat. Nec, vitae facilisi 
                                           elementum eu est vel quis platea. Diam pharetra nec malesuada mi purus erat.</p>
                                    
                                         */}
                                        
                                     <div className='row'>
                                     
                                     <form name="CamInvestform" id="CamInvestform" method="POST" encType="multipart/form-data" className="row m-5 g-3"  >  

                                        <div className="col-md-12 campinvestmem" id="campinvestDivisionIter">
                                        <span id="spantcinvestsno" className='spanbgcircle'>1</span> 
                                          
                                            <div className="col-md-6 mb-3 mt-3">
                                            <label htmlFor="camivstname" className="form-label">Name</label>
                                            <input name="campinvestid" id="campinvestid" type="hidden"  />
                                            <input name="camivstsno" id="camivstsno" type="hidden" value="1"/>
                                            <input
                                                  name='camivstname' 
                                                  type="text" 
                                                  value={this.state.input.camivstname}
                                                  onChange={this.handleChange}
                                                  className="form-control"  
                                                  maxLength="150"  
                                                  placeholder="Enter Your Team Member Name" 
                                                  id='camivstname'/>
                                                  <div className="text-danger errors" style={{fontSize:15}}>{this.state.errors.camivstname}</div>
                                            </div> 

                                            
                                            <div className="col-md-6 mb-3 mt-3">
                                            <label htmlFor="camivstposition" className="form-label">Position in the Company</label>
                                            <input
                                                 name='camivstposition' 
                                                 type="text"
                                                 value={this.state.input.camivstposition}
                                                 onChange={this.handleChange} 
                                                 className="form-control"  
                                                 maxLength="150"  
                                                 placeholder="Position Name"
                                                 id='camivstposition'/>
                                                  <div className="text-danger errors" style={{fontSize:15}}>{this.state.errors.camivstposition}</div>
                                            </div> 

                                       
                                        <div className="col-md-6 mb-3 mt-3"> 
                                        <div className="input-group "><Image   src={require('./../../assets/images/face.png')}alt="Features tile icon 01"  width={50} height={50}/>
                                            <input
                                                 name='camfblink' 
                                                 value={this.state.input.camfblink}
                                                 onChange={this.handleChange}
                                                 type="text" 
                                                 className="form-control link"  
                                                 maxLength="150"  
                                                 placeholder="Facebook Link"
                                                 id='camfblink'/>
                                                    </div>
                                                    <div className="text-danger errors" style={{fontSize:15}}>{this.state.errors.camfblink}</div>
                                              
                                            </div>
                                             
                                        
                                            <div className="col-md-6 mb-3 mt-3">
                                            <div className="input-group ">
                                              <Image   src={require('./../../assets/images/insta.jpg')}alt="Features tile icon 01"  width={50} height={50}/> 
                                            <input
                                                 name='caminvinstalink' 
                                                 value={this.state.input.caminvinstalink}
                                                 onChange={this.handleChange}
                                                 type="text" 
                                                 className="form-control link"  
                                                 maxLength="150"  
                                                 placeholder="Instagram Link"
                                                 id='caminvinstalink'/>
                                                 
                                                 </div>
                                                     <div className="text-danger errors" style={{fontSize:15}}>{this.state.errors.caminvinstalink}</div>
                                            </div> 

                                            <div className="col-md-6 mb-3 mt-3">
                                            <div className="input-group ">
                                              <Image   src={require('./../../assets/images/lin.png')}alt="Features tile icon 01"  width={50} height={50}/> 
                                            <input
                                                  name='caminvlinklink' 
                                                  value={this.state.input.caminvlinklink}
                                                  onChange={this.handleChange}
                                                  type="text" 
                                                  className="form-control link"  
                                                  maxLength="150"  
                                                  placeholder="LinkedIn Link"
                                                  id='caminvlinklink'/>
                                                  </div>
                                                  <div className="text-danger errors" style={{fontSize:15}}>{this.state.errors.caminvlinklink}</div>
                                              
                                            </div>
                                           
                                            <div className="col-md-6 mb-3 mt-3">
                                          <label htmlFor="caminvbio" className="form-label">Bio</label>
                                          
                                            <textarea  name='caminvbio' 
                                                 value={this.state.input.bio}
                                                  onChange={this.handleChange}
                                                 type="text" 
                                                 className="form-control"  
                                                 maxLength="250"  
                                                 rows="10"
                                                 placeholder="Type something about you team member..." 
                                                 id='caminvbio'></textarea> 
                                             <div className="text-danger errors" style={{fontSize:15}}>{this.state.errors.caminvbio}</div>
                                              
                                            </div>

                                          <div className="col-md-6 mb-3 mt-3">
                                            <div className="row mb-3">
                                            <div className="col-md-6">
                                            <label htmlFor="caminvupdprofile" className="col-sm-2 form-label">Profile</label>
                                            </div>

                                            <div className="col-md-6 imgUp">    
                                                      <div className="imagePreview"></div>
                                                  <label   className="col-md-12 btn btn-outline-secondary btn-sm">
                                                        Upload<br/>
                                                        <input type="file" id="caminvupdprofile" name="caminvupdprofile" 
                                                        accept="image/*" data-attr="1" className=" uploadFile img"  multiple 
                                                        style={{height:"0px",width:"0px",overflow : "hidden"}}/>
                                                          </label>
                                                          <div className="text-danger errors" style={{fontSize:15}}>{this.state.errors.caminvupdprofile}</div>
                                                    </div>   
 
                                            </div>
                                          </div>
                                             
                                         </div>
                                         <div className="col-md-12">
                                         <div className="row">
  <div className="col-md-3 mb-3" >
  <button type="button" className="btn btn-outline-secondary btn-sm w-100" data-attr-id="campinvestDivisionIter" id="caminvestAddmem">Add Another</button>
    </div>
    <div className="col-md-3 mb-3" >
  <button type="button" className="btn btn-success btn-sm  w-100"  onClick={this.saveCamInv}>Submit</button>
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