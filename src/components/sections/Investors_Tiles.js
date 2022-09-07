import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import Button from '../elements/Button';
import ButtonGroup from '../elements/ButtonGroup';
const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const Investors_Tiles = ({
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
    invertColor && 'invert-color',' bg-white',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: '',
    paragraph: '',
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container"> 
      <div className="row d-flex justify-content-center investorpage">
    <div className="card border-0 mt-5"  >
  <div className="card-body  ">
    <div className="row">
<div  className="col-md-6">
<h1 class="card-title">Open Deals</h1>
<p class="card-text font20">Come on board with our angel investors and their community. Start investing with as little as ₹10,000 and earn a part of the next big thing.
</p>
<p class="font16">View Live Deals to start investing today
</p>
<p>
<a href="#"><button type="button" class="btn btn-light text-success btn-sm font14" >
  <b>VIEW ALL</b></button></a>
               
  </p>

</div>
<div  className="col-md-6 investWid">
 
<div class="card profile-card-4 w-100" >
  {/* <img src="..." class="card-img-top" alt="..."/> */}
  <marquee  direction="up"  loop="true" scrollamount="10">
  <div class="card-body ">

  <div class="d-flex align-items-center">
  <div class="flex-shrink-0">
    <img src={require('./../../assets/images/1.png')} alt="..."/>
  </div>
  <div class="flex-grow-1 ms-3" >
    <h5 style={{lineHeight: "0px"}}>Galaxy Card</h5>
     <p className="para">The instant Digital Card for Bharat</p>
  </div>
  
  </div>
{/*  card body */}

     
      

<div class=" flex-shrink-0"> 
    <div  className="row"> 
    <table className="table table-borderless table-hover table-sm" border="0">
      <tbody>
        <tr className="border-0 para"><td colspan="2">&nbsp;</td>
        <td className="text-muted">Raised</td><td className="text-muted">Closes in</td></tr>
        <tr className="border-0 para"><td><span className="btn btn-sm bg-light font12"> CREDIT CARDS </span></td>
        <td><span className="btn btn-sm bg-light font12"> FINTECH </span></td>
        <td><b>36.82%</b></td>
        <td><b>14 days</b></td></tr>
        </tbody>
      </table>  
    </div>
    </div>
  </div>
{/* card end */}

<hr/>

<div class="card-body ">
  <div class="d-flex align-items-center">
  <div class="flex-shrink-0">
    <img src={require('./../../assets/images/2.png')} alt="..."/>
  </div>
  <div class="flex-grow-1 ms-3" >
    <h5 style={{lineHeight: "0px"}}>nStore</h5>
     <p className="para">Connecting Communities through Commerce</p>
  </div>
  
  </div>
{/*  card body */}

     
      

<div class=" flex-shrink-0"> 
    <div  className="row"> 
    <table className="table table-borderless table-hover table-sm" border="0">
      <tbody>
        <tr className="border-0 para"><td colspan="2">&nbsp;</td>
        <td className="text-muted">Raised</td><td className="text-muted">Closes in</td></tr>
        <tr className="border-0 para">
          <td><span className="btn btn-sm bg-light font12">RETAIL TECHNOLOGIES</span></td>
        <td><span className="btn btn-sm bg-light font12"> COMMUNITIES </span></td>
        <td><b>22.12%</b></td>
        <td><b>8 days</b></td></tr>
        </tbody>
      </table>  
    </div>
    </div>
  </div>
{/* card end */}
</marquee>
<hr/>

<div className="row col-md-12 d-flex justify-content-center m-2">
<a href="#" class="card-link text-center  mb-2 font14">View All&nbsp;<i className="fa fa-arrow-right"></i></a>
  </div>

 


</div> 
</div>










</div>
</div>
</div>
</div>




           
      </div>
    </section>
  );
}

Investors_Tiles.propTypes = propTypes;
Investors_Tiles.defaultProps = defaultProps;

export default Investors_Tiles;