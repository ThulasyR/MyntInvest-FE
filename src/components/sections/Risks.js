import React from "react";

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';

import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';

import Image from "../elements/Image";
const propTypes = {
    ...SectionSplitProps.types
  }
  
  const defaultProps = {
    ...SectionSplitProps.defaults
  }
  
  const Risks= ({
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
            <h2 align="center">What are <span style={{color:'#23b347'}}>the risks? </span></h2>
          <div className="col-md-12">
            <h3 align="left">What is M-SAFE?</h3>
            <p><b>M-SAFE: A complete guide</b></p>
            <p>The companies that raise on MXi set the terms for their agreement with investors.</p>
        </div>
        
        <div className="col-md-12">
            <h3>What are you buying?</h3>
            <ul>
                <li>Most firms on MxI sell equity in the form of a convertible note, however, depending on the campaign type, you can also invest in debt or SAFEs.</li>
                <li>Debt is, in essence, a loan. You, as the investor, buy promissory notes and take on the role of lender. The corporation must then repay your loan with interest within a defined time frame</li>
                <li>Convertible notes are debt instruments that can be converted into stock. You purchase debt from the company and receive interest on it until the loan reaches its maturity date when it either converts to equity or is paid back to you in cash.</li>
                <li>Convertible notes are a type of SAFE. Because SAFEs have no provisions for a cash payout, you, as an investor, are reliant on the SAFE converting to equity at some point in the future, which may or may not happen depending on whether the firm is acquitted or goes public. SAFE was created to be the financial tool you need without the headaches of general meetings or completing unneeded paperwork. It has precise information rights and easier exits, and it appreciates in value in the same way as stock shares do. If the startup is liquidated, a SAFE holder has priority over ordinary shareholders in terms of repayment.</li>           
            </ul>
        </div>

        <div className="col-md-12">
            <h3>What exactly is M-SAFE?</h3>
            <p>MXi's straightforward equity arrangement. An M-SAFE is a partnership agreement between investors and companies seeking funding. Individuals make investments with the hopes of earning a profit, whether in the form of company equity or cash distribution. The M-SAFE is an adapted version of the SAFE, a financial instrument invented by Y Combinator and widely utilized by angels and venture capitalists investing in startups all around the world. It's meant to function for investment campaigns with hundreds or even thousands of participants, and it's employed in various forms by several industry heavyweights.</p>
        </div>

        <div className="col-md-12">
            <h3>What is the mechanism behind it?</h3>
            <p>Investors that use the M-SAFE receive a financial stake in the company but do not become equity holders right once. At the time of issue, it takes the legal form of Compulsorily Convertible Debentures ('CCDs'). When 'activation events,' such as an acquisition or an IPO, occur, these CCDs are converted into stock.</p>
            <p>Risk Note: Activation events are not guaranteed. Investors should see them only as possibilities.</p>
        </div>

        <div className="col-md-12">
            <h3>How much money can I make?</h3>
            <p>Your return is determined by the size of your investment, the company's exit valuation (how much it is worth at the moment), and the M-terms. SAFE's Investors put their money in at a very early stage, so their share is only affected by future occurrences.</p>
            <p>Risk Note: If an activation event does not happen, you may never get a return on your investment.</p>
        </div>

        <div className="col-md-12">
            <h3>Terms of the M-SAFE</h3>
            <p>Overview On trigger events such as a 100 percent secondary sale of CCDs, a buyback, or an IPO, this agreement issues compulsorily convertible debentures that convert into securities issued in future fundraising, such as equity shares or compulsorily convertible preference shares.</p>
        </div>

        <div className="col-md-12">
            <ul>
            <li><b>Instrument</b>- Compulsorily Convertible Debentures (CCDs)</li>
            <p><b>Conversion Events</b>- 100% secondary sale, Buyback, Acquisition, IPO</p>
            <p><b>Cap Table</b></p>
            <p><b>1.    Before Next Funding Round:</b> No Line on the cap table</p>
            <p><b>2.	Post Next Funding Round: </b>No Line on the cap table</p>

            <li><b>Voting Rights</b></li>
            <p><b>1.    Before Next Funding Round:</b>No voting rights</p>
            <p><b>2.	Post Next Funding Round: </b>No voting rights</p>

            <li><b>Variants</b></li>
            <p>1.	With Discount Cap</p>
            <p>2.	With Valuation Floor and/or Cap</p>
            <p>3.	With Discount Cap + Valuation Cap</p>
            <p>4.	Fixed Valuation</p>

            <li><b>Financial Instruments we offer</b></li>
            <p><b>1.	CCD - </b>Compulsorily Convertible Debentures are a type of hybrid security that has the same financial rights as stock but no voting rights. CCDs don’t show up on the cap table.</p>
            <p><b>2.	CCPS - </b>Compulsorily Convertible Preference Shares (CCPS) are hybrid securities with financial rights similar to equity shares but limited voting rights. On the cap table, you'll find CCPS.</p>
            <p><b>3.	NCD - </b>Non Convertible Debentures (NCDs) are secured debt securities that pay a fixed rate of interest on a regular basis and require repayment at the end of the term. NCDs are excluded from the cap table.</p>
            <p><b>4.	CSOP - </b>Options in the CSOP - Community Stock Option Pool - have the same financial rights as equity shares but no voting rights. CSOPs are the quickest to perform and do not appear on the cap table.</p>
           
           <li><b>Why M-SAFE?</b></li>
            <p>It’s simple, faster, and cheaper at the same time.</p>
            <p><b>1.	Efficient:</b> M-SAFE is one-document security that eliminates the need to negotiate many agreements, saving money on legal fees and lowering the time spent discussing investment terms. Typically, startups just have to negotiate one item: the valuation cap or discount cap.</p>
            <p><b>2.	Safety First:</b> First and foremost, M-SAFE holders have priority over ordinary shareholders when it comes to repayment. A T-SAFE holder is paid before any other stakeholder if the startup is liquidated.</p>
            <p><b>3.	Cheaper: </b> The legal costs are a bare minimum.</p>
            <p><b>4.	Benefits of Equity without any hassles:</b> M-SAFE is a financial instrument that eliminates the inconveniences of attending general meetings and signing superfluous paperwork. It has precise information rights and easier exits, and it appreciates in value in the same way as stock shares do.</p>
            </ul>
        </div>
        
        <div className="row">
            <h2 align="center">What are<span style={{color:'#23b347'}}> MXi’s Fees?</span></h2>
           <div className="col-md-6" align="center">
            <Image
            src={require('./../../assets/images/Fees1.png')}
            alt="Features tile icon 05"
            width={500}
            height={500} />&nbsp;
            </div>

            <div className="col-md-6" align="center">
            <Image
            src={require('./../../assets/images/Fees2.png')}
            alt="Features tile icon 05"
            width={500}
            height={500} />&nbsp;
            </div>
        </div>

       
      </div>
    </section>
);
}

Risks.propTypes = propTypes;
Risks.defaultProps = defaultProps;

export default Risks;