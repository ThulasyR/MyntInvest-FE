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

const Deals_Community= ({
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


      
    <div className="row mt-2  d-flex justify-content-center ">
    <div className="card border-0"   style={{background:"#e9ecef"}}>
  <div className="card-body row ">
<div  className="col-md-8">
  <h1 class="card-title">Convert your<br/>
  <span style={{color:"#2ECC71"}}>Community</span> Into Capital
  </h1>
    <p class="card-text">Raise Up To $5 Million From 1M+ People While Growing Your Brand
And Engaging Your Community </p>
</div>
<div  className="col-md-4">
<Image
                      src={require('./../../assets/images/Mixed.jpg')}
                      alt="Features tile icon 01"
                      width={300}
                      height={300}
                     />
  </div>
</div>
</div>
</div>

         
      </div>
    </section>
  );
}

Deals_Community.propTypes = propTypes;
Deals_Community.defaultProps = defaultProps;

export default Deals_Community;