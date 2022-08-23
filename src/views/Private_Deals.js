import React from 'react';
// import sections
import Private_Deals_Automate from '../components/sections/Private_Deals_Automate';
import Private_Deals_Tiles from '../components/sections/Private_Deals_Tiles';
import Private_Deals_Startup from '../components/sections/Private_Deals_Startup';
import Private_Deals_Team from '../components/sections/Private_Deals_Team';

// <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" />
// <Testimonial topDivider />
const Private_Deals = () => {

  return (
    <>
     <Private_Deals_Automate split/>
     <Private_Deals_Tiles topDivider/>
     <Private_Deals_Startup/>
     <Private_Deals_Team split/>
    </>
  );
}

export default Private_Deals;