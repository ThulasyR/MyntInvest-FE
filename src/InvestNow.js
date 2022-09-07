 

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SectionProps,SectionTilesProps } from '../../utils/SectionProps';
import Button from '../elements/Button';
import ButtonGroup from '../elements/ButtonGroup'; 
import SectionHeader from './partials/SectionHeader';
import { NavLink } from 'react-router-dom';
import Image from '../elements/Image';
import DataService from '../../service/DataService';
import $ from "jquery"; 


const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const Invest_Now = ({
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
      <div className="container">&nbsp;
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className="features-tiles-item-content">
                  <h2 className="mt-0 mb-8">
                  Invest Now
                    </h2>
                  <p className="m-0 text-sm" style={{color:"black"}}>
                  Most Traction In 3 Days 
                  </p>
                </div> &nbsp;
               
          <div className={tilesClasses}>
            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/card1.jpg')}
                      alt="Features tile icon 01"
                      width={500}
                      height={500} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Ember Fund
                    </h4>
                  <p className="m-0 text-sm">
                       We've Built your Crypto portfolio for you.
                    </p><br/>
                    <span style={{color:"grey",paddingRight:0}}>Los Angeles,CA</span>
                <ButtonGroup>
                  <Button tag="a" color="secondary" style={{backgroundColor:"white",borderRadius:5,color:"orange",fontSize:13}} wideMobile href="">
                    FINTECH & FINANCE
                    </Button>
                </ButtonGroup>
                </div>
              </div>
            </div>

            
            
            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/card5.jpg')}
                      alt="Features tile icon 05"
                      width={500}
                      height={500} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Lambs
                    </h4>
                  <p className="m-0 text-sm">
                  Apparel thats boosts your immune health,cognition,recovery and sleep.
                    </p><br/>
                    <span style={{color:"grey",paddingRight:0}}>Santa Monica,CA</span>
                <ButtonGroup>
                <Button tag="a" color="secondary" style={{backgroundColor:"white",borderRadius:8,color:"orange",fontSize:13}} wideMobile href="">
                    B2C
                    </Button>
                  <Button tag="a" color="secondary" style={{backgroundColor:"#FADBD8",borderRadius:5,color:"RED",fontSize:13}} wideMobile href="">
                    HEALTH & WELLNESS
                    </Button>
                    
                </ButtonGroup>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                <h4 className="mt-0 mb-8">
                    Runnners
                    </h4>
                 
                </div>
                <div className="features-tiles-item-content">
                
                  <span className="m-0 text-sm">
                     Connecting outstanding operation talent with the most inclusive companies
                    </span>
                  
                <ButtonGroup>
                  <Button tag="a" color="secondary" style={{backgroundColor:"#2ECC71 ",borderRadius:8,color:"white",fontSize:13}} wideMobile href="">
                    MAX
                    </Button><span style={{color:"#2ECC71 "}}><strong>$25,000,000</strong> valuation cap</span>
                </ButtonGroup> <hr/>
                <span><strong>$100 min.</strong>investment</span><hr/>
                <span><strong>446</strong> Investors</span><hr/>
                <span><strong>$266,978 </strong>raised</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

Invest_Now.propTypes = propTypes;
Invest_Now.defaultProps = defaultProps;

export default Invest_Now;