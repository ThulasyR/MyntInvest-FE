import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const Investors_Invest = ({
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
         <h2 align="Center">Why Invest In <span style={{color:"#2ECC71"}}>Startups?</span></h2>
          <div className={tilesClasses}>
            
          <div className="tiles-item reveal-from-left" data-reveal-delay="200" >
              <div className="tiles-item-inner" style={{backgroundColor:"white"}}>
                <div className="testimonial-item-content">
                  <h6 className="text-sm mb-0">
                   </h6>
                 </div>
                <h4>Lorem ipsum</h4>
                <p>Never miss out on any warm leads.Only positive responses will reach your mailbox,so your lead generation is optimized to improve your efficiency,and your state-of-mind!</p>
                <p>KNOW MORE </p>
              </div>
            </div>

            <div className="tiles-item reveal-from-left" data-reveal-delay="200" >
              <div className="tiles-item-inner" style={{backgroundColor:"white"}}>
                <div className="testimonial-item-content">
                  <h6 className="text-sm mb-0">
                   </h6>
                 </div>
                <h4>Lorem ipsum</h4>
                <p>Never miss out on any warm leads.Only positive responses will reach your mailbox,so your lead generation is optimized to improve your efficiency,and your state-of-mind!</p>
                <p>KNOW MORE </p>
              </div>
            </div>

           
            <div className="tiles-item reveal-from-left" data-reveal-delay="200" >
              <div className="tiles-item-inner" style={{backgroundColor:"white"}}>
                <div className="testimonial-item-content">
                  <h6 className="text-sm mb-0">
                   </h6>
                 </div>
                <h4>Lorem ipsum</h4>
                <p>Never miss out on any warm leads.Only positive responses will reach your mailbox,so your lead generation is optimized to improve your efficiency,and your state-of-mind!</p>
                <p>KNOW MORE </p>
              </div>
            </div>
          </div>

          <div className={tilesClasses}>
           
          <div className="tiles-item reveal-from-left" data-reveal-delay="200" >
              <div className="tiles-item-inner" style={{backgroundColor:"white"}}>
                <div className="testimonial-item-content">
                  <h6 className="text-sm mb-0">
                   </h6>
                 </div>
                <h4>Lorem ipsum</h4>
                <p>Never miss out on any warm leads.Only positive responses will reach your mailbox,so your lead generation is optimized to improve your efficiency,and your state-of-mind!</p>
                <p>KNOW MORE </p>
              </div>
            </div>

            <div className="tiles-item reveal-from-left" data-reveal-delay="200" >
              <div className="tiles-item-inner" style={{backgroundColor:"white"}}>
                <div className="testimonial-item-content">
                  <h6 className="text-sm mb-0">
                   </h6>
                 </div>
                <h4>Lorem ipsum</h4>
                <p>Never miss out on any warm leads.Only positive responses will reach your mailbox,so your lead generation is optimized to improve your efficiency,and your state-of-mind!</p>
                <p>KNOW MORE </p>
              </div>
            </div>

            <div className="tiles-item reveal-from-left" data-reveal-delay="200" >
              <div className="tiles-item-inner" style={{backgroundColor:"white"}}>
                <div className="testimonial-item-content">
                  <h6 className="text-sm mb-0">
                   </h6>
                 </div>
                <h4>Lorem ipsum</h4>
                <p>Never miss out on any warm leads.Only positive responses will reach your mailbox,so your lead generation is optimized to improve your efficiency,and your state-of-mind!</p>
                <p>KNOW MORE </p>
              </div>
            </div>
          </div><br/>
          <span align="left" style={{color:"GrayText"}}>Risk notice:Investments in real estate are speculative and involve a high degree of risk.Investment should not be made by any person who cannot afford the loss of its entire investment.The real estate benefits above are not guaranted and do not necessarily apply to every real estate investment.</span><hr/>
         </div>
    </section>
  );
}

Investors_Invest.propTypes = propTypes;
Investors_Invest.defaultProps = defaultProps;

export default Investors_Invest;