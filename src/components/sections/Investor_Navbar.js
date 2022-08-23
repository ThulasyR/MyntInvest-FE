import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import {NavLink} from "react-router-dom";

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Investor_Navbar = ({
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

 

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container-sm">
      <div className={tilesClasses} align="center">
          <div className="hero-content">
          <nav className="navbar navbar-expand-sm bg-Secondary navbar-white " >
    <div className="container-fluid">
      <ul className="navbar-nav">
        
       <li className="nav-item">
          <NavLink to="/Investors" className="nav-link">Startups</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/Crypto" className="nav-link" >Crypto</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/Realestate" className="nav-link" >Real Estate</NavLink>
        </li>
       </ul>
    </div>
  </nav>
          </div>
         </div>
      </div>
    </section>
  );
}

Investor_Navbar.propTypes = propTypes;
Investor_Navbar.defaultProps = defaultProps;

export default Investor_Navbar;