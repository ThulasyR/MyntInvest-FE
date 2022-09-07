import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Input from '../elements/Input';
import '../Css/styles.css';
import $ from 'jquery';
import DataService from '../../service/DataService'; 
const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const extractFilename = (path) => {
  const pathArray = path.split("/");
  const lastIndex = pathArray.length - 1;
  return pathArray[lastIndex].replace(/\.[^/.]+$/, "");
};


 
/*Campaign information*/

var campaignAllDets=[]; 
var bannerUnique="";
var bannerImg =[];
var bannerName =[];
var pressImg="";
var pressHeader="";
var pressBody="";
var pressImg="";
var growthPer=[];
var teaminfo=[];
var memName=[];
var memDesc=[];
var memPosition=[];
var original =[];
var output=[];
var campaignquerySet = "/campaignAllDets";
DataService.findByTitle(campaignquerySet)
.then(response => {
 
  campaignAllDets = response.data;
  console.log(campaignAllDets);

 
  $.each(campaignAllDets, function (index, value) { 


    if(value.length == 0){
      $(".campaignDealsArrange").html("");
      // $(".addnewcampaign").css("display","block");
    } else{


      if(index == "CAMPAIGN_BANNER"){
          var uniqueEmail =[];
        $.each(value, function (cb, value) {
        
          if(!uniqueEmail.includes(value.EMAIL)){
            uniqueEmail.push(value.EMAIL);
          }
          bannerImg.push(window.mt_backend_url+value.CAM_BAN_IMAGE); 
          bannerUnique=value.MODULE;
          original.push(value.EMAIL);
        }); 
      }
      if(index == "CAMPAIGN_PRESS"){ 
        $.each(value, function (cb, cbvalue) {
        pressHeader=cbvalue.CAMP_PRESS_HEADER;
        pressBody=cbvalue.CAMP_PRESS_BODY; 
        pressImg=window.mt_backend_url+cbvalue.CAMP_PRESS_IMAGE; 
      }); 
      }
      if(index == "CAMPAIGN_INVEST"){
        var uniqueEmail =[];
        $.each(value, function (cb, invalue) { 
         
          if(!uniqueEmail.includes(invalue.EMAIL)){
            uniqueEmail.push(invalue.EMAIL);
            memName.push(invalue.CINV_MEMBER_NAME+"&nbsp;,&nbsp;"+invalue.CINV_MEMBER_POSITION); 
            memDesc.push('<span class="spanbg para bg-pinklight">'+invalue.CINV_BIO+'</span>&nbsp;'); 
       
           }

          
           }); 
      }
  
  
      if(index == "COMPANY_INFO"){
        $.each(value, function (campany, infovalue) {
          bannerName.push(infovalue.LEGAL_NAME);
        }); 
      }
      if(index == "TEAM_INFO"){
        var uniqueEmail =[];
        $.each(value, function (campany, teamvalue) {
         
          if(!uniqueEmail.includes(teamvalue.EMAIL)){
            uniqueEmail.push(teamvalue.EMAIL);
            teaminfo.push(teamvalue.TEAM_BIO);
          }
          
        }); 
      }

      if(index == "CAMPAIGN_ANALYTICS"){
        $.each(value, function (an, ianltvalue) {
          var valuei ="0"; 
           if(!window.isEmpty(ianltvalue.ANLYSTICS_GROWTHPROFIT)){
            growthPer.push(ianltvalue.ANLYSTICS_GROWTHPROFIT); 
           }  
         
           growthPer.push(valuei);
          //  alert(growthPer)
          
        }); 
      }
  

      // $(".addnewcampaign").css("display","none");
      
   
    }
    });


// alert(uniqueEmail);
    for (let iterval in original){
      // alert(teaminfo)
      $(".campaignDealsArrange").append('<div class=" col-md-4"  ><div class="card"><a href="/Campaign">'+
        // '<div className="card-header text-right"><a href="/Campaign"><button className="btn btn-warning"><i className="fa fa-edit"></i></button></a>'+
        // '<a href="/CampaigndeleteAll?MODULE='+bannerUnique+'"><button className="btn btn-danger"  data-attr="+value.ID+" ><i className="fa fa-trash"></i></button></a></div>'+
        '<img src="'+bannerImg[iterval]+'" class="card-img-top" alt="..." style="height: 40vh;"/>'+
        '<div class="card-body">'+
        '<h5 class="card-title"  style="height: 10vh;">'+
        '<div  class="text-center">'+
        ''+bannerName[iterval]+
        '</div></h5>'+
        '<p align="center" class="font16" style="height: 10vh;">'+teaminfo[iterval]+'</p>'+
        '<h6 align="center"><small  class="text-green text-center font12">'+ growthPer[iterval]+'% of total goal raised</small> </h6>'+
        '<h6 align="center" class="font20"><small  class="text-secondary  text-center  font20">'+memName[iterval]+'</small></h6>'+memDesc[iterval]+'&nbsp;'+
        '</div></a>'+
        '</div></div>');
    }
      
 

   })
   .catch(e => {
     console.log(e);
   });
  



const Livedeals = ({
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

  const outerClasses = classNames(
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: '',
    paragraph: ''
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
        <div className="container mt-5">
      <div className="card border-0 mt-5">
            <div className="card-body">
            <h2 className="mt-0 mb-8">
                  Live Deals
                    </h2>
                    <p className="para"> All Regulation Crowdfunding Deals Are Highly Vetted <br/> By <span style={{color:"#23b347"}}>Our Investment Team.</span>
               </p>



               <form className="row col-md-12">
  <div className="col-md-4">
  <div className="input-group mb-3">
  <input type="text" className="form-control" placeholder="Enter the Keyword Here" aria-label="Recipient's username" 
  aria-describedby="button-addon2"/>
  <button className="btn btn-outline-secondary" type="button" id="button-addon2"><i className="fa fa-arrow-right"></i></button>
</div>
  </div>
  <div className="col-md-4">
  <select className="form-control   form-select-md"  >
  <option value="" selected>Filters</option> 
                        <option value="MT">Most Transaction</option>
                        <option value="CS">Closing Soon</option>
</select>
  </div>
  <div className="col-md-4"><div className="mb-3 row">
  <label for="staticEmail" className="col-md-4 text-right">Sort By:</label>
    <div className="col-md-8">
    <select className="form-control form-select-md"  >
  <option value="MF" selected>Most Funded</option> 
                        <option value="MT">Most Transaction</option>
                        <option value="CS">Closing Soon</option>
</select>
    </div></div>
  </div>
 
</form>





<div className="row col-md-12">

  <div className="row campaignDealsArrange">
    </div>
  </div> 

  <div className="row mt-2  d-flex justify-content-center ">
    <div className="card border-0" style={{width: "18rem",textAlign:"center"}}>
  <div className="card-body ">
    <h5 className="card-title text-center"><span className="card-title text-center">Runnners</span></h5>
    <h6 className="card-subtitle mb-2 text-muted text-center">Connecting outstanding operation talent with the most inclusive companies</h6>
    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
    <button type="button" className="btn btn-success">MAX</button>
    {/* <a href="#" className="card-link">Another link</a> */}
    <table className="table table-borderedless">
      <tr className="">
        <td className="text-success p-4"><b>$25,000,000</b> valuation cap</td>
      </tr>
      <tr className="p-5">
        <td className="p-3"><b>$100 min.</b>investment</td>
      </tr>
      <tr className="p-5">
        <td className="p-3"><b>446</b> Investors</td>
      </tr>
      <tr className="p-5">
        <td className="p-3"><b>$266,978</b> raised</td>
      </tr> 
    </table>
  </div>
</div>
    </div>



    <div className="row mt-2  d-flex justify-content-center ">
    <div className="card border-0"   style={{background:"#e9ecef"}}>
  <div className="card-body row ">
<div  className="col-md-8">
  <h1 class="card-title">Become an Investor!</h1>
    <p class="card-text">Invest in private Startup for a chance
to earn a return.</p>
</div>
<div  className="col-md-4">
<div className="input-group mt-5">
  <input type="text" className="form-control" placeholder="Enter the Keyword Here" aria-label="Recipient's username" 
  aria-describedby="button-addon2"/>
  <button className="btn btn-outline-secondary" type="button" id="button-addon2"><i className="fa fa-arrow-right"></i></button>
</div>
  </div>
</div>
</div>
</div>





<div className="row mt-2">
<div className="card border-0 mt-5">
            <div className="card-body">
            <h2 className="mt-0 mb-8">
            Funded Companies
                    </h2>
                    <p className="para"> 90% Of Republic Campaigns Have Been Successfully Funded</p>
                

  </div>
  </div>
  </div>
  



  <div className="row col-md-12">

<div className="row campaignDealsArrange">
  </div>
</div> 











            </div>
          </div> 
         
      </div>
      
    </section>
  );
}
 

export default Livedeals;