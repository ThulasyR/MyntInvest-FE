import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import 'bootstrap/dist/css/bootstrap.min.css';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const Deals_About= ({
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
      <div className="container">
        <div className={innerClasses}>&nbsp;
         <SectionHeader data={sectionHeader} className="center-content" />
              <div className="features-tiles-item-content">
                  <h1 className="mt-0 mb-8" >
                  About
                    </h1>
                </div>
                &nbsp;

          <div className="row" align="center">  
                <div className="col-md-1">
                </div>
                <div className="col-md-2">
                 <h5>Website</h5> 
                 <p style={{color:"#2ECC71 "}}>http://www.xyz.com</p>
                </div>&nbsp;
                <div className="col-md-2">
                <h5> Company Size</h5>
                <p style={{color:"grey"}}> 11-50 employees</p>
                </div>&nbsp;
                <div className="col-md-2">
                 <h5>Headquarters</h5>
                 <p style={{color:"grey"}}>Bangalore</p>
                </div>&nbsp;
                <div className="col-md-2">
                  <h5>Founded</h5>
                  <p style={{color:"grey"}}>2000</p>
                </div>&nbsp;
                <div className="col-md-2">
                  <h5>Social Media</h5>
                  <h5>
                  <a href="#" class="fa fa-instagram"  style={{color:"grey",fontSize:25}}></a>&nbsp;&nbsp;
                  <a href="#" class="fa fa-twitter" style={{color:"grey",fontSize:25}}></a>&nbsp; &nbsp;
                  <a href="#" class="fa fa-linkedin" style={{color:"grey",fontSize:25}}></a>
                  </h5>
           
                </div>
                <div className="col-md-1">
                </div>
                
       

            
            
               
            </div>
            </div>
          </div>
        
    </section>
  );
}

Deals_About.propTypes = propTypes;
Deals_About.defaultProps = defaultProps;

export default Deals_About;