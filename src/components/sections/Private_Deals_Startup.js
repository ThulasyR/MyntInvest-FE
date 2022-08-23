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
const Private_Deals_Startup= ({
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
          <h2 align="Center">For Startups</h2>&nbsp;
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
          </div>&nbsp;
        </div>
      </div>
    </section>
  );
}

Private_Deals_Startup.propTypes = propTypes;
Private_Deals_Startup.defaultProps = defaultProps;

export default Private_Deals_Startup;