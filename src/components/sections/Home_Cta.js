import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Image from '../elements/Image';
const propTypes = {
  ...SectionProps.types,
  split: PropTypes.bool
}

const defaultProps = {
  ...SectionProps.defaults,
  split: false
}

const Home_Cta = ({
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
  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
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
      <div className="container" style={{paddingBottom:200}}>
        <div
          className={innerClasses} style={{backgroundColor:"#f9faf9"}}
        >
          <div className="cta-slogan">
            <h2 className="m-0" style={{color:"black"}} align="center" >
             3061 <br/>
             </h2><p align="center" style={{fontSize:10}}>India is the 3rd largest startup ecosystem in the world</p>
          </div> 
          <div className="cta-slogan">
            <h1 className="m-0" style={{color:"black"}}>
             |
             </h1>
          </div> 
          <div className="cta-action">
          <h2 className="m-0" style={{color:"black"}}align="center">
             $995k  <br/>
             </h2><p align="center" style={{fontSize:10}}>The YOY growth rate of Indian startup ecosystem is 15%</p>
          </div>
          <div className="cta-slogan">
            <h1 className="m-0" style={{color:"black"}}>
             |
             </h1>
          </div> 
          <div className="cta-action">
          <h2 className="m-0" style={{color:"black"}}align="center">
             11 <br/>
             </h2><p align="center" style={{fontSize:10}}>-	Funding secured by Indian startups in 2021 alone is $ 41 Billion. </p>
          </div>
          <div className="cta-slogan">
            <h1 className="m-0" style={{color:"black"}}>
             |
             </h1>
          </div> 
          <div className="cta-action">
          <h2 className="m-0" style={{color:"black"}}align="center" >
             $11.5 Bn <br/>
             </h2><p align="center" style={{fontSize:10}}>Venture capital funding across all stages doubled compared to last year</p>
          </div>
        </div>&nbsp;
             
          <div className={tilesClasses}>
          <div className="cta-action">
            
            <div className="reveal-from-bottom" data-reveal-delay="600">
            <ButtonGroup>
                  <Button tag="a" color="primary" style={{backgroundColor:"#F1C404", borderRadius:8,color:"white"}} wideMobile href="/Investors">
                    Startups
                    </Button>
                  <Button tag="a" color="secondary" style={{backgroundColor:"#AAB7B8",borderRadius:8,color:"white"}} wideMobile href="">
                    Crypto
                    </Button>
                    <Button tag="a" color="primary" style={{backgroundColor:"#AAB7B8", borderRadius:8,color:"white"}} wideMobile href="/Realestate">
                    Real Estate
                    </Button>
                </ButtonGroup>
              </div>
            
          </div>
          </div>
      </div>&nbsp;
      
    </section>
  );
}

Home_Cta.propTypes = propTypes;
Home_Cta.defaultProps = defaultProps;

export default Home_Cta;