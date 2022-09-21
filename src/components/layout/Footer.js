import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Logo from './partials/Logo';
import FooterNav from './partials/FooterNav';
import FooterSocial from './partials/FooterSocial';
import FooterContact from './partials/FooterContact';
import Paragraph from './partials/Paragraph';
import footerLogo from '../../assets/images/MyntInvest-f.png'

const propTypes = {
  topOuterDivider: PropTypes.bool,
  topDivider: PropTypes.bool
}

const defaultProps = {
  topOuterDivider: false,
  topDivider: false
}

const Footer = ({
  className,
  topOuterDivider,
  topDivider,
  ...props
}) => {

  const classes = classNames(
    'site-footer center-content-mobile','footerbg',
    topOuterDivider && 'has-top-divider',
    className
  );

  return (
    <footer
      {...props}
      className={classes}
    >
      <div className="container">
        <div className={
          classNames(
            'site-footer-inner',
            topDivider && 'has-top-divider'
          )}>
            <div className="footer-top space-between text-xxs"  >
          <div style={{backgroundColor:""}}>
            <Logo />
            <Paragraph/>
            <FooterSocial/> 
            <FooterContact/> 
            </div> 
            <div  style={{backgroundColor:""}}>
            <FooterNav /> 
          </div>
           
          
          </div>
        </div>
        <div className='col-md-12 row d-flex'>
              <p className="para justify-content-center text-center">
                <span className="spanbg">New</span>&nbsp;<span className='parabold'>Refer a startup, get $2,500</span></p>
          </div>
      </div>
    </footer>
  );
}

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer;