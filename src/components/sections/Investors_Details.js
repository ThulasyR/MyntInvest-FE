import React, {useState} from 'react';
import '../Css/styles.css';
import {NavLink,Link} from "react-router-dom";
import Image from '../elements/Image';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

import Button from '../elements/Button';


  


function Investors_Details() {

    const [value,setValue] = useState();
       
    
  
    

    return(
        <body className='bg-white' >
            <div className='container'>
                       
                <div className='row' style={{height:800,marginTop:100}}>
                    <div className='row'>
                      <div className="hero-content">
                         <nav className="navbar navbar-expand-sm bg-Secondary navbar-white " >
                            <div className="container-fluid" style={{marginTop:-40}}>
                                  <ul className="navbar-nav" style={{fontSize:13}}>
                                  
                                      <li className="nav-item">
                                          <NavLink to= "/Investors_Dashboard" className="nav-link" style={{color:"#B1B0AD"}}>Back to Dashboard</NavLink>
                                        </li>
                                  
                                    </ul>
                              </div>
                            </nav>

                           <div className='container'>
                              <div className='row' style={{height:700}}>
                                    <div className='col-md-12'>
                                        <h3>Complete Your Profile</h3>
                                        <p style={{fontSize:13}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt libero vel elementum at cum tupis eget. Viverra ultrices lacus, lectus volutpat sociis vitae mauris<br/>porta faugiat. Nec, vitae facilisi elementum eu est vel quis platea. Diam pharetra nec malesuada mi purus erat.</p>
                                       <div className='row'> 
                                        <div className='col-md-2'>
                                        <a href=''><Image   src={require('./../../assets/images/kyc1.png')}alt="Features tile icon 01"  width={50} height={50}  /><p style={{padding:10,fontSize:15}}>KYC</p></a>
                                        </div>
                                        
                                        <div className='col-md-2 ' >
                                        <a href='' ><Image   src={require('./../../assets/images/payment.png')}alt="Features tile icon 01"  width={50} height={50}  /><p style={{padding:10,fontSize:15}}>Payment Details</p></a>
                                        </div>
                                        </div>
                                        <div className='row' >
                        
                                      <div className="col-md-12">
                                      <h5 align="left" >Verify Mobile Number</h5>
                                      <p style={{fontSize:15}}>Mobile Number</p>   
                                      <div class="form-group">
                                      <PhoneInput
                                                 
                                                 className='phone'
                                                 placeholder = "Mobile Number"
                                                 value={value}
                                                 onChange={setValue}      
                                                 style={{width:400,backgroundColor:"#E5E8E8",color:"grey"}}
                                        
                                                 />
                                                {value}</div> 
                                      <div className="text-danger"></div><br/>
                                    
                                      </div></div>
                                       
                                    <div className='col-md-7' align="center">
                                        <Button tag="a" className="text-white" style={{backgroundColor:"#2ECC71",borderRadius:5,color:"grey",width:200}} wideMobile href="/Investors_Verification">
                                         SEND OTP
                                        </Button>
                                        
                                        </div>
                                        
                                        

                                        

                                        
                                        



                                        
                                     
                                     </div>
                                 </div>

                             </div>
                             
                        </div>

                     </div>

                </div>       
            </div> 

                    
                    

        </body>




    )

}





export default Investors_Details;
