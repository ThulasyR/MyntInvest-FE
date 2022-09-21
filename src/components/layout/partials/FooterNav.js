import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Button from '../../elements/Button';


const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <>
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset d-flex"  style={{justifyContent:"left"}}>
        
        <div className="justify-content-left">
        <li>
          <p to="#0"  className="footerHeader" style={{paddingLeft:10}}><b>INVESTORS </b></p>
          <Link to="/Deals" className='para'>Deals</Link>&nbsp;
          <Link to="/Learn" className='para'>MXi Cafe </Link>&nbsp;
          <Link to="/How_It_Works" className='para'>How it works?</Link>
        </li></div>&nbsp;

        <div style={{paddingLeft:15,paddingTop:20}} align="left"><li>
        <p to="#0"  className="footerHeader" style={{paddingLeft:10}}><b>STARTUPS </b></p>
          <Link to="/Login" className='para'>Login</Link>&nbsp;
          <Link to="/Raise" className='para'>Raise</Link>&nbsp;
          <Link to="/FAQ" className='para'>FAQs</Link>&nbsp;
        </li></div>&nbsp;

        <div style={{paddingLeft:28,paddingBottom:5}} align="left"><li>
        <p to="#0" className="footerHeader" style={{paddingLeft:10}}><b>LEGAL/CONTACT</b></p>
          <Link to="/Risks" className='para'>Risks Of Investment</Link>&nbsp;
          <Link to="/Privacy_Policy" className='para'>Privacy Policy </Link>&nbsp;
          <Link to="/Terms_Condition" className='para'>Terms & Conditions  </Link>
        </li></div>&nbsp;  
      </ul>&nbsp;
      {/* <ul className="list-reset" > 
    <p>All trademarks and logos or registered trademarks and logos found on this Site or 
mentioned herein belong to their respective owners and are solely being used for
informational purposes.</p> 
<p>Information provided herein has been gathered from public sources. 
Tyke Technologies Pvt Ltd disclaims any and all responsibility in connection with 
veracity of this data. 
Information presented on this website is for educational purposes only and should 
not be treated as legal, financial , or any other form of advice. Tyke Technologies 
Pvt Ltd is not liable for financial or any other form of loss incurred by the user 
or any affiliated party on the basis of information provided herein.</p>
<p>Tyke Technologies Pvt Ltd is neither a stock exchange nor does it intend to get 
recognized as a stock exchange under the Securities Contracts Regulation Act, 1956. 
Tyke Technologies Pvt Ltd is not authorized by the capital markets regulator to solicit 
investments. The securities traded on these platforms are not traded on any regulated 
exchange. Tyke also provides that it does not facilitate any online or offline buying, 
selling, or trading of securities.</p>
<p>This Site will be updated on a regular basis.</p>
</ul> */}
    </nav>
    
</>
    
  );
}

export default FooterNav;