import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Input from '../elements/Input';
const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const Livedeal = ({
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
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className="features-tiles-item-content">
                  <h2 className="mt-0 mb-8">
                  Live Deals
                    </h2>
                  <p className="m-0 text-sm" style={{color:"black"}}>
                    All Regulation Crowdfunding Deals Are Highly Vetted <br/> By <span style={{color:"#23b347"}}>Our Investment Team.</span>
                  </p>
                </div> &nbsp;
                <div className={tilesClasses}>
                    <div className="col-md-4" style={{paddingTop:20}}>
                     <Input id="newsletter" type="email" style={{backgroundColor:"white",textColor:"white"}} label="Subscribe" labelHidden hasIcon="right" placeholder="Enter The Keyword Here">
                         <svg width="16" height="12" xmlns="http://www.w3.org/2000/svg">
                           <path d="M9 5H1c-.6 0-1 .4-1 1s.4 1 1 1h8v5l7-6-7-6v5z" fill="#376DF9" />
                          </svg>
                        </Input>
                  </div>
                  
                  <div className="col-md-4" style={{paddingTop:20}} >
                  
                  <label>
                    <select style={{width: 310,height: 40,fontSize:20,color:"grey",backgroundColor:"white"}}>
                        <option value="grapefruit"> Filters</option>
                        <option value="lime">Most Transaction</option>
                        <option value="coconut">Closing Soon</option>
                        
                    </select>
                    </label>
                  </div>
                  
                  
                <div className="col-md-4" style={{paddingTop:20}}>
                <label >Sort By :&nbsp;
                    <select  style={{backgroundColor:"white",width: 250,height: 40,fontSize:20,color:"grey"}}><p>22</p>
                        <option value="Most Funded"> Most Funded</option>
                        <option value="Most Transaction">Most Transaction</option>
                        <option value="Closing Soon">Closing Soon</option>
                       
                    </select>
                    </label>
                    </div>
                 </div>&nbsp;


                  

                 <div className={tilesClasses}>
                 <div className="col-md-2">
                 
                <label>
                <p><b>Sectors</b></p>
                    <select style={{backgroundColor:"#AAB7B8",borderColor:"#AAB7B8",borderRadius:8,width: 250,height: 40,fontSize:20,color:"white"}}>
                        <option align="center" value="Most Funded">EdTech & Education</option>
                        <option align="center" value="Most Transaction">Education</option>
                        <option align="center" value="Closing Soon">EdTech</option>
                       
                    </select>
                    </label>
                    </div>
                  <div className='col-md-1'></div>
                    <div className="col-md-2">
                      
                <label>
                <p><b>Revenue</b></p>
                    <select style={{backgroundColor:"#AAB7B8",borderColor:"#AAB7B8",borderRadius:8,width: 250,height: 40,fontSize:20,color:"white"}}>
                        <option align="center" value="Most Funded">30k - 50k</option>
                        <option align="center" value="Most Transaction">50k - 100k</option>
                        <option align="center" value="Closing Soon">100k - 500k</option>    
                    </select>
                    </label>
                    </div>

                    <div className='col-md-1'></div>&nbsp;&nbsp;
                    <div className="col-md-2"> 
                <label>
                 <p><b>Tech</b></p>
                    <select style={{backgroundColor:"#AAB7B8",borderColor:"#AAB7B8",borderRadius:8,width: 250,height: 40,fontSize:20,color:"white"}}>
                        <option align="center" value="Most Funded">Blockchain</option>
                        <option align="center" value="Most Transaction">Most Transaction</option>
                        <option align="center" value="Closing Soon">Closing Soon</option>
                       
                    </select>
                    </label>
                    </div>

                    <div className='col-md-1'></div>&nbsp;&nbsp;
                    <div className="col-md-2">
                      
                <label>
                <p><b>Min.Investment</b></p>
                    <select style={{backgroundColor:"#AAB7B8",borderColor:"#AAB7B8",borderRadius:8,width: 250,height: 40,fontSize:20,color:"white"}}>
                        <option align="center" value="Most Funded">$1000</option>
                        <option align="center" value="Most Transaction">$2500</option>
                        <option align="center" value="Closing Soon">$5000</option>
                       
                    </select>
                    </label>
                    </div>
                 </div>&nbsp;

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
                  <Button tag="a" color="secondary" style={{backgroundColor:"white",borderRadius:8,color:"orange",fontSize:13}} wideMobile href="#0">
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
                      src={require('./../../assets/images/card2.gif')}
                      alt="Features tile icon 02"
                      width={500}
                      height={500} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Realm Real Estate
                    </h4>
                  <p className="m-0 text-sm">
                    Apparel thats boosts your immune health,cognition,recovery and sleep.
                    </p><br/>
                    <span style={{color:"grey",paddingRight:0}}>Santa Monica,CA</span>
                <ButtonGroup>
                  <Button tag="a" color="secondary" style={{backgroundColor:"#AAB7B8",borderRadius:8,color:"white",fontSize:13}} wideMobile href="#0">
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
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/card3.jpg')}
                      alt="Features tile icon 03"
                      width={500}
                      height={500} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    kigns Crowd
                    </h4>
                  <p className="m-0 text-sm">
                  Apparel thats boosts your immune health,cognition,recovery and sleep.
                    </p><br/>
                    
                    <span style={{color:"grey"}}>Santa Monica,CA</span>
                <ButtonGroup>
                  <Button tag="a" color="secondary" style={{backgroundColor:"#D5F5E3",borderRadius:8,color:"green",fontSize:13}} wideMobile href="#0">
                    GAMING
                    </Button>
                </ButtonGroup>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/card4.jpg')}
                      alt="Features tile icon 04"
                      width={500}
                      height={500} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    BoxabI
                    </h4>
                  <p className="m-0 text-sm">
                  We've Built your Crypto portfolio for you
                    </p><br/>
                    <span style={{color:"grey",paddingRight:0}}>Los Angeles,CA</span>
                <ButtonGroup>
                  <Button tag="a" color="secondary" style={{backgroundColor:"white",borderRadius:8,color:"orange",fontSize:13}} wideMobile href="#0">
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
                <h4 className="mt-0 mb-8">
                    Runnners
                    </h4>
                 
                </div>
                <div className="features-tiles-item-content">
                
                  <span className="m-0 text-sm">
                     Connecting outstanding operation talent with the most inclusive companies
                    </span>
                  
                <ButtonGroup>
                  <Button tag="a" color="secondary" style={{backgroundColor:"#2ECC71 ",borderRadius:8,color:"white",fontSize:13}} wideMobile href="#0">
                    MAX
                    </Button><span style={{color:"#2ECC71 "}}><strong>$25,000,000</strong> valuation cap</span>
                </ButtonGroup> <hr/>
                <span><strong>$100 min.</strong>investment</span><hr/>
                <span><strong>446</strong> Investors</span><hr/>
                <span><strong>$266,978 </strong>raised</span>
                </div>
              </div>
            </div>

            <div className={tilesClasses}>
            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400" >
              <div className="tiles-item-inner" >
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/card7.jpg')}
                      alt="Features tile icon 07"
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
                      alt="Features tile icon 08"
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
      </div>
      <div className={tilesClasses}>
      <div className="reveal-from-bottom" data-reveal-delay="600" >
                <ButtonGroup>
                  <Button tag="a" color="primary" style={{borderRadius:8,color:"white"}} wideMobile href="#0">
                    View All Companies (69)
                    </Button>
                </ButtonGroup>
              </div></div>
    </section>
  );
}

Livedeal.propTypes = propTypes;
Livedeal.defaultProps = defaultProps;

export default Livedeal;