import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';

const propTypes = {
  ...SectionProps.types,
  split: PropTypes.bool
}

const defaultProps = {
  ...SectionProps.defaults,
  split: false
}

const Home_Staa = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  split,
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
      <div className="container">&nbsp;
        <div
          className={innerClasses} style={{backgroundColor:"#F2F3F4"}}
        >
          <div className="cta-slogan">
            <h3 className="m-0" style={{color:"black"}}>
             Join the best founders & <br/>Investores today!
              </h3>
          </div>
          <div className="cta-action">
          <ButtonGroup>
                  <Button tag="a" color="primary" style={{backgroundColor:"#F1C40F ", borderRadius:8,color:"white"}} wideMobile href="/Investors">
                    Investors
                    </Button>
                  <Button tag="a" color="" style={{backgroundColor:"#2ECC71 ",borderRadius:8,color:"white"}} wideMobile href="/Founders">
                    Founders
                    </Button>
                </ButtonGroup>
          </div>
        </div>
      </div>&nbsp;
    </section>
  );
}

Home_Staa.propTypes = propTypes;
Home_Staa.defaultProps = defaultProps;

export default Home_Staa;

