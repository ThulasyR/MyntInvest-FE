import React from "react";
import classNames from 'classnames';
import Image from "../elements/Image";
import Button from '../elements/Button';
import ButtonGroup from "../elements/ButtonGroup";
import imgCard from './../../assets/images/Strategy.jpg';
import '../Css/styles.css';
import $ from 'jquery';
import DataService from '../../service/DataService'; 
import {
    Card   
  } from "@material-ui/core";

const Color = {
    color:"grey"
}



const Startup_Dashboard = ({
    className,
    topOuterDivider,
    bottomOuterDivider,
    topDivider,
    bottomDivider,
    hasBgColor,
    invertColor,
    pushLeft,
    ...props
  }) => {
 
const tilesClasses = classNames(
'tiles-wrap',
pushLeft && 'push-left'
); 
/*Company information*/
var companyAllDets=[]; 
var cdquerySet = "/company_info?EMAIL="+sessionStorage.getItem("sessEmail");
DataService.findByTitle(cdquerySet)
.then(response => {
    companyAllDets = response.data 
if(companyAllDets.length > 0 ){
  $(".companysts").html('<button type="button" class="btn btn-success btn-sm" id="cpcompleted">COMPLETED</button>')
}else{
  $(".companysts").html('<button type="button" class="btn btn-danger btn-sm" id="cppending">PENDING</button>')
}
 
}) 
   .catch(e => {
     console.log(e);
   });
/* Team Information */
var teaminfoAllDets=[]; 
var tiquerySet = "/teaminfo?EMAIL="+sessionStorage.getItem("sessEmail");
DataService.findByTitle(tiquerySet)
.then(response => {
  teaminfoAllDets = response.data 
  if(teaminfoAllDets.length > 0 ){
    $(".teamsts").html('<button type="button" class="btn btn-success btn-sm"  >COMPLETED</button>')
  }else{
    $(".teamsts").html('<button type="button" class="btn btn-danger btn-sm" >PENDING</button>')
  }
   
   })
   .catch(e => {
     console.log(e);
   });

   var pitchuploadAllDets=[]; 
   var pitchquerySet = "/uploadpitch?EMAIL="+sessionStorage.getItem("sessEmail");
   DataService.findByTitle(pitchquerySet)
   .then(response => {
      pitchuploadAllDets = response.data 
      if(pitchuploadAllDets.length > 0 ){
        $(".pitchsts").html('<button type="button" class="btn btn-success btn-sm"  >View PDF</button>')
      }else{
        $(".pitchsts").html('<button type="button" class="btn btn-success btn-sm" >Upload a PDF</button>')
      }
      })
      .catch(e => {
        console.log(e);
      });
   
      var pitchproblemAllDets=[]; 
      var pitchquerySet = "/createpitch?EMAIL="+sessionStorage.getItem("sessEmail");
      DataService.findByTitle(pitchquerySet)
      .then(response => {
        pitchproblemAllDets = response.data 
          //  console.log("LENGTH OF COMPANY INFO"+companyAllDets.length);
          if(pitchproblemAllDets.length > 0 ){
            $(".problemsts").html('<button type="button" class="btn btn-success btn-sm"  >COMPLETED</button>')
          }else{
            $(".problemsts").html('<button type="button" class="btn btn-danger btn-sm" >PENDING</button>')
          }
         })
         .catch(e => {
           console.log(e);
         });
      
   


      /*Company information*/
var esignAllDets=[]; 
var cdquerySet = "/esign";
DataService.findByTitle(cdquerySet)
.then(response => {
  esignAllDets = response.data 

  if(esignAllDets.length == 0){
    $(".esigndocument").html("");
  }
 
  $.each(esignAllDets, function (index, value) {

    console.log("value.ESIGN_UPLOAD_DOC.length"+value.ESIGN_UPLOAD_DOC.length)
    //uploadAreaRaise
    if(value.ESIGN_UPLOAD_DOC.length > 0){ 
      $(".esigndocument").html("<a class='text-primary' target='_blank' href="+window.mt_backend_url+value.ESIGN_UPLOAD_DOC+"><button type='button' class='btn btn-success btn-sm'>DOWNLOAD</button></a>")
    }  

  });


   })
   .catch(e => {
     console.log(e);
   });




return (
    
             
        <div className="row text-center">
  
               <div className="row">
               <div className="col-md-1"></div>
               <div className="col-md-11">
               <div className="m-5 p-4">
               <div className="row">
                <div className="col-md-12">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb arr-right">
                      <li className="breadcrumb-item text-sm" aria-current="page" style={{color:"Grey"}}>Startup</li>
                      <li className="breadcrumb-item text-sm active" aria-current="page" style={{color:'#23b347'}}>Dashboard</li>
                      <li className="breadcrumb-item text-sm text-dark active"><a className="opacity-5 text-dark" href="/Campaign">Campaign</a></li>
                      <li className="breadcrumb-item text-sm text-dark active"><a className="opacity-5 text-dark" href="/Analystics">Analystics</a></li>
                    </ol>
                  </nav>
                </div>
                        <h3 align="left"  style={{marginTop:100}}>Raise with MyntInvest</h3>
                        <p className="para"
                          align="left" style={Color}>We collect and determine the purposes and means of the processing of certainin formation that may also receive,and process Personal Information controlled and stored by third parties with your consent </p>
                     <div className="col-md-12">
                     
                      <div className="row">
                      <div className="col-md-6">
                          <div className="card site-header ">
                            <div className="card-body"> 
                            <h5 className="card-title cardtitle">E-Sign</h5>
                            <div className="row ">
                          <div className="col-md-8 pt-3"> 
                          <p className="card-text para" align="left" >E-Sign your aggrementes to finalize investment in your Campaign</p>
                            </div>
                            <div className="col-md-4 esigndocument"> 
                            
                            </div>
                            </div> 
                            
                            </div>
                          </div>
                            </div> 
                        </div> 



                    <div className="row mt-3">
                    <div className="col-md-6">
                    <h3 align="left" style={{marginTop:50}}>About</h3>
                    <a href="/Company_Info">
                          <div className="card bg-yellowlight">
                            <div className="card-body"> 
                            <h5 className="card-title cardtitle">Company Profile</h5>
                            <div className="row ">
                          <div className="col-md-8 pt-3"> 
                          <p className="card-text para" align="left" > Tell us a little about your company</p>
                            </div>
                            <div className="col-md-4"> 
                            <a href="/Company_Info" className="companysts" >
                             
                              </a>
                            </div>
                            </div> 
                            
                            </div>
                          </div>
                          </a>
          </div>




          <div className="col-md-6">
                    <h3 align="left" style={{marginTop:50}}>&nbsp;</h3>
                          <div className="card bg-pink">
                            <div className="card-body"> 
                            <h5 className="card-title cardtitle">Team</h5>
                            <div className="row ">
                          <div className="col-md-8 pt-3"> 
                          <p className="card-text para " align="left" >  Tell us a little about your team</p>
                            </div>
                            <div className="col-md-4"> 
                            <a href="/Team_Info" className="teamsts">
                            
                            
                            </a>
                            </div>
                            </div> 
                            
                            </div>
                          </div>
          </div> 
                      </div> 






                      <div className="row mt-3">
                    <div className="col-md-6">
                    <h3 align="left" style={{marginTop:50}}>Pitch</h3>
                          <div className="card site-header">
                            <div className="card-body"> 
                            <h5 className="card-title cardtitle">Pitch Deck</h5>
                            <div className="row ">
                          <div className="col-md-8 pt-3"> 
                          <p className="card-text para" align="left" > This will be displayed to your potential investors</p>
                            </div>
                            <div className="col-md-4"> 
                            <a href="/Create_Pitch" className="problemsts">
                           

                            
                            </a>
                            </div>
                            </div> 


                            <div className="row mt-3">
                            <div class="btn-group" role="group" aria-label="Basic example">
                            <a href="/Upload_Pitch" className="pitchsts"> 
                            </a>
                            <a href="/Create_Pitch">
                            <button type="button" className="btn btn-secondary btn-sm">Create a Pitch</button>
                            </a> 
                      </div>
                          <div className="col-md-6"> 
                          {/* <a href="/Upload_Pitch" className="pitchsts"> 
                          
                        

 
                            </a> */}
                            
                            </div>
                            
                            </div> 
                            
                            </div>
                          </div>
          </div>




          <div className="col-md-6">
                    <h3 align="left" style={{marginTop:50}}>&nbsp;</h3>
                          <div className="card bg-pink">
                            <div className="card-body"> 
                            <h5 className="card-title cardtitle">Review Pitch</h5>
                            <div className="row pt-1">
                          <div className="col-md-8 pt-3"> 
                          <p className="card-text para " align="left" >Review your Pitch (created using MyntInvest Pitch builder)</p>
                            </div>
                            <div className="col-md-4"> 
                            <a href="/Create_Pitch"  className="problemsts">
                            
                            </a>
                            </div>
                            </div> 
                            <div className="row "><br/><br/></div>
                            
                            </div>
                          </div>
          </div> 
                      </div> 




                      

                    <div className="row mt-3"> 
                    <h3 align="left" >Your Campaign</h3>
                    <div className="row">
                    <div className="col-md-5">
                          <div className="card " style={{height:"541px"}}>
                            <div className="card-body mt-5 mb-5"> 
                           <p class=" lightext mt-5 mb-5">
                            <a href="/Campaign">
                            <button type="button" className="btn btn-light lightext  mt-5 mb-5">
                              <i className="fa fa-plus"></i><br/>  Add Campaign
                            </button>
                            
                            </a>
                            </p>
                          
                            </div>
                          </div>
          </div>




          <div className="col-md-5"> 
                          <div className="card ">
                          <img src={require('./../../assets/images/Strategy.jpg')} class="card-img-top" alt="..."/>
                            <div className="card-body"> 
                            <h5 className="card-title cardtitle "> 
                            <div class="row d-flex align-items-center">
                            <img  className="image--cover align-middle" src={require('./../../assets/images/Strategy.jpg')} />&nbsp;
                               Lambs  
                                </div></h5>
                           
                    <p align="left" class="para">Apparel that boosts your immune health, cognition, recovery, and sleep</p>
                   <h6 align="left"><small  class="text-green font12">25.07% of total goal raised</small> </h6>
                   <h6 align="left"><small  class="text-secondary font12">Santa Monica, CA</small></h6>
                   <span className="spanbg para bg-yellowlight">B2C</span>&nbsp;
                   <span className="spanbg para bg-pinklight">HEALTH & WELLNESS</span>
                            </div>
                          </div>
          </div>
          </div>
                      </div> 













                      
                      </div>  
              
                </div>
                </div>
                </div>
                </div> 
           </div>

) ;       
};



export default Startup_Dashboard;