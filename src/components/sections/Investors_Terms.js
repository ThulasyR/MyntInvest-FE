import React, {useState,setState,Component} from 'react';
import {NavLink,Link} from "react-router-dom";
import Switch from "react-switch";
import '../Css/styles.css';



class Investors_Terms extends Component {
    constructor() {
        super();
        this.state = { checked: false };
        this.handleChange = this.handleChange.bind(this);
      }
    
      handleChange(checked) {
        this.setState({ checked });
      }
    
render() {
    return(
      <body className='bg-white' >&nbsp;
               <div className="row" style={{paddingLeft:10}}>
               <div className="col-md-1"></div>
               <div className="col-md-10" style={{paddingright:30}}>
               <h2>Become An <strong style={{color:"#23b347"}}>Investors</strong></h2>              
               <p style={{fontSize:15}}>To invest through Tyke, you must understand the basics of Startup Investing, Please acknowledge that you are aware of the following:</p>
               </div>
               <div className="col-md-1"></div>
               </div>

               <div className="row" style={{paddingLeft:10}}>
               <div className="col-md-1"></div>
               <div className="col-md-10">
               <h5>01 Risk</h5>             
               <p style={{fontSize:15}}>To invest through Tyke, you must understand the basics of Startup Investing, Please acknowledge that you are aware of the following:</p>
               <div>
              

               <input
                         className="react-switch-checkbox"
                         id={'react-switch-new-1'}
                         type="checkbox"
                        />
                         <label>
                            <Switch onChange={this.handleChange} checked={this.state.checked} />
                        </label><p style={{fontSize:12,marginLeft:80,marginTop:-19}}>I understand that I can lose the money i'm investing</p>
                    </div><hr/>
               </div>
               <div className="col-md-1"></div>
               </div>

               <div className="row" style={{paddingLeft:10}}>
               <div className="col-md-1"></div>
               <div className="col-md-10">
               <h5>02 Limited Transfer</h5>             
               <p style={{fontSize:15}}>Investment in startups in highly illud such companies are unite/private and cannot be sold easily on an exchange or simillar Secondry Trading</p>
               <div>
               <input
                         className="react-switch-checkbox"
                         id={'react-switch-new-2'}
                         type="checkbox"
                        />
                         <label>
                            <Switch onChange={this.handleChange} checked={this.state.checked} />
                        </label><p style={{fontSize:12,marginLeft:80,marginTop:-19}}>I understand that I can lose the money i'm investing</p>
                    </div><hr/>
               </div>
               <div className="col-md-1"></div>
               </div>

               <div className="row" style={{paddingLeft:10}}>
               <div className="col-md-1"></div>
               <div className="col-md-10">
               <h5>03 Diversification</h5>             
               <p style={{fontSize:15}}>Investment in startups in highly illud such companies are unite/private and cannot be sold easily on an exchange or simillar Secondry Trading</p>
               <div>
               <input
                         className="react-switch-checkbox"
                         id={'react-switch-new-3'}
                         type="checkbox"
                        />
                         <label>
                            <Switch onChange={this.handleChange} checked={this.state.checked} />
                        </label><p style={{fontSize:12,marginLeft:80,marginTop:-19}}>I understand that it's safer to split money across many investments across asset classes</p>
                    </div><hr/>
               </div>
               <div className="col-md-1"></div>
               </div>


               <div className="row" style={{paddingLeft:10}}>
               <div className="col-md-1"></div>
               <div className="col-md-10">
               <h5>04 Cancellation</h5>             
               <p style={{fontSize:15}}>I understand that i can't cancel after the 48-hour cencellation deadline </p>
               <div>
               <input
                         className="react-switch-checkbox"
                         id={'react-switch-new-4'}
                         type="checkbox"
                        />
                         <label>
                            <Switch onChange={this.handleChange} checked={this.state.checked} />
                        </label><p style={{fontSize:12,marginLeft:80,marginTop:-19}}>I understand that i can lose the money i'm investing</p>
                    </div><hr/>
               </div>
               <div className="col-md-1"></div>
               </div>
      
              



               <div className="row" style={{paddingLeft:10}}>
               <div className="col-md-1"></div>
               <div className="col-md-10">
               <h5>05 Research</h5>             
               <p style={{fontSize:15}}>Do your own research. Read the documents provided by each company. Get independent legal accounting and financial advice. if you have any<br/>questions or need more information, reach out to us via support </p>
               <div>
               <input
                         className="react-switch-checkbox"
                         id={'react-switch-new-5'}
                         type="checkbox"
                        />
                         <label>
                            <Switch onChange={this.handleChange} checked={this.state.checked} />
                        </label><p style={{fontSize:12,marginLeft:80,marginTop:-19}}>I understand that doing research is my own responsibillity</p>
                    </div><hr/>
               </div>
               <div className="col-md-1"></div>
               </div>

               <div className='row'>
                       <div className='col-md-12 'align='Right'>
                         <NavLink  to="/Investors_Dashboard" className="nav-link text-white " style={{width: 280,height:'auto',backgroundColor: "#2ECC71",borderRadius:10,textAlign:'center'}} >Finished</NavLink>
                       </div>
                   </div>
      </body>


    )

}
}

export default Investors_Terms;