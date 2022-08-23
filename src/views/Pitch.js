import React from 'react';

// import sections
import Deals_Realm from '../components/sections/Deals_Realm';
import Deals_Sta from '../components/sections/Deals_Sta';
import Co_investors from '../components/sections/Co_investors';
import Deals_Pitch from '../components/sections/Deals_Pitch';
import Deals_Company from '../components/sections/Deals_Company';
import Deals_About from '../components/sections/Deals_About';
import Deals_Team from '../components/sections/Deals_Team';
import Deals_Press from '../components/sections/Deals_Press';
import Deals_Community from '../components/sections/Deals_Community';


const Pitch = () => {

  return (
    <>
      <Deals_Realm/>
      <Deals_Sta split />
      <Co_investors invertMobile topDivider imageFill className="illustration-section-02" />
      <Deals_Pitch/>
      <Deals_About/>
      <Deals_Company/>
      <Deals_Team />
      <Deals_Press/>
      <Deals_Community split/>
      
      
     
    </>
  );
}

export default Pitch;