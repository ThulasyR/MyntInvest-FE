import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import Image from "../elements/Image";

const propTypes = {
  ...SectionProps.types,
  split: PropTypes.bool,
};

const defaultProps = {
  ...SectionProps.defaults,
  split: false,
};

const Investors_Manager = ({
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
    "cta section center-content-mobile reveal-from-bottom",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "cta-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider",
    split && "cta-split"
  );

  return (
    <section {...props} className={outerClasses}>
      <div className="container bg-gold">
        <div className="row m-5">
          <div className="col-md-6 pt-3">
            <Image
              src={require("./../../assets/images/marketing.png")}
              alt="Features tile icon 01"
              width={300}
              height={300}
            />
          </div>

          <div className="col-md-6 p-5">
            <h3 className="m-0">DARLENE ROBERTSON</h3>
            <span className="text-white">Marketing Manager, MasterCard</span>
            &nbsp;
            <div
              className="reveal-from-bottom"
              data-reveal-delay="600"
              style={{ paddingTop: 30 }}
            >
              <p>
                {" "}
                Simple and quick investment and documentation signing process.
                Kudos to Mynt Invest!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Investors_Manager.propTypes = propTypes;
Investors_Manager.defaultProps = defaultProps;

export default Investors_Manager;
