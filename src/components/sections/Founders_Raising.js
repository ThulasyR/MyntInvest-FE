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
const Founders_Raising = ({
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
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <h2 align="Center">Benefits Of <span style={{color:"#2ECC71"}}>Raising Capitial</span><br/>With Us!</h2>&nbsp;
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-bottom" style={{backgroundColor:"white"}} >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8" align="left">
                    Robust Workflow
                    </h4>
                  <p className="m-0 text-sm" align="left">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" style={{backgroundColor:"white"}} >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8" align="left">
                    Robust Workflow
                    </h4>
                  <p className="m-0 text-sm" align="left">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" style={{backgroundColor:"white"}} >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8" align="left">
                    Robust Workflow
                    </h4>
                  <p className="m-0 text-sm" align="left">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" style={{backgroundColor:"white"}} >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8" align="left">
                    Robust Workflow
                    </h4>
                  <p className="m-0 text-sm" align="left">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.
                    </p>
                </div>
              </div>
            </div>
            <div className="tiles-item reveal-from-bottom"  style={{backgroundColor:"white"}}>
              <div className="tiles-item-inner">
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8" align="left">
                    Robust Workflow
                    </h4>
                  <p className="m-0 text-sm" align="left">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom"  style={{backgroundColor:"white"}}>
              <div className="tiles-item-inner">
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8" align="left">
                    Robust Workflow
                    </h4>
                  <p className="m-0 text-sm" align="left">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom"  style={{backgroundColor:"white"}}>
              <div className="tiles-item-inner">
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8" align="left">
                    Robust Workflow
                    </h4>
                  <p className="m-0 text-sm" align="left">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom"  style={{backgroundColor:"white"}}>
              <div className="tiles-item-inner">
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8" align="left">
                    Robust Workflow
                    </h4>
                  <p className="m-0 text-sm" align="left">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" style={{backgroundColor:"white"}} >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8" align="left">
                    Robust Workflow
                    </h4>
                  <p className="m-0 text-sm" align="left">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.
                    </p>
                </div>
              </div>
            </div>

          </div>&nbsp;
          <h6 align="Center">Know someone who's raising capital? <span style={{color:"#2ECC71"}}>Refer a Startup and get paid</span></h6>
        </div>
      </div>
    </section>
  );
}

Founders_Raising.propTypes = propTypes;
Founders_Raising.defaultProps = defaultProps;

export default Founders_Raising;