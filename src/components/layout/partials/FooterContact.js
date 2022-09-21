import React from 'react';
import classNames from 'classnames';
import $ from "jquery";
import Moment from 'moment';


const current = new Date();
const date = `${current.getFullYear()}`;//mysql insert date format
const formatDate = Moment(date).format('YYYY')//2002-12-09

const FooterContact = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-social',
    className
  );
  return (
    <div
      {...props}
      className={classes}
    >
       <div className="container text-md-start  "> 
      <div className="row "> 
        <div className="col"> 
          {/* <h6 className="text-uppercase fw-bold mb-4">
          Contact us:
          </h6> */}
          <br/>
          <p className="para b">
          Contact us: <br/>
           support@myntinvest.com  < br/>
           +91-0000000000 </p> 
          <p  className="para b">MyntInvest Pvt Ltd<br/>
          {date} All Rights Reserved.
          </p>
        </div>
        </div>
        </div>
    </div>
  );
}

export default FooterContact;