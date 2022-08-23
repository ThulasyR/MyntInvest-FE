import React from 'react';

// import sections
import Deals_Realm from '../components/sections/Deals_Realm';
import Deals_Sta from '../components/sections/Deals_Sta';
import Co_investors from '../components/sections/Co_investors';
import Deals_Review from '../components/sections/Deals_Review';
import Deals_Community from '../components/sections/Deals_Community';


const Reviews = () => {

  return (
    <>
      <Deals_Realm/>
      <Deals_Sta split />
      <Co_investors invertMobile topDivider imageFill className="illustration-section-02" />
      <Deals_Review/>
      <Deals_Community split/>
      
      
     
    </>
  );
}

export default Reviews;