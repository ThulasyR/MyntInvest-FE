import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import Button from '../elements/Button';


const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const Investors_Thousand = ({
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
    invertColor && 'invert-color',' bg-white',
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
    paragraph: 'Individual And Institutional Investors.Invest $10-$100,000 Per Deal on MynInvest'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">


      <div className="col-md-12 pt-5">
      <h1 align="center">Join Thousands Of <span className="secondary">Investors</span></h1>
      <p  className="text-center">Individual And Institutional Investors.Invest $10-$100,000 Per Deal on MynInvest</p>

          <div className="row d-flex justify-content-center">
          <a href="#"  className="row d-flex justify-content-center text-center">
            <button type="button" class="btn btn-success btn-sm font14 col-md-4" >
              <b>Become an Investors</b>
            </button>
          </a>
          
          <p className="text-center"><br/><br/>Investments Are Risky And May Result In Total Loss Of Capital.&nbsp;
          <a href="#" className="alert-link"><u>Learn More</u></a></p>
          </div>



          <div className="row d-flex justify-content-center">
          <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16" style={{paddingRight:10,backgroundColor:"white"}}>
                    <Image
                      src={require('./../../assets/images/Boy.jpg')}
                      alt="Features tile icon 01"
                      width={150}
                      height={150} />
                  </div>&nbsp;
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/Girl.jpg')}
                      alt="Features tile icon 01"
                      width={150}
                      height={150} />
                  </div>
                </div>
              </div>
            </div>

            
            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16" style={{paddingRight:10,backgroundColor:"white"}} >
                    <Image
                      src={require('./../../assets/images/image (1).jpg')}
                      alt="Features tile icon 01"
                      width={150}
                      height={150} />
                  </div>&nbsp;
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/image (2).jpg')}
                      alt="Features tile icon 01"
                      width={150}
                      height={150} />
                  </div>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16" style={{paddingRight:10,backgroundColor:"white"}} >
                    <Image
                      src={require('./../../assets/images/Boy.jpg')}
                      alt="Features tile icon 01"
                      width={150}
                      height={150} />
                  </div>&nbsp;
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/image (3).jpg')}
                      alt="Features tile icon 01"
                      width={150}
                      height={150} />
                  </div>
                  
                </div>
              </div>
            </div>

          </div>
 
      
      </div> 
          </div>
    </section>
  );
}

Investors_Thousand.propTypes = propTypes;
Investors_Thousand.defaultProps = defaultProps;

export default Investors_Thousand;