import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Image from '../../elements/Image';
import footerLogo from '../../../assets/images/mynt1.png';
const Logo = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'brand',
    className
  );

  return (
    <div
     className='container'
    >
      <h1 className="m-0">
        <Link to="/">
         <img src={footerLogo} style={{maxWidth: "150px"}}/> 
        </Link>
      </h1>
    </div>
  );
}

export default Logo;