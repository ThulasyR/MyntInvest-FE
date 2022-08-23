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
const Deals_Team = ({
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
                  <h1 className="mt-0 mb-8" >
                  Team
                    </h1>
                </div>
                &nbsp;

          <div className={tilesClasses}>
         
          <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/image (1).jpg')}
                      alt="Features tile icon 01"
                      width={100}
                      height={100}
                      class="rounded-circle" />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    karthik
                    </h4>
                  <p className="m-0 text-sm">
                       Co-President,Director
                    </p>
                </div>
              </div>
            </div>

            
            
            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/Girl.jpg')}
                      alt="Features tile icon 01"
                      width={100}
                      height={100}
                      class="rounded-circle" />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Jessy
                    </h4>
                  <p className="m-0 text-sm">
                       Co-President,Director
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/image (2).jpg')}
                      alt="Features tile icon 01"
                      width={100}
                      height={100}
                      class="rounded-circle" />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Karthik
                    </h4>
                  <p className="m-0 text-sm">
                       Co-President,Director
                    </p>
                </div>
              </div>
            </div>
           
            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/image (3).jpg')}
                      alt="Features tile icon 01"
                      width={100}
                      height={100}
                      class="rounded-circle" />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Jessy
                    </h4>
                  <p className="m-0 text-sm">
                       Co-President,Director
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/image (1).jpg')}
                      alt="Features tile icon 01"
                      width={100}
                      height={100}
                      class="rounded-circle" />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Karthik
                    </h4>
                  <p className="m-0 text-sm">
                       Co-President,Director
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/image (3).jpg')}
                      alt="Features tile icon 01"
                      width={100}
                      height={100}
                      class="rounded-circle" />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Jessy
                    </h4>
                  <p className="m-0 text-sm">
                       Co-President,Director
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/Boy.jpg')}
                      alt="Features tile icon 01"
                      width={100}
                      height={100}
                      class="rounded-circle" />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Karthik
                    </h4>
                  <p className="m-0 text-sm">
                       Co-President,Director
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/image (2).jpg')}
                      alt="Features tile icon 01"
                      width={100}
                      height={100}
                      class="rounded-circle" />
                    
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Jessy
                    </h4>
                  <p className="m-0 text-sm">
                       Co-President,Director
                    </p>
                </div>
              </div>
            </div>
            
            </div>
            </div>
          </div>
        
    </section>
  );
}

Deals_Team.propTypes = propTypes;
Deals_Team.defaultProps = defaultProps;

export default Deals_Team;