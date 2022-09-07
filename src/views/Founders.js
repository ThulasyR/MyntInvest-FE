import React from 'react';
// import sections
import Founders_Tiles from '../components/sections/Founders_Tiles';
import Investors_Manager from '../components/sections/Investors_Manager';
import Accord from '../components/sections/Accord';
import Founders_Community from '../components/sections/Founders_Community';
import Founders_Raising from '../components/sections/Founders_Raising';
import Founders_Process from '../components/sections/Founders_Process';
import Founders_Calender from '../components/sections/Founders_Calender';


// <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" />
// <Testimonial topDivider />
const Founders = () => {

  return (
    <>
     <Founders_Community split/>
     <Founders_Tiles topDivider/>
     <Founders_Calender/>
     <Founders_Process/>
     {/* <Founders_Raising/> */}
     <Investors_Manager split/>
     <Accord/>
    </>
  );
}

export default Founders;