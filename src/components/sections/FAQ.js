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
import Image from '../elements/Image';
import Input from "../elements/Input";
const propTypes = {
    ...SectionSplitProps.types
  }
  
  const defaultProps = {
    ...SectionSplitProps.defaults
  }
  
  const FAQ = ({
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
  
   
    return (
        <section
        {...props}
        className={outerClasses}
      >
        <div className="container" >
        <div className="col-md-12">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb arr-right">
                    <li class="breadcrumb-item text-sm" aria-current="page" style={{color:"Grey"}}>Resources</li>
                    <li class="breadcrumb-item text-sm text-dark active"><a class="opacity-5 text-dark" href="/Blog">Blog</a></li>
                    <li class="breadcrumb-item text-sm text-dark active"><a class="opacity-5 text-dark" href="/">Support</a></li>
                    <li class="breadcrumb-item text-sm active" aria-current="page" style={{color:'#23b347'}}>FAQ</li>
                </ol>
                </nav>
            </div>
            <h2 align="center">Frequently Asked <span style={{color:'#23b347'}}>Questions</span></h2>
            <div className="features-tiles-item-content">
                  <div className="col-md-12">
                    <Input id="newsletter" type="email" style={{backgroundColor:"white",textColor:"white"}} label="Subscribe" labelHidden hasIcon="right" placeholder="Enter The Keyword Here To Search The Question">
                      <svg width="16" height="12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 5H1c-.6 0-1 .4-1 1s.4 1 1 1h8v5l7-6-7-6v5z" fill="#376DF9" />
                      </svg>
                    </Input>
                  </div>
                </div><hr/> &nbsp;
          <div className="col-md-12">
          <Accordion >
                      <AccordionItem >
                          <AccordionItemHeading>
                              <AccordionItemButton >
                              Why startups?
                              </AccordionItemButton>
                          </AccordionItemHeading>
                          <AccordionItemPanel>
                              <p>
                              Investing in startups means that you get to support entrepreneurs and the future. You help support the economy and job creation and are funding the future. By doing so, you may make an outsized return on your investment.
                               Statistically, the more startup investments you make, the higher is the probability of you seeing better returns through your portfolio. Data collected across 10,000 Angellist portfolios support this idea. 
                             </p>
                          </AccordionItemPanel>
                      </AccordionItem>

                      <AccordionItem>
                          <AccordionItemHeading>
                              <AccordionItemButton>
                                  Who can invest?
                              </AccordionItemButton>
                          </AccordionItemHeading>
                          <AccordionItemPanel>
                              <p>
                              Traditionally, investing in startups was not available to the general public. Only accredited investors had access to startup investment opportunities. But with Equity crowdfunding, the playing fields have been leveled. On platforms like MxI, anyone over the age of 18 can invest in early-stage companies in a matter of a few minutes!
                              </p>
                          </AccordionItemPanel>
                 </AccordionItem>   
                
                      <AccordionItem>
                          <AccordionItemHeading>
                              <AccordionItemButton>
                                  How will my money get to the startup?
                              </AccordionItemButton>
                          </AccordionItemHeading>
                          <AccordionItemPanel>
                              <p>
                              Funds will be held in an Escrow account with one of our Banking Partners, which will be managed by SEBI-certified trustees, once you make an investment. Once the startup has completed the compliance, the monies will be transferred from this virtual account to a different account.
                              </p>
                          </AccordionItemPanel>
                      </AccordionItem>

                      <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                            What is the definition of a private deal?
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                           Startups that do private deals raise money from their own network of investors. These startups have not been subjected to any due diligence by MXi. You may be able to request access to some private campaigns. Only if the founders approve your proposal can you review and invest.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>

                      <AccordionItem >
                        <AccordionItemHeading>
                            <AccordionItemButton >
                            When a deal is oversubscribed, what happens?
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                            On the deal page, you can see when the minimum fundraising amount has been reached. In this instance, the company may decide to do the following:
                            </p>
                            <ul>
                              <li>Accept all cash raised until the transaction is completed.</li>
                              <li>Choose to lower each investor's investment by a given percentage, i.e. pro-rata, in order to allocate stocks to each investor and only take a certain amount of money.</li>
                              <li>Choose to distribute monies at random using a lucky draw technique.</li>
                              <li>Choose to finish the agreement before the deadline if the goal is met.</li>
                              <li>The company and its stakeholders will make the final decision, which will be conveyed to you via email.</li>
                            </ul>
                        </AccordionItemPanel>
                    </AccordionItem>

                      <AccordionItem>
                          <AccordionItemHeading>
                              <AccordionItemButton>
                                  What is the procedure for canceling my investment?
                              </AccordionItemButton>
                          </AccordionItemHeading>
                          <AccordionItemPanel>
                              <p>
                              Within 48 hours of investing, you may cancel or reduce your investment by contacting support@meteorXinvest.com. In the final 48 hours of a deal, you cannot cancel your investment. Remember that these requirements are complementary to one another, so read them thoroughly.
                              </p>
                          </AccordionItemPanel>
                      </AccordionItem>
                 
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                            Is it possible for the startup to reject my investment?
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                            Yes, any corporation reserves the right to reject any investment commitment, in whole or in part, at any moment prior to the proceeds being pulled from the virtual account. Any rejected investments, as well as the processing fee, will be returned to the investor in full.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                            What method do I use to keep track of my investments?
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                            After you've made an investment, you'll have access to MXi's Analytics tool. This will send you periodic updates straight from the startups you've invested in, keeping you up to date on your investment's growth.
                             Note: If there is any delay in the timelines listed on this page, our staff will notify you through email well in advance.
                           </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                </Accordion>

         
        </div>

       
      </div>
    </section>
);
}

FAQ.propTypes = propTypes;
FAQ.defaultProps = defaultProps;

export default FAQ;