import React, {useState} from 'react';
import '../Css/styles.css';
import {NavLink,Link} from "react-router-dom";
import Image from '../elements/Image';
import Button from '../elements/Button';
import 'bootstrap/dist/css/bootstrap.min.css';



  


class Payment_Details extends React.Component { 
    constructor() {
        super();
        this.state = {
          input: {},
          errors: {}
        };
         
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
         
      handleChange(event) {
        let input = this.state.input;
        input[event.target.name] = event.target.value;
      
        this.setState({
          input
        });
      }
         
      handleSubmit(event) {
        event.preventDefault();
      
        if(this.validate()){
            console.log(this.state);
      
            let input = {};
            input["Accountnumber"] = "";
            input["Ifsccode"] = "";
           
            this.setState({input:input});
      
            alert('Payment Details is submitted');
        }
      }
      
      validate(){
          let input = this.state.input;
          let errors = {};
          let isValid = true;
       
          if (!input["Accountnumber"]) {
            isValid = false;
            errors["Accountnumber"] = "Please enter your Account Number.";
          }
      
          if (typeof input["Accountnumber"] !== "undefined") {
            const re = /^\S*$/;
            if(input["Accountnumber"].length < 6 || !re.test(input["Accountnumber"])){
                isValid = false;
                errors["Accountnumber"] = "Please enter valid Account Number.";
            }
          }  

          if (!input["Ifsccode"]) {
            isValid = false;
            errors["Ifsccode"] = "Please enter your IFSC Code.";
          }
      
          if (typeof input["Ifsccode"] !== "undefined") {
            const re = /^\S*$/;
            if(input["Ifsccode"].length < 6 || !re.test(input["Ifsccode"])){
                isValid = false;
                errors["Ifsccode"] = "Please enter valid IFSC Code.";
            }
          } 

          this.setState({
            errors: errors
          });
      
          return isValid;
      }

         
render() {
    return (
        <>
        <body className='bg-white' >
            <div className='container'>
                       
                <div className='row' style={{height:1000,marginTop:100}}>
                    <div className='row'>
                      <div className="hero-content">
                         <nav className="navbar navbar-expand-sm bg-Secondary navbar-white " >
                            <div className="container-fluid" style={{marginTop:-40}}>
                                  <ul className="navbar-nav" style={{fontSize:13}}>
                                  
                                      <li className="nav-item">
                                          <NavLink to="/Investors_Dashboard" className="nav-link" style={{color:"#B1B0AD"}}>Back to Dashboard</NavLink>
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
                                        <div className='col-md-2' align="left">
                                        <a href=''><Image   src={require('./../../assets/images/kyc1.png')}alt="Features tile icon 01"  width={50} height={50}  /><p style={{padding:10,fontSize:15}}>KYC</p></a>
                                        </div>
                                        
                                        <div className='col-md-2 ' align="left">
                                        <a href='' ><Image   src={require('./../../assets/images/payment.png')}alt="Features tile icon 01"  width={50} height={50}  /><p style={{padding:10,fontSize:15}}>Payment Details</p></a>
                                        </div>
                                        </div>
                                        
                                        
                                        <div className='row'>
                                        <form onSubmit={this.handleSubmit} >     
                                        <div className="col-md-12">
                                            <h5 style={{fontSize:20}}>Verify Bank Details</h5><br/>
                                            <h6>Bank Account Number (PAN)</h6>
                                            
                                            
                                             <div class="input-group mb-3" style={{width:300}}>
                                            <input 
                                            style={{backgroundColor:"#E5E8E8",color:"grey"}} 
                                            type="text" 
                                            name="Accountnumber" 
                                            value={this.state.input.Accountnumber}
                                            onChange={this.handleChange}
                                            class="form-control" 
                                            placeholder="Enter Bank Account No" 
                                            id="Accountnumber"
                                            maxlength="18" />
                                            </div>
                                            <div className="text-danger" style={{fontSize:15}}>{this.state.errors.Accountnumber}</div>
                                          
                                            <h6>IFSC Code</h6>
                                            <div class="input-group mb-3" style={{width:300}}>
                                            <input 
                                            style={{backgroundColor:"#E5E8E8",color:"grey"}} 
                                            type="text" 
                                            name="Ifsccode" 
                                            value={this.state.input.Ifsccode}
                                            onChange={this.handleChange}
                                            class="form-control" 
                                            placeholder="Enter IFSC Code" 
                                            id="Ifsccode"
                                            maxlength="11" />
                                            </div>
                                            <div className="text-danger" style={{fontSize:15}}>{this.state.errors.Ifsccode}</div>
                                          
                                            <br/>
                                        
                            
                
                                    </div>
                                    <div className='col-md-6' align="center">
                                    
                                        <Button type="submit" value="Submit"  color="primary" style={{borderRadius:8,color:"white"}} wideMobile href="/Payment_Details">
                                           Submit
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





export default Payment_Details;