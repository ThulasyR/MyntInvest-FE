import React from 'react';
// import sections

import Investor_Realestate from '../components/sections/Investor_Realestate';
import Funded_Company from '../components/sections/Funded_Company';
import Deals_Community from '../components/sections/Deals_Community';
import Investors_Thousand from '../components/sections/Investors_Thousand';
import Investors_Real from '../components/sections/Investors_Real';
import Investors_Curated from '../components/sections/Investors_Curated';
import Investors_Manager from '../components/sections/Investors_Manager';


const Realestate = () => {

  return (
    <>
     
      <Investors_Curated split/>
      <Investor_Realestate/>
      <Funded_Company />
      <Investors_Thousand/>
      <Investors_Manager split/>
      <Investors_Real/>
      <Deals_Community split/>
     
    </>
  );
}

export default Realestate;