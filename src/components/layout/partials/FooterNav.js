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
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset" >
        
        <div style={{paddingLeft:15}} align="left"><li>
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
    </nav>
  );
}

export default FooterNav;