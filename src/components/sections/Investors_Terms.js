import React, {useState,setState,Component} from 'react';
import {NavLink,Link} from "react-router-dom";

import '../Css/styles.css';
import Switch from "react-switch";
import DataService from '../../service/DataService'; 
import MyntInvestLogo from '../../assets/images/MyntInvest.png';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import UploadService from "../../service/file-upload.service";
import Moment from 'moment';
import $ from "jquery";
const formatDate = Moment("12/09/2002").format('YYYY-MM-DD')//2002-12-09
const extractFilename = (path) => {
  const pathArray = path.split("/");
  const lastIndex = pathArray.length - 1;
  return pathArray[lastIndex];
};


const current = new Date();
const date = `${current.getFullYear()}-${current.getMonth()+1}-${current.getDate()}`;//mysql insert date format
 


class Investors_Terms extends Component {
    constructor() {
        super();
        this.state = { 
            invTermsAllDets: [],
            currentinvTerms: null,
            currentinvTermsIndex: -1,
            input: {},
            errors: {},
            ID: null,
            MTUSER_ID: null,
            EMAIL: null,
            MODULE: null, 
            INV_RISK: "",
            INV_LIMITED_TRANSFER: "",
            INV_DIVERSIFICATION: "",
            INV_CANCELLATION: "",
            INV_RESEARCH: "",
            STATUS: "",
            COMMENTS: "",
            DESCRIPTION: "",
            CREATED_USER: "",
            CREATED_DATE: "",
            MODIFIED_USER: "",
            MODIFIED_DATE: "", 
          };
           
          this.saveInvTerms = this.saveInvTerms.bind(this);
      }
     
    
      saveInvTerms(event) {
    event.preventDefault(); 
    if(this.validateInvTerms()){
      if(!window.isEmpty(sessionStorage.getItem("sessEmail"))){   
    var data = {
      ID:Number($("#investTermsform #invTermsId").val()),
      MTUSER_ID:$("#mtuser_id").val(),
      EMAIL: $("#mtuser_email").val(),
      MODULE: $("#mtuser_module").val(), 
      INV_RISK:  $("#investTermsform #invterm1").val(),
      INV_LIMITED_TRANSFER: $("#investTermsform #invterm2").val(),
      INV_DIVERSIFICATION:  $("#investTermsform #invterm3").val(),
      INV_CANCELLATION:  $("#investTermsform #invterm4").val(),
      INV_RESEARCH:  $("#investTermsform #invterm5").val(),
      STATUS: "Active",
      COMMENTS: "TEST", 
      DESCRIPTION: "Logged User",
      CREATED_DATE: Moment(date).format("YYYY-MM-DD"),
      CREATED_USER: $("#mtuser_fname").val(),
      MODIFIED_DATE: Moment(date).format("YYYY-MM-DD"),
      MODIFIED_USER: $("#mtuser_fname").val(),
       
    };

    console.log(data);

    if(window.isEmpty($("#investTermsform #invTermsId").val())){ 
   
          DataService.create("/inv_terms",data)
            .then(response => {  
              console.log("inside");
              window.showLoader();
              window.showAlert("Investor Acknowledgment updated", "/Investors_Dashboard");  
            })
            .catch(e => {
              window.showLoader(); 
              console.log(e);
              window.showAlert("Not updated.Something is wrong!","/Investors_Terms");
              // window.location.href = "/Signup";//to redirect to normal links
            });

    }else{
          DataService.update("/inv_terms/"+$("#invTermsId").val(),data)
          .then(response => {  
              window.showLoader();  
            window.showAlert("Investor Acknowledgment updated","/Investors_Dashboard");
          })
          .catch(e => {
            window.showLoader();  
            window.showAlert("Not updated.Something is wrong!","/Investors_Terms");
          });
    }

  }else{
    window.showAlert("Please Login","/Login");
  }


    }
  }
 
    validateInvTerms(){
      
    console.log("Into validateInvTerms info----------->>>")
      let input = this.state.input;
      let errors = {};
      let isValid = true; 
    
      if (!$("#invterm1").is(":checked")) {
        isValid = false;
        errors["invterm1"] = "01 Risk must be checked!!! "; 
        $("#invterm1").focus();
      }

      if (!$("#invterm2").is(":checked")) {
        isValid = false;
        errors["invterm2"] = "02 Limited Transfer must be checked!!! "; 
        $("#invterm2").focus();
      }


      if (!$("#invterm3").is(":checked")) {
        isValid = false;
        errors["invterm3"] = "03 Diversification must be checked!!! "; 
        $("#invterm3").focus();
      }


      if (!$("#invterm4").is(":checked")) {
        isValid = false;
        errors["invterm4"] = "04 Cancellation must be checked!!! "; 
        $("#invterm4").focus();
      }

      if (!$("#invterm1").is(":checked")) {
        isValid = false;
        errors["invterm5"] = "05 Research must be checked!!! "; 
        $("#invterm5").focus();
      }


      this.setState({
        errors: errors
      });
  
      return isValid;
  }
    
render() {
    return(
        
      <div className='bg-white mt-5' >&nbsp;
               <div className="row" style={{paddingLeft:10}}>
               <div className="col-md-1"></div>
               <div className="col-md-10" style={{paddingright:30}}>
               <h2>Become An <strong style={{color:"#23b347"}}>Investors</strong></h2>              
               <p style={{fontSize:15}}>To invest through Tyke, you must understand the basics of Startup Investing, Please acknowledge that you are aware of the following:</p>
               </div>
               <div className="col-md-1"></div>
               </div>
               <form name="investTermsform" id="investTermsform" method="POST" className="row m-5 g-3"  > 
           
               <div className="row" style={{paddingLeft:10}}>
               <div className="col-md-1"></div>
               <div className="col-md-10">
                <input type="hidden" id="invTermsId" name="invTermsId"/>
               <h5>01 Risk</h5>             
               <p style={{fontSize:15}}>To invest through Tyke, you must understand the basics of Startup Investing, Please acknowledge that you are aware of the following:</p>
               <div>
               <div className="row"  >
               <div className="col-md-1"  >
               <div id="switch">
	<input type="checkbox" id="invterm1" name="investTermsChecks"/>
	<label for="invterm1">Toggle</label> 
	</div></div>
    <div className="col-md-11 pt-4" >
    <label className="para" for="invterm1">I understand that I can lose the money i'm investing</label>
    <div className="text-danger errors" style={{fontSize:15}}>{this.state.errors.invterm1}</div>
                
    </div>
</div>


                    </div><hr/>
               </div>
               <div className="col-md-1"></div>
               </div>

               <div className="row" style={{paddingLeft:10}}>
               <div className="col-md-1"></div>
               <div className="col-md-10">
               <h5>02 Limited Transfer</h5>             
               <p style={{fontSize:15}}>Investment in startups in highly illud such companies are unite/private and cannot be sold easily on an exchange or simillar Secondry Trading</p>
               <div>


                     <div className="row"  >
               <div className="col-md-1"  >
               <div id="switch">
	<input type="checkbox" id="invterm2" name="investTermsChecks1"/>
	<label for="invterm2">Toggle</label> 
	</div></div>
    <div className="col-md-11 pt-4" >
    <label className="para" for="invterm2">I understand that I can lose the money i'm investing</label>
    <div className="text-danger errors" style={{fontSize:15}}>{this.state.errors.invterm2}</div>
    </div>
</div>


 
                    
                    </div><hr/>
               </div>
               <div className="col-md-1"></div>
               </div>

               <div className="row" style={{paddingLeft:10}}>
               <div className="col-md-1"></div>
               <div className="col-md-10">
               <h5>03 Diversification</h5>             
               <p style={{fontSize:15}}>Investment in startups in highly illud such companies are unite/private and cannot be sold easily on an exchange or simillar Secondry Trading</p>
               <div>


               <div className="row"  >
               <div className="col-md-1"  >
               <div id="switch">
	<input type="checkbox" id="invterm3" name="investTermsChecks2"/>
	<label for="invterm3">Toggle</label> 
	</div></div>
    <div className="col-md-11 pt-4" >
    <label className="para"  for="invterm3">I understand that I can lose the money i'm investing</label>
    <div className="text-danger errors" style={{fontSize:15}}>{this.state.errors.invterm3}</div>
    
    </div>
</div>



               
                    </div><hr/>
               </div>
               <div className="col-md-1"></div>
               </div>


               <div className="row" style={{paddingLeft:10}}>
               <div className="col-md-1"></div>
               <div className="col-md-10">
               <h5>04 Cancellation</h5>             
               <p style={{fontSize:15}}>I understand that i can't cancel after the 48-hour cencellation deadline </p>
               <div>
               <div className="row"  >
               <div className="col-md-1"  >
               <div id="switch">
	<input type="checkbox" id="invterm4" name="investTermsChecks3"/>
	<label for="invterm4">Toggle</label> 
	</div></div>
    <div className="col-md-11 pt-4" >
    <label className="para" for="invterm4">I understand that I can lose the money i'm investing</label>
    <div className="text-danger errors" style={{fontSize:15}}>{this.state.errors.invterm4}</div>
   
    </div>
</div>
              
               </div><hr/>
               </div>
               <div className="col-md-1"></div>
               </div>
      
              



               <div className="row" style={{paddingLeft:10}}>
               <div className="col-md-1"></div>
               <div className="col-md-10">
               <h5>05 Research</h5>             
               <p style={{fontSize:15}}>Do your own research. Read the documents provided by each company. Get independent legal accounting and financial advice. if you have any<br/>questions or need more information, reach out to us via support </p>
               <div>
               <div className="row"  >
               <div className="col-md-1"  >
               <div id="switch">
	<input type="checkbox" id="invterm5" name="investTermsChecks4"/>
	<label for="invterm5">Toggle</label> 
	</div></div>
    <div className="col-md-11 pt-4" >
    <label className="para" for="invterm5">I understand that I can lose the money i'm investing</label>
    <div className="text-danger errors" style={{fontSize:15}}>{this.state.errors.invterm5}</div>
   
    </div>
</div>
              
               </div><hr/>
               </div>
               </div>

               <div className='row'>
                       <div className='col-md-12 d-flex justify-content-center mb-5'>
                       <button type="button" className="btn btn-success btn-sm "  onClick={this.saveInvTerms}>Finished</button>
                {/* <NavLink  to="/Investors_Dashboard" className="nav-link text-white " style={{width: 280,height:'auto',backgroundColor: "#2ECC71",borderRadius:10,textAlign:'center'}} >Finished</NavLink> */}
                       </div>
                   </div>
                   </form>
      </div>


    )

}
}

export default Investors_Terms;