import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import Button from '../elements/Button';
import ButtonGroup from '../elements/ButtonGroup';
import { NavLink } from 'react-router-dom';
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

const Investors_Startups= ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  split,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'cta section center-content-mobile reveal-from-bottom',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',' bg-white',
    className
  );

  const innerClasses = classNames(
    'cta-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider',
    split && 'cta-split'
  );  

  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );

  var inv_termsDets=[]; 
  let status="";
  var termsquerySet = "/inv_terms?EMAIL="+sessionStorage.getItem("sessEmail");
  DataService.findByTitle(termsquerySet)
  .then(response => {
    inv_termsDets = response.data 
    console.log(inv_termsDets.length)
    $.each(inv_termsDets, function (index, value) {
      status=value.STATUS;
      console.log("LENGTH OF COMPANY INFO"+value.STATUS);
      if(status == "Dormant"){
        $(".investorpage .invstatusbtn").html('<a href="/Inv_Signup"><button type="button" class="btn btn-success btn-sm" >SIGNUP NOW</button></a>')
      }else{
        $(".investorpage .invstatusbtn").html('<a href="/Investors_Dashboard"><button type="button" class="btn btn-success btn-sm" >Investor Dashboard</button></a>');
      }
    });
      
     })
     .catch(e => {
       console.log(e);
     });



  return (
    <section
      {...props}
      className={outerClasses}>
       {/* <div className={tilesClasses} align="center">
          <div className="hero-content">
          <nav className="navbar navbar-expand-sm bg-Secondary navbar-white " >
            <div className="container-fluid">
              <ul className="navbar-nav">
                
              <li className="nav-item">
                  <NavLink to="/Investors" className="nav-link" style={{color:" #2ECC71"}}>Startups</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/Crypto" className="nav-link" >Crypto</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/Realestate" className="nav-link" >Real Estate</NavLink>
                </li>
              </ul>
            </div>
          </nav>
          </div>
         </div> */}
      <div className="container"> 

        <div className="row d-flex justify-content-center investorpage">
    <div className="card border-0 mt-5"   style={{background:"rgb(249, 250, 249)"}}>
  <div className="card-body  ">
    <div className="row">
<div  className="col-md-8">
  <h1 class="card-title">Invest Now In <span style={{color:"#2ECC71"}}>Startups</span></h1>
    <p class="card-text"><span>Discover highly curated, vetted investment opportunities <br/>today and <span style={{color:"#2ECC71"}}>enable the future</span> </span></p>
    <div className='row invstatusbtn col-md-6 mt-2'>
                <a href="/Investor_Signup"><button type="button" class="btn btn-success btn-sm" >SIGNUP NOW</button></a>
                </div> <br/> <br/>
    <p className="para">Investments Are Risky And May Result in Total <br/>Loss Of Capital.&nbsp;
                <a href="#" className="alert-link"><u>Learn More</u></a>
                </p>



</div>
<div  className="col-md-4 investWid">
<div class="card  profile-card-4" >
  {/* <img src="..." class="card-img-top" alt="..."/> */}
  <div class="card-body text-center">
    <h6 class="card-title">If you had invested *</h6>
    <p class="card-text" id="demo"><i className="fa fa-rupee"></i>&nbsp;5,000</p>
     
    {/* <div class="progress">
  <div class="progress-bar bg-info" role="progressbar" style={{width: "50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
</div> */}
<div class="slidecontainer"> 
  <input id="investorRange" type="range" min="1" max="100" value="50"  />
    </div>
     
    <p className="para text-muted">You could have theoretically made</p>
    <hr/>
  </div>
  <div style={{height:"219px",paddingLeft:"43px"}}>
  <table className="table table-borderless table-hover table-lg" border="0">
  <marquee  direction="up"  loop="true" scrollamount="10">
    <tr  className="border-0 para "><td><img
                      src={require('./../../assets/images/ola.png')}
                      alt="Features tile icon 01" 
                      width={70}
                      height={70}
                     /></td><td>Ola</td><td><i className="fa fa-rupee"></i>&nbsp;12.5M</td></tr>
    <tr  className="border-0 para"><td><img
                      src={require('./../../assets/images/byjus.png')}
                      alt="Features tile icon 01" 
                      width={70}
                      height={70}
                     /></td><td >Byjus</td><td><i className="fa fa-rupee"></i>&nbsp;3.3M</td></tr>
    <tr  className="border-0 para"><td><img
                      src={require('./../../assets/images/unacedamy.png')}
                      alt="Features tile icon 01" 
                      width={70}
                      height={70}
                     /></td><td>Unacademy</td><td><i className="fa fa-rupee"></i>&nbsp;1.7M</td></tr>
    <tr  className="border-0 para"><td><img
                      src={require('./../../assets/images/razor.png')}
                      alt="Features tile icon 01" 
                      width={70}
                      height={70}
                     /></td><td>RazorPay</td><td><i className="fa fa-rupee"></i>&nbsp;625K</td></tr>
    </marquee>
    <tr  className="border-0 para text-center"><td colspan="3"  className="para text-muted">*In the initial rounds</td></tr>
  
  </table>
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

Investors_Startups.propTypes = propTypes;
Investors_Startups.defaultProps = defaultProps;

export default Investors_Startups;