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
import Button from "../elements/Button";

const propTypes = {
    ...SectionSplitProps.types
  }
  
  const defaultProps = {
    ...SectionSplitProps.defaults
  }
  
  const Analystics = ({
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
        <div className="col-md-12">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb arr-right">
                      <li class="breadcrumb-item text-sm" aria-current="page" style={{color:"Grey"}}>Startup</li>
                      <li class="breadcrumb-item text-sm text-dark active"><a class="opacity-5 text-dark" href="/Startup_Dashboard">Dashboard</a></li>
                      <li class="breadcrumb-item text-sm text-dark active"><a class="opacity-5 text-dark" href="/Campaign">Campaign</a></li>
                      <li class="breadcrumb-item text-sm active" aria-current="page" style={{color:'#23b347'}}>Analystics</li>
                    </ol>
                  </nav>
                </div>
          <div className={innerClasses}>&nbsp;
          
           <SectionHeader data={sectionHeader} className="center-content" />

                   <Accordion >
            <AccordionItem >
                <AccordionItemHeading>
                <AccordionItemButton style={{backgroundColor:"#f9faf9"}}>
                <b style={{color:'#23b347'}}>Total Revenue(TR)</b>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <p style={{color:'grey'}}>
                            Additionally,the SEC limits the maximum amount you can invest
                            across all startup using the Reg CF legel framework based on your
                            finalcial situation.
                            </p>
                            <div className="row">
                            <div className="col-md-9">  
                            <h6><b>Data (upload the proper chart with genuine data presented in it)<code style={{color:"red"}}>*</code></b></h6></div>
                            <div className="col-md-3"> <Button tag="a" color="Secondary" style={{backgroundColor:"#2ECC71 ", borderRadius:8,color:"white"}} wideMobile href="/Analystics_Chart">
                                    Upload a Picture
                            </Button></div>
                            </div>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton  style={{backgroundColor:"#f9faf9"}}>
                    <b>Growth Profit Amrgin(%)</b>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <p>
                            Additionally,the SEC limits the maximum amount you can invest
                            across all startup using the Reg CF legel framework based on your
                            finalcial situation.
                            </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton style={{backgroundColor:"#f9faf9"}}>
                    <b>Monthly Recurring Revenue (MRR)</b>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                      Additionally,the SEC limits the maximum amount you can invest
                      across all startup using the Reg CF legel framework based on your
                      finalcial situation.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                <AccordionItemButton style={{backgroundColor:"#f9faf9"}}>
                       <b>Customer Churn Rate (%)</b> 
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                      Additionally,the SEC limits the maximum amount you can invest
                      across all startup using the Reg CF legel framework based on your
                      finalcial situation.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem >
                        <AccordionItemHeading >
                        <AccordionItemButton style={{backgroundColor:"#f9faf9"}}>
                        <b>Monthly Active Users (MAU)</b>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                            Additionally,the SEC limits the maximum amount you can invest
                            across all startup using the Reg CF legel framework based on your
                            finalcial situation.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem >
                        <AccordionItemHeading >
                        <AccordionItemButton style={{backgroundColor:"#f9faf9"}}>
                       <b> LTV: CAC Ratio</b>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                            Additionally,the SEC limits the maximum amount you can invest
                            across all startup using the Reg CF legel framework based on your
                            finalcial situation.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
         </Accordion>
        </div>
       
      </div>
    </section>
);
}

Analystics .propTypes = propTypes;
Analystics .defaultProps = defaultProps;

export default Analystics ;