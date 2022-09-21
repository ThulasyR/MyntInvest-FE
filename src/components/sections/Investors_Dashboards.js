import React, {Component} from "react";
import classNames from 'classnames';
import Button from '../elements/Button';
import Image from "../elements/Image";
import '../Css/styles.css';
import $ from 'jquery';
import DataService from '../../service/DataService'; 
import '../Css/styles.css';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import {
  Card,
  CardHeader,
    
} from "@material-ui/core";

const extractFilename = (path) => {
  const pathArray = path.split("/");
  const lastIndex = pathArray.length - 1;
  return pathArray[lastIndex].replace(/\.[^/.]+$/, "");
};

/*Company information*/
var kycAllDets=[]; 
var cdquerySet = "/investordetails?EMAIL="+sessionStorage.getItem("sessEmail");
DataService.findByTitle(cdquerySet)
.then(response => {
  kycAllDets = response.data 
if(kycAllDets.length > 0 ){
  $.each(kycAllDets, function (index, value) {
    console.log("kyc"+value.INV_MOBILE_NUMBER.length );
    if(value.INV_MOBILE_NUMBER.length > 0){
      $(".kycsts").html('<button type="button" class="btn btn-success btn-sm" id="cpcompleted">COMPLETED</button>')
    }else{
      $(".kycsts").html('<button type="button" class="btn btn-danger btn-sm" id="cppending">PENDING</button>')
    }


    if(value.INV_BANKACCNO.length > 0){
      $(".paymentsts").html('<button type="button" class="btn btn-success btn-sm" id="cpcompleted">COMPLETED</button>')
    }else{
      $(".paymentsts").html('<button type="button" class="btn btn-danger btn-sm" id="cppending">PENDING</button>')
    }



  });
}else{
  $(".kycsts").html('<button type="button" class="btn btn-danger btn-sm" id="cppending">PENDING</button>')
  $(".paymentsts").html('<button type="button" class="btn btn-danger btn-sm" id="cppending">PENDING</button>')
    
}
 
}) 
   .catch(e => {
     console.log(e);
   });

const Investors_Dashboards = ({
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



return (

    <div className="container bg-white">
    
             
        <div className="row" >
  
               <div className="row">
               <div className="col-md-1"></div>
               <div className="col-md-11">
               <div className="">
               <div className="row">
                 
               <div className="col-md-12">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb arr-right">
                      <li className="breadcrumb-item text-sm" aria-current="page" style={{color:"Grey"}}>Investor</li>
                      <li className="breadcrumb-item text-sm active" aria-current="page" style={{color:'#23b347'}}>Dashboard</li>
                      <li className="breadcrumb-item text-sm text-dark active"><a className="opacity-5 text-dark" href="/Portfolio">Portfolio</a></li>
                      <li className="breadcrumb-item text-sm text-dark active"><a className="opacity-5 text-dark" href="/Investors_Analystics">Analystics</a></li>
                    </ol>
                  </nav>
                </div>
 

              </div>
              
              <br/>
              <br/>
              <div className="row">
              <h3 align="left" >Overview</h3>
                        <p className="para"
                          align="left" > 
                          Good Morning  
                          <b className="font16 text-success"> {sessionStorage.getItem("sessFirstname")}</b>
                           </p>
                   
 
              </div>{/**Row end */}

              <div className="row mt-3">
              <div className=" col-md-5">
              <div className="card light-blue" style={{borderLeft: "4px solid #00648b"}}>
  <div className="card-body">
    <h6 className="text-muted  font14">Total Investment Value</h6>
    <p className="card-text b font20"><i className="fa fa-rupee"></i>&nbsp;21.,500.00</p>
    {/* <a href="#" className="card-link">Card link</a>
    <a href="#" className="card-link">Another link</a> */}
  </div>
  </div>
</div>{/**card Row end */}
<div className=" col-md-5">
<div className="card bg-pinklight" style={{borderLeft: "4px solid rgb(139 44 139)"}}>
  <div className="card-body">
  <h6 className="text-muted  font14">Startups Invested</h6>
    <p className="card-text b font20">25</p>
    {/* <a href="#" className="card-link">Card link</a>
    <a href="#" className="card-link">Another link</a> */}
  </div>
</div>{/**card Row end */}
</div>
<div className=" col-md-2">
<div className="card light-violet">
  <div className="card-body">
  <h6 className="text-muted  font14 text-center">View All Investment</h6>
  <p className="card-text text-center b font14"><i className="fa fa-arrow-right"></i></p>
    {/* <p className="card-text text-center b font14">
</p> */}
    {/* <a href="#" className="card-link">Card link</a>
    <a href="#" className="card-link">Another link</a> */}
  </div>
  </div>
</div>{/**card Row end */}

                </div>{/**Row end */}





                <div className="row mt-3">
              <h3 align="left" >Complete Your Profile</h3>
                        <p className="para text-secondary b"
                          align="left" > 
                          Complete your profile to start investing!
                           </p>
                   
 
              </div>{/**Row end */}





              
              <div className="row mt-3">
              <div className=" col-md-6">
                <a id="openChooseStartup" >
              <div className="card bg-pinklight">
  <div className="card-body"> 
    <div className="row ">
                          <div className="col-md-8"> 
                          <h3 className="">KYC</h3>
                            </div>
                            <div className="col-md-4 pt-4"> 
                            <a   className="kycsts">
                           
                            <button type="button" class="btn btn-danger btn-sm" >PENDING</button>
                              </a>
                            </div>
                            <p className="card-text para" align="left" >
                               Complete your online KYC to start investing keep your PAN card handy!
                               </p>
                         </div>
  </div>
  </div></a>
</div>{/**card Row end */}
<div className=" col-md-6">
<a href="/Investors_Details">
<div className="card light-blue">
<div className="card-body"> 
    <div className="row ">
                          <div className="col-md-8"> 
                          <h3 className="">Payment Details</h3>
                            </div>
                            <div className="col-md-4 pt-4"> 
                            <a   className="paymentsts" >
                            <button type="button" class="btn btn-danger btn-sm" >PENDING</button>
                              </a>
                            </div>
                            <p className="card-text para" align="left" > Complete your Payment Details
                            &nbsp;<br/>&nbsp;</p>
                         </div>
  </div>
</div>{/**card Row end */}
</a>
</div>
 

                </div>{/**Row end */}





                <div className="row mt-3">
              <h3 align="left" >Our Community</h3>
                        {/* <p className="para text-secondary b"
                          align="left" > 
                          Complete your profile to start investing!
                           </p> */}

<div className=" d-flex justify-content-center">
                           <div className=" col-md-8 p-2" style={{border:"1px solid #e7e5e5"}}>
                           <div className=" d-flex align-items-center">
  <div className="flex-shrink-0">
  <Image
                                             src={require('./../../assets/images/inv1.jpg')}
                                             alt="Features tile icon 01"
                                             width={80}
                                             height={80} />
  </div>
  <div className="flex-grow-1 ms-3">
    <h5>Gerald Becker<br/><span className="para text-muted">2 months ago</span></h5> 
  </div>
</div>
<p className="para"> Recommendation oj jeff Brown in Day One newsletter. 
     The concept is so good that it's obvious to me that this is a very good
      investment.Go Team!! </p>
</div>
                            </div>{/**END */}




                            <div className="mt-5 d-flex justify-content-center">
                           <div className=" col-md-8 p-2" style={{border:"1px solid #e7e5e5"}}>
                           <div className=" d-flex align-items-center">
  <div className="flex-shrink-0">
  <Image
                                             src={require('./../../assets/images/inv2.webp')}
                                             alt="Features tile icon 01"
                                             width={80}
                                             height={80} />
  </div>
  <div className="flex-grow-1 ms-3">
    <h5>Johnathan<br/><span className="para text-muted">2 months ago</span></h5> 
  </div>
</div>
<p className="para"> Recommendation oj jeff Brown in Day One newsletter. 
The concept is so good that it's obvious to me that this
 is a very good investment.Go Team!! </p>
</div>
</div>{/**END */}




                   
 
              </div>{/**Row end */}



              <div className='row mt-5 mb-5'>
              <div className="col-12">
                  <div className="d-flex justify-content-center">
                      <button type="button" className="btn btn-success btn-sm col-md-4"  >View All</button>
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



export default Investors_Dashboards;