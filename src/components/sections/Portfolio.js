import React, {Component} from "react";
import classNames from 'classnames';
import Button from '../elements/Button';
import Link from "@material-ui/core/Link";
import Image from "../elements/Image";
import '../Css/styles.css';
import ButtonGroup from "../elements/ButtonGroup";
import Input from '../elements/Input';

import 'bootstrap/dist/css/bootstrap.min.css';







const Portfolio = ({
    className,
    topOuterDivider,
    bottomOuterDivider,
    topDivider,
    bottomDivider,
    hasBgColor,
    invertColor,
    pushLeft,
    ...props
  }) => {

    

    
 
const tilesClasses = classNames(
'tiles-wrap',
pushLeft && 'push-left'
);return (

    <body>
    
             
        <div className="row" >
  
               <div className="row">
               <div className="col-md-1"></div>
               <div className="col-md-11">
               <div className="m-5 p-4">
               <div className="row">
               
               <div className="col-md-12">
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb arr-right">
                              <li class="breadcrumb-item text-sm" aria-current="page" style={{color:"Grey"}}>Investor</li>
                              <li class="breadcrumb-item text-sm text-dark active"><a class="opacity-5 text-dark" href="/Investors_Dashboard">Dashboard</a></li>
                              <li class="breadcrumb-item text-sm active" aria-current="page" style={{color:'#23b347'}}>Portfolio</li>
                              <li class="breadcrumb-item text-sm text-dark active"><a class="opacity-5 text-dark" href="/Investors_Analystics">Analystics</a></li>
                            </ol>
                          </nav>
                        </div>
                   

                
                          
              </div>
              
              
              <br/>
              <br/>
              <br/>
              <div className='row'>
                    
                    <div className='col-md-6'><strong style={{fontSize:30}}>Your Portfolio</strong></div>
                            <div className='col-md-6'>
                                <ButtonGroup>
                                    <Button tag="a" color="" style={{backgroundColor:"white",borderRadius:8,color:"#B3B6B7 ",borderColor:'#E5E8E8'}} wideMobile href="">
                                     Add Members
                                    </Button>
                                    
                                    <Button tag="a"  style={{backgroundColor:"#2ECC71",borderRadius:8,color:"white"}} wideMobile href="">
                                       Submit
                                    </Button>
                                </ButtonGroup>
                            </div>

                 </div>
                
                 <br/>
                 <div className='row'>
                    <div className='col-md-4'>
                     <Input id="newsletter" type="email" style={{backgroundColor:"white",textColor:"white"}} label="Subscribe" labelHidden hasIcon="right" placeholder="Enter The Keyword Here">
                         <svg width="16" height="12" xmlns="http://www.w3.org/2000/svg">
                           <path d="M9 5H1c-.6 0-1 .4-1 1s.4 1 1 1h8v5l7-6-7-6v5z" fill="#376DF9" />
                          </svg>
                        </Input>
                  </div>
                  <div className="col-md-4"></div>
                  <div className="col-md-4">
                  <label >Sort By :&nbsp;
                    <select  style={{backgroundColor:"white",width: 250,height: 40,fontSize:20,color:"grey"}}><p>22</p>
                        <option value="Most Funded"> Most Funded</option>
                        <option value="Most Transaction">Most Transaction</option>
                        <option value="Closing Soon">Closing Soon</option>
                       
                    </select>
                    </label>
                    </div>
                 </div>


                 <br/>
               <div className="row">
                <div className="col-md-12">
              <div className="table-responsive-xxl" >
                <table className="table">
                  <thead>
                    <tr>
                      <th className="">Company</th>
                      <th className="">Amt Invested</th>
                      <th className="">Date of Investment</th>
                      <th className="">Documents</th>
                      <th className="" >Action</th>
                     </tr>
                  </thead>
                  <tbody>
                    <tr>
                  
                      <td>
                         <Image  src={require('./../../assets/images/h1.jpg')}alt="Features tile icon 01"  
                          width={70}
                          height={70}
                          className="rounded-circle"  /><p style={{fontSize:18}}>SustVest</p> 
                      </td>
                       <td>
                        
                        <p>$8,000</p>
                      </td>
                      <td >
                        <p className=" text-xs font-weight-bold mb-0">29 Jan, 2022</p>
                      </td>

                      <td>
                         <Image   src={require('./../../assets/images/t01.jpg')}alt="Features tile icon 01"  width={45} height={45}  />
                       </td>
                     
                      <td>
                      
                        <Button tag="a" color="secondary" className='text-white' style={{backgroundColor:"#2ECC71",borderRadius:8,height:50,fontSize:15,width:200}} wideMobile href="/">
                            Download Agreement
                          </Button>
                        </td>
                    </tr>
                    
                    <tr>
                    <td>
                         <Image  src={require('./../../assets/images/t2.jpg')}alt="Features tile icon 01"  
                          width={70}
                          height={70}
                          className="rounded-circle"  /><p style={{fontSize:18}}>SustVest</p> 
                      </td>
                       <td>
                        
                        <p>$6,000</p>
                      </td>
                      <td>
                        <p>29 Jan, 2022</p>
                      </td>

                      <td>
                         <Image   src={require('./../../assets/images/t01.jpg')}alt="Features tile icon 01"  width={45} height={45} className="img-rounded"  />
                      </td>

                      <td>
                      <Button tag="a" color="secondary"  style={{backgroundColor:"#E5E8E8",borderRadius:8,height:50,fontSize:15,width:250}} wideMobile href="/">
                            Pending Sign Up from Startup
                          </Button>
                      </td>
                    </tr>
                    
                    <tr>
                    <td>
                         <Image  src={require('./../../assets/images/h1.jpg')}alt="Features tile icon 01"  
                          width={70}
                          height={70}
                          className="rounded-circle"  /><p style={{fontSize:18}}>SustVest</p> 
                      </td>
                       
                       <td>
                         <p>$8,000</p>
                      </td>
                      
                      <td>
                        <p>29 Jan, 2022</p>
                      </td>

                      <td>
                         <Image   src={require('./../../assets/images/t01.jpg')}alt="Features tile icon 01"  width={45} height={45}  />
                      </td>
                      
                     <td >
                     <Button tag="a" color="secondary" className='text-white' style={{backgroundColor:"#2ECC71",borderRadius:8,height:50,fontSize:15,width:200}} wideMobile href="/">
                            Download Agreement
                          </Button>
                      </td>
                    </tr>

                    <tr>
                    <td>
                         <Image  src={require('./../../assets/images/t2.jpg')}alt="Features tile icon 01"  
                          width={70}
                          height={70}
                          className="rounded-circle"  /><p style={{fontSize:18}}>SustVest</p> 
                      </td>
                       
                       <td>
                         <p>$6,000</p>
                      </td>
                      
                      <td>
                        <p>29 Jan, 2022</p>
                      </td>

                      <td>
                        <Image   src={require('./../../assets/images/t01.jpg')}alt="Features tile icon 01"  width={45} height={45}  />
                      </td>
                      
                     <td >
                     <Button tag="a" color="secondary" className='text-white' style={{backgroundColor:"#2ECC71",borderRadius:8,height:50,fontSize:15,width:200}} wideMobile href="/">
                            Download Agreement
                          </Button>
                      </td>
                    </tr>
                  
                  </tbody>
                </table>
                </div>  
              </div>
              </div>
           


                       
              


                         






              </div>
              </div>
              </div>
              </div>


    </body>          
              

              


              
               
               

) ;       
};



export default Portfolio;