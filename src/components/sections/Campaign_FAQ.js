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

class Campaign_FAQ extends React.Component {
    constructor() {
    super();
    this.state = {
      campfaqAllDets: [],
      currenfaqinfo: null,
      currenfaqinfoIndex: -1,
      input: {},
      errors: {},
      profile : "Upload a Profile",
      ID:null,
      MTUSER_ID:null,
      EMAIL:null,
      MODULE:null,
      CFAQ_SNO:"",
      CFAQ_QUESTION:"", 
      CFAQ_QANSWER:"", 
      STATUS:"",
      COMMENTS:"",
      DESCRIPTION:"",
      CREATED_USER:"",
      CREATED_DATE:"",
      MODIFIED_USER:"",
      MODIFIED_DATE:"",  
      CFAQ_PROFILE_NAME:"",  
    };
    
    this.saveCamFaq = this.saveCamFaq.bind(this);  
    this.retrieveAllFaq = this.retrieveAllFaq.bind(this);
    this.setActiveFaq = this.setActiveFaq.bind(this);
    // this.handleImagePreview=this.handleImagePreview.bind(this)
     
  }
  
  
  componentDidMount() {
    this.retrieveAllFaq(); 
  }

  retrieveAllFaq() {
    // var sessionCampaign = sessionStorage.getItem("sessionCampaign");
    // console.log("sessionCampaign"+sessionCampaign)


    var querySet = "/camfaq?EMAIL="+sessionStorage.getItem("sessEmail");
    console.log(querySet);
    DataService.findByTitle(querySet)
     .then(response => {
       this.setState({
        campfaqAllDets: response.data, 
       });
       
       $.each(this.state.campfaqAllDets, function (index, value) {
         
        if(index != 0){
          $("#camfaqAddmem").click(); 
          // $("#camfaqAddmem").trigger('click');
        } 
          $($("#CamFaqform #campfaqid")[index]).attr("value",value.ID).val(value.ID);
          $($("#CamFaqform #spantCFAQestsno")[index]).attr("value",value.CFAQ_SNO).val(value.CFAQ_SNO);
          $($("#CamFaqform #camfaqsno")[index]).attr("value",value.CFAQ_SNO).val(value.CFAQ_SNO);
          $($("#CamFaqform #camfaqquestion")[index]).attr("value",value.CFAQ_QUESTION).val(value.CFAQ_QUESTION);
          $($("#CamFaqform #camfaqquestanswer")[index]).attr("value",value.CFAQ_QANSWER).val(value.CFAQ_QANSWER);
           
        }); 
    
     })
     .catch(e => {
       console.log(e);
     });
 }

 

 setActiveFaq(campfaqAllDets, index) {
  this.setState({
    currenfaqinfo: campfaqAllDets,
    currenfaqinfoIndex: index,
    // tfcurrentFile:this.state.tfcurrentFile
  });
} 
     

saveCamFaq(event) {
  event.preventDefault();  
  console.log("saveCamFaq");
  if(this.validateCamFaq()){ 
  if(!window.isEmpty(sessionStorage.getItem("sessEmail"))){  
     
    $("#CamFaqform #camfaqquestion").each(function (teamset) { 
       

    let camfaqformData = new FormData();  
    camfaqformData.append("ID",Number($($("#CamFaqform #campfaqid")[teamset]).val()));
    camfaqformData.append("MTUSER_ID",$("#mtuser_id").val());
    camfaqformData.append("EMAIL",$("#mtuser_email").val()); 
    camfaqformData.append("MODULE",sessionStorage.getItem("sessionCampaign"));
    camfaqformData.append("CFAQ_SNO",$($("#CamFaqform #camfaqsno")[teamset]).val());
    camfaqformData.append("CFAQ_QUESTION",$($("#CamFaqform #camfaqquestion")[teamset]).val());
    camfaqformData.append("CFAQ_QANSWER",$($("#CamFaqform #camfaqquestanswer")[teamset]).val());  
    camfaqformData.append("STATUS","Active");
    camfaqformData.append("COMMENTS","TEST");
    camfaqformData.append("DESCRIPTION","TEST");
    camfaqformData.append("CREATED_USER",$("#mtuser_fname").val());
    camfaqformData.append("CREATED_DATE",Moment(date).format("YYYY-MM-DD"));
    camfaqformData.append("MODIFIED_USER",$("#mtuser_fname").val());
    camfaqformData.append("MODIFIED_DATE",Moment(date).format("YYYY-MM-DD")); 
  
       
 
  if(window.isEmpty($($("#CamFaqform #campfaqid")[teamset]).val())){  
    console.log("insert"+camfaqformData);
    UploadService.create("/camfaq",camfaqformData)
    .then(response => {  
        window.showLoader();  
        window.showAlert("Campaign FAQ's Information is submittted","/Campaign_FAQ");
    })
    .catch(e => {
      window.showLoader();  
      window.showAlert("OOps!!! Something went wrong","/Campaign_FAQ");
    });

  }else{ 
    console.log("update"+camfaqformData);
    
    UploadService.update("/camfaq/"+Number($($("#CamFaqform #campfaqid")[teamset]).val()),camfaqformData)
    .then(response => {  
        window.showLoader();  
      window.showAlert("Campaign FAQ's Information is submittted","/Campaign_FAQ");
    })
    .catch(e => {
      window.showLoader();  
      window.showAlert("OOps!!! Something went wrong","/Campaign_FAQ");
    });
    
  }


      });
    
   

  }else{
    window.showAlert("Please Login","/Login");
  }
}

}  
validateCamFaq(){
  console.log("inside validateCamFaq")
      let input = this.state.input;
      let errors = {};
      let isValid = true;
   
      $("#CamFaqform #camfaqquestion").each(function (index) {
        if (window.isEmpty($($("#CamFaqform #camfaqquestion")[index]).val())) {
          isValid = false; 
          // errors["camfaqquestion"]= "Please enter your Team Member Name.";
          $($("#CamFaqform #camfaqquestion")[index]).parent().find("div").html("Please Type your questions here");
         } 
    
       
        if (window.isEmpty($($("#CamFaqform #camfaqquestanswer")[index]).val())) {
          isValid = false;
          // errors["camfaqquestanswer"] = "Please Enter Your Team Bio ";
          $($("#CamFaqform #camfaqquestanswer")[index]).parent().find("div").html("Please Type somethings about your team members");
        }
      
       
      });
      
       
      this.setState({
        errors: errors
      });
  
      return isValid;
  }
     
 render() {
 
  const {  campfaqAllDets, currenfaqinfo, currenfaqinfoIndex } = this.state;
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
                                        <h3>FAQs (Frequently Asked Question)</h3>
                                        {/* <p className='para'>
                                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                          Tincidunt libero vel elementum at cum tupis eget. Viverra ultrices lacus,
                                           lectus volutpat sociis vitae mauris<br/>porta faugiat. Nec, vitae facilisi 
                                           elementum eu est vel quis platea. Diam pharetra nec malesuada mi purus erat.</p>
                                    
                                         */}
                                        
                                     <div className='row'>
                                     
                                     <form name="CamFaqform" id="CamFaqform" method="POST" encType="multipart/form-data" className="row m-5 g-3"  >  

                                        <div className="col-md-12 campfaqmem" id="campfaqDivisionIter">
                                        <span id="spantCFAQestsno" className='spanbgcircle'>1</span> 
                                          
                                            <div className="col-md-6 mb-3 mt-3">
                                            <label htmlFor="camfaqquestion" className="form-label">Question</label>
                                            <input name="campfaqid" id="campfaqid" type="hidden"  />
                                            <input name="camfaqsno" id="camfaqsno" type="hidden" value="1"/>
                                            <input
                                                  name='camfaqquestion' 
                                                  type="text" 
                                                  value={this.state.input.camfaqquestion}
                                                  onChange={this.handleChange}
                                                  className="form-control"  
                                                  maxLength="150"  
                                                  placeholder="Type your questions here" 
                                                  id='camfaqquestion'/>
                                                  <div className="text-danger errors" style={{fontSize:15}}>{this.state.errors.camfaqquestion}</div>
                                            </div> 

                                            
                                             
                                           
                                            <div className="col-md-6 mb-3 mt-3">
                                          <label htmlFor="camfaqquestanswer" className="form-label">Answer</label>
                                          
                                            <textarea  name='camfaqquestanswer' 
                                                 value={this.state.input.camfaqquestanswer}
                                                  onChange={this.handleChange}
                                                 type="text" 
                                                 className="form-control"  
                                                 maxLength="250"  
                                                 rows="10"
                                                 placeholder="Type somethings about your team members" 
                                                 id='camfaqquestanswer'></textarea> 
                                             <div className="text-danger errors" style={{fontSize:15}}>{this.state.errors.camfaqquestanswer}</div>
                                              
                                            </div>

                                           
                                             
                                         </div>
                                         <div className="col-md-12">
                                         <div className="row">
  <div className="col-md-3 mb-3" >
  <button type="button" className="btn btn-outline-secondary btn-sm w-100" data-attr-id="campfaqDivisionIter" id="camfaqAddmem">Add Question</button>
    </div>
    <div className="col-md-3 mb-3" >
  <button type="button" className="btn btn-success btn-sm  w-100"  onClick={this.saveCamFaq}>Submit</button>
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






export default Campaign_FAQ;