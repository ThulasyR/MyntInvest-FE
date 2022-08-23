import React, { Component } from 'react';
import '../Css/styles.css';
import {NavLink,Link} from "react-router-dom";
import Image from '../elements/Image';
import 'react-phone-number-input/style.css';
import Button from '../elements/Button';



  

class Investors_Verification extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '', otp1: "", otp2: "", otp3: "", otp4: "",  disable: true };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    
      }
    
      handleChange(value1, event) {
    
        this.setState({ [value1]: event.target.value });
      }
    
      handleSubmit(event) {
    
        const data = new FormData(event.target);
        console.log(this.state);
        event.preventDefault();
      }
    
      inputfocus = (elmnt) => {
        if (elmnt.key === "Delete" || elmnt.key === "Backspace") {
          const next = elmnt.target.tabIndex - 2;
          if (next > -1) {
    
            elmnt.target.form.elements[next].focus()
          }
        }
        else {
          console.log("next");
         
            const next = elmnt.target.tabIndex;
            if (next < 4) {
              elmnt.target.form.elements[next].focus()
            }
        }
      

      }
      
          
render() {
return (
        <>
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
                                       <div className='row' align="left"> 
                                        <div className='col-md-2'>
                                        <a href=''><Image   src={require('./../../assets/images/kyc1.png')}alt="Features tile icon 01"  width={50} height={50}  /><p style={{padding:10,fontSize:15}}>KYC</p></a>
                                        </div>
                                        
                                        <div className='col-md-2 '>
                                        <a href='' ><Image   src={require('./../../assets/images/payment.png')}alt="Features tile icon 01"  width={50} height={50}  /><p style={{padding:10,fontSize:15}}>Payment Details</p></a>
                                        </div>
                                        </div>
                                        
                                        
                                        <div className='row'>
                                        <form onSubmit={this.handleSubmit}>  
                                        <div className="col-md-12">
                                            <h5>Verify Mobile Number</h5>

                                           
                                            <div className="otpContainer" >

                                            <input
                                                name="otp1"
                                                type="text"
                                                style={{width:70}}
                                                autoComplete="off"
                                                className="otpInput"
                                                value={this.state.otp1}
                                                onKeyPress={this.keyPressed}
                                                onChange={e => this.handleChange("otp1", e)}
                                                tabIndex="1" maxLength="1" onKeyUp={e => this.inputfocus(e)}

                                            />
                                            <input
                                                name="otp2"
                                                type="text"
                                                style={{width:70}}
                                                autoComplete="off"
                                                className="otpInput"
                                                value={this.state.otp2}
                                                onChange={e => this.handleChange("otp2", e)}
                                                tabIndex="2" maxLength="1" onKeyUp={e => this.inputfocus(e)}

                                            />
                                            <input
                                                name="otp3"
                                                type="text"
                                                style={{width:70}}
                                                autoComplete="off"
                                                className="otpInput"
                                                value={this.state.otp3}
                                                onChange={e => this.handleChange("otp3", e)}
                                                tabIndex="3" maxLength="1" onKeyUp={e => this.inputfocus(e)}

                                            />
                                            <input
                                                name="otp4"
                                                type="text"
                                                style={{width:70}}
                                                autoComplete="off"
                                                className="otpInput"
                                                value={this.state.otp4}
                                                onChange={e => this.handleChange("otp4", e)}
                                                tabIndex="4" maxLength="1" onKeyUp={e => this.inputfocus(e)}
                                            />
                                            </div>
                                           
                                           
                                          </div>
                                    <div className='col-md-7' align="left" style={{marginTop:20}}>
                                        <Button type="submit" value="button" id="Button" color="primary" style={{borderRadius:8,color:"white"}} wideMobile href="/Pancard_Details">
                                           Verify & Continue
                                         </Button>
                                         
                                        </div>
                                        </form>  
                                        </div>

                



                                        
                                        
                                        

                                        

                                        
                                        



                                        
                                     
                                     </div>
                                 </div>

                             </div>
                             
                        </div>

                     </div>

                </div>     


                        

                        
                
            
            
            
            
            
            
            
            
            
            
            
            </div> 

                    
                    

        </body>


            
            
        </>
    );
}
};





export default Investors_Verification;