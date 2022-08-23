import React from "react";
import Button from "../elements/Button";
import ButtonGroup from "../elements/ButtonGroup";
import Image from "../elements/Image";
import { NavLink } from "react-router-dom";
import classNames from "classnames";



const Deals_Review = ({
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
    return(
      
        <div className="row text-center">
            <div className={tilesClasses} align="center">
          <div className="hero-content">
          <nav className="navbar navbar-expand-sm bg-Secondary navbar-white " >
              <div className="container-fluid" >
                <ul className="navbar-nav">
                  
                <li className="nav-item">
                    <NavLink to="/Pitch" className="nav-link" >Pitch</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/Deals_Discussion" className="nav-link" >Discussion</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/Reviews" className="nav-link" style={{color:" #2ECC71"}} >Reviews
                    </NavLink>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
         </div>

                
                <div className="row">
                <div className="col-md-1">
                </div>
                <div className="col-md-7">
                <div className="row" style={{paddingLeft:30}}>
                  <div className="col-md-2" style={{marginTop:20}}>    <Image
                      src={require('./../../assets/images/image (1).jpg')}
                      alt="Features tile icon 01"
                      width={80}
                      height={80}
                    /> </div>
                  <div className="col-md-3">
                <h5 className="alert-alert" align="Left">Gerald Becker</h5>
                 <div className="features-tiles-item-image mb-16" style={{backgroundColor:"#f9faf9",paddingRight:500}}>
                  <Image
                  src={require('./../../assets/images/Gold.png')}
                  alt="Gold.png"
                  width={30}
                  height={30}
                  /><span><b>4.5</b></span> </div></div>
               
                <p align="left">Recommendation of Jegg Brown in Day One newsletter.The concept is so good that it's obviousbto me that this is a very good investment.Go Team!!</p>
                </div>     
                </div>
                <div className="col-md-4">
                <ButtonGroup style={{paddingLeft:50}}>
                <Button tag="a" color="primary" style={{borderRadius:8,color:"#2ECC71 ",backgroundColor:"#ECF0F1 "}} wideMobile href="">
                $200
                </Button>
                <span style={{color:"grey"}}>Invested 5 days ago</span>
                </ButtonGroup>
                </div>
                </div>
                <div className="row">
                <div className="col-md-1">
                </div>
                <div className="col-md-7">
                <div className="row" style={{paddingLeft:30}}>
                  <div className="col-md-2" style={{marginTop:20}}>    <Image
                      src={require('./../../assets/images/image (1).jpg')}
                      alt="Features tile icon 01"
                      width={80}
                      height={80}
                    /> </div>
                  <div className="col-md-3">
                <h5 className="alert-alert" align="Left">Gerald Becker</h5>
                 <div className="features-tiles-item-image mb-16" style={{backgroundColor:"#f9faf9",paddingRight:500}}>
                  <Image
                  src={require('./../../assets/images/Gold.png')}
                  alt="Gold.png"
                  width={30}
                  height={30}
                  /><span><b>4.5</b></span> </div></div>
               
                <p align="left">Recommendation of Jegg Brown in Day One newsletter.The concept is so good that it's obviousbto me that this is a very good investment.Go Team!!</p>
                </div>     
                </div>
                <div className="col-md-4">
                <ButtonGroup style={{paddingLeft:50}}>
                <Button tag="a" color="primary" style={{borderRadius:8,color:"#2ECC71 ",backgroundColor:"#ECF0F1 "}} wideMobile href="">
                $200
                </Button>
                <span style={{color:"grey"}}>Invested 5 days ago</span>
                </ButtonGroup>
                </div>
                </div>


                <div className="row">
                <div className="col-md-1">
                </div>
                <div className="col-md-7">
                <div className="row" style={{paddingLeft:30}}>
                  <div className="col-md-2" style={{marginTop:20}}>    <Image
                      src={require('./../../assets/images/image (1).jpg')}
                      alt="Features tile icon 01"
                      width={80}
                      height={80}
                    /> </div>
                  <div className="col-md-3">
                <h5 className="alert-alert" align="Left">Gerald Becker</h5>
                 <div className="features-tiles-item-image mb-16" style={{backgroundColor:"#f9faf9",paddingRight:500}}>
                  <Image
                  src={require('./../../assets/images/Gold.png')}
                  alt="Gold.png"
                  width={30}
                  height={30}
                  /><span><b>4.5</b></span> </div></div>
               
                <p align="left">Recommendation of Jegg Brown in Day One newsletter.The concept is so good that it's obviousbto me that this is a very good investment.Go Team!!</p>
                </div>     
                </div>
                <div className="col-md-4">
                <ButtonGroup style={{paddingLeft:50}}>
                <Button tag="a" color="primary" style={{borderRadius:8,color:"#2ECC71 ",backgroundColor:"#ECF0F1 "}} wideMobile href="">
                $200
                </Button>
                <span style={{color:"grey"}}>Invested 5 days ago</span>
                </ButtonGroup>
                </div>
                </div>

                <div className="row">
                <div className="col-md-1">
                </div>
                <div className="col-md-7">
                <div className="row" style={{paddingLeft:30}}>
                  <div className="col-md-2" style={{marginTop:20}}>    <Image
                      src={require('./../../assets/images/image (1).jpg')}
                      alt="Features tile icon 01"
                      width={80}
                      height={80}
                    /> </div>
                  <div className="col-md-3">
                <h5 className="alert-alert" align="Left">Gerald Becker</h5>
                 <div className="features-tiles-item-image mb-16" style={{backgroundColor:"#f9faf9",paddingRight:500}}>
                  <Image
                  src={require('./../../assets/images/Gold.png')}
                  alt="Gold.png"
                  width={30}
                  height={30}
                  /><span><b>4.5</b></span> </div></div>
               
                <p align="left">Recommendation of Jegg Brown in Day One newsletter.The concept is so good that it's obviousbto me that this is a very good investment.Go Team!!</p>
                </div>     
                </div>
                <div className="col-md-4">
                <ButtonGroup style={{paddingLeft:50}}>
                <Button tag="a" color="primary" style={{borderRadius:8,color:"#2ECC71 ",backgroundColor:"#ECF0F1 "}} wideMobile href="">
                $200
                </Button>
                <span style={{color:"grey"}}>Invested 5 days ago</span>
                </ButtonGroup>
                </div>
                </div>

                <div className="row">
                <div className="col-md-1">
                </div>
                <div className="col-md-7">
                <div className="row" style={{paddingLeft:30}}>
                  <div className="col-md-2" style={{marginTop:20}}>    <Image
                      src={require('./../../assets/images/image (1).jpg')}
                      alt="Features tile icon 01"
                      width={80}
                      height={80}
                    /> </div>
                  <div className="col-md-3">
                <h5 className="alert-alert" align="Left">Gerald Becker</h5>
                 <div className="features-tiles-item-image mb-16" style={{backgroundColor:"#f9faf9",paddingRight:500}}>
                  <Image
                  src={require('./../../assets/images/Gold.png')}
                  alt="Gold.png"
                  width={30}
                  height={30}
                  /><span><b>4.5</b></span> </div></div>
               
                <p align="left">Recommendation of Jegg Brown in Day One newsletter.The concept is so good that it's obviousbto me that this is a very good investment.Go Team!!</p>
                </div>     
                </div>
                <div className="col-md-4">
                <ButtonGroup style={{paddingLeft:50}}>
                <Button tag="a" color="primary" style={{borderRadius:8,color:"#2ECC71 ",backgroundColor:"#ECF0F1 "}} wideMobile href="">
                $200
                </Button>
                <span style={{color:"grey"}}>Invested 5 days ago</span>
                </ButtonGroup>
                </div>
                </div>

                <div className="row">
                <div className="col-md-1">
                </div>
                <div className="col-md-7">
                <div className="row" style={{paddingLeft:30}}>
                  <div className="col-md-2" style={{marginTop:20}}>    <Image
                      src={require('./../../assets/images/image (1).jpg')}
                      alt="Features tile icon 01"
                      width={80}
                      height={80}
                    /> </div>
                  <div className="col-md-3">
                <h5 className="alert-alert" align="Left">Gerald Becker</h5>
                 <div className="features-tiles-item-image mb-16" style={{backgroundColor:"#f9faf9",paddingRight:500}}>
                  <Image
                  src={require('./../../assets/images/Gold.png')}
                  alt="Gold.png"
                  width={30}
                  height={30}
                  /><span><b>4.5</b></span> </div></div>
               
                <p align="left">Recommendation of Jegg Brown in Day One newsletter.The concept is so good that it's obviousbto me that this is a very good investment.Go Team!!</p>
                </div>     
                </div>
                <div className="col-md-4">
                <ButtonGroup style={{paddingLeft:50}}>
                <Button tag="a" color="primary" style={{borderRadius:8,color:"#2ECC71 ",backgroundColor:"#ECF0F1 "}} wideMobile href="">
                $200
                </Button>
                <span style={{color:"grey"}}>Invested 5 days ago</span>
                </ButtonGroup>
                </div>
                </div>
</div>)

};



export default Deals_Review;