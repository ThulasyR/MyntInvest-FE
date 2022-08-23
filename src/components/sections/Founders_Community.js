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
      <div className="container">&nbsp;
        <div
          className={innerClasses} style={{backgroundColor:"#F2F3F4"}}
        >
          <div className="cta-slogan founderpage">
            <h1 className="m-0" >
              Convert your<br/><span style={{color:"#2ECC71"}}>Community</span> Into Capital</h1><br/>
              <span>Build your business and leave the fundraising to the experts.<br/> Leverage the community and use it to grow your customer base.  </span>
             &nbsp;
              <div className="reveal-from-bottom"  style={{paddingTop:30}} >
                {/* <ButtonGroup>
                  <Button tag="a" color="primary" style={{borderRadius:8,color:"white"}} wideMobile href="/Raise">
                  APPLY TO RAISE 
                    </Button>
                </ButtonGroup> */}
                <div className='row statusbtn col-md-6'>
                <a href="/Raise"><button type="button" class="btn btn-success btn-sm" id="applytoraise"> APPLY TO RAISE</button></a>
                </div>
                
 


                


              </div>
          </div>
          <div className="cta-action"> 
          <Image
                      src={require('./../../assets/images/Founders.png')}
                      alt="Features tile icon 01"
                      width={300}
                      height={300}
                     />
          </div>
        </div>
      </div>
    </section>
  );
}

Founders_Community.propTypes = propTypes;
Founders_Community.defaultProps = defaultProps;

export default Founders_Community;