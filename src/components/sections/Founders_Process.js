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
        <section
        {...props}
        className={outerClasses}
      >
        <div className="container" >
          <div className={innerClasses}>&nbsp;
          <h2 style={{color:"#2ECC71"}} align="Center"><span style={{color:"Black"}}>How do I</span> invest?  </h2>&nbsp;
           <SectionHeader data={sectionHeader} className="center-content" />

                   <Accordion >
            <AccordionItem >
                <AccordionItemHeading>
                <AccordionItemButton >
                     01&nbsp;&nbsp;	Profile Creation
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    Click on the Sign Up button and kickstart your startup investment journey in minutes
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        02&nbsp;&nbsp; 	KYC & Risks Involved 
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    Complete a quick KYC and acknowledge the risks involved to ensure that you are aware of the risk startup investment entails.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                       03&nbsp;&nbsp;	Understand the deal well 
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    Browse through startups with open fundraising campaigns/ upcoming campaigns. In the high-speed, ever-changing world of startups making your first investment can be a daunting task. We’d like to make that journey easier for you by helping you understand the risks, legal pitch, and terms of the investment beforehand.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                       04&nbsp;&nbsp;Hit the Invest Now Button 
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    Choose your amount, payment method and agree to the Terms and Conditions to complete your investment. Keep in mind, that you are mandated to complete your e-KYC, sign the consent agreement and verify your bank details before you invest
                    </p>
                </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                       05&nbsp;&nbsp;Sign your SAFE
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    Once you’ve invested, the startup will e-sign the M-SAFE agreement within 2 business days, which will be made available to you on your MxI dashboard. Click on the E-sign M-SAFE button which will direct you to our Aadhar e-signing partner’s website. You will need your Aadhar and the registered mobile number in order to complete the signing process. All M-SAFE documents are required to be e-signed within 7 working days from the date it shows up in your dashboard.</p>
                </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                       06&nbsp;&nbsp;	Process Post investment 
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    The startup founder signs and your security certificates are issued. You can expect the entire process to be completed in 20 days. </p>
                </AccordionItemPanel>
            </AccordionItem>
         </Accordion>
        </div>
       
      </div>
    </section>
);
}

Founders_Process.propTypes = propTypes;
Founders_Process.defaultProps = defaultProps;

export default Founders_Process;