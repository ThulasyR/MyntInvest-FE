import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import { NavLink } from 'react-router-dom';
const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const Private_Deals_Tiles = ({
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
          <h2 align="center">What Describes You<span style={{color:"#2ECC71 "}}> The Best</span></h2>
          <div className="row" align='center'>    
                  
                     <nav className="navbar navbar-expand-sm bg-Secondary navbar-white " >
                          <div className="container-fluid justify-content-center" >
                                <ul className="navbar-nav ">
                          
                                       <li className="nav-item">
                                            <NavLink to="/" className="nav-link" style={{color:" #2ECC71"}}  >Founder</NavLink>
                                         </li>
                                        <li className="nav-item">
                                            <NavLink to="/" className="nav-link" >Investor</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="/" className="nav-link" >Syndicate</NavLink>
                                        </li>
                                </ul>
                            </div>
                         </nav>
                    
                </div>
         <div className={splitClasses}>

        
            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <h3 className="mt-0 mb-12">
                FOUNDERS
                  </h3>
                  <p><b>Get community power converted into capital. </b></p>
                <p className="m-0" style={{color:"grey"}}>
                Four simple steps: Schedule a call with us | Setup Campaign | Share campaign with your investors | Raise funds within days  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/Privatedeals1.png')}
                  alt="Features split 03"
                  width={700}
                  height={500} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">  
                <h2 className="mt-0 mb-12">
                <span style={{color:"#2ECC71"}}>ANGEL </span> INVESTORS
                  </h2><br/>
                  <p><b>Automate your deal flow process today. </b></p>
                <p className="m-0" style={{color:"grey"}}>
                Complete Transactions within no time - Seamless KYC, online transactions and Signing of documents.</p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/Privatedeals2.png')}
                  alt="Features split 01"
                  width={528}
                  height={396} />
              </div>
            </div>

            
            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <h2 className="mt-0 mb-12">
                Angel Networks & Syndicates
                  </h2>
                  <p><b>Automated process for easy deal flow for seamless closure of deals & tracking progress via intelligent reports.</b></p>
                <p className="m-0" style={{color:"grey"}}>
                MXi’s seamless autonomous structure is easy, efficient and cost effective. Track the progress of your portfolio companies through our effortless integrations. </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/Privatedeals3.png')}
                  alt="Features split 03"
                  width={700}
                  height={500} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

Private_Deals_Tiles.propTypes = propTypes;
Private_Deals_Tiles.defaultProps = defaultProps;

export default Private_Deals_Tiles;