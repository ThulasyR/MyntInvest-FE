import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

// Demo styles, see 'Styles' section below for some notes on use.
import "react-accessible-accordion/dist/fancy-example.css";

import classNames from "classnames";
import { SectionSplitProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";

const propTypes = {
  ...SectionSplitProps.types,
};

const defaultProps = {
  ...SectionSplitProps.defaults,
};

const Accord = ({
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
    "features-split section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "features-split-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const splitClasses = classNames(
    "split-wrap",
    invertMobile && "invert-mobile",
    invertDesktop && "invert-desktop",
    alignTop && "align-top"
  );

  const sectionHeader = {
    title: "",
    paragraph: "",
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <h5 className="text-start font20 pt-3">
          FREQUENTLY ASKED <span className="text-gold">QUESTIONS</span>
        </h5>
        <div className="row m-5">
          <div className="col-md-6">
            <div class="accordion" id="accordion1">
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
                    Why startups?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  class="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordion1"
                >
                  <div class="accordion-body">
                    Investing in startups means that you get to support
                    entrepreneurs and the future. You help support the economy
                    and job creation and are funding the future. By doing so,
                    you may make an outsized return on your investment.
                    Statistically, the more startup investments you make, the
                    higher is the probability of you seeing better returns
                    through your portfolio. Data collected across 10,000
                    Angellist portfolios support this idea.
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
                    How will my money get to the startup?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordion1"
                >
                  <div class="accordion-body">
                    Funds will be held in an Escrow account with one of our
                    Banking Partners, which will be managed by SEBI-certified
                    trustees, once you make an investment. Once the startup has
                    completed the compliance, the monies will be transferred
                    from this virtual account to a different account.{" "}
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
                    When a deal is oversubscribed, what happens?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordion1"
                >
                  <div class="accordion-body">
                    On the deal page, you can see when the minimum fundraising
                    amount has been reached. In this instance, the company may
                    decide to do the following:
                    <ul>
                      <li>
                        Accept all cash raised until the transaction is
                        completed.
                      </li>
                      <li>
                        Choose to lower each investor's investment by a given
                        percentage, i.e. pro-rata, in order to allocate stocks
                        to each investor and only take a certain amount of
                        money.
                      </li>
                      <li>
                        Choose to distribute monies at random using a lucky draw
                        technique.
                      </li>
                      <li>
                        Choose to finish the agreement before the deadline if
                        the goal is met.
                      </li>
                      <li>
                        The company and its stakeholders will make the final
                        decision, which will be conveyed to you via email.
                      </li>{" "}
                    </ul>{" "}
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
                    What is the procedure for canceling my investment?
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingFour"
                  data-bs-parent="#accordion1"
                >
                  <div class="accordion-body">
                    Within 48 hours of investing, you may cancel or reduce your
                    investment by contacting support@meteorXinvest.com. In the
                    final 48 hours of a deal, you cannot cancel your investment.
                    Remember that these requirements are complementary to one
                    another, so read them thoroughly.{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div class="accordion" id="accordion2">
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
                    Who can invest?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  class="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordion2"
                >
                  <div class="accordion-body">
                    Traditionally, investing in startups was not available to
                    the general public. Only accredited investors had access to
                    startup investment opportunities. But with Equity
                    crowdfunding, the playing fields have been leveled. On
                    platforms like MxI, anyone over the age of 18 can invest in
                    early-stage companies in a matter of a few minutes!
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
                    What is the definition of a private deal?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordion2"
                >
                  <div class="accordion-body">
                    Startups that do private deals raise money from their own
                    network of investors. These startups have not been subjected
                    to any due diligence by MXi. You may be able to request
                    access to some private campaigns. Only if the founders
                    approve your proposal can you review and invest.
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
                    Is it possible for the startup to reject my investment?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordion2"
                >
                  <div class="accordion-body">
                    Yes, any corporation reserves the right to reject any
                    investment commitment, in whole or in part, at any moment
                    prior to the proceeds being pulled from the virtual account.
                    Any rejected investments, as well as the processing fee,
                    will be returned to the investor in full.
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
                    What method do I use to keep track of my investments?
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingFour"
                  data-bs-parent="#accordion2"
                >
                  <div class="accordion-body">
                    After you've made an investment, you'll have access to MXi's
                    Analytics tool. This will send you periodic updates straight
                    from the startups you've invested in, keeping you up to date
                    on your investment's growth. Note: If there is any delay in
                    the timelines listed on this page, our staff will notify you
                    through email well in advance.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Accord.propTypes = propTypes;
Accord.defaultProps = defaultProps;

export default Accord;
