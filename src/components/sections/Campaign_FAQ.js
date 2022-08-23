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

class Campaign_FAQ extends React.Component {
  constructor() {
    super();
    this.state = {
      faqsAllDets: [],
      currentfaqs: null,
      currentfaqsIndex: -1,
      input: {},
      errors: {},
      ID:null,
      MTUSER_ID:null,
      EMAIL:null,
      MODULE:null,
      FAQ_SNO:"",
      QUESTION:"",
      ANSWER:"",
      STATUS:"",
      COMMENTS:"",
      DESCRIPTION:"",
      CREATED_USER:"",
      CREATED_DATE:"",
      MODIFIED_USER:"",
      MODIFIED_DATE:""
    };
     
    this.saveFAQs = this.saveFAQs.bind(this);  
    this.retrieveAllFAQs = this.retrieveAllFAQs.bind(this);
    this.setActiveFAQs = this.setActiveFAQs.bind(this);
    
  }
     
  componentDidMount() {
    this.retrieveAllFAQs();
  }

  retrieveAllFAQs() {
    var querySet = "/faqs?EMAIL="+sessionStorage.getItem("sessEmail");
    console.log(querySet);
    DataService.findByTitle(querySet)
     .then(response => {
       this.setState({
        faqsAllDets: response.data, 
       });
       
        this.state.faqsAllDets.map((finfo, index) => (
            $("#faqsid").attr("value",finfo.ID),
            $("#spanfaqssno").attr("value",finfo.FAQ_SNO),
            $("#faqssno").attr("value",finfo.FAQ_SNO),
            $("#question").attr("value",finfo.QUESTION),
            $("#answer").attr("value",finfo.ANSWER)
            // $("#tmprofileinfo").attr("value",cinfo.PROFILE_PIC)
            
          ));
       
     })
     .catch(e => {
       console.log(e);
     });
 }


 setActiveFAQs(faqsAllDets, index) {
  this.setState({
    currentfaqs: faqsAllDets,
    currentfaqsIndex: index
  });
} 
     
 
saveFAQs(event) {
  event.preventDefault();  
  if(this.validateFAQs()){
    console.log("inside FAQs save")
  if(!window.isEmpty(sessionStorage.getItem("sessEmail"))){ 
    
    // var teaminfodata={}
     
    $("#FAQsForm #question").each(function (faqsset) {
      // console.log(teamset)
      //  console.log($($("#TeamInfoform #tmname")[teamset]).val()) 
       
      var faqsdata = {
        ID:Number($($("#FAQsForm #faqsid")[faqsset]).val()),
        MTUSER_ID:$("#mtuser_id").val(),
        EMAIL:$("#mtuser_email").val(),
        MODULE:$("#mtuser_module").val(),
        FAQ_SNO:$($("#FAQsForm #faqssno")[faqsset]).val(),
        QUESTION:$($("#FAQsForm #question")[faqsset]).val(),
        ANSWER:$($("#FAQsForm #answer")[faqsset]).val(),
        STATUS:"Active",
        COMMENTS:"TEST",
        DESCRIPTION:"TEST",
        CREATED_USER:$("#mtuser_fname").val(),
        CREATED_DATE:Moment(date).format("YYYY-MM-DD"),
        MODIFIED_USER:$("#mtuser_fname").val(),
        MODIFIED_DATE:Moment(date).format("YYYY-MM-DD")
       }
 
  if(window.isEmpty($("#faqsid").val())){ 

  DataService.create("/faqs",faqsdata)
    .then(response => {  
        window.showLoader();  
        window.showAlert("FAQs is submittted","/Campaign");
    })
    .catch(e => {
      window.showLoader();  
      window.showAlert("OOps!!! Something went wrong","/Campaign_FAQ");
    });

  }else{ 

    DataService.update("/faqs"+$("#faqsid").val(),faqsdata)
    .then(response => {  
        window.showLoader();  
      window.showAlert("FAQs is submittted","/Campaign");
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
validateFAQs(){
  console.log("inside FAQs validations")
      let input = this.state.input;
      let errors = {};
      let isValid = true;
   
      $("#FAQsForm #question").each(function (index) {
        if (window.isEmpty($($("#FAQsForm #question")[index]).val())) {
          isValid = false;
          errors["question"]= "Please Type your questions here.";
        }
     
        if (window.isEmpty($($("#FAQsForm #answer")[index]).val())) {
          isValid = false;
          errors["answer"] = "Please Type somethings about your team members ";
        }
      });
      
     
       
      this.setState({
        errors: errors
      });
  
      return isValid;
  }
     
 render() {
  const {  faqsAllDets, currentfaqs, currentfaqsIndex } = this.state;
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
                                        <h3>FAQs (Frequently Asked Question)</h3>
                                         <p className='para'>
                                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                          Tincidunt libero vel elementum at cum tupis eget. Viverra ultrices lacus,
                                           lectus volutpat sociis vitae mauris<br/>porta faugiat. Nec, vitae facilisi 
                                           elementum eu est vel quis platea. Diam pharetra nec malesuada mi purus erat.</p>
                                    
                                         
                                        
                                     <div className='row'>
                                     <form name="FAQsForm" id="FAQsForm" method="POST" className="row m-5 g-3"  >  

                                        <div className="col-md-12 faqsmem" id="faqsDivisionIter">
                                        <span id="spanfaqssno" className='spanbgcircle'>1</span> 
                                          
                                            <div className="col-md-6 mb-3 mt-3">
                                            <label for="question" className="form-label">Question</label>
                                            <input name="faqsid" id="faqsid" type="hidden"  />
                                            <input name="faqssno" id="faqssno" type="hidden" value="1"/>
                                            <input
                                                  name='question' 
                                                  type="text" 
                                                  value={this.state.input.question}
                                                  onChange={this.handleChange}
                                                  className="form-control"  
                                                  maxlength="500"  
                                                  placeholder="Type your questions here" 
                                                  id='question'/>
                                                  <div className="text-danger errors" style={{fontSize:15}}>{this.state.errors.question}</div>
                                            </div> 
           
                                           
                                            <div className="col-md-6 mb-3 mt-3">
                                          <label for="answer" className="form-label">Answer</label>
                                          <div className="input-group ">
                                            <textarea  name='answer' 
                                                 value={this.state.input.answer}
                                                  onChange={this.handleChange}
                                                 type="text" 
                                                 className="form-control"  
                                                 maxlength="900"  
                                                 rows="10"
                                                 placeholder="Type somethings about your team members" 
                                                 id='answer'></textarea>
                                            </div> 
                                            <div className="text-danger errors" style={{fontSize:15}}>{this.state.errors.answer}</div>
                                            </div>

                                             
                                         </div>
                                         <div className="col-md-12">
                                         <div className="row">
                                        <div className="col-md-3 mb-3" >
                                        <button type="button" className="btn btn-outline-secondary btn-sm w-100" data-attr-id="faqsDivisionIter" id="faqsAddmem">Add Question</button>
                                          </div>
                                          <div className="col-md-3 mb-3" >
                                        <button type="button" className="btn btn-success btn-sm  w-100"  onClick={this.saveFAQs}>Submit</button>
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