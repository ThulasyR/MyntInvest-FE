import React from "react";
import classNames from 'classnames';
import '../Css/styles.css';
import $ from "jquery";

import DataService from '../../service/DataService'; 

const Color = {
    color:"grey"
}



const Campaign = ({
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



/*Campaign information*/
var campaignbannerAllDets=[]; 
var cambanquerySet = "/campban?EMAIL="+sessionStorage.getItem("sessEmail");
DataService.findByTitle(cambanquerySet)
.then(response => {
  campaignbannerAllDets = response.data 
   

 if(campaignbannerAllDets.length >0 ){
  $(".campaignbannersts").html('<button type="button" class="btn btn-success btn-sm" >COMPLETED</button>')
 }else{
  $(".campaignbannersts").html('<button type="button" class="btn btn-danger btn-sm" >PENDING</button>')
 } 
 
   })
   .catch(e => {
     console.log(e);
   });




   /*Campaign information*/
var campressAllDets=[]; 
var campressuerySet = "/campress?EMAIL="+sessionStorage.getItem("sessEmail");
DataService.findByTitle(campressuerySet)
.then(response => {
  campressAllDets = response.data 

  
 if(campressAllDets.length >0 ){
  $(".campaignpress").html('<button type="button" class="btn btn-success btn-sm" >COMPLETED</button>')
 }else{
  $(".campaignpress").html('<button type="button" class="btn btn-dedault btn-sm" style="background-color:violet;color:white">OPTIONAL</button>')
 } 
 


    //  console.log("LENGTH OF COMPANY INFO"+companyAllDets.length);
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
                      <li className="breadcrumb-item text-sm text-dark active"><a className="opacity-5 text-dark" href="/Startup_Dashboard">Dashboard</a></li>
                      <li className="breadcrumb-item text-sm active" aria-current="page" style={{color:'#23b347'}}>Campaign</li>
                      <li className="breadcrumb-item text-sm text-dark active"><a className="opacity-5 text-dark" href="/Analystics">Analystics</a></li>
                    </ol>
                  </nav>
                </div>
   
                     <div className="col-md-12">
                    <div className="row mt-3">
                    <div className="col-md-6">
                    <h3 align="left" style={{marginTop:50}}>&nbsp;</h3>
                          <div className="card bg-yellowlight">
                          <div className="card-body"> 
                            <h5 className="card-title cardtitle">Banner (Video/Photo)</h5>
                            <div className="row ">
                          <div className="col-md-8 pt-3"> 
                          <p className="card-text para" align="left" > Upload or embed a video</p>
                            </div>
                            <div className="col-md-4"> 
                            <a href="/Campaign_Banner" className="campaignbannersts">

                           

                              {/* <button type="button" className="btn btn-success btn-sm">COMPLETED</button> */}
                              </a>
                            </div>
                            </div> 
                            
                            </div>
                          </div>
          </div>




          <div className="col-md-6">
                    <h3 align="left" style={{marginTop:50}}>&nbsp;</h3>
                          <div className="card bg-pink">
                            <div className="card-body"> 
                            <h5 className="card-title cardtitle">Investors</h5>
                            <div className="row ">
                          <div className="col-md-8 pt-3"> 
                          <p className="card-text para " align="left" >  Tell us a who are the Top investors are</p>
                            </div>
                            <div className="col-md-4"> 
                            <a href="/Campaign_Investors">
                            <button type="button" className="btn btn-danger btn-sm" >PENDING</button>
                            </a>
                            </div>
                            </div> 
                            
                            </div>
                          </div>
          </div> 
                      </div> 

                      
                      <div className="row mt-3">
                      <div className="col-md-6">
                    <h3 align="left" style={{marginTop:50}}>&nbsp;</h3>
                          <div className="card bg-pink">
                            <div className="card-body"> 
                            <h5 className="card-title cardtitle">FAQs</h5>
                            <div className="row ">
                          <div className="col-md-8 pt-3"> 
                          <p className="card-text para " align="left" >  Help investors understand your weven better</p>
                            </div>
                            <div className="col-md-4"> 
                            <a href="/Campaign_FAQ">
                            <button type="button" className="btn btn-danger btn-sm">PENDING</button>
                            </a>
                            </div>
                            </div> 
                            
                            </div>
                          </div>
          </div> 




          <div className="col-md-6">
                    <h3 align="left" style={{marginTop:50}}>&nbsp;</h3>
                          <div className="card bg-pink">
                            <div className="card-body"> 
                            <h5 className="card-title cardtitle">Press</h5>
                            <div className="row ">
                          <div className="col-md-8 pt-3"> 
                          <p className="card-text para " align="left" >  Show your reach!</p>
                            </div>
                            <div className="col-md-4"> 
                            <a href="/Campaign_Press" className="campaignpress">
                             

                            </a>
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
           </div>

) ;       
};



export default Campaign;