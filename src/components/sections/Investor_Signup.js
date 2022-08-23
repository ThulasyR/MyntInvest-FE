import React, { Component } from 'react';
import '../Css/styles.css';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import classNames from 'classnames';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';


const tilesClasses = classNames(
  'tiles-wrap center-content',
);
  
class Investor_Signup extends Component {
  constructor (props) {
    super(props);
    this.state = { country: '', region: '' };
  }

  selectCountry (val) {
    this.setState({ country: val });
  }

  selectRegion (val) {
    this.setState({ region: val });
  }

  render () {

  const { country, region } = this.state;

    return(
      <body className='bg-white' >
        <div className='row'style={{paddingTop:80}}> 
        <div className='col-md-1'></div>
        <div className='col-md-5'style={{backgroundColor: "#2ECC71",height:850}}>
            <div className='row' align="Left" style={{paddingLeft:70}} >
            <h4 className='text-light' style={{marginTop: 30}}>Mynt<strong>Invest</strong></h4> 
            <p className="text-white" ><strong>Invest</strong> In The Best <strong>Startups</strong><br/>Raised Right From Their<br/><strong>Community</strong></p>
            <a href="#" class="fa fa-google" style={{fontSize: 20,width: 30,borderRadius: 50,color:'white'}}></a>
            <a href="#" class="fa fa-twitter" style={{fontSize: 20,width: 30,borderRadius: 50,color:'white'}}></a>
            <a href="#" class="fa fa-instagram" style={{fontSize: 20,width: 30,borderRadius: 50,color:'white'}}></a>
            <a href="#" class="fa fa-linkedin" style={{fontSize: 20,width: 30,borderRadius: 50,color:'white'}}></a> 
            </div>&nbsp;

            <div className={tilesClasses} align="center">
            <div className="col-sm-4">
            <h5 className='text-white' align="Right"><strong>$700M+</strong> 
            <p className='text-white' align="Right" style={{fontSize:9}}>Invested Since 2022</p>
            </h5>
            </div>

            <div className="col-sm-4" >
            <h5 className='text-white' ><strong>1.5Million+</strong>  
            <p className='text-white' style={{fontSize:10}}>Members</p> 
            </h5>
            </div>

            <div className="col-sm-4">
            <h5 className='text-white'align="left"><strong>600K+</strong> 
            <p className='text-white' style={{fontSize:10}}>Deals Done</p>
            </h5>
           
            </div>
            </div>

            <div className='row'>
            <div className='col-md-12'>
            <p className='text-white' style={{paddingLeft:70,fontSize: 13}}>Trusted By Hundreds<br/> Of Companies</p>
            </div>
            </div>

            <div className={tilesClasses}>
            <div className='col-md-12'>
            <div className="reveal-from-bottom" data-reveal-delay="600">
            <ButtonGroup className="align-item-center" >
            <Button tag="a" className="text-white" style={{backgroundColor:"#2ECC71",borderRadius:5,color:"grey"}} wideMobile href="">
            9UNICORNS
            </Button>
            <Button tag="a" color="primary" style={{backgroundColor:"white",color:"#2ECC71"}} wideMobile href="">
            Better
            </Button>
            <Button tag="a" color="secondary" style={{backgroundColor:"#2ECC71",borderRadius:5,color:"white"}} wideMobile href="">
            L I V W E L L
            </Button></ButtonGroup><br/>
            <ButtonGroup>
            <Button tag="a" color="primary" style={{backgroundColor:"#2ECC71",color:"white"}} wideMobile href="">
            Microsoft
            </Button>
            <Button tag="a" color="primary" style={{backgroundColor:"#2ECC71",color:"white"}} wideMobile href="">
            teradata
            </Button>
            <Button tag="a" color="primary" style={{backgroundColor:"#2ECC71",color:"white"}} wideMobile href="">
            Google
            </Button>
            </ButtonGroup>
            </div>
            </div>
            </div>
            </div>
            
            
            <div className='col-md-6'>
              
                <div className='col-md-12' align="Center">
                 <h3 style={{fontSize:30,marginTop:80}}>Complete Sign Up Process</h3><br/>
                 
                                    
                  <div>
                  <h6 style={{paddingRight:250}}><strong >Nationality</strong></h6>
                    <CountryDropdown
                      style={{width:350,height:50}}
                      value={country}
                      onChange={(val) => this.selectCountry(val)} />
                  </div>
                  <br/><br/>
                  <Button tag="a" align="Right" color="secondary" style={{backgroundColor:"#2ECC71",borderRadius:8,color:"white",width:400}} wideMobile href="/Investors_Terms">
                    Continue
                    </Button>
             
                  
                 </div> 
                 
               </div>



            </div>
              
        
           
         
      
         
     </body>
    )  
};       
}

export default Investor_Signup;