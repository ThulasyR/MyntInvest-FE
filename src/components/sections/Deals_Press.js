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

const Deals_Press = ({
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
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap',
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
        <div className={innerClasses} />
         <SectionHeader data={sectionHeader} className="center-content" />
         <h2 style={{background:"#f9faf9"}}>Press</h2>
          <div className={tilesClasses}>
            

            <div className="tiles-item reveal-from-right" data-reveal-delay="200" >
              <div className="tiles-item-inner" style={{backgroundColor:"white"}}>
              <Image
                      src={require('./../../assets/images/Press (1).jpg')}
                      alt="Features tile icon 05"
                      width={1500}
                      height={1500} />&nbsp;
                <div className="testimonial-item-content">
                  <h6 className="text-sm mb-0">
                      Hans Dekkar
                   </h6><p style={{color:"grey"}}>July 23,2021</p>
                </div>
                <h4>Lorem ipsum dolor sit amet</h4>
                <p style={{color:"grey"}}>If You're Wondering how to send cold message on Lindkedln Without...</p>
       
              </div>
            </div>

            <div className="tiles-item reveal-from-right" data-reveal-delay="200" >
              <div className="tiles-item-inner" style={{backgroundColor:"white"}}>
              <Image
                      src={require('./../../assets/images/Press (2).jpg')}
                      alt="Features tile icon 05"
                      width={1500}
                      height={1500} />&nbsp;
                <div className="testimonial-item-content">
                  <h6 className="text-sm mb-0">
                      Hans Dekkar
                   </h6><p style={{color:"grey"}}>July 23,2021</p>
                </div>
                <h4>Lorem ipsum dolor sit amet</h4>
                <p style={{color:"grey"}}>If You're Wondering how to send cold message on Lindkedln Without...</p>
       
              </div>
            </div>

            <div className="tiles-item reveal-from-right" data-reveal-delay="200" >
              <div className="tiles-item-inner" style={{backgroundColor:"white"}}>
              <Image
                      src={require('./../../assets/images/Press (3).jpg')}
                      alt="Features tile icon 05"
                      width={1500}
                      height={1500} />&nbsp;
                <div className="testimonial-item-content">
                  <h6 className="text-sm mb-0">
                      Hans Dekkar
                   </h6><p style={{color:"grey"}}>July 23,2021</p>
                </div>
                <h4>Lorem ipsum dolor sit amet</h4>
                <p style={{color:"grey"}}>If You're Wondering how to send cold message on Lindkedln Without...</p>
       
              </div>
            </div>

          </div>
        </div>
      
    </section>
  );
}

Deals_Press.propTypes = propTypes;
Deals_Press.defaultProps = defaultProps;

export default Deals_Press;