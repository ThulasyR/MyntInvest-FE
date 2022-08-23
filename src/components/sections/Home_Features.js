import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const Home_Features= ({
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
    paragraph: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum — semper quis lectus nulla at volutpat diam ut venenatis.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
          &nbsp;
        <div className={innerClasses}>
          <div align="center"> <h1>What <span style={{color:"#23b347"}}>Clients Say</span> About Us</h1></div>
        
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner" style={{backgroundColor:"#FCF3CF",borderRadius:15}}>
                <div className="features-tiles-item-header" style={{paddingRight:180}}>
                  <div className="features-tiles-item-image mb-16" >
                    <Image
                      src={require('./../../assets/images/image (2).jpg')}
                      alt="Features tile icon 01"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    WE'RE GOOD, THANKS
                    </h4>
                  <p className="m-0 text-sm" style={{color:"black"}}>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.
                    </p>
                    <div className="testimonial-item-footer text-xs mt-32 mb-0 ">
                  <span className="testimonial-item-name text-color-high" style = {{color:"black",paddingRight:160}}><strong>Jane Morris</strong></span><br/>
                  <span className="testimonial-item-link" style={{color:"#23b347",paddingRight:160}}>
                    <a href="#0">CEO at SayX</a>
                  </span>
                </div>
                </div>&nbsp;
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner" style={{backgroundColor:"#FDEDEC ",borderRadius:15}}>
                <div className="features-tiles-item-header" style={{paddingRight:180}}>
                  <div className="features-tiles-item-image mb-16" >
                    <Image
                      src={require('./../../assets/images/image (1).jpg')}
                      alt="Features tile icon 01"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    WE'RE GOOD, THANKS
                    </h4>
                  <p className="m-0 text-sm" style={{color:"black"}}>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.
                    </p>
                    <div className="testimonial-item-footer text-xs mt-32 mb-0 ">
                  <span className="testimonial-item-name text-color-high" style = {{color:"black",paddingRight:150}}><strong>Wade Warren</strong></span><br/>
                  <span className="testimonial-item-link" style={{color:"#23b347",paddingRight:60}}>
                    <a href="#0">Joe M, CEO at LeadSpyder</a>
                  </span>
                </div>
                </div>&nbsp;
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner" style={{backgroundColor:"#FCF3CF",borderRadius:15}}>
                <div className="features-tiles-item-header" style={{paddingRight:180}}>
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/image (3).jpg')}
                      alt="Features tile icon 01"
                      width={64}
                      height={64}
                     />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    WE'RE GOOD, THANKS
                    </h4>
                  <p className="m-0 text-sm" style={{color:"black"}}>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.
                    </p>
                    <div className="testimonial-item-footer text-xs mt-32 mb-0 ">
                  <span className="testimonial-item-name text-color-high" style = {{color:"black",paddingRight:190}}><strong>Angelina</strong></span><br/>
                  <span className="testimonial-item-link" style={{color:"#23b347",paddingRight:170}}>
                    <a href="#0">CEO at SayX</a>
                  </span>
                </div>
                </div>&nbsp;
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Home_Features.propTypes = propTypes;
Home_Features.defaultProps = defaultProps;

export default Home_Features;