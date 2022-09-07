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




const extractFilename = (path) => {
  const pathArray = path.split("/");
  const lastIndex = pathArray.length - 1;
  return pathArray[lastIndex];
};
class Analystics extends React.Component {
    constructor() {
    super();
    this.state = {
      analyticsAllDets: [],
      currentanalytics: null,
      currentanalyticsIndex: -1,
      input: {},
      errors: {},
      ID:null,
      MTUSER_ID:null,
      EMAIL:null,
      MODULE:null, 
      ANLYSTICS_IMAGE:"",
      ANLYSTICS_GROWTHPROFIT:"",
      ANLYSTICS_MONRECURRING:"",
      ANLYSTICS_CUSTCHURNRATE:"",
      ANLYSTICS_MONACTIVEUSER:"",
      ANLYSTICS_CACRATIO:"",
      STATUS:"",
      COMMENTS:"",
      DESCRIPTION:"",
      CREATED_USER:"",
      CREATED_DATE:"",
      MODIFIED_USER:"",
      MODIFIED_DATE:"", 
    };
     
    this.saveAnalystics = this.saveAnalystics.bind(this);  
    this.retrieveAllAnalytics = this.retrieveAllAnalytics.bind(this);
    this.setActiveAnalytics = this.setActiveAnalytics.bind(this);
  }
    
  
  
  componentDidMount() {
    this.retrieveAllAnalytics(); 
  }


  retrieveAllAnalytics() {
    var querySet = "/camAnalytics?EMAIL=" + sessionStorage.getItem("sessEmail");
    console.log(querySet);
    DataService.findByTitle(querySet)
      .then(response => {
        this.setState({
          analyticsAllDets: response.data, 
        });

         $.each(this.state.analyticsAllDets, function (index, value) {
  

        $("#CampAnalyticform #analytichid").attr("value", value.ID).val(value.ID);
        $("#CampAnalyticform #growthprofit").attr("value", value.ANLYSTICS_GROWTHPROFIT).val(value.ANLYSTICS_GROWTHPROFIT);
        $("#CampAnalyticform #monthlyrecur").attr("value", value.ANLYSTICS_MONRECURRING).val(value.ANLYSTICS_MONRECURRING);
        $("#CampAnalyticform #custchurnrate").attr("value", value.ANLYSTICS_CUSTCHURNRATE).val(value.ANLYSTICS_CUSTCHURNRATE);
        $("#CampAnalyticform #monactiveuser").attr("value", value.ANLYSTICS_MONACTIVEUSER).val(value.ANLYSTICS_MONACTIVEUSER);
        $("#CampAnalyticform #cacratio").attr("value", value.ANLYSTICS_CACRATIO).val(value.ANLYSTICS_CACRATIO);
        $("#CampAnalyticform #analyticsCollOne").find('.analysticimage-preview').css("background-image", "url("+window.mt_backend_url+value.ANLYSTICS_IMAGE+")");
          
   }); 

      })
      .catch(e => {
        console.log(e);
      });
  }


  setActiveAnalytics(analyticsAllDets, index) {
    this.setState({
      currentanalytics: analyticsAllDets,
      currentanalyticsIndex: index,
      // tfcurrentFile:this.state.tfcurrentFile
    });
  }


  saveAnalystics(event) {
    event.preventDefault();
    if (this.validateAnalytics()) {
      if (!window.isEmpty(sessionStorage.getItem("sessEmail"))) {
           
        let analyticformData = new FormData();  
        analyticformData.append("ID",Number($("#CampAnalyticform #analytichid").val()));
        analyticformData.append("MTUSER_ID",$("#mtuser_id").val());
        analyticformData.append("EMAIL",$("#mtuser_email").val()); 
        analyticformData.append("MODULE",sessionStorage.getItem("sessionCampaign"));
 
        analyticformData.append("ANLYSTICS_GROWTHPROFIT", $("#growthprofit").val()); 
        analyticformData.append("ANLYSTICS_MONRECURRING", $("#monthlyrecur").val()); 
        analyticformData.append("ANLYSTICS_CUSTCHURNRATE", $("#custchurnrate").val()); 
        analyticformData.append("ANLYSTICS_MONACTIVEUSER", $("#monactiveuser").val()); 
        analyticformData.append("ANLYSTICS_CACRATIO", $("#cacratio").val()); 

        analyticformData.append("STATUS","Active");
        analyticformData.append("COMMENTS", "TEST");
        analyticformData.append("DESCRIPTION", "TEST");
        analyticformData.append("CREATED_USER", $("#mtuser_fname").val());
        analyticformData.append("CREATED_DATE", Moment(date).format("YYYY-MM-DD"));
        analyticformData.append("MODIFIED_USER", $("#mtuser_fname").val());
        analyticformData.append("MODIFIED_DATE", Moment(date).format("YYYY-MM-DD"));
         
     
        if (window.isEmpty($("#CampAnalyticform #analytichid").val())) {
          analyticformData.append("ANLYSTICS_IMAGE", $("#CampAnalyticform #uploadanalystics")[0].files[0],$("#CampAnalyticform #uploadanalystics")[0].files[0].name);
          // analyticformData.append("CAM_BAN_VIDEO", $("#CampAnalyticform #campbanvideo")[0].files[0],$("#CampAnalyticform #campbanvideo")[0].files[0].name);
          
        }

        // console.log(rsformData);

        if (window.isEmpty($("#CampAnalyticform #analytichid").val())) {

          UploadService.create("/camAnalytics", analyticformData)
            .then(response => {
              console.log("inside");
              window.showLoader();
              window.showAlert("The Campaign Analytics is submittted", "/Analystics");
            })
            .catch(e => {
              window.showLoader();
              window.showAlert("OOps!!! Something went wrong", "/Analystics");
            });

        } else {


          UploadService.update("/camAnalytics/" + Number($("#CampAnalyticform #analytichid").val()), analyticformData)
            .then(response => {
              window.showLoader();
              window.showAlert("The Campaign is submittted", "/Analystics");
            })
            .catch(e => {
              window.showLoader();
              window.showAlert("OOps!!! Something went wrong", "/Analystics");
            });

        }


        // });



      } else {
        window.showAlert("Please Login", "/Login");
      }
    }

  }



  validateAnalytics(){
    console.log("inside validateAnalytics validations")
    let input = this.state.input;
    let errors = {};
    let isValid = true;
  
    if (window.isEmpty($("#CampAnalyticform #analytichid").val())) {
    if (!$("#CampAnalyticform #uploadanalystics").get(0).files.length  > 0) {
      isValid = false;
      errors["uploadanalystics"] = "Please Upload Image";
      $("#CampAnalyticform #uploadanalystics").focus();
    }
  
    
  }
  
 

    this.setState({
      errors: errors
    });

    return isValid;
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
                        <ul className="navbar-nav" style={{fontSize:13}}> 
                            <li className="nav-item">
                                <NavLink to="/Campaign" className="nav-link arrow-right" style={{color:"#B1B0AD"}}>&nbsp;Back to Campaign</NavLink>
                              </li>
                        
                          </ul>
                    </div>
                  </nav>

                 <div className='container bg-white p-5'> 
                 
                 <div className='row'> 
                 <h3>Analytics</h3> 
                 </div> 
                  
                    <div className='row' style={{height:'auto'}}>
                    <div className='col-md-12'> 
 
                                        <form name="CampAnalyticform" id="CampAnalyticform" method="POST" enctype="multipart/form-data"  >  
                                        <div className="container" >
        {/* <div className="col-md-12">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb arr-right">
                      <li className="breadcrumb-item text-sm" aria-current="page" style={{color:"Grey"}}>Startup</li>
                      <li className="breadcrumb-item text-sm text-dark active"><a className="opacity-5 text-dark" href="/Startup_Dashboard">Dashboard</a></li>
                      <li className="breadcrumb-item text-sm text-dark active"><a className="opacity-5 text-dark" href="/Campaign">Campaign</a></li>
                      <li className="breadcrumb-item text-sm active" aria-current="page" style={{color:'#23b347'}}>Analystics</li>
                    </ol>
                  </nav>
                </div> */}

                <div className="accordion bg-white" id="accordionAnalytics">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#analyticsCollOne" aria-expanded="true" aria-controls="analyticsCollOne">
      Total Revenue(TR)
      </button>
    </h2>
    <div id="analyticsCollOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionAnalytics">
      <div className="accordion-body">
        <input type="hidden" id="analytichid"/>
      <p>Additionally,the SEC limits the maximum amount you can invest
                            across all startup using the Reg CF legel framework based on your
                            finalcial situation.</p>
          <div className="row">
          <div className="col-md-8">
            <p className="para"><b>Data (upload the proper chart with genuine data presented in it)</b><strong className="text-danger ">*</strong></p>
            </div>
          <div className="col-md-4 float-right">
          <label  className=" btn btn-success btn-sm analysticimagelbel">
                                                        <span>Upload a Picture</span>
                                                        <input type="file" id="uploadanalystics" name="uploadanalystics" 
                                                        accept="image/*" data-attr="1" className=" uploadFile img"  multiple 
                                                        style={{height:"0px",width:"0px",overflow : "hidden"}}/>
                                                          </label>
          </div>
          </div>

          <div className="row">
            <div className="card" style={{height:"500px"}}>
              <div className="analysticimage-preview"></div>
            </div>
            </div>

          

      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#analyticsCollTwo" aria-expanded="false" aria-controls="analyticsCollTwo">
            Growth Profit Margin(%)
      </button>
    </h2>
    <div id="analyticsCollTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionAnalytics">
      <div className="accordion-body">
      The gross profit margin is calculated by subtracting direct expenses or cost of goods sold (COGS) from net sales (gross revenues minus returns, allowances and discounts). 
      
<div className="col-md-6 mt-2">
      <div class="input-group mb-3">
  {/* <span class="input-group-text">$</span> */}
  <input type="text" class="form-control" id="growthprofit" name="growthprofit" aria-label="Amount (to the nearest dollar)"/>
  <span class="input-group-text">%</span>
</div>
</div>

      
      </div>
    </div>
  </div>
<div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#analyticsCollThree" aria-expanded="false" aria-controls="analyticsCollThree">
      Monthly Recurring Revenue (MRR)
      </button>
    </h2>
    <div id="analyticsCollThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionAnalytics">
      <div className="accordion-body">
      Monthly Recurring Revenue (MRR) is the predictable total revenue generated by your
       business from all the active subscriptions in a particular month.
        It includes recurring charges from discounts, coupons, and recurring add-ons, 
        but excludes one-time fees.  
        <div className="col-md-6 mt-2">
      <div class="input-group mb-3">
      <span class="input-group-text">$</span>
      <input type="text" class="form-control" id="monthlyrecur" name="monthlyrecur" aria-label="Amount (to the nearest dollar)"/>
     {/* <span class="input-group-text">%</span> */}
    </div> 
</div> 

      </div>
    </div>
  </div>

   

  
<div className="accordion-item">
    <h2 className="accordion-header" id="headingFour">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#analyticsCollFour" aria-expanded="false" aria-controls="analyticsCollFour">
      Customer Churn Rate (%)
      </button>
    </h2>
    <div id="analyticsCollFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionAnalytics">
      <div className="accordion-body">
      Monthly Recurring Revenue (MRR) is the predictable total revenue generated by your
       business from all the active subscriptions in a particular month.
        It includes recurring charges from discounts, coupons, and recurring add-ons, 
        but excludes one-time fees.  
        <div className="col-md-6 mt-2">
      <div class="input-group mb-3">
  {/* <span class="input-group-text">$</span> */}
  <input type="text" class="form-control" id="custchurnrate" name="custchurnrate" aria-label="Amount (to the nearest dollar)"/>
  <span class="input-group-text">%</span>
</div> 
</div>

</div>
</div>
</div>


<div className="accordion-item">
    <h2 className="accordion-header" id="headingFive">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#analyticsCollFive" aria-expanded="false" aria-controls="analyticsCollFive">
      Monthly Active Users (MAU)
      </button>
    </h2>
    <div id="analyticsCollFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionAnalytics">
      <div className="accordion-body">
      Key performance indicator (KPI) used by social networking and other companies to count the number of unique users who visit a site within the past month. 
        <div className="col-md-6 mt-2">
      <div class="input-group mb-3">
  {/* <span class="input-group-text">$</span> */}
  <input type="text" class="form-control" id="monactiveuser" name="monactiveuser" aria-label="Amount (to the nearest dollar)"/>
  <span class="input-group-text">nos.</span>
</div> 
</div>

</div>
</div>
</div>

<div className="accordion-item">
    <h2 className="accordion-header" id="headingSix">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#analyticsCollSix" aria-expanded="false" aria-controls="analyticsCollSix">
      LTV: CAC Ratio
      </button>
    </h2>
    <div id="analyticsCollSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionAnalytics">
      <div className="accordion-body">
      The ideal scenario would be as follows: what you are spending on acquiring a new customer (CAC) is approximately three times less than the lifetime value of that customer (LTV).
        <div className="col-md-6 mt-2">
      <div class="input-group mb-3">
  {/* <span class="input-group-text">$</span> */}
  <input type="text" class="form-control" id="cacratio" name="cacratio" aria-label="Amount (to the nearest dollar)"/>
  <span class="input-group-text">%</span>
</div> 
</div>

</div>



  
</div>
</div>

<div className="col-md-12  d-flex justify-content-center"> 
    <div className="col-md-3 mt-5 mb-3" >
  <button type="button" className="btn btn-success btn-sm w-100"  onClick={this.saveAnalystics}>Submit</button>
    </div> 
  </div>

</div> 
      </div>



</form>




                                        </div>

                    </div></div>
    
                    </div>
                    
                    </div>
                    
                    
                    </div></div> 
 

    </body>          
              
              

              


              
               
               

) ;       
 }
};



export default Analystics;