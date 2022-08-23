import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import Image from '../elements/Image';


const propTypes = {
  ...SectionProps.types,
  split: PropTypes.bool
}

const defaultProps = {
  ...SectionProps.defaults,
  split: false
}

const Investors_Manager= ({
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
          className={innerClasses} style={{backgroundColor:"#FCF3CF "}}
        >  <div className="cta-action" > 
            <Image
              src={require('./../../assets/images/Press (2).jpg')}
              alt="Features tile icon 01"
              width={1200}
              height={1200}
              />
          </div>
          <div className="cta-slogan" align="Center" >
            <h3 className="m-0" >
              DARLENE ROBERTSON</h3>
              <span style={{color:"#2ECC71"}}>Marketing Manager, MasterCard</span> 
             &nbsp;
              <div className="reveal-from-bottom" data-reveal-delay="600" style={{paddingTop:30}} >
              <p>Lorem ipsum never miss out on any warm leads.Only positive responses will reach your mailbox,so your lead generation is optimized to improve your efficiency,and your state-of-mind!
              </p></div>
          </div>
        </div>
      </div>
    </section>
  );
}

Investors_Manager.propTypes = propTypes;
Investors_Manager.defaultProps = defaultProps;

export default Investors_Manager;