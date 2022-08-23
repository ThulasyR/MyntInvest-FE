import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';

import Image from '../elements/Image';
const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
      <br/>
      <br/>
      <div className='row'>
        <div className="col-md-6">
          <div className="content"><br/>
            <h2 className=" mb-16 reveal-from-bottom" data-reveal-delay="200"  align="left">
             <span style={{color:"orange"}}><b>Invest</b></span> <b>In The Best</b>   <span className="text-color-primary"><b>Startup</b></span><b>Raised Right From Their </b><span style={{color:"#23b347"}}><b>Community</b></span>
            </h2><br/>
            <div className="container"  align="left">
              <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400" style={{fontSize:15}} >
              Where the best startup investment opportunities are showcased.Own a small stake in the next big startup and diversify your portfolio ten folds.</p>&nbsp;&nbsp;
              <div className="reveal-from-bottom" data-reveal-delay="600" align="left"  >
               
                  <Button  tag="a" color="primary" style={{borderRadius:8,color:"white"}} wideMobile href="/Signup">
                    INVEST NOW 
                    </Button>
              
              </div><br/>
              <p align="left" style={{color:"grey",fontSize:14}}>Are you a founder?&nbsp;
              <Button  tag="a" color="primary" style={{color:"#23b347",fontSize:14,backgroundColor:"#f9faf9"}} wideMobile href="/Learn">
              Raise Capital on Myntinvest
                    </Button></p>
            </div>
          </div>
        </div>
        
        <div className="col-md-6" align="center">
         
        <Image
            
            src={require('./../../assets/images/Homepage.png')}
            alt="Features tile icon 05"
            width={800}
            height={800} />

        </div>
      </div>
      </div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
