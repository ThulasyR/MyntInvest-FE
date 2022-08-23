import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import Button from '../elements/Button';
import ButtonGroup from '../elements/ButtonGroup';
const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const Founders_Tiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: '',
    paragraph: '',
  };

  return (
    
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <h2 align="center">Trusted By Over <span style={{color:"#2ECC71 "}}>50k+ Partners<br/>And Organizations</span></h2><hr/>
          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <h3 className="mt-0 mb-12">
                Community Effect 
                  </h3>
                <p className="m-0">
                We together create a community of new customers and investors. Campaign launches, reports and engagement have never been easier. We help you to get connected to your biggest flag bearers. </p> 
                <div className="reveal-from-bottom" data-reveal-delay="600">
                <ButtonGroup>
                  <Button tag="a" color="primary"  style={{borderRadius:8,backgroundColor:"#f9faf9",color:"#2ECC71 "}} wideMobile href="/Learn">
                  Learn More 
                    </Button>
                </ButtonGroup>
                 </div>
                 </div>
                
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/Founder1.png')}
                  alt="Features split 02"
                  width={300}
                  height={300} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <h3 className="mt-0 mb-12">
              	Get Growth Funds
                  </h3>
                <p className="m-0">
                We take partake in raising a part of your current round, while assuring a strong foundation is being built for your brand through the services offered such as curated pitches, direct investment from angel investors, etc. </p>
                <div className="reveal-from-bottom" data-reveal-delay="600">
                <ButtonGroup>
                  <Button tag="a" color="primary"  style={{borderRadius:8,backgroundColor:"#f9faf9",color:"#2ECC71 "}} wideMobile href="/Learn">
                  Learn More  
                    </Button>
                </ButtonGroup>
                 </div>
             </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/Founder2.png')}
                  alt="Features split 03"
                  width={300}
                  height={300} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <h3 className="mt-0 mb-12">
                Get Closing
                  </h3>
                <p className="m-0">
                Let our seamless technology help you track all your key performance indicators in one place. Your investor updates can also be sent from our highly curated dashboard with one click. We make your reporting less tedious than ever. </p>
                <div className="reveal-from-bottom" data-reveal-delay="600">
                <ButtonGroup>
                  <Button tag="a" color="primary"  style={{borderRadius:8,backgroundColor:"#f9faf9",color:"#2ECC71 "}} wideMobile href="/Learn">
                  Learn More!  
                    </Button>
                </ButtonGroup>
                 </div>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/Founder3.png')}
                  alt="Features split 01"
                  width={300}
                  height={300} />
              </div>
            </div>

            
            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <h3 className="mt-0 mb-12">
                Get Growth Hack 
                  </h3>
                <p className="m-0">
                Get industry leaders as your mentors and engage with our lead generation partners and grow your business 10x while we help you raise multiple rounds from our set of investors. Impress your investors with easy to understand pitches & enriched data without affecting your prior, current or future VC rounds!</p>
                <div className="reveal-from-bottom" data-reveal-delay="600">
                <ButtonGroup>
                  <Button tag="a" color="primary"  style={{borderRadius:8,backgroundColor:"#f9faf9",color:"#2ECC71 "}} wideMobile href="/Learn">
                  Learn More  
                    </Button>
                </ButtonGroup>
                 </div>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/Founder4.png')}
                  alt="Features split 01"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className='row'>
              <div className='col-md-4'></div>
              <div className='col-md-4'>
              <Image
                  src={require('./../../assets/images/Founder5.png')}
                  alt="Features split 01"
                  width={300}
                  height={300} />
              </div>
              <div className='col-md-4'></div>
              </div>
              <div className='col-md-12'>
                <h3 align="center">SEAMLESS DEAL CLOSING WITH MXi</h3>
                <p align="center">We enable Angel Networks, Founders, Family offices, Syndicates and VCs to carry out their fundraising process online seamlessly, accessible only to their audience via our efficient private deal management system.</p>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

Founders_Tiles.propTypes = propTypes;
Founders_Tiles.defaultProps = defaultProps;

export default Founders_Tiles;