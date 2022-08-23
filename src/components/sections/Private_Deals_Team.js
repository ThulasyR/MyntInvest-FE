import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import Button from '../elements/Button';
import ButtonGroup from '../elements/ButtonGroup';
import Image from '../elements/Image';
const propTypes = {
  ...SectionProps.types,
  split: PropTypes.bool
}

const defaultProps = {
  ...SectionProps.defaults,
  split: false
}

const Private_Deals_Team= ({
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
      <div className="container">&nbsp;
        <div
          className={innerClasses} style={{backgroundColor:"#F2F3F4"}}
        ><div className='row'>
          <div className="col-md-6">
            <h2 className="m-0">
            <span style={{color:"#2ECC71"}}>COMMUNITY:<br/></span>NETWORK EFFECT!</h2><br/>
            <span style={{color:"grey"}}>Know more about the community network effect and achieve your goals by rewarding members of your community with stock.</span>
            &nbsp;
              <div className="reveal-from-bottom" data-reveal-delay="600" style={{paddingTop:30}} >
                <ButtonGroup>
                  <Button tag="a" color="primary" style={{backgroundColor:"#2ECC71",borderRadius:8,color:"white"}} wideMobile href="/Blog">
                  Our Thesis 

                    </Button>
                </ButtonGroup>
              </div>
          </div>
          <div className="col-md-6"> 
          <Image
                      src={require('./../../assets/images/Privatedeals_Footer.png')}
                      alt="Features tile icon 01"
                      width={400}
                      height={400}
                     />
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}

Private_Deals_Team.propTypes = propTypes;
Private_Deals_Team.defaultProps = defaultProps;

export default Private_Deals_Team;