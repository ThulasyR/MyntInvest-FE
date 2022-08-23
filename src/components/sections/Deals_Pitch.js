import React from "react";
import Button from "../elements/Button";
import ButtonGroup from "../elements/ButtonGroup";
import Image from "../elements/Image";
import classNames from 'classnames';
import { NavLink } from "react-router-dom";



const Deals_Pitch = ({
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
                            <NavLink to="/Pitch" className="nav-link" style={{color:" #2ECC71"}}  >Pitch</NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink to="/Deals_Discussion" className="nav-link" >Discussion</NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink to="/Reviews" className="nav-link" >Reviews
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </nav>
                  </div>
                </div>
               <div className={tilesClasses}>
               <div className="row">
               <div className="col-md-1">
              
</div>
               <div className="col-md-7">
               <div className="m-5 p-4">
               <div className="row">
               <h2 className="alert-alert" id="Highlights" align="Left">Highlights</h2>
               <ul>
               <li><p align="Left">Leading,powerful crypto investment management platform in a mobile app </p></li>
               <li><p align="Left">Raised over $6M from top-tier industry VCs and angels</p></li>
               <li><p align="Left">400%+ YoY revenue growth as 3/2022</p></li>
               <li><p align="Left">500k+ users with 4.5+ stars average app store reviews as of 3/2022</p></li>
               <li><p align="Left">Daily active users doubling every 2-3 weeks as of 3/2022</p></li>
               <li><p align="Left">Partnership with Evite.com 100M users with 300M reach in the US</p></li>
               <li><p align="Left">Launched multiple cuting-edge crypto product in 2021 i.e Metaverse index</p></li>
               </ul>
               <p align="Left" >BY Confirming my reservation/investment.I acknowledge that my contact information(such as full name and email address)and reservation and investment amount details will be shared with Realm Metaverse Real EstateInc., who may send communication via email,social media,and/or other channels.</p>
               </div>
               </div>
               </div>

               <div className="col-md-4" align="center">
               <div className="card">
               <div className="card-body">
               <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
               <div className="tiles-item-inner">
               <div className="features-tiles-item-header">
               <h4 className="mt-0 mb-8">
                Deal terms
                </h4><hr/>
                </div>
                <div className="features-tiles-item-content">
                  <span className="m-0 text-sm">
                    Valuation Cap
                    </span><h4 style={{color:"#2ECC71 "}}>$80,000,000</h4>
                    <p style={{color:"grey"}} >The maximum valuation at which your investment converts into equity shares or cash.<span style={{color:"#2ECC71 "}}>Lean more</span></p><hr/>
                <span>Minimum Investment<br/><strong>$1,000</strong></span><hr/>
                <span>Minimum Investment<br/><strong>$1,000</strong></span><hr/>
                <span>Nominee Lead<br/><strong>Chief Executive Officer of the Company(CurrentlyAlex Wang)</strong></span><hr/>
                </div>
              <ButtonGroup>
              <Button tag="a" color="primary" style={{borderRadius:8,color:"black",backgroundColor:"#ECF0F1 "}} wideMobile href="">
              How it Works
              </Button>
              </ButtonGroup>
              </div>
              </div>
              </div>
              </div>
             
               </div>
               </div>
               </div>
               
               <div className={tilesClasses}>
               <div className="row">
               <div className="col-md-1">
                      
               </div>
               <div className="col-md-7">
               <div className="m-5 p-4">
       
             
               <div className="row" >
               <h2 className="alert-alert" id="Overview" align="Left">Overview</h2>
               <p align="Left" style={{fontSize:17}}>Realm Metaverse Real Estate's (Realm) business objective and strategy is to achieve attractive risk-adjusted returns primarily through the acquisition,management,development and sale of digital parcels in blockchain-based Metaverses in the form of non-fungible tokens("NFTs")</p>
               <p align="Left" style={{fontSize:17}}>Realm is focused on acquiring,managing,developing, and selling digital parcels across various crypto-based Metaverses.By employing a unique combination of experience and knowledge in the real estate,development and digital assets management industries,Realm will seek to generate an attractive return on investment,while contributing to the growth,prosperity,and communities in these virtual worlds.</p>
               </div>   
               </div>
               </div>

                <div className="col-md-4" align="center">
                <div className="card">
                <div className="card-body">
                <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
                <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                <h4 className="mt-0 mb-8">
                Documents
                </h4>
                </div>
                <div className="features-tiles-item-content">
                <span className="m-0 text-sm"style={{color:"grey"}} >
                Republic Core is considering hosting this Reg A+ Securities offering by Realm Metaverse Real Estate Inc..
                </span><hr/>
                <h5 style={{color:"grey"}}>Company documents</h5>
                <h6><strong>Disclosures Disclaimers.pdf </strong></h6>
                <h6><strong>Additional Risk Disclosures.pdf</strong></h6>
                <h6><strong>Form CRS.pdf</strong></h6>
                </div>
                </div>
                </div>
                </div>
                </div>
                </div>
                </div>
                </div>



                <div className={tilesClasses}>
                <div className="row">
                <div className="col-md-1">
                </div>
                <div className="col-md-7">
                <div className="m-5 p-4">
                <div className="row">
                <h2 className="alert-alert" id="Meataverse overview" align="Left">Metaverse overview</h2>
               
                    <Image
                      src={require('./../../assets/images/Meta.jpg')}
                      alt="Features tile icon 05"
                      width={1500}
                      height={1500} />&nbsp;
                  
                <h4 align="left">What is the Meataverse?</h4>
                <p align="Left">The Metaverse is an alternate digital reality where people socialize,work,play,and transact.Metaverses built on the blockchain are self-contained virtual cities,game,and economies that simulate real-world interactions.The metaverse bridges the gap between the digital and physical worlds,offering new,exciting methods of interactions,Blockchain-based Metaverses distribute ownership and value through native cryptocurrency tokens to their users,players,and land-owners.</p>
                <h4 align="left">Digital Real Estate Investing</h4>
                <p align="Left">Investment in digital real estate occurs through the purchase and exchange of non-fungible tokens (or NFTs), aspecial type of cryptographic token which represents somethings unique;non-fungible token are thus not...<span style={{color:"#2ECC71 "}}>Read more</span></p>
                </div>     
                </div>
                </div>

                <div className="col-md-4" align="center" >
                <div className="card">
                <div className="card-body">
                <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
                <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                <h4 className="mt-0 mb-8">
                 Bonus perks
                </h4>
                </div>
                <div className="features-tiles-item-content">
                <span className="m-0 text-sm"style={{color:"grey"}} align="left" >
                In addition to your Crowd SAFE,you'll receive perks For investing in Ember Fund.
                </span><hr/>
                <p align="left">Invest <span style={{paddingLeft:90}}>200Investors </span></p>
                <h5 align="left" style={{color:"#2ECC71"}}>$1,000</h5>
                <p align="left" >Receive</p>
                <ul><li>50 Bitcoin sent to your Ember Fund wallet</li></ul>
                <h6 style={{color:"#F1C40F "}}>Sold Out(0 left of 200)</h6>
                <span align="left">You can still invest $1000 without the Perk.</span>
                </div><hr/>
                <div className="features-tiles-item-content">
                <p align="left">Invest <span style={{paddingLeft:90}}>200Investors </span></p>
                <h5 align="left" style={{color:"#2ECC71"}}>$1,000</h5>
                <p align="left" >Receive</p>
                <ul><li>50 Bitcoin sent to your Ember Fund wallet</li></ul>
                <h6 style={{color:"#F1C40F "}}>Sold Out(0 left of 200)</h6>
                <span align="left">You can still <span style={{color:"#2ECC71 "}}>invest $1000 </span>without the Perk.</span>
                </div>
                </div>
                </div>
                </div>
                </div>
                </div>
                </div>
                </div>

                <div className={tilesClasses}>
                <div className="row">
                <div className="col-md-1">
                </div>
                <div className="col-md-7">
                <div className="m-5 p-4">
                <div className="row">
                <h2 className="alert-alert" id="Strategy" align="Left">Strategy</h2>              
                <p align="Left">Realm invests in virtual worlds, or Metaverses,built on the blockchain.Our asset management strategy is inspired by traditional real estate investment stratrgies.We look to accquire,manage and develope virtual real estate,following three core tents below.</p>
                <Image
                      src={require('./../../assets/images/Strategy.jpg')}
                      alt="Features tile icon 05"
                      width={1500}
                      height={1500} />&nbsp;
                <h4 align="left">Digital Real Estate Investing</h4>
                <p align="Left">We intend to acquire a portfolio of diversified digital assets across a variety of crypto-based virtual worlds.when deciding whether to accquire a digital assets, we generally analyze our potential purchase prices compared to recent sales,the prospect that the digital asset's location with respect to potential neighbors may add value,and the digital assets's potential use cases development viability.</p>
                <p align="left">We do not intend to actively trade(or "flip")the digital parcels it...<span style={{color:"#2ECC71 "}}>Read more</span></p>
                </div>     
                </div>
                </div>

                <div className="col-md-4">
                </div>
                </div>
                </div>
  
                <div className={tilesClasses}>
                <div className="row">
                <div className="col-md-1">
                </div>
                <div className="col-md-7">
                <div className="m-5 p-4">
                <div className="row">
                <h2 className="alert-alert" id="Portfolio" align="Left">Portfolio</h2>              
                <p align="Left">As a November 2,2021,Realm Has made investment into 13 different metaverses.</p>
                <Image
                      src={require('./../../assets/images/Graph.png')}
                      alt="Features tile icon 05"
                      width={1500}
                      height={1500} />&nbsp;
                <p align="Left"><strong>The Sandbox -</strong> The Sandbox is a virtual Metaverse where player can play,built,own,and monetize their virtual experiences.This platform seeks to empower artists,creators,and players to build what they have always envisioned.providing the means to unleash their creativity.Using blockchain technology and NFTs,users can build the virtual economy of the future in their created spaces. </p>
                <p align="left"><strong>Decentraland -</strong> Decentraland is a virtual reality platform powered by the Ethereum blockchain. Users can create,experience,and monetize content and applications.Land in Decentraland is permanently owned by the community,giving them full control over their...<span style={{color:"#2ECC71 "}}>Read more</span></p>
                </div>     
                </div>
                </div>

                <div className="col-md-4">
                </div>
                </div>
                </div>

                <div className={tilesClasses}>
                <div className="row">
                <div className="col-md-1">
                </div>
                <div className="col-md-7">
                <div className="m-5 p-4">
                <div className="row">
                <h2 className="alert-alert" id="Team" align="Left">Team</h2>              
                <p align="Left"> Republic Realm is one of the most active investors in and developers of the metaverse real estate ecosystem.We invest in,manage,and develope assets including NFTs,virtual real estate,metaverse platforms,gaming,and infrastructure</p>
                <p align="Left">Republic Realm has holding in 13 metaverse platforms,has developed six metaverse real estate projects,and owns over 2000 NFTs.Republic Realm is a placemaker in the metaverse.In addition to The Museum Collection,Which is a digital culture Museum for NFTs, we also developed Metajuku,the  first metaverse shopping mall with retail tenants and leases;built Fantasy Islands,a luxury,Master-Academy,the first online<span style={{color:"#2ECC71 "}}>Read more</span> </p>
                </div>     
                </div>
                </div>

                <div className="col-md-4">
                </div>
                </div>
                </div>

                <div className={tilesClasses}>
                <div className="row">
                <div className="col-md-1">
                </div>
                <div className="col-md-7">
                <div className="m-5 p-4">
                <div className="row">
                <h2 className="alert-alert" id="Offering" align="Left">Offering</h2>              
                <p align="Left">We are currently Testing the Waters for a potential Regulation A+ offering for our common shares,Which as of November 2,2021 were valued at $205.57 per share.We anticipate that the offering would seek to raise up to $75,000,000 with a minimum investment of $1000. The price per share will be updated prior to the offering based on a more recent net asset value per share.</p>
                </div>     
                </div>
                </div>

                <div className="col-md-4">
                </div>
                </div>
                </div>

                <div className={tilesClasses}>
                <div className="row">
                <div className="col-md-1">
                </div>
                <div className="col-md-7">
                <div className="m-5 p-4">
                <div className="row">
                <h2 className="alert-alert" id="Disclaimers" align="Left">Disclaimers</h2>              
                <p align="Left">Realm Metaverse Real Estate Inc. is "testing the waters" to gauge market demand from potential investors for a potential offering under Tier II of Regulation Aof the Securities Act.No money or other consideraton is beign solicited,and if sent in response,it will not be accepted.No sales of Securities wil be made or commitment to purchase accepted until qulification of an offering circular by the Securities and Exchange Commission("SEC") and approval of any other required government or regulatory agency.An indication of interest made by a prospective investor is non-binding and involves no obligation or commitment of any kind.Any offer to buy Securities may be...
                <span style={{color:"#2ECC71 "}}>Read more</span></p>
                </div>     
                </div>
                </div>

                <div className="col-md-4">
                </div>
                </div>
                </div>

                <div className={tilesClasses}>
                <div className="row">
                <div className="col-md-1">
                </div>
                <div className="col-md-5">
                <ButtonGroup>
                  <Button tag="a" color="primary" style={{ backgroundColor:"#ECF0F1 ",borderRadius:8,color:"grey"}} wideMobile href="">
                    $ &nbsp;&nbsp;&nbsp; 1000min&nbsp;&nbsp;&nbsp;
                    </Button></ButtonGroup>
                    </div>&nbsp;
                    <div className="col-md-5">
                      <ButtonGroup>
                  <Button tag="a" color="primary" style={{color:"white",borderRadius:8}} wideMobile href="">
                    &nbsp; Join the Waitlist &nbsp;
                    </Button>
                </ButtonGroup>
                </div>&nbsp;&nbsp;

                <div className="col-md-1">
                </div>
                </div></div><div className="row"></div><br/><hr/>
                
                
</div>)

};


export default Deals_Pitch;