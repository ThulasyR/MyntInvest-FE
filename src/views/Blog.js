import React from 'react';

// import sections
import Ourblogs from '../components/sections/Ourblog';
import Home_Staa from '../components/sections/Home_Staa';
import OurBlogs from '../components/sections/OurBlogs';
import Blog_Founder from '../components/sections/Blog_Founder';


const Blog = () => {

  return (
    <>
      <Ourblogs split/>
      <OurBlogs/>&nbsp;&nbsp;
      <Home_Staa split/>
      <Blog_Founder />
    </>
  );
}

export default Blog;