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
import Image from "../elements/Image";
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import { Card } from "@material-ui/core";
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
        <div className="row">
               <div className="row" >
                <Breadcrumbs separator=">" aria-label="breadcrumb">
                    <Link
                    color="inherit"
                    href="/Investors_Dashboard"
                    style={{fontSize:12}}>               
                    Back To Dashboard
                    </Link>            
                </Breadcrumbs>

                
              </div>              
              </div>
          <div className={innerClasses}>&nbsp;
          <div>
                <strong style={{fontSize:25}}>Analytics</strong>
               </div>
                <div className="row">
                <label>
                    <select style={{width: 350,height: 40,fontSize:12}}>
                        <option value="grapefruit">Deciwood</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>
                    </label>
                    </div>&nbsp;
                    
           <SectionHeader data={sectionHeader} className="center-content" />
           <div className="row">

           <Image src={require('./../../assets/images/t2.jpg')}alt="Features tile icon 01" style={{width: 100,height: 100,borderRadius: 150 / 2,overflow: "hidden",borderWidth: 3,borderColor: "red"}} className="rounded-circle" /><p style={{fontSize:10,padding:23}}>Deciwood</p>
           
                     <Card style={{backgroundColor:"#E9F7EF",width:350,height:150,borderRadius:15,marginTop:10}}>
                        <div className="row">
                             <div className="col-md-12" align="left" style={{paddingTop:18}}> <p>Total Investment value</p>
                                <strong style={{color:"black"}}>$21.,500.00</strong>
                              </div>          
                         
                        </div>
                        </Card>&nbsp;&nbsp;&nbsp;

                        
                        <Card style={{backgroundColor:"#FDF2E9",width:360,height:150,borderRadius:15,marginTop:10}}>
                        <div className="row"><div className="col-md-12" align="left" style={{paddingTop:18}}> <p>Startups Invested</p>
                        <strong style={{color:"black"}}>25</strong></div>          
                        </div>
                        </Card>&nbsp;
              </div>&nbsp;
                   <Accordion >
            <AccordionItem >
                <AccordionItemHeading>
                <AccordionItemButton>
                Total Revenue(TR)
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <p >
                            Additionally,the SEC limits the maximum amount you can invest
                            across all startup using the Reg CF legel framework based on your
                            finalcial situation.
                            </p>
                           
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton  >
                    Growth Profit Amrgin(%)
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
                    <AccordionItemButton >
                    Monthly Recurring Revenue (MRR)
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
                <AccordionItemButton>
                      Customer Churn Rate (%)
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
                        <AccordionItemButton >
                      Monthly Active Users (MAU)
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
                        <AccordionItemButton >
                     LTV: CAC Ratio
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