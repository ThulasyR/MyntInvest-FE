import React, {Component} from "react"; 
import './../Css/styles.css';
import {NavLink,Link} from "react-router-dom"; 
import DataService from './../../service/DataService'; 
import UploadService from "./../../service/file-upload.service";
import Logo from './partials/Logo';
import Moment from 'moment';
import $ from "jquery";
const current = new Date();
const date = `${current.getFullYear()}-${current.getMonth()+1}-${current.getDate()}`;//mysql insert date format
const formatDate = Moment("12/09/2002").format('YYYY-MM-DD')//2002-12-09




const extractFilename = (path) => {
  const pathArray = path.split("/");
  const lastIndex = pathArray.length - 1;
  return pathArray[lastIndex];
};
  

 
class Header extends React.Component {
  constructor() {
   super(); 
  }

componentDidMount() { 
}


render() {
    
 

  return (
    <>
    
    <div id="top-bar" className="top-bar bg-dark">
        <div className="container">
          <div className="row text-center">
            <h6 className="para text-white pt-1">Mingout's exciting campaign is now live here. They are offering a host of attractive benefits! Check it out..</h6>
            </div>
            </div>
            </div>
            <header id="header" className="header-two" style={{marginBottom: "-38px"}}>
  <div className="site-navigation">
    <div className="container">
        <div className="row">
          <div className="col-lg-12">
  <nav className="navbar navbar-expand-md navbar-light bg-light ">
  <div className="container-xl"> 
    <a className="navbar-brand" href="#">
    <Logo />
    </a> 
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button> 
    <div className="collapse navbar-collapse" id="navbarCollapse">
  
      <div className="navbar-nav mx-lg-auto">
        {/* <a className="nav-item nav-link active" href="#" aria-current="page">Home</a> */}
        <NavLink to="/Deals" className="nav-item nav-link headermenu reload" aria-current="page">Deals</NavLink>
        <NavLink to="/Founders" className="nav-item nav-link headermenu reload">Raise</NavLink>
        <NavLink to="/Investors" className="nav-item nav-link headermenu reload" >Investors</NavLink>
       
        <div className="dropdown">
        <a className="nav-link headermenu dropdown-toggle" href="#" id="moreDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            More
          </a>
          <ul className="dropdown-menu dropdown-menu-light" aria-labelledby="moreDropdownMenuLink">
            <li><a className="dropdown-item para" href="#">FAQs</a></li>
            <li><a className="dropdown-item para" href="#">How it works</a></li>
            <li><a className="dropdown-item para" href="#">Exclusive Rounds</a></li>
          </ul>
</div>
 
      </div> 
      
      <div className="d-flex align-items-lg-center mt-3 mt-lg-0  profile_header" >
      <NavLink to="/Login"  >
        <button  className="btn btn-sm btn-dark w-full w-lg-auto " >
          Login
        </button>
        </NavLink>
      </div> 
      &nbsp;
      <div className="d-flex align-items-lg-center mt-3 mt-lg-0"> 
      <NavLink to="/Signup"  >
        <button  className="btn btn-sm btn-dark w-full w-lg-auto">
          Get Started
        </button>
        </NavLink>
      </div>

      <div className="dropdown profile_header2">
    <button type="button" className="btn btn-default btn-sm dropdown-toggle" data-bs-toggle="dropdown">
      <i className='fa fa-user userbgcircle'></i>&nbsp;<span id="profilename"></span>
    </button>
    <ul className="dropdown-menu">
    <li><a className="dropdown-item text-center" id="controlpanel" >
        <button type="button" className=' btn btn-dark btn-sm'>Control Panel</button></a></li>
      <li className='p-2'><table className='table  table-hover  table-stripped' border="0">
        <tr><td className='parabold' >User Name:</td><td><span className='parabold' id="profileuname"></span></td></tr>
        <tr><td className='parabold' >Role:</td><td><span className='parabold'  id="profilerole"></span></td></tr>  
        </table>
        </li> 
        
      <li align="center"><a className="dropdown-item logout" >
        <button type="button" className=' btn btn-success btn-sm'>Logout</button></a></li>
    </ul>
  </div>  

    </div>
  </div>

  
  <input type="hidden"  id="mtuser_id"/>
  <input type="hidden"  id="mtuser_role"/>
  <input type="hidden"  id="mtuser_module"/>
  <input type="hidden"  id="mtuser_email"/>
  <input type="hidden"  id="mtuser_fname"/>
  <input type="hidden"  id="user_mobileno"/>
  <input type="hidden"  id="campUniqueId"/>


</nav>
</div></div></div></div></header>
    </>
 
               

    ) ;       
 }
};


 

export default Header;
