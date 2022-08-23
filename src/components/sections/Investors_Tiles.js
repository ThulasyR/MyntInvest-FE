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

const Investors_Tiles = ({
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
          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <h3 className="mt-0 mb-12">
                 Open Deals
                  </h3>
                <p className="m-0">
                Come on board with our angel investors and their community. Start investing with as little as ₹10,000 and earn a part of the next big thing.</p> <br/>
                <p>View Live Deals to start investing today</p>
                <div className="reveal-from-bottom" data-reveal-delay="600">
                <ButtonGroup>
                  <Button tag="a" color="primary"  style={{borderRadius:8,backgroundColor:"#f9faf9",color:"#2ECC71 "}} wideMobile href="/Deals">
                  View All  
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
                  src={require('./../../assets/images/Investors1.png')}
                  alt="Features split 02"
                  width={300}
                  height={300} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <h3 className="mt-0 mb-12">
                Invest With Ease Within Seconds
                  </h3>
                <p className="m-0">
                Discover game changing startups, sign your documents and diversify your portfolio at our one stop shop seamlessly.  </p><br/>
                <p>Start investing today!</p>
                <div className="reveal-from-bottom" data-reveal-delay="600">
                <ButtonGroup>
                  <Button tag="a" color="primary"  style={{borderRadius:8,backgroundColor:"#f9faf9",color:"#2ECC71 "}} wideMobile href="/Login">
                  Get Started  
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
                  src={require('./../../assets/images/Investors2.png')}
                  alt="Features split 03"
                  width={300}
                  height={300} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <h3 className="mt-0 mb-12">
                 Monitor Your Investments
                  </h3>
                <p className="m-0">
                MxI's analytics section will help you track all your key performance indicators in one place. Go to your Dashboard to get started.</p>
                <div className="reveal-from-bottom" data-reveal-delay="600">
                <ButtonGroup>
                  <Button tag="a" color="primary"  style={{borderRadius:8,backgroundColor:"#f9faf9",color:"#2ECC71 "}} wideMobile href="/Login">
                  Get Started  
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
                  src={require('./../../assets/images/Investors3.png')}
                  alt="Features split 01"
                  width={300}
                  height={300} />
              </div>
            </div>

            
            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <h3 className="mt-0 mb-12">
                Learn & Join Our Community 
                  </h3>
                <p className="m-0">
                At MxI, we've built our Community such that you can interact and connect with fellow investors, founders, VC's before investing.</p>
                <div className="reveal-from-bottom" data-reveal-delay="600">
                <ButtonGroup>
                  <Button tag="a" color="primary" style={{borderRadius:8,backgroundColor:"#f9faf9",color:"#2ECC71 "}} wideMobile href="/Login">
                  Join Community Now   
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
                  src={require('./../../assets/images/Investors4.png')}
                  alt="Features split 01"
                  width={528}
                  height={396} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

Investors_Tiles.propTypes = propTypes;
Investors_Tiles.defaultProps = defaultProps;

export default Investors_Tiles;