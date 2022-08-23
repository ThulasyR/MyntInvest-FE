import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import 'bootstrap/dist/css/bootstrap.min.css';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const Deals_Company= ({
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
        <div className={innerClasses}>&nbsp;
         <SectionHeader data={sectionHeader} className="center-content" />
              <div className="features-tiles-item-content">
                  <h2 className="mt-0 mb-8" >
                  Company Location
                    </h2>
                </div>
                &nbsp;

          <div className={tilesClasses}>
         
         
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                  <Image
                              src={require('./../../assets/images/Location.jpg')}
                              alt="Features tile icon 05"
                              width={1000}
                              height={1000} />
                  </div>
                </div>
              </div>
       

            
            
               
            </div>
            </div>
          </div>
        
    </section>
  );
}

Deals_Company.propTypes = propTypes;
Deals_Company.defaultProps = defaultProps;

export default Deals_Company;