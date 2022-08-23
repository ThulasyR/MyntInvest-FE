import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import Image from '../elements/Image';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const OurBlogs = ({
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

  

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        &nbsp;
        <div className={innerClasses}>
          
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
                  <h4 className="mt-0 mb-8" align="left">
                    Lorem ipsum dolor sit amet
                    </h4>
                  <p className="m-0 text-sm"  align="left">
                       If you're wondering how to send cold messages on Linkedin without...
                    </p><br/>
                    <span  align="left">by Lee Morgan</span><br/>
                    <span  align="left" style={{color:"grey"}}>July 23,2022</span>
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
                  <h4 className="mt-0 mb-8" align="left">
                    Lorem ipsum dolor sit amet
                    </h4>
                  <p className="m-0 text-sm"  align="left">
                       If you're wondering how to send cold messages on Linkedin without...
                    </p><br/>
                    <span  align="left">by Lee Morgan</span><br/>
                    <span  align="left" style={{color:"grey"}}>July 23,2022</span>
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
                  <h4 className="mt-0 mb-8" align="left">
                    Lorem ipsum dolor sit amet
                    </h4>
                  <p className="m-0 text-sm"  align="left">
                       If you're wondering how to send cold messages on Linkedin without...
                    </p><br/>
                    <span  align="left">by Lee Morgan</span><br/>
                    <span  align="left" style={{color:"grey"}}>July 23,2022</span>
                </div>
              </div>
            </div>
            <div className={tilesClasses} align="Left">
            <div className="tiles-item reveal-from-bottom" >
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
                  <h4 className="mt-0 mb-8" align="left">
                    Lorem ipsum dolor sit amet
                    </h4>
                  <p className="m-0 text-sm"  align="left">
                       If you're wondering how to send cold messages on Linkedin without...
                    </p><br/>
                    <span  align="left">by Lee Morgan</span><br/>
                    <span  align="left" style={{color:"grey"}}>July 23,2022</span>
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
                  <h4 className="mt-0 mb-8" align="left">
                    Lorem ipsum dolor sit amet
                    </h4>
                  <p className="m-0 text-sm"  align="left">
                       If you're wondering how to send cold messages on Linkedin without...
                    </p><br/>
                    <span  align="left">by Lee Morgan</span><br/>
                    <span  align="left" style={{color:"grey"}}>July 23,2022</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div></div>
      <div className={tilesClasses}>
      <div className="reveal-from-bottom" data-reveal-delay="600" >
                <ButtonGroup>
                  <Button tag="a" color="primary" style={{borderRadius:8,color:"white"}} wideMobile href="">
                    Load More
                    </Button>
                </ButtonGroup>
              </div></div>
    </section>
  );
}

OurBlogs.propTypes = propTypes;
OurBlogs.defaultProps = defaultProps;

export default OurBlogs;