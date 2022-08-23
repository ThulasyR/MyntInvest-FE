import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import Home_Cta from '../components/sections/Home_Cta';
import Home_Ctaa from '../components/sections/Home_Ctaa';
import Livedeal from '../components/sections/Livedeal';
import Invest_Now from '../components/sections/Invest_Now';
import Home_Sta from '../components/sections/Home_Sta' 
import Home_FeaturesTiles from '../components/sections/Home_FeaturesTiles';
import Home_Features from '../components/sections/Home_Features';
import Home_Staa from '../components/sections/Home_Staa';
import Home_Splits from '../components/sections/Home_Splits';
import Accord from '../components/sections/Accord';





//  <Hero className="illustration-section-01" />
// <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" />
// <Testimonial topDivider />
const Home = () => {

  return (
    <>
      <Hero className="illustration-section-01" />
      <Home_Cta split />
      <Home_Ctaa split />
      <Livedeal />
      <Invest_Now />
      <Home_Sta split />
      <Home_FeaturesTiles />
      <Home_Features />
      <Home_Staa split />
      <Home_Splits/>
      <Accord/>
    </>
  );
}

export default Home;