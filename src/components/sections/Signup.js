import React from "react";

import '../Css/styles.css'; 
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import classNames from 'classnames';
import DataService from '../../service/DataService'; 
import MyntInvestLogo from '../../assets/images/MyntInvest.png';
import $ from "jquery";
const tilesClasses = classNames(
    'tiles-wrap center-content',
  ); 

  const current = new Date();
  const date = `${current.getFullYear()}-${current.getMonth()+1}-${current.getDate()}`;//mysql insert date format
   

class Registration extends React.Component {
 
    constructor() {
    super();
    this.state = { 
      input:{},
      errors:{},
      id: null,
      FIRSTNAME : "",
      LASTNAME : "",
      EMAIL : "",
      SCHOOL : "",
      PASSWORD : "",
      CONPASSWORD : "",
      AGREECHK : null, 
      COMMENTS: null,
      CREATED_DATE: null,
      CREATED_USER: null,
      DESCRIPTION: null,
      MODIFIED_DATE: null,
      MODIFIED_USER: null,
      MODULE:null,
      ROLE: null,
      STATUS: null,
    };
     
    this.saveUser = this.saveUser.bind(this);
    this.newUser = this.newUser.bind(this);
      
    this.handleChange = this.handleChange.bind(this);
    this.handleChkChange = this.handleChkChange.bind(this);
  }
  handleChkChange(event){
    event.preventDefault();
    let input = this.state.input;
    var chk = event.target.checked;
    console.log(chk);

    if(chk){
      event.target.value = "T";
    }else{
     
      event.target.value = "F";
      
    }

    input[event.target.name] = event.target.value;
  }
  handleChange(event) {
    event.preventDefault();
    let input = this.state.input;
    input[event.target.name] = event.target.value;
   
    this.setState({ 
      FIRSTNAME : this.state.input.firstname,
      LASTNAME : this.state.input.lastname,
      EMAIL :this.state.input.email,
      SCHOOL : this.state.input.schoolname,
      PASSWORD : this.state.input.password,
      CONPASSWORD : this.state.input.confirm_password,
      AGREECHK : this.state.input.agreechk,
      COMMENTS: "test login",
      CREATED_DATE: date,
      CREATED_USER: this.state.input.firstname,
      DESCRIPTION: "Logged User",
      MODIFIED_DATE: null,
      MODIFIED_USER: null,
      MODULE:"Start Up",
      ROLE: "User",
      STATUS: "Active",
    });




  }
     
    
   saveUser(event) {
    event.preventDefault(); 
    if(this.validateSignup()){
    var data = {
      FIRSTNAME:this.state.input.firstname,  
      LASTNAME : this.state.input.lastname,
      EMAIL :this.state.input.email,
      SCHOOL : this.state.input.schoolname,
      PASSWORD : this.state.input.password,
      CONPASSWORD : this.state.input.confirm_password,
      AGREECHK : "T",
      COMMENTS: "test login",
      CREATED_DATE: date,
      CREATED_USER: this.state.input.firstname,
      DESCRIPTION: "Logged User",
      MODIFIED_DATE: date,
      MODIFIED_USER: this.state.input.firstname,
      MODULE:"Start Up",
      ROLE: "User",
      STATUS: "Active",
    };

    console.log(data);


   
    DataService.create("/mt_user",data)
      .then(response => {  
          window.showLoader(); 
        this.setState({
          id: response.data.id,
          FIRSTNAME :response.data.FIRSTNAME,
          LASTNAME : response.data.LASTNAME,
          EMAIL :response.data.EMAIL,
          SCHOOL : response.data.SCHOOL,
          PASSWORD : response.data.PASSWORD,
          CONPASSWORD : response.data.CONPASSWORD,
          AGREECHK : response.data.AGREECHK,
          COMMENTS:response.data.COMMENTS,
          CREATED_DATE: response.data.CREATED_DATE,
          CREATED_USER: response.data.CREATED_USER,
          DESCRIPTION: response.data.DESCRIPTION,
          MODIFIED_DATE: response.data.MODIFIED_DATE,
          MODIFIED_USER: response.data.MODIFIED_USER,
          MODULE:response.data.MODULE,
          ROLE: response.data.ROLE,
          STATUS: response.data.STATUS,
          
        });  

        window.showAlert("User Successfully inserted!!!!","/Login");
        
      })
      .catch(e => {
        window.showLoader(); 
        console.log(e);
        window.showAlert("User Not registered","/Signup");
        // window.location.href = "/Signup";//to redirect to normal links
      });
    }
  }
  newUser() {
    this.setState({
      id: null,
      FIRSTNAME : "",
      LASTNAME : "",
      EMAIL : "",
      SCHOOL : "",
      PASSWORD : "",
      CONPASSWORD : "",
      AGREECHK : null,
      COMMENTS: null,
      CREATED_DATE: null,
      CREATED_USER: null,
      DESCRIPTION: null,
      MODIFIED_DATE: null,
      MODIFIED_USER: null,
      MODULE:null,
      ROLE: null,
      STATUS: null,
    });
  }
    validateSignup(){
      let input = this.state.input;
      let errors = {};
      let isValid = true;
   
      if (!input["firstname"]) {
        isValid = false;
        errors["firstname"] = "Please enter your firstname.";
        $("#firstname").focus();
      }
   
  
      if (!input["lastname"]) {
        isValid = false;
        errors["lastname"] = "Please enter your lastname.";
        $("#lastname").focus();
      }
  
      
      
      if (!input["email"]) {
        isValid = false;
        errors["email"] = "Please enter your email Address.";
        $("#email").focus();
      }
  
       

      if (!input["schoolname"]) {
        isValid = false;
        errors["schoolname"] = "Please enter your schoolname.";
        $("#schoolname").focus();
      }
  
      // if (typeof input["schoolname"] !== "undefined") {
      //   const re = /^\S*$/;
      //   if(input["schoolname"].length < 6 || !re.test(input["schoolname"])){
      //       isValid = false;
      //       errors["schoolname"] = "Please enter valid schoolname.";
      //   }
      // }

      if (!input["password"]) {
        isValid = false;
        errors["password"] = "Please enter your password.";
        $("#password").focus();
      }
  
      if (!input["confirm_password"]) {
        isValid = false;
        errors["confirm_password"] = "Please Re-enter your password.";
        $("#confirm_password").focus();
      }
  
      if (typeof input["password"] !== "undefined") {
        if(input["password"].length < 6){
            isValid = false;
            errors["password"] = "Please add at least 6 charachter.";
            $("#password").focus();
        }
      }
  
      if (typeof input["password"] !== "undefined" && typeof input["confirm_password"] !== "undefined") {
          
        if (input["password"] != input["confirm_password"]) {
          isValid = false;
          errors["password"] = "Passwords don't match.";
          $("#password").focus();
        }
      }
  

      if (!document.getElementById("agreechk").checked) {
        isValid = false;
        errors["agreechk"] = "Please you agree to our Terms, Privacy Policy and Cookies Policy. "; 
        $("#agreechk").focus();
      }


      this.setState({
        errors: errors
      });
  
      return isValid;
  }
     
  render() {
    return (
            <body className='bg-white'>
            <nav className="bg-White navbar-dark navbar" style={{paddingLeft:500,paddingTop:50}}>
            <div className="row col-12 d-flex justify-content-center text-white">
            <h3></h3>
            </div>
            </nav>
            <div className='row '  > 
            <div className='col-md-1'></div>
            <div className='col-md-5 frambg'>
            <div className='row' align="Left" style={{paddingLeft:70}} >
            <h4 className='text-light' style={{marginTop: 70}}>
              <img src={MyntInvestLogo} /></h4> 
            <p className="text-white" ><strong>Invest</strong> In The Best <strong>Startups</strong><br/>Raised Right From Their<br/><strong>Community</strong></p>
            <a href="#" className="fa fa-google" style={{fontSize: 20,width: 30,borderRadius: 50,color:'white'}}></a>
            <a href="#" className="fa fa-twitter" style={{fontSize: 20,width: 30,borderRadius: 50,color:'white'}}></a>
            <a href="#" className="fa fa-instagram" style={{fontSize: 20,width: 30,borderRadius: 50,color:'white'}}></a>
            <a href="#" className="fa fa-linkedin" style={{fontSize: 20,width: 30,borderRadius: 50,color:'white'}}></a> 
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
            <p className='text-white' style={{paddingLeft:70,fontSize: 20}}>Trusted By Hundreds<br/> Of Companies</p>
            </div>
            </div>

            <div className={tilesClasses}>
            <div className='col-md-12'>
            <div className="reveal-from-bottom" data-reveal-delay="600">
            <ButtonGroup className="align-item-center" >
            <Button tag="a" className="text-white" style={{backgroundColor:"#58C479",borderRadius:5,color:"grey"}} wideMobile href="">
            9UNICORNS
            </Button>
            <Button tag="a" color="primary" style={{backgroundColor:"white",color:"#2ECC71"}} wideMobile href="">
            Better
            </Button>
            <Button tag="a" color="secondary" style={{backgroundColor:"#58C479",borderRadius:5,color:"white"}} wideMobile href="">
            L I V W E L L
            </Button></ButtonGroup><br/>
            <ButtonGroup>
            <Button tag="a" color="primary" style={{backgroundColor:"#58C479",color:"white"}} wideMobile href="">
            Microsoft
            </Button>
            <Button tag="a" color="primary" style={{backgroundColor:"#58C479",color:"white"}} wideMobile href="">
            teradata
            </Button>
            <Button tag="a" color="primary" style={{backgroundColor:"#58C479",color:"white"}} wideMobile href="">
            Google
            </Button>
            </ButtonGroup>
            </div>
            </div>
            </div>
            </div>
        
            <div className='col-md-6 framrightbg'> 
            <form name="Signupform" id="Signupform" method="POST" className="row m-5 g-3"  > 
              <div className="col-12" style={{fontSize:"14px",textAlign:"right"}}>
                <a href="/Login" className="text-right">Already User?
                  <span className="text-success text-sm "  style={{fontSize:"14px",textAlign:"right"}}>&nbsp;<b>
                    Sign In</b></span>
                </a>
              </div>
                <div className="col-md-6">  
                    <label for="firstname" className="form-label">First Name</label>
                    <input type="text" className="form-control" id="firstname" name="firstname"  
                      value={this.state.input.firstname}
                      onChange={this.handleChange}
                      placeholder="Enter your First Name" 
                      maxlength="150"
                      />
                      <div className="text-danger errors" style={{fontSize:15}}>{this.state.errors.firstname}</div>
                </div>
                <div className="col-md-6"> 
                  <label for="lastname" className="form-label">Last Name</label>
                  <input type="text" className="form-control" id="lastname" name="lastname" 
                    value={this.state.input.lastname}
                    onChange={this.handleChange}
                    placeholder="Enter your Last Name"
                    maxlength="150"
                    />
                     <div className="text-danger errors" style={{fontSize:15}}>{this.state.errors.lastname}</div>
                </div>
                <div className="col-12">
                  <label for="email" className="form-label">Email</label>
                  <input type="text" className="form-control"  id="email" name="email" 
                    value={this.state.input.email}
                    onChange={this.handleChange}
                    placeholder="Enter your Email"
                    maxlength="250" />
                     <div className="text-danger errors" style={{fontSize:15}}>{this.state.errors.email}</div>
                </div>
                <div className="col-12">
                  <label for="school" className="form-label">School</label>
                  <input type="text" className="form-control" id="schoolname" name="schoolname" 
                    value={this.state.input.schoolname}
                    onChange={this.handleChange}
                    placeholder="Enter your School Name" 
                    maxlength="500"
                    />
                     <div className="text-danger errors" style={{fontSize:15}}>{this.state.errors.schoolname}</div>
                </div>
                <div className="col-md-6">
                    <label for="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name="password"
                    value={this.state.input.password}
                    onChange={this.handleChange}
                    placeholder="Enter your Password"
                    maxlength="6"
                  />
                   <div className="text-danger errors" style={{fontSize:15}}>{this.state.errors.password}</div>
                </div>
                <div className="col-md-6">
                  <label for="confirm_password" className="form-label">Confirm Password</label>
                  <input type="password" className="form-control" id="confirm_password" name="confirm_password"
                  value={this.state.input.confirm_password}
                  onChange={this.handleChange} 
                  placeholder="Enter your Confirm Password"
                  maxlength="6"
                  />
                  <div className="text-danger errors" style={{fontSize:15}} id="conpassdiv">{this.state.errors.confirm_password}</div>
                </div>
                
                <div className="col-12">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" name="agreechk" id="agreechk" onChange={this.handleChkChange} />
                    <label  className="form-label" for="agreechk">
                        <span>Creating an account means you're okay with our Terms of Service, Privacy Policy <br/>
                        and our default Notification Settings.</span>
                    </label>
                    <div className="text-danger errors" style={{fontSize:15}}>{this.state.errors.agreechk}</div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="d-grid gap-2 mx-auto">
                      <button type="button" className="btn btn-success btn-sm w-100g"  wideMobile onClick={this.saveUser}>Sign Up</button>
                      <span className="text-dark text-sm text-center"> ----- OR ----- </span>
                      <button type="button" className="btn btn-light btn-sm w-100g" id="googleintrgration"  wideMobile  >
                        Sign up With Google
                      </button>
                  </div>
                </div>
              </form> 

            
            </div>
         
         
           </div>
         
           </body>
    )       
}
};

export default Registration;
