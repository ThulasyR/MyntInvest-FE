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

const Home_Ctaa = ({
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
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'cta-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider',
    split && 'cta-split'
  );  

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  return (
    <section
      {...props}

      className={outerClasses}
    >
      <div className="container" style={{marginTop:-150}}>
        <div
          className={innerClasses} style={{backgroundColor:"#F2F3F4"}}
        >
          <div className="cta-slogan">
            <span className="m-0" style={{color:"black"}}>
            <b>BACKED BY </b></span><br/>
              <span style={{color:"black"}}> <b>THE INDUSTRY LEADERS</b></span>
              
          </div>
          <div className={tilesClasses} align="left">
          <div className="cta-action">
            
            <div className="row" data-reveal-delay="600" >
           <div className='col-md-5'>
                  <a href="https://www.gattaca.vc/" >
                  <Image                           
                  src={require('./../../assets/images/Leader1.jpg')}
                  alt="Features tile icon 05"
                  style={{borderRadius:8}}
                  width={200}
                  height={200} /></a>
                </div>&nbsp;
                <div className='col-md-5'>
                  <a href="https://www.meteorventure.com/">
                  <Image           
                  src={require('./../../assets/images/Leader2.jpg')}
                  alt="Features tile icon 05"
                  style={{borderRadius:8}}
                  width={200}
                  height={200} /></a>
                    </div>
              </div>           
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Home_Ctaa.propTypes = propTypes;
Home_Ctaa.defaultProps = defaultProps;

export default Home_Ctaa;