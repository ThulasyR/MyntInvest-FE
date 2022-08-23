import React, {Component} from "react";
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
import Link from "@material-ui/core/Link";
import Image from "../elements/Image";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import '../Css/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Box,Card} from "@material-ui/core";

  
const Investors_Analytics = ({
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

    
    const options = [
        'one', 'two', 'three'
      ];
    
 
const tilesClasses = classNames(
'tiles-wrap',
pushLeft && 'push-left'
);return (

       <body>

            <div className="row">
               <div className="col-md-1"></div>
               <div className="col-md-11">
               <div className="m-5 p-4">
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
              
              
              <br/>        
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
              
                <div className="row">
                    <div className="col-md-2">
                     <Image   src={require('./../../assets/images/t2.jpg')}alt="Features tile icon 01" style={{width: 90,height: 90,borderRadius: 150 / 2,overflow: "hidden",borderWidth: 3,borderColor: "red"}} className="rounded-circle" /><p style={{fontSize:10,padding:23}}>Deciwood</p>
                    </div>
                    <div className="col-md-5">
                     <Box>
                          <Card  style={{backgroundColor:"#E9F7EF ",width:360,height:120}}>
                            <p style={{fontSize:12,padding:15}}>Total Investment value</p>
                            <strong style={{fontSize:25,padding:15,}}>$21.,500.00</strong>
                            </Card>
                         </Box>
                    
                    </div>
                    <div className="col-md-5">
                    <Box>
                          <Card   style={{backgroundColor:"#FDF2E9",width:360,height:120,alignItems:''}}>
                            <p style={{fontSize:12,padding:15}}>Startups Invested</p>
                            <strong style={{fontSize:25,padding:15,marginTop:-40}}>25</strong>
                            </Card>
                        </Box>    
                    </div>

                </div>

                <br/>                
                <div className="col-md-12">
                   
                 <Accordion  >
            <AccordionItem >
                <AccordionItemHeading >
                <AccordionItemButton style={{backgroundColor:"#f9faf9"}}>
                Total Revenue(TR)
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

      
            <Accordion  >
            <AccordionItem >
                <AccordionItemHeading >
                <AccordionItemButton style={{backgroundColor:"#f9faf9"}}>
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
            </Accordion>

                  
            <Accordion  >
            <AccordionItem >
                <AccordionItemHeading >
                <AccordionItemButton style={{backgroundColor:"#f9faf9"}}>
                Total Revenue(TR)
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

            <Accordion  >
            <AccordionItem >
                <AccordionItemHeading >
                <AccordionItemButton style={{backgroundColor:"#f9faf9"}}>
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
            </Accordion>


            <Accordion  >
            <AccordionItem >
                <AccordionItemHeading >
                <AccordionItemButton style={{backgroundColor:"#f9faf9"}}>
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
            </Accordion>


            <Accordion  >
            <AccordionItem >
                <AccordionItemHeading >
                <AccordionItemButton style={{backgroundColor:"#f9faf9"}}>
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
            </Accordion>

            <Accordion  >
            <AccordionItem >
                <AccordionItemHeading >
                <AccordionItemButton style={{backgroundColor:"#f9faf9"}}>
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
            </div>
            </div>
                     


        
        </body>
    );  
};
export default Investors_Analytics;        