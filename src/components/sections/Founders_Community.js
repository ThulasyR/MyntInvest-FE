import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import Button from '../elements/Button';
import ButtonGroup from '../elements/ButtonGroup';
import Image from '../elements/Image';
import DataService from '../../service/DataService';
import $ from "jquery"; 
const propTypes = {
  ...SectionProps.types,
  split: PropTypes.bool
}

const defaultProps = {
  ...SectionProps.defaults,
  split: false
}

const Founders_Community= ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  split,
  ...props
}) => {

  const outerClasses = classNames(
    'cta section center-content-mobile reveal-from-bottom',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'cta-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider',
    split && 'cta-split'
  );  
  var raiseDets=[]; 
  let status="";
  var raisequerySet = "/raise?EMAIL="+sessionStorage.getItem("sessEmail");
  DataService.findByTitle(raisequerySet)
  .then(response => {
    raiseDets = response.data 
    $.each(raiseDets, function (index, value) {
      status=value.STATUS;
      console.log("LENGTH OF COMPANY INFO"+value.STATUS);
      if(status == "Dormant"){
        $(".founderpage .statusbtn").html('<a href="/Raise"><button type="button" class="btn btn-success btn-sm" id="applytoraise"> APPLY TO RAISE</button></a>')
      }else{
        $(".founderpage .statusbtn").html('<a href="/Startup_Dashboard"><button type="button" class="btn btn-success btn-sm" id="startupdashboard"> STARTUP DASHBOARD  </button></a>');

      }
    });
      
     })
     .catch(e => {
       console.log(e);
     });
  return (

    <section
      {...props}
      className={outerClasses}
    >
      <div className="container"> 

<div className="row d-flex justify-content-center founderpage">
<div className="card border-0 mt-5"   style={{background:"rgb(249, 250, 249)"}}>
<div className="card-body  ">
<div className="row">
<div  className="col-md-8">
<h1 class="card-title">Convert your<br/> <span style={{color:"#2ECC71"}}>Community </span>Into Capital</h1>
<p class="card-text">Build your business and leave the fundraising to the experts.
Leverage the community and use it to grow your customer base. </p>
<div className='row statusbtn col-md-6'>
                <a href="/Raise"><button type="button" class="btn btn-success btn-sm" id="applytoraise"> APPLY TO RAISE</button></a>
                </div> <br/> <br/>
 



</div>
<div  className="col-md-4 investWid">
<div class="card  profile-card-4" >
{/* <img src="..." class="card-img-top" alt="..."/> */}
<div class="card-body text-center">
<h6 class="card-title"><span className="profile-card-2"><i className="fa fa-cloud text-primary"></i></span>&nbsp;Your Startup</h6>



{/* <p class="card-text para"  ><span className="text-secondary font12">COMMUNITY</span>&nbsp;
<a href="#"><span className="text-primary font12">+100 Members</span></a></p> */}


<div  class="row">
  <div class="col-md-6">
  <span className="text-secondary font12">COMMUNITY</span>
    </div>
    <div class="col-md-6">
    <span className="text-primary font12">+100 Members</span>
    </div>
  </div>
  
</div>
<div style={{ paddingLeft:"43px"}}>
<table className="" border="0" >
{/* <marquee  direction="up"  loop="true" scrollamount="10">  */}
  <tr className="border-0 para">
  <td rowspan="2"><img
              src={require('./../../assets/images/Girl.jpg')}
              alt="Features tile icon 01" 
              width={70}
              height={70}
             /></td>
    <td className="para p-0 b">A.D.<br/>
    <span className=" text-muted para">INVESTED <i className="fa fa-rupee"></i>&nbsp;38,000</span></td> 
  </tr>
  <tr className="border-0 para ">
      <td  className="p-0">&nbsp;</td> 
  </tr> 

  <tr className="border-0 para">
  <td rowspan="2"><img
              src={require('./../../assets/images/Boy.jpg')}
              alt="Features tile icon 01" 
              width={70}
              height={70}
             /></td>
    <td className="para p-0 b">P.A.<br/>
    <span className=" text-muted para">INVESTED <i className="fa fa-rupee"></i>&nbsp;43,000</span></td> 
  </tr>
  <tr className="border-0 para ">
      <td  className="p-0">&nbsp;</td> 
  </tr> 


  <tr className="border-0 para">
  <td rowspan="2"><img
              src={require('./../../assets/images/image (3).jpg')}
              alt="Features tile icon 01" 
              width={70}
              height={70}
             /></td>
    <td className="para p-0 b">P.D.<br/>
    <span className=" text-muted para">INVESTED <i className="fa fa-rupee"></i>&nbsp;13,000</span></td> 
  </tr>
  <tr className="border-0 para ">
      <td  className="p-0">&nbsp;</td> 
  </tr> 


 
  
 
{/* </marquee> */}
<tr  className="border-0 para text-center"><td colspan="3"  className="para text-muted">*In the initial rounds</td></tr>

</table>


<div  class="row mb-5">
  <div class="col-md-6">
  <span className="text-secondary para text-muted">INVESTORS</span><br/>
  <span className="text-dark para b">326</span>
    </div>
    <div class="col-md-6">
    <span className="text-secondary para">AMT RAISED</span><br/>
    <span className="text-dark para b">2.4 Million</span>
    </div>
  </div>

</div>
{/* <div class="card-body">
<a href="#" class="card-link">Card link</a>
<a href="#" class="card-link">Another link</a>
</div> */}
</div>



</div>
</div>


        <br/>
        

</div>
    
</div>
</div>











 
</div>


       
    </section>
  );
}

Founders_Community.propTypes = propTypes;
Founders_Community.defaultProps = defaultProps;

export default Founders_Community;