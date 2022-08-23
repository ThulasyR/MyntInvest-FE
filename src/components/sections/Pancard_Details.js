import React, {useState} from 'react';
import '../Css/styles.css';
import {NavLink,Link} from "react-router-dom";
import Image from '../elements/Image';
import Button from '../elements/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import classNames from 'classnames';
import { format } from "date-fns";

  


const tilesClasses = classNames(
    'tiles-wrap center-content',

  );

class Pancard_Details extends React.Component { 
   
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
            input["Pannumber"] = "";
            input["birthDate"] = "";
           
            this.setState({input:input});
      
            alert('Pancard Details is submitted');
        }
      }
      
      
      validate(){
          let input = this.state.input;
          let errors = {};
          let isValid = true;
       
          if (!input["Pannumber"]) {
            isValid = false;
            errors["Pannumber"] = "Please enter your Pancard Number.";
          }
      
          if (typeof input["Pannumber"] !== "undefined") {
            const re = /^\S*$/;
            if(input["Pannumber"].length < 6 || !re.test(input["Pannumber"])){
                isValid = false;
                errors["Pannumber"] = "Please enter valid Pancard Number.";
            }
          } 

          if (!input["birthDate"]) {
            isValid = false;
            errors["birthDate"] = "Please enter your Date of Birth.";
          }
      
         
          
          

          
          this.setState({
            errors: errors
          });
      
          return isValid;
      }

         
render() {
    const { sDate } = this.state;
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
                                          <NavLink to= "/Investors_Dashboard" className="nav-link" style={{color:"#B1B0AD"}}>Back to Dashboard</NavLink>
                                        </li>
                                  
                                    </ul>
                              </div>
                            </nav>

                           <div className='container'>
                              <div className='row' style={{height:500}}>
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
                                            <h5 style={{fontSize:20}}>Verify PAN CARD</h5><br/>
                                            <h6>Permanent Account Number (PAN)</h6>
                                            <div class="input-group mb-3" style={{width:300}}>
                                                <input 
                                            style={{backgroundColor:"#E5E8E8",color:"grey"}} 
                                            type="text" 
                                            name="Pannumber" 
                                            value={this.state.input.Pannumber}
                                            onChange={this.handleChange}
                                            class="form-control" 
                                            placeholder="Enter PAN NO" 
                                            id="Pannumber"
                                            maxlength="10" />                                           
                                            </div>
                                        
                                            
                                           

                                            <div className="text-danger" style={{fontSize:15}}>{this.state.errors.Pannumber}</div>
                                            </div>                                          
                                            <h6>Date of Birth</h6>
                                            <div class="input-group mb-3" style={{width:300}}>
                                         
                                            <input
                                                   className='form-control'
                                                   style={{backgroundColor:"#E5E8E8",color:"grey"}} 
                                                   id="formLabel"
                                                   type="date"                                   
                                                   name="birthDate" 
                                                   placeholder="Enter Your Birthdate"
                                                   value={this.state.birthDate}
                                                   onChange={this.handleChange}
                                                />  
                                            </div>
                                            <div className="text-danger" style={{fontSize:15}}>{this.state.errors.birthDate}</div>
                                           
                                            <br/>
                                        
                            
                                            
                                    <div className='col-md-6' align="center">
                                    
                                        <Button type="submit" value="Submit"  color="primary" style={{borderRadius:8,color:"white"}} wideMobile href="/Payment_Details">
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





export default Pancard_Details;