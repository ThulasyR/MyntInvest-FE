import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const Funded_Company= ({
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
          &nbsp;
        <div className={innerClasses} align="left">
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className="features-tiles-item-content">
                  <h2 className="mt-0 mb-8">
                  Funded Companies
                    </h2>
                  <p className="m-0 text-sm" style={{color:"black"}}>
                    90% Of Republic Campaigns Have Been Successfully Funded
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
                  <Button tag="a" color="secondary" style={{backgroundColor:"white",borderRadius:8,color:"orange"}} wideMobile href="#0">
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
                      src={require('./../../assets/images/card6.jpg')}
                      alt="Features tile icon 02"
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
                  <Button tag="a" color="secondary" style={{backgroundColor:"#FADBD8",borderRadius:8,color:"RED",fontSize:13}} wideMobile href="#0">
                    HEALTH & WELLNESS
                    </Button>
                    <Button tag="a" color="secondary" style={{backgroundColor:"white",borderRadius:8,color:"orange",fontSize:13}} wideMobile href="#0">
                    B2C
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
                  <Button tag="a" color="secondary" style={{backgroundColor:"#23b347",borderRadius:8,color:"white",fontSize:13}} wideMobile href="#0">
                    MAX
                    </Button><span style={{color:"#23b347"}}><strong>$25,000,000</strong> valuation cap</span>
                </ButtonGroup> <hr/>
                <span><strong>$100 min.</strong>investment</span><hr/>
                <span><strong>446</strong> Investors</span><hr/>
                <span><strong>$266,978 </strong>raised</span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400" >
              <div className="tiles-item-inner" >
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/card7.jpg')}
                      alt="Features tile icon 04"
                      width={500}
                      height={500} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Arwork
                    </h4>
                  <p className="m-0 text-sm">
                    Apparel thats boosts your immune health,cognition,recovery and sleep.
                    </p><br/>
                    <span style={{color:"grey",paddingRight:0}} >Santa Monica,CA</span>
                <ButtonGroup>
                <Button tag="a" color="secondary" style={{backgroundColor:"white",borderRadius:8,color:"orange",fontSize:13}} wideMobile href="#0">
                    B2C
                    </Button>
                  <Button tag="a" color="secondary" style={{backgroundColor:"#FADBD8",borderRadius:8,color:"RED",fontSize:13}} wideMobile href="#0">
                    HEALTH & WELLNESS
                    </Button>
                </ButtonGroup>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/card8.png')}
                      alt="Features tile icon 05"
                      width={500}
                      height={500} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Grit BXNG
                    </h4>
                  <p className="m-0 text-sm">
                    We've built your crypto portfolio for you.
                    </p><br/>
                    <span style={{color:"grey",paddingRight:0}}>Los Angeles,CA</span>
                <ButtonGroup>
                  <Button tag="a" color="secondary" style={{backgroundColor:"#D5F5E3",borderRadius:8,color:"green",fontSize:13}} wideMobile href="#0">
                    WOMEN FOUNDERS
                    </Button>
                </ButtonGroup>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={tilesClasses}>
      <div className="reveal-from-bottom" data-reveal-delay="600">
                <ButtonGroup>
                  <Button tag="a" color="primary" style={{borderRadius:8,color:"white"}} wideMobile href="#0">
                    View All Companies (402)
                    </Button>
                </ButtonGroup>
              </div></div>
    </section>
  );
}

Funded_Company.propTypes = propTypes;
Funded_Company.defaultProps = defaultProps;

export default Funded_Company;