import React from 'react';

// import sections
import Livedeals from '../components/sections/Livedeals';
import Deals_Cta from '../components/sections/Deals_Cta';
import Funded_Company from '../components/sections/Funded_Company';
import Deals_Navbar from '../components/sections/Deals_Navbar';



const Deals = () => {

  return (
    <>
      {/* <Deals_Navbar/> */}
      <Livedeals />&nbsp;
      {/* <Deals_Cta split/>
      <Funded_Company /> */}
    </>
  );
}

export default Deals;