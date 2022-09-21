import React, {Component} from "react"; 
import Button from '../elements/Button'; 
import Image from "../elements/Image"; 
import '../Css/styles.css';
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import ButtonGroup from "../elements/ButtonGroup"; 
import {NavLink,Link} from "react-router-dom"; 
import DataService from '../../service/DataService'; 
import UploadService from "../../service/file-upload.service";
import Moment from 'moment';
import $ from "jquery";
const current = new Date();
const date = `${current.getFullYear()}-${current.getMonth()+1}-${current.getDate()}`;//mysql insert date format
const formatDate = Moment("12/09/2002").format('YYYY-MM-DD')//2002-12-09




 
/*Campaign information*/

var campaignAllDets=[]; 
var bannerUnique="";
const bannerImg =[];
var bannerId=[];
const bannerName =[];
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
const extractFilename = (path) => {
  const pathArray = path.split("/");
  const lastIndex = pathArray.length - 1;
  return pathArray[lastIndex];
};
class Deals_Realm extends React.Component {
    constructor() {
    super();
    this.state = {
      cambanAllDets: [],
      currentcampban: null,
      currentcampbanIndex: -1,
      input: {},
      errors: {},
      urlParam :"",
      ID:null,
      MTUSER_ID:null,
      EMAIL:null,
      MODULE:null, 
      CAM_BAN_IMAGE:"",
      CAM_BAN_VIDEO:"", 
      STATUS:"",
      COMMENTS:"",
      DESCRIPTION:"",
      CREATED_USER:"",
      CREATED_DATE:"",
      MODIFIED_USER:"",
      MODIFIED_DATE:"", 
    };
     
    // this.saveCamBan = this.saveCamBan.bind(this);  
    // this.retrieveAllCamBan = this.retrieveAllCamBan.bind(this);
    // this.setActiveCamBan = this.setActiveCamBan.bind(this);
  }
    
   
  componentDidMount() {
    let urlParam = this.props.match.params.id
		this.setState({ urlParam })
    console.log(urlParam);  
    var querySet = "/campaignAllDets?EMAIL=" + urlParam;
    console.log(querySet);
    DataService.findByTitle(querySet)
      .then(response => {
        this.setState({
          cambanAllDets: response.data, 
        });

         $.each(this.state.cambanAllDets, function (index, value) { 
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
                console.log(bannerImg[0])
                bannerId.push(value.MODULE);
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

        
      $(".bannerImg").append('<img className="card-img-top" src='+bannerImg[0]+' alt="Card image" />')
      $(".bannerName").append('<span id="brelmid">'+bannerName[0]+'</span>');
      $(".teaminfo").append('<span>'+ teaminfo[0]+'</span>');
      $(".memDesc").append('<span>'+memDesc[0]+'</span>');
      
     
 
         

      })
      .catch(e => {
        console.log(e);
      });


  }

 
  
 
     
 render() {
     
 

return (
 
  <body className='' >
  <div className='container'>  
      <div className='row' style={{height:'auto',marginTop:100}}>
          <div className='row'>
            <div className="hero-content">
               <nav className="navbar navbar-expand-sm bg-Secondary navbar-white " >
                  <div className="container-fluid"  >
                  <div className="card card-01"  >
  <div className="bannerImg"></div>
  <div className="card-body">
  <span class="badge-box"><div className="bannerImg"></div></span>
    <h4 className="card-title " style={{ paddingLeft:"250px" }}><span className='bannerName'></span></h4>
    <p className="card-text pt-2 "  style={{ paddingLeft:"150px" }}><span className="teaminfo"></span></p>
    <p className="card-text pt-2 "  style={{ paddingLeft:"150px" }}><span className="memDesc"></span></p>
    <hr/>


    <div className="row">
     <table  border="0" className=" table-borderless table-sm m-3">
      <tr className="border-0">
        <td colspan="4">
          <span class="font12 text-white bg-success p-2">Sold Out</span></td>
        </tr>
        <tr className="border-0" >
        <td style={{borderRight: "2px solid #ccc"}}><h5 class="text-success b">Rs. 75,000,000</h5></td>
        <td  style={{borderRight: "2px solid #ccc"}}><h5 class="text-dark b">416</h5></td>
        <td  style={{borderRight: "2px solid #ccc"}}><h5 class="text-dark b">98 days</h5></td>
        <td><button class="btn btn-success" id="btnOpenWishListInvest">Join Wishlist</button></td>
          </tr>
          <tr className="border-0">
        <td  style={{borderRight: "2px solid #ccc"}}><span class="para text-muted">Offering Fully Reserved</span></td>
        <td  style={{borderRight: "2px solid #ccc"}}><span class="para text-muted">Investors</span></td>
        <td  style={{borderRight: "2px solid #ccc"}}><span class="para text-muted">Left To Invest</span></td>
        <td><span class="para text-secondary">Rs.1000 minimum invest</span></td>
          </tr>
      </table>
      </div>
  </div>
</div>
                    </div>
                  </nav>

                   
    
                    </div>
                    
                    </div>
                    
                    
                    </div>
                    </div> 
 

    </body>          
              
              

              


              
               
               

) ;       
 }
};



export default Deals_Realm;