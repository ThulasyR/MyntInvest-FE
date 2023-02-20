import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';

import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';

import '../Css/styles.css';

const propTypes = {
    ...SectionSplitProps.types
  }
  
  const defaultProps = {
    ...SectionSplitProps.defaults
  }
  
  const Founders_Process = ({
    className,
    topOuterDivider,
    bottomOuterDivider,
    topDivider,
    bottomDivider,
    hasBgColor,
    invertColor,
    invertMobile,
    invertDesktop,
    alignTop,
    imageFill,
    ...props
  }) => {
  
    const outerClasses = classNames(
      'features-split section',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    );
  
    const innerClasses = classNames(
      'features-split-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider' 
    );
  
    const sectionHeader = {
      title: '',
      paragraph: ''
    };

    return (
      <section {...props} className={outerClasses}>
        <div className="container">
          <div className={innerClasses}>
            &nbsp;
            <h2 style={{ color: "#2ECC71" }} align="Center">
              <span style={{ color: "Black" }}>How do I</span> invest?{" "}
            </h2>
            &nbsp;
            <div class="accordion bg-white" id="accordionFounder1">
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                  <button
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    01 Profile Creation
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  class="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionFounder1"
                >
                  <div class="accordion-body">
                    Click on the Sign Up button and kickstart your startup
                    investment journey in minutes
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    02 KYC & Risks Involved
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionFounder1"
                >
                  <div class="accordion-body">
                    Complete a quick KYC and acknowledge the risks involved to
                    ensure that you are aware of the risk startup investment
                    entails.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    03 Understand the deal well
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionFounder1"
                >
                  <div class="accordion-body">
                    Browse through startups with open fundraising campaigns/
                    upcoming campaigns. In the high-speed, ever-changing world
                    of startups making your first investment can be a daunting
                    task. We’d like to make that journey easier for you by
                    helping you understand the risks, legal pitch, and terms of
                    the investment beforehand.
                  </div>
                </div>
              </div>

              <div class="accordion-item">
                <h2 class="accordion-header" id="headingFour">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    04 Hit the Invest Now Button
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingFour"
                  data-bs-parent="#accordionFounder1"
                >
                  <div class="accordion-body">
                    Choose your amount, payment method and agree to the Terms
                    and Conditions to complete your investment. Keep in mind,
                    that you are mandated to complete your e-KYC, sign the
                    consent agreement and verify your bank details before you
                    invest
                  </div>
                </div>
              </div>

              <div class="accordion-item">
                <h2 class="accordion-header" id="headingFive">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >
                    05 Sign your SAFE
                  </button>
                </h2>
                <div
                  id="collapseFive"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingFive"
                  data-bs-parent="#accordionFounder1"
                >
                  <div class="accordion-body">
                    Once you’ve invested, the startup will e-sign the M-SAFE
                    agreement within 2 business days, which will be made
                    available to you on your MxI dashboard. Click on the E-sign
                    M-SAFE button which will direct you to our Aadhar e-signing
                    partner’s website. You will need your Aadhar and the
                    registered mobile number in order to complete the signing
                    process. All M-SAFE documents are required to be e-signed
                    within 7 working days from the date it shows up in your
                    dashboard.
                  </div>
                </div>
              </div>

              <div class="accordion-item">
                <h2 class="accordion-header" id="headingSix">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSix"
                    aria-expanded="false"
                    aria-controls="collapseSix"
                  >
                    06 Process Post investment
                  </button>
                </h2>
                <div
                  id="collapseSix"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingSix"
                  data-bs-parent="#accordionFounder1"
                >
                  <div class="accordion-body">
                    The startup founder signs and your security certificates are
                    issued. You can expect the entire process to be completed in
                    20 days.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

Founders_Process.propTypes = propTypes;
Founders_Process.defaultProps = defaultProps;

export default Founders_Process;