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
  
  const How_It_Works = ({
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
      title: 'How It Works',
      paragraph: 'Understand how MyntInvests different processes work to Complete a successful deal'
    };

    return (
        <section
        {...props}
        className={outerClasses}
      >
        <div className="container" >
        <SectionHeader data={sectionHeader} className="center-content" />
        <div className="row">
                <h4>1.	Apply: </h4>
                <p>MxI reviews every company application internally to determine whether it meets our compliance and eligibility requirements. If it's a good match, we move forward!</p> 
                <p>Note: MxI can currently only service India-based entities</p>
                <hr/>
              </div>

              <div className="row">
                <h4>2.	Create:</h4>
                <p>Tell your startup story in your own words. Work with our subject matter experts to build and design your campaign page to attract investors.</p>
                <hr/>
              </div>

              <div className="row">
                <h4>3.	Launch:</h4>
                <p>Your campaign is then sent to our internal team for review and upon approval is launched. Post which we schedule AMA meetings and also support you in building your customer community base. </p>
                <hr/>
              </div>

          <div className={innerClasses}>&nbsp;
         
           
         <div className="row">
         <h3>FAQs (Frequently Asked Questions)</h3>
         </div>
         <Accordion >
            <AccordionItem >
                <AccordionItemHeading>
                <AccordionItemButton >
                     What is MxI?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                     MxI is a cutting-edge Kickstarter for investing. We help you raise money from angel investments and from the local community to help build your startup further. Our army of subject matter experts who will help you design your campaign, to a forum of evangelists will help you reach your goal faster.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
     
            <AccordionItem >
                <AccordionItemHeading>
                <AccordionItemButton >
                    What kind of startups are onboarded?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    MxI believes in technology, innovation and diversification. We’re looking for tech-enabled early-stage startups across sectors like consumer, healthtech, edtech, fintech, AI, AR/VR, blockchain, sportstech, food and beverages and many more.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>             
     
            <AccordionItem >
                <AccordionItemHeading>
                <AccordionItemButton >
                What is the typical campaign duration?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    MxI campaigns usually last 10-90 business days. If you need to run your campaign for a longer time, please reach out to us on support@meteorxinvest.com
                    </p>
                </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    Why MxI?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    MXi brings community stocks to you and allows you to own a part of the next big startup and help them on the way to the top.MXi allows you to instantly invest and track your investments. 
                    </p>
                </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    How much money can be raised?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    At MXi, there is no limit as such, but we always recommend our startups to raise smaller ticket sizes which ensures not only capital raise but also an army of new clients that the startups are being benefited by. The startups can always run multiple campaigns and raise funds based on their requirements. 
                    </p>
                </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    How do I end my campaign?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    MxI campaigns usually last 10-90 business days. Campaigns can be ended before time as well if the funding target has been reached. It is as per the discretion of the startup.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
         
            <AccordionItem >
                <AccordionItemHeading>
                <AccordionItemButton >                   
                   What are the legal intricacies I should know about?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    Online startup investing is unregulated in India. The rules that apply to traditional fundraising apply for online investing as well. MXi complies with all the norms of companies act and the contracts act. For more information refer to … (insert legality link)
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    Who will be the co-investors?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    The coinvestors will be other retail investors on tyke. None of that money will appear on the startup’s cap table, thus making future VC rounds easier for startups.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
         </Accordion>
        </div>
       
      </div>
    </section>
);
}

How_It_Works.propTypes = propTypes;
How_It_Works.defaultProps = defaultProps;

export default How_It_Works;