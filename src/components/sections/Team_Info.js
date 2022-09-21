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

class Team_Info extends React.Component {
    constructor() {
    super();
    this.state = {
      teaminfoAllDets: [],
      currentteaminfo: null,
      currentteaminfoIndex: -1,
      input: {},
      errors: {},
      profile : "Upload a Profile",
      ID:null,
      MTUSER_ID:null,
      EMAIL:null,
      MODULE:null,
      TEAM_SNO:"",
      TEAM_MEMBER_NAME:"",
      TEAM_MEMBER_POSITION:"",
      FB_LINK:"",
      INSTA_LINK:"",
      LINKEDIN_LINK:"",
      TEAM_BIO:"",
      PROFILE_PIC:"",
      STATUS:"",
      COMMENTS:"",
      DESCRIPTION:"",
      CREATED_USER:"",
      CREATED_DATE:"",
      MODIFIED_USER:"",
      MODIFIED_DATE:"",  
      PROFILE_NAME:"",  
    };
    
    this.saveTeamInfo = this.saveTeamInfo.bind(this);  
    this.retrieveAllTeamInfo = this.retrieveAllTeamInfo.bind(this);
    this.setActiveTeaminfo = this.setActiveTeaminfo.bind(this);
    // this.handleImagePreview=this.handleImagePreview.bind(this)
     
  }
  
  
  componentDidMount() {
    this.retrieveAllTeamInfo(); 
  }

  retrieveAllTeamInfo() {
    var querySet = "/teaminfo?EMAIL="+sessionStorage.getItem("sessEmail");
    console.log(querySet);
    DataService.findByTitle(querySet)
     .then(response => {
       this.setState({
        teaminfoAllDets: response.data, 
       });
       
       $.each(this.state.teaminfoAllDets, function (index, value) {
         
        if(index != 0){
          $("#teaminfoAddmem").click(); 
          // $("#teaminfoAddmem").trigger('click');
        }
  //  var mobile = value.ID;
  //  sessionStorage.setItem("mobile", mobile);


          $($("#TeamInfoform #teaminfoid")[index]).attr("value",value.ID).val(value.ID);
          $($("#TeamInfoform #spantmsno")[index]).attr("value",value.TEAM_SNO).val(value.TEAM_SNO);
          $($("#TeamInfoform #tmsno")[index]).attr("value",value.TEAM_SNO).val(value.TEAM_SNO);
          $($("#TeamInfoform #tmname")[index]).attr("value",value.TEAM_MEMBER_NAME).val(value.TEAM_MEMBER_NAME);
          $($("#TeamInfoform #tmposition")[index]).attr("value",value.TEAM_MEMBER_POSITION).val(value.TEAM_MEMBER_POSITION);
          $($("#TeamInfoform #tmfblink")[index]).attr("value",value.FB_LINK).val(value.FB_LINK);
          $($("#TeamInfoform #tminstalink")[index]).attr("value",value.INSTA_LINK).val(value.INSTA_LINK);
          $($("#TeamInfoform #tmlinklink")[index]).attr("value",value.LINKEDIN_LINK).val(value.LINKEDIN_LINK);
          $($("#TeamInfoform #tmteambio")[index]).attr("value",value.TEAM_BIO).val(value.TEAM_BIO);
          $($(".imagePreview")[index]).css("background-image","url("+window.mt_backend_url+value.PROFILE_PIC+")");
          $($("#TeamInfoform #tmuploadprofile")[index]).closest("label").css("visibility","hidden");
        }); 
    
     })
     .catch(e => {
       console.log(e);
     });
 }

 

 setActiveTeaminfo(teaminfoAllDets, index) {
  this.setState({
    currentteaminfo: teaminfoAllDets,
    currentteaminfoIndex: index,
    // tfcurrentFile:this.state.tfcurrentFile
  });
} 
     

saveTeamInfo(event) {
  event.preventDefault();  
  if(this.validateTeamInfo()){ 
  if(!window.isEmpty(sessionStorage.getItem("sessEmail"))){  
     
    $("#TeamInfoform #tmname").each(function (teamset) { 
       

    let tfformData = new FormData();  
    tfformData.append("ID",$($("#TeamInfoform #teaminfoid")[teamset]).val());
    tfformData.append("MTUSER_ID",$("#mtuser_id").val());
    tfformData.append("EMAIL",$("#mtuser_email").val()); 
    tfformData.append("MODULE",$("#mtuser_module").val());
    tfformData.append("TEAM_SNO",$($("#TeamInfoform #tmsno")[teamset]).val());
    tfformData.append("TEAM_MEMBER_NAME",$($("#TeamInfoform #tmname")[teamset]).val());
    tfformData.append("TEAM_MEMBER_POSITION",$($("#TeamInfoform #tmposition")[teamset]).val());
    tfformData.append("FB_LINK",$($("#TeamInfoform #tmfblink")[teamset]).val());
    tfformData.append("INSTA_LINK",$($("#TeamInfoform #tminstalink")[teamset]).val());
    tfformData.append("LINKEDIN_LINK",$($("#TeamInfoform #tmlinklink")[teamset]).val());
    tfformData.append("TEAM_BIO",$($("#TeamInfoform #tmteambio")[teamset]).val()); 
    // tfformData.append("PROFILE_PIC",null,""); 
    tfformData.append("STATUS","Active");
    tfformData.append("COMMENTS","TEST");
    tfformData.append("DESCRIPTION","TEST");
    tfformData.append("CREATED_USER",$("#mtuser_fname").val());
    tfformData.append("CREATED_DATE",Moment(date).format("YYYY-MM-DD"));
    tfformData.append("MODIFIED_USER",$("#mtuser_fname").val());
    tfformData.append("MODIFIED_DATE",Moment(date).format("YYYY-MM-DD")); 

    if(window.isEmpty($($("#TeamInfoform #teaminfoid")[teamset]).val())){ 
      tfformData.append("PROFILE_PIC",$("#TeamInfoform #tmuploadprofile")[teamset].files[0],$("#TeamInfoform #tmuploadprofile")[teamset].files[0].name); 
    } 
       
 
  if(window.isEmpty($($("#TeamInfoform #teaminfoid")[teamset]).val())){ 
    
    

    UploadService.create("/teaminfo",tfformData)
    .then(response => {  
        window.showLoader();  
        window.showAlert("Team Information is submittted","/Startup_Dashboard");
    })
    .catch(e => {
      window.showLoader();  
      window.showAlert("OOps!!! Something went wrong","/Team_Info");
    });

  }else{ 

    
    UploadService.update("/teaminfo/"+Number($($("#TeamInfoform #teaminfoid")[teamset]).val()),tfformData)
    .then(response => {  
        window.showLoader();  
      window.showAlert("Team Information is submittted","/Startup_Dashboard");
    })
    .catch(e => {
      window.showLoader();  
      window.showAlert("OOps!!! Something went wrong","/Team_Info");
    });
    
  }


      });
    
   

  }else{
    window.showAlert("Please Login","/Login");
  }
}

}  
validateTeamInfo(){
  console.log("inside Team info validations")
      let input = this.state.input;
      let errors = {};
      let isValid = true;
   
      $("#TeamInfoform #tmname").each(function (index) {
        if (window.isEmpty($($("#TeamInfoform #tmname")[index]).val())) {
          isValid = false; 
          // errors["tmname"]= "Please enter your Team Member Name.";
          $($("#TeamInfoform #tmname")[index]).parent().find("div").html("Please enter your Team Member Name.");
         } 
    
        if (window.isEmpty($($("#TeamInfoform #tmposition")[index]).val())) {
          isValid = false;
          // errors["tmposition"]= "Please enter Position Name.";
          $($("#TeamInfoform #tmposition")[index]).parent().find("div").html("Please enter Position Name.");
       
        }
     
        if (window.isEmpty($($("#TeamInfoform #tmfblink")[index]).val())) {
          isValid = false;
          // errors["tmfblink"] = "Please enter your Facebook Link.";
          $($("#TeamInfoform #tmfblink")[index]).parent().parent().find("div:eq(1)").html("Please enter your Facebook Link.");
        }
     
        if (window.isEmpty($($("#TeamInfoform #tminstalink")[index]).val())) {
          isValid = false;
          // errors["tminstalink"] = "Please enter your Instagram Link.";
          $($("#TeamInfoform #tminstalink")[index]).parent().parent().find("div:eq(1)").html("Please enter your Instagram Link.");
        }
     
        if (window.isEmpty($($("#TeamInfoform #tmlinklink")[index]).val())) {
          isValid = false;
          // errors["tmlinklink"] = "Please enter your Linked In Link.";
          $($("#TeamInfoform #tmlinklink")[index]).parent().parent().find("div:eq(1)").html("Please enter your Linked In Link.");
        }
     
        if (window.isEmpty($($("#TeamInfoform #tmteambio")[index]).val())) {
          isValid = false;
          // errors["tmteambio"] = "Please Enter Your Team Bio ";
          $($("#TeamInfoform #tmteambio")[index]).parent().find("div").html("Please Enter Your Team Bio");
        }


        if(window.isEmpty($($("#TeamInfoform #teaminfoid")[index]).val())){  
        if (!Number($($("#TeamInfoform #tmuploadprofile")[index]).get(0).files.length)  > 0) {
          isValid = false;
          // errors["tmuploadprofile"] = "Please Upload Image";
          $($("#TeamInfoform #tmuploadprofile")[index]).parent().find("div").html("Please Upload Image");
          $("#TeamInfoform #tmuploadprofile").focus();
        }
      
      }


      }); 
       
      this.setState({
        errors: errors
      });
  
      return isValid;
  }
     
 render() {
 
  const {  teaminfoAllDets, currentteaminfo, currentteaminfoIndex } = this.state;
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
                                          <NavLink to="/Startup_Dashboard" className="nav-link arrow-right" style={{color:"#B1B0AD"}}>&nbsp;Back to Dashboard</NavLink>
                                        </li>
                                  
                                    </ul>
                              </div>
                            </nav>

                           <div className='container'>
                              <div className='row' style={{height:'auto'}}>
                              
                                    <div className='col-md-12'>
                                        <h3>Team Info</h3>
                                        {/* <p className='para'>
                                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                          Tincidunt libero vel elementum at cum tupis eget. Viverra ultrices lacus,
                                           lectus volutpat sociis vitae mauris<br/>porta faugiat. Nec, vitae facilisi 
                                           elementum eu est vel quis platea. Diam pharetra nec malesuada mi purus erat.</p>
                                    
                                         */}
                                        
                                     <div className='row'>
                                     
                                     <form name="TeamInfoform" id="TeamInfoform" method="POST" enctype="multipart/form-data" className="row m-5 g-3"  >  

                                        <div className="col-md-12 teaminfomem" id="teamInfoDivisionIter">
                                        <span id="spantmsno" className='spanbgcircle'>1</span> 
                                          
                                            <div className="col-md-6 mb-3 mt-3">
                                            <label for="tmname" className="form-label">Name</label>
                                            <input name="teaminfoid" id="teaminfoid" type="hidden"  />
                                            <input name="tmsno" id="tmsno" type="hidden" value="1"/>
                                            <input
                                                  name='tmname' 
                                                  type="text" 
                                                  value={this.state.input.tmname}
                                                  onChange={this.handleChange}
                                                  className="form-control"  
                                                  maxlength="150"  
                                                  placeholder="Enter Your Team Member Name" 
                                                  id='tmname'/>
                                                  <div className="text-danger errors" style={{fontSize:15}}>{this.state.errors.tmname}</div>
                                            </div> 

                                            
                                            <div className="col-md-6 mb-3 mt-3">
                                            <label for="tmposition" className="form-label">Position in the Company</label>
                                            <input
                                                 name='tmposition' 
                                                 type="text"
                                                 value={this.state.input.tmposition}
                                                 onChange={this.handleChange} 
                                                 className="form-control"  
                                                 maxlength="150"  
                                                 placeholder="Position Name"
                                                 id='tmposition'/>
                                                  <div className="text-danger errors" style={{fontSize:15}}>{this.state.errors.tmposition}</div>
                                            </div> 

                                       
                                        <div className="col-md-6 mb-3 mt-3"> 
                                        <div className="input-group "><Image   src={require('./../../assets/images/face.png')}alt="Features tile icon 01"  width={50} height={50}/>
                                            <input
                                                 name='tmfblink' 
                                                 value={this.state.input.tmfblink}
                                                 onChange={this.handleChange}
                                                 type="text" 
                                                 className="form-control"  
                                                 maxlength="150"  
                                                 placeholder="Facebook Link"
                                                 id='tmfblink'/>
                                                    </div>
                                                    <div className="text-danger errors" style={{fontSize:15}}>{this.state.errors.tmfblink}</div>
                                              
                                            </div>
                                             
                                        
                                            <div className="col-md-6 mb-3 mt-3">
                                            <div className="input-group ">
                                              <Image   src={require('./../../assets/images/insta.jpg')}alt="Features tile icon 01"  width={50} height={50}/> 
                                            <input
                                                 name='tminstalink' 
                                                 value={this.state.input.tminstalink}
                                                 onChange={this.handleChange}
                                                 type="text" 
                                                 className="form-control"  
                                                 maxlength="150"  
                                                 placeholder="Instagram Link"
                                                 id='tminstalink'/>
                                                 
                                                 </div>
                                                     <div className="text-danger errors" style={{fontSize:15}}>{this.state.errors.tminstalink}</div>
                                            </div> 

                                            <div className="col-md-6 mb-3 mt-3">
                                            <div className="input-group ">
                                              <Image   src={require('./../../assets/images/lin.png')}alt="Features tile icon 01"  width={50} height={50}/> 
                                            <input
                                                  name='tmlinklink' 
                                                  value={this.state.input.tmlinklink}
                                                  onChange={this.handleChange}
                                                  type="text" 
                                                  className="form-control"  
                                                  maxlength="150"  
                                                  placeholder="LinkedIn Link"
                                                  id='tmlinklink'/>
                                                  </div>
                                                  <div className="text-danger errors" style={{fontSize:15}}>{this.state.errors.tmlinklink}</div>
                                              
                                            </div>
                                           
                                            <div className="col-md-6 mb-3 mt-3">
                                          <label for="tmteambio" className="form-label">Bio</label>
                                          
                                            <textarea  name='tmteambio' 
                                                 value={this.state.input.bio}
                                                  onChange={this.handleChange}
                                                 type="text" 
                                                 className="form-control"  
                                                 maxlength="250"  
                                                 rows="10"
                                                 placeholder="Enter Your Bio" 
                                                 id='tmteambio'></textarea> 
                                             <div className="text-danger errors" style={{fontSize:15}}>{this.state.errors.tmteambio}</div>
                                              
                                            </div>

                                          <div className="col-md-6 mb-3 mt-3">
                                            <div className="row mb-3">
                                            <div className="col-md-6">
                                            <label for="tmuploadprofile" className="col-sm-2 form-label">Profile</label>
                                            </div>

                                            <div className="col-md-6 imgUp">    
                                                      <div className="imagePreview"></div>
                                                  <label   className="col-md-12 btn btn-outline-secondary btn-sm">
                                                        Upload<br/>
                                                        <input type="file" id="tmuploadprofile" name="tmuploadprofile" 
                                                        accept="image/*" data-attr="1" className=" uploadFile img"  multiple 
                                                        style={{height:"0px",width:"0px",overflow : "hidden"}}/>
                                                          </label>
                                                          <div className="text-danger errors" style={{fontSize:15}}>{this.state.errors.tmuploadprofile}</div>
                                                    </div>   
 
                                            </div>
                                          </div>
                                             
                                         </div>
                                         <div className="col-md-12">
                                         <div className="row">
  <div className="col-md-3 mb-3" >
  <button type="button" className="btn btn-outline-secondary btn-sm w-100" data-attr-id="teamInfoDivisionIter" id="teaminfoAddmem">Add Members</button>
    </div>
    <div className="col-md-3 mb-3" >
  <button type="button" className="btn btn-success btn-sm  w-100"  onClick={this.saveTeamInfo}>Submit</button>
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






export default Team_Info;