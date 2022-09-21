import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { NavLink,Link } from 'react-router-dom';
import Logo from './partials/Logo';

const propTypes = {
  navPosition: PropTypes.string,
  hideNav: PropTypes.bool,
  hideSignin: PropTypes.bool,
  bottomOuterDivider: PropTypes.bool,
  bottomDivider: PropTypes.bool
}

const defaultProps = {
  navPosition: '',
  hideNav: false,
  hideSignin: false,
  bottomOuterDivider: false,
  bottomDivider: false
}

const Header = ({
  className,
  navPosition,
  hideNav,
  hideSignin,
  bottomOuterDivider,
  bottomDivider,
  ...props
}) => {

  const [isActive, setIsactive] = useState(false);

  const nav = useRef(null);
  const hamburger = useRef(null);

  useEffect(() => {
    isActive && openMenu();
    document.addEventListener('keydown', keyPress);
    document.addEventListener('click', clickOutside);
    return () => {
      document.removeEventListener('keydown', keyPress);
      document.removeEventListener('click', clickOutside);
      closeMenu();
    };
  });  

  const openMenu = () => {
    document.body.classList.add('off-nav-is-active');
    nav.current.style.maxHeight = nav.current.scrollHeight + 'px';
    setIsactive(true);
  }

  const closeMenu = () => {
    document.body.classList.remove('off-nav-is-active');
    nav.current && (nav.current.style.maxHeight = null);
    setIsactive(false);
  }

  const keyPress = (e) => {
    isActive && e.keyCode === 27 && closeMenu();
  }

  const clickOutside = (e) => {
    if (!nav.current) return
    if (!isActive || nav.current.contains(e.target) || e.target === hamburger.current) return;
    closeMenu();
  }  

  const classes = classNames(
    'fixed-top','site-header',
    bottomOuterDivider && 'has-bottom-divider',
    className
  );

  return (
    <header
      {...props}
      className={classes} >
      <div className="container"  >
        <div className={
          classNames(
            'site-header-inner',
            bottomDivider && 'has-bottom-divider'
          )}>
          <Logo />
          {!hideNav &&
            <>
              <button
                ref={hamburger}
                className="header-nav-toggle"
                onClick={isActive ? closeMenu : openMenu}
              >
                <span className="screen-reader">Menu</span>
                <span className="hamburger">
                  <span className="hamburger-inner"></span>
                </span>
              </button>
              <nav
                ref={nav}
                className={
                  classNames(
                    'header-nav',
                    isActive && 'is-active'
                  )}>
                <div className="header-nav-inner">
                <ul className={
                    classNames(
                      'list-reset text-xs',
                      navPosition && `header-nav-${navPosition}`
                    )}>
                    <li>
                      <NavLink to="/Deals" className="headermenu reload">Deals</NavLink>
                    </li>
                  </ul>
                  <ul className={
                    classNames(
                      'list-reset text-xs',
                      navPosition && `header-nav-${navPosition}`
                    )}>
                    <li>
                      <NavLink to="/Investors" onClick={closeMenu} className="headermenu reload">Investors</NavLink>
                    </li>
                  </ul>
                  <ul className={
                    classNames(
                      'list-reset text-xs',
                      navPosition && `header-nav-${navPosition}`
                    )}>
                    <li>
                      <NavLink to="/Founders" onClick={closeMenu} className="headermenu reload">Founders</NavLink>
                    </li>
                  </ul>
                  <ul className={
                    classNames(
                      'list-reset text-xs',
                      navPosition && `header-nav-${navPosition}`
                    )}>
                    <li>
                      <NavLink to="/Learn" onClick={closeMenu} className="headermenu reload">Learn</NavLink>
                    </li>
                  </ul>
                  <ul className={
                    classNames(
                      'list-reset text-xs',
                      navPosition && `header-nav-${navPosition}`
                    )}>
                    <li>
                      <NavLink to="/Private_Deals" onClick={closeMenu} className="headermenu reload">Private Deals</NavLink>
                    </li>
                  </ul>
                  
                  <ul className={
                    classNames(
                      'list-reset text-xs','profile_header',
                      navPosition && `header-nav-${navPosition}`
                    )}>
                    <li>
                      <NavLink to="/Login" onClick={closeMenu}>
                        <button className="btn btn-default btn-sm headermenu " >
                          Log in</button></NavLink>
                    </li>
                  </ul>
                  {!hideSignin &&
                    <ul
                      className="list-reset header-nav-right profile_header"
                    >
                      <li>
                        <NavLink to="/Signup"  onClick={closeMenu}>
                          <button className="btn btn-success btn-sm headermenu text-white" >
                          Sign up</button> 
                        </NavLink>
                      </li>
                    </ul>}
                    

                    </div> 
              </nav>
              
            <div class="dropdown profile_header2">
    <button type="button" class="btn btn-default btn-sm dropdown-toggle" data-bs-toggle="dropdown">
      <i className='fa fa-user userbgcircle'></i>&nbsp;<span id="profilename"></span>
    </button>
    <ul class="dropdown-menu">
    <li><a class="dropdown-item text-center" id="controlpanel" >
        <button type="button" className=' btn btn-dark btn-sm'>Control Panel</button></a></li>
      <li className='p-2'><table className='table  table-hover  table-stripped' border="0">
        <tr><td className='parabold' >User Name:</td><td><span className='parabold' id="profileuname"></span></td></tr>
        <tr><td className='parabold' >Role:</td><td><span className='parabold'  id="profilerole"></span></td></tr>  
        </table>
        </li> 
        
      <li align="center"><a class="dropdown-item logout" >
        <button type="button" className=' btn btn-success btn-sm'>Logout</button></a></li>
    </ul>
  </div>  


  <input type="hidden"  id="mtuser_id"/>
  <input type="hidden"  id="mtuser_role"/>
  <input type="hidden"  id="mtuser_module"/>
  <input type="hidden"  id="mtuser_email"/>
  <input type="hidden"  id="mtuser_fname"/>
  <input type="hidden"  id="user_mobileno"/>
  <input type="hidden"  id="campUniqueId"/>

  
            </>}
        </div>
      </div>
    </header>
  );
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
