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
const Home_Splits = ({
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
    paragraph: 'Invest Alongside Leading Venture Captitalists And Professional Investors'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>&nbsp;
        <h1 align="center">Access <span style={{color:"#23b347"}}> Private</span> Investments</h1>
         <SectionHeader data={sectionHeader} className="center-content" />
        
          <div className={tilesClasses}>
          <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16" style={{paddingRight:10,backgroundColor:"white"}}>
                    <Image
                      src={require('./../../assets/images/Avatara.jpg')}
                      alt="Features tile icon 01"
                      width={150}
                      height={150} />
                  </div>&nbsp;
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/Avatar.png')}
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
                      src={require('./../../assets/images/Avatara.jpg')}
                      alt="Features tile icon 01"
                      width={150}
                      height={150} />
                  </div>&nbsp;
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/Avatar.png')}
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
                      src={require('./../../assets/images/Avatara.jpg')}
                      alt="Features tile icon 01"
                      width={150}
                      height={150} />
                  </div>&nbsp;
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/Avatar.png')}
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

Home_Splits.propTypes = propTypes;
Home_Splits.defaultProps = defaultProps;

export default Home_Splits;