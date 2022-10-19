import React, {useState,setState} from 'react';
import '../Css/styles.css';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import classNames from 'classnames';
import MyntInvestLogo from '../../assets/images/MyntInvest.png';
import DataService from '../../service/DataService'; 


const tilesClasses = classNames(
        'tiles-wrap center-content',

      );
class Welcome extends React.Component { 

    constructor() {
        super();
        this.state = { 
          input: {},
          errors: {},
          EMAIL : "",
          PASSWORD : "",
          MESSAGE:""
        };
         
        this.handleLogChange = this.handleLogChange.bind(this); 
        this.validateLogin = this.validateLogin.bind(this);
        this.openAdminPanel = this.openAdminPanel.bind(this);
      }
         
      handleLogChange(event) {
        event.preventDefault();
        let input = this.state.input;
        input[event.target.name] = event.target.value; 
      
        this.setState({
          EMAIL :this.state.input.logemail,
          PASSWORD : this.state.input.logpassword,
        });
      }
      openAdminPanel(event) {
        event.preventDefault();
        window.showAlert("Welcome to Admin Panel",window.mt_backend_url+"/admin"); 
      }
          
    validateLogin(event) {
        event.preventDefault(); 
        var data ={
          EMAIL :   this.state.input.logemail,
          PASSWORD : this.state.input.logpassword,
          
        }; 
        console.log("/userlogin?EMAIL="+this.state.input.logemail+"&PASSWORD="+this.state.input.logpassword);

        DataService.passData("/userlogin?EMAIL="+this.state.input.logemail+"&PASSWORD="+this.state.input.logpassword)
        .then(response => {  
            window.showLoader();  
            sessionStorage.setItem("sessFirstname", response.data.FIRSTNAME);
            sessionStorage.setItem("sessEmail", response.data.EMAIL);
            sessionStorage.setItem("sessRole", response.data.ROLE);
            sessionStorage.setItem("sessModule", response.data.MODULE);
            sessionStorage.setItem("sessUserId",  response.data.MT_USERID); 
            
          
            window.sessionSetting(sessionStorage);
            if(response.data.ROLE == "User"){ 
              window.showAlert("Welcome "+response.data.FIRSTNAME,"/Investors");  
              // window.location.href = ;//to redirect to normal links
            }else if(response.data.ROLE == "Admin"){
              window.showAlert("Welcome To Administrator","/Admin_Dashboard");  
              // window.location.href = "/Admin_Dashboard";//to redirect to normal links
            } 
        })
        .catch(e => {
          window.showLoader();  
          window.showAlert("Username or Password is incorrect","/Login");
          // window.location.href = "/Login";//to redirect to normal links
        });
    }

      validate(){
          let input = this.state.input;
          let errors = {};
          let isValid = true; 
      
          if (!input["email"]) {
            isValid = false;
            errors["email"] = "Please enter your email Address.";
          }
      
          if (typeof input["email"] !== "undefined") {
              
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(input["email"])) {
              isValid = false;
              errors["email"] = "Please enter valid email address.";
            }
          }
      
          if (!input["password"]) {
            isValid = false;
            errors["password"] = "Please enter your password.";
          }
      
          if (!input["confirm_password"]) {
            isValid = false;
            errors["confirm_password"] = "Please enter your confirm password.";
          }
      
      
          this.setState({
            errors: errors
          });
      
          return isValid;
      }

    
         
render() {
    return( 
      <body className='bg-white'>
      <nav className="bg-White navbar-dark navbar" style={{paddingLeft:500,}}>
      <div className="row col-12 d-flex justify-content-center text-white">
      <h3></h3>
      </div>
      </nav>
            <div className='row' > 
            <div className='col-md-1'></div>
            <div className='col-md-5 frambg' >
            <div className='row' align="Left" style={{paddingLeft:70}} >
            <h4 className='text-light' style={{marginTop: 70}}>
            <img src={MyntInvestLogo} />
            </h4> 
            <p className="text-white" ><strong>Invest</strong> In The Best <strong>Startups</strong><br/>Raised Right From Their<br/><strong>Community</strong></p>
            <a href="#" class="fa fa-google" style={{fontSize: 20,width: 30,borderRadius: 50,color:'white'}}></a>
            <a href="#" class="fa fa-twitter" style={{fontSize: 20,width: 30,borderRadius: 50,color:'white'}}></a>
            <a href="#" class="fa fa-instagram" style={{fontSize: 20,width: 30,borderRadius: 50,color:'white'}}></a>
            <a href="#" class="fa fa-linkedin" style={{fontSize: 20,width: 30,borderRadius: 50,color:'white'}}></a> 
            </div>&nbsp;

            <div className={tilesClasses}  align="center">
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
            <p className='text-white' style={{paddingLeft:70,fontSize: 20}}>Trusted By Hundreds<br/> Of Companies</p>
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
        

            <div className='col-md-6 framrightbg'style={{paddingLeft:50}}>

                      
            <form name="Loginform" id="Loginform" method="POST" className="row m-5 g-3"  > 
              <div className="col-12" style={{fontSize:"14px",textAlign:"right"}}> 
              <div class="btn-group" role="group" aria-label="Basic example">
              <a href="/" className="text-right">
                <span className="btn btn-dark btn-sm text-sm "  style={{fontSize:"14px",textAlign:"right"}}>&nbsp;<b>
                  <i className='fa fa-home'></i>
                  &nbsp;Home</b></span></a>
              <a  onClick={this.openAdminPanel} className="text-right"> 
                  <span className="btn btn-dark  btn-sm  text-sm "  style={{fontSize:"14px",textAlign:"right"}}>&nbsp;<b>
                  <i className='fa fa-user'></i>
                  &nbsp;Admin Login </b></span>
                </a>
            </div>

             
              <div className="d-grid gap-2 mx-auto">
              
                <a href="/Signup" className="text-right">Not a member ?
                  <span className="text-success text-sm "  style={{fontSize:"14px",textAlign:"right"}}>&nbsp;<b>
                    Sign Up Now</b></span>
                </a>&nbsp; 
                
                
                </div>
                
              </div>
                
                <div className="col-12">
                <h3 align="Center">Welcome Back!</h3>  
                  <label for="logemail" className="form-label">E-mail</label>
                  <input type="text" className="form-control"  id="logemail" name="logemail" 
                    value={this.state.input.logemail}
                    onChange={this.handleLogChange}
                    placeholder="Enter your Email" />
                </div>


                <div className="col-12"> 
                  <label for="logpassword" className="form-label">Password</label>
                  <input type="password" className="form-control"  id="logpassword" name="logpassword" 
                    value={this.state.input.logpassword}
                    onChange={this.handleLogChange}
                    placeholder="Enter your Password" />
                </div>


                <div className="col-md-8"> 
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" name="rememberme" id="rememberme"  />
                    <label  className="form-label" for="rememberme">
                        <span>Remember me</span> 
                    </label>
                  </div>
                </div>

                <div className="col-md-4 text-right"> 
                <a href="#" > 
                  <span className="text-success " 
                   style={{fontSize:"14px",textAlign:"right"}}>&nbsp;<b>
                   Forgot Password?</b></span>
                </a>
                </div>


                <div className="col-12">
                  <div className="d-grid gap-2 mx-auto">
                      <button type="button" className="btn btn-success btn-sm w-100g"  wideMobile onClick={this.validateLogin}>Sign Up</button>
                      <span className="text-dark text-sm text-center"> -------------- OR -------------- </span>
                      <button type="button" className="btn btn-light btn-sm w-100g"  wideMobile >
                        Sign up With Google
                      </button>
                  </div>
                </div> 



                <div className="col-12 d-flex justify-content-center">
                <a href="/Founders" className="text-success point"  style={{fontSize:"14px",textAlign:"center"}}> 
                    <b>
                    Log In as Startup</b> 
                </a>
                </div> 



                </form> 
            </div>
           </div>
           </body>
    )       
}

}


export default Welcome;