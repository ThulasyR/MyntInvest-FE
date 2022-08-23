import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';

const propTypes = {
  ...SectionProps.types,
  split: PropTypes.bool
}

const defaultProps = {
  ...SectionProps.defaults,
  split: false
}

const Deals_Sta = ({
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

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container" style={{paddingBottom:200}}>&nbsp;
        <div
          className={innerClasses} style={{backgroundColor:"#f9faf9"}}
        >
          <div className="cta-slogan">
          <ButtonGroup> <Button tag="a" color="Secondary" style={{backgroundColor:"#2ECC71 ", borderRadius:8,color:"white"}} wideMobile href="#0">
                    SOLD OUT
             </Button> </ButtonGroup> 
            <h2 className="m-0," style={{color:"#2ECC71 "}}>
             $70s,000,000  <br/>
             </h2><p style={{color:"Grey"}}>Offering Fully Reserved</p><hr/>
          </div> 
          <div className="cta-slogan">
            <p className="m-0" style={{color:"#AAB7B8",fontSize:100}}>
             |
             </p>
          </div> 
          <div className="cta-action">
          <h2 className="m-0" style={{color:"black",paddingTop:30}}>
             4,186 &nbsp;
             </h2><p style={{paddingLeft:20,color:"grey"}}>Investors</p>
          </div>
          <div className="cta-slogan">
            <p className="m-0" style={{color:"#AAB7B8",fontSize:100}}>
             |
             </p>
          </div> 
          <div className="cta-action">
          <h2 className="m-0" style={{color:"black",paddingTop:30}}>
             98 days<br/>
             </h2><p style={{paddingLeft:20,color:"grey"}}>Left To Invest</p>
          </div>
        </div>
      </div>
      <div className="features-tiles-item-content">
                  <h2 className="mt-0 mb-8">
                  Co-Investors
                    </h2>
                </div> &nbsp;
    </section>
  );
}

Deals_Sta.propTypes = propTypes;
Deals_Sta.defaultProps = defaultProps;

export default Deals_Sta;