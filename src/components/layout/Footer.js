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
    <>
    <footer class="footer-section">
        <div class="container">
            {/* <div class="footer-cta pt-5 pb-5">
                <div class="row">
                    <div class="col-xl-4 col-md-4 mb-30">
                        <div class="single-cta">
                            <i class="fas fa-map-marker-alt"></i>
                            <div class="cta-text">
                                <h4>Find us</h4>
                                <span>1010 Avenue, sw 54321, chandigarh</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-md-4 mb-30">
                        <div class="single-cta">
                            <i class="fas fa-phone"></i>
                            <div class="cta-text">
                                <h4>Call us</h4>
                                <span>9876543210 0</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-md-4 mb-30">
                        <div class="single-cta">
                            <i class="far fa-envelope-open"></i>
                            <div class="cta-text">
                                <h4>Mail us</h4>
                                <span>mail@info.com</span>
                            </div>
                        </div>
                    </div>
                </div>
              </div> */}
            <div class="footer-content pt-5 pb-5">
                <div class="row">
                    <div class="col-xl-8 col-lg-8 mb-50">
                        <div class="footer-widget">
                          <div  class="row">
                                <div class="col-xl-3 col-lg-3 col-md-8 mb-30">
                                  <div class="footer-widget">
                                    <div class="footer-widget-heading">
                                        <h3>Investors</h3>
                                    </div>
                                    <ul>
                                        <li><a href="#">Deals</a></li>
                                        <li><a href="#">How it works</a></li>
                                        <li><a href="#">FAQ's</a></li> 
                                    </ul>
                                  </div>
                              </div>
                              <div class="col-xl-3 col-lg-3 col-md-8 mb-30">
                                  <div class="footer-widget">
                                    <div class="footer-widget-heading">
                                        <h3>Founders</h3>
                                    </div>
                                    <ul>
                                        <li><a href="#">Log in</a></li>
                                        <li><a href="#">Raise</a></li>
                                        <li><a href="#">&nbsp;</a></li> 
                                    </ul>
                                  </div>
                              </div>
                              <div class="col-xl-6 col-lg-6 col-md-8 mb-30">
                                  <div class="footer-widget">
                                    <div class="footer-widget-heading">
                                        <h3>Fine Print</h3>
                                    </div>
                                    <ul>
                                        <li><a href="#">Risk of Investment</a></li>
                                        <li><a href="#">Privacy Policy</a></li>
                                        <li><a href="#">Terms and Conditions</a></li> 
                                    </ul>
                                  </div>
                              </div>
                    </div>
                            <div class="footer-text mt-3">
                            <p class="font14 para b">All trademarks and logos or registered trademarks and logos found on this Site or mentioned
herein belong to their respective owners and are solely being used for informational purposes.</p>


<p  class="font14 para b">Information provided herein has been gathered from public sources. Mynt Technologies Pvt
Ltd disclaims any and all responsibility in connection with veracity of this data. Information
presented on this website is for educational purposes only and should not be treated as legal,
financial , or any other form of advice.Mynt Technologies Pvt Ltd is not liable for financial or
any other form of loss incurred by the user or any affiliated party on the basis of information
provided herein.</p>

<p class="font14 para b">Humanity InfoTek Pvt Ltd is neither a stock exchange nor does it intend to get recognized as a
stock exchange under the Securities Contracts Regulation Act, 1956. Mynt Technologies Pvt Ltd
is not authorized by the capital markets regulator to solicit investments. The securities traded
on these platforms are not traded on any regulated exchange. Mynt also provides that it does
not facilitate any online or offline buying, selling, or trading of securities.
This Site will be updated on a regular basis.</p>

                            </div>
                            {/* <div class="footer-social-icon">
                                <span>Follow us</span>
                                <a href="#"><i class="fab fa-facebook-f facebook-bg"></i></a>
                                <a href="#"><i class="fab fa-twitter twitter-bg"></i></a>
                                <a href="#"><i class="fab fa-google-plus-g google-bg"></i></a>
                            </div> */}
                        </div>
                    </div>
                    {/* <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
                        <div class="footer-widget">
                            <div class="footer-widget-heading">
                                <h3>Useful Links</h3>
                            </div>
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">about</a></li>
                                <li><a href="#">services</a></li>
                                <li><a href="#">portfolio</a></li>
                                <li><a href="#">Contact</a></li>
                                <li><a href="#">About us</a></li>
                                <li><a href="#">Our Services</a></li>
                                <li><a href="#">Expert Team</a></li>
                                <li><a href="#">Contact us</a></li>
                                <li><a href="#">Latest News</a></li>
                            </ul>
                        </div>
                    </div> */}
                    <div class="col-xl-4 col-lg-4 col-md-6 mb-50  text-end">
                    <div class="footer-logo pt-2">
                      <div style={{float:"right"}}>
                                <a href="index.html" ><Logo /></a>
                            
                                </div>
                            </div>
                        <div class="footer-widget  text-end">  
                            <div class="footer-widget-heading">
                                <p>Startup Investing, Now Simplified!</p>
                                {/* <h3>Subscribe</h3> */}
                            </div>
                            <div class="footer-social-icon">
                                {/* <span>Follow us</span> */}
                                <a href="#"><i class="fa fa-facebook bg-dark"></i></a>
                                <a href="#"><i class="fa fa-twitter  bg-dark"></i></a>
                                <a href="#"><i class="fa fa-google-plus  bg-dark"></i></a>
                            </div>

                            <div class="footer-social-icon1 pt-5">
                                <span>Contact us</span>
                                <a href="#" class="btn btn-default whatsapp" ></a>
                                <a href="#" class="btn btn-default envelope" ></a>
                                 
                            </div>


                            <div class="footer-text text-end">
                                <span class="para font14">support@myntinvest.com</span><br/>
                                <span class="para font14">+91-876 974 0854</span><br/>
                                <span class="para font14">5686B, Phase - 4, Connaught Place</span><br/>
                                <span class="para font14">Delhi - 302012</span>
                            </div>
                            <div class="footer-widget-heading pt-5">
                                <span class="para font14 b">Humanity InfoTek Pvt Ltd</span><br/>
                                <span class="para font14 b">Copyright ©  All rights reserved | Ver : 0.1  </span> 
                            </div>
                         </div>
                     </div>
                  </div>
             </div>
          </div>
           {/* <div class="copyright-area">
            <div class="container">
                <div class="row"> */}
                    {/* <div class="col-xl-6 col-lg-6 text-center text-lg-left">
                        <div class="copyright-text">
                            <p>Copyright &copy; 2018, All Right Reserved <a href="https://codepen.io/anupkumar92/">Anup</a></p>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                        <div class="footer-menu">
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Terms</a></li>
                                <li><a href="#">Privacy</a></li>
                                <li><a href="#">Policy</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                    </div> */}
                {/* </div>
            </div>
        </div>  */}
    </footer>
    </>
  );
}
 

export default Footer;