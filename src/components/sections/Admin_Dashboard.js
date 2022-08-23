import React, {useState,setState} from 'react';
import '../Css/styles.css';
import Input from '../elements/Input';
import classNames from 'classnames';
import 'bootstrap/dist/css/bootstrap.min.css';

const tilesClasses = classNames(
        'tiles-wrap center-content',

      );
class Admin_Dashboard extends React.Component {         
render() {
    return(
      
            <body className='bg-white'>
             
            <div className='row'>  

<div className="container py-5">
  <div className="row" align="center" >
    <div className="col-lg-12 p-5" align="center">
      <h3 style={{color:"#23b347"}}> <i className="fa fa-tachometer" aria-hidden="true"></i>Admin Dashboard</h3>
      <ul class="nav nav-pills para">
  <li class="nav-item">
    <a class="nav-link active"  data-bs-toggle="tab" href="#home">DASHBOARD</a>
  </li>
  <li class="nav-item">
    <a class="nav-link"   data-bs-toggle="tab" href="#users">USERS</a>
  </li>
  <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#">INVESTOR</a>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item"   data-bs-toggle="tab" href="#choosesector">CHOOSE SECTOR </a></li>
      <li><a class="dropdown-item"   data-bs-toggle="tab" href="#standards">STANDARDS</a></li>
      <li><a class="dropdown-item"   data-bs-toggle="tab" href="#nationality">NATIONALITY</a></li>
      <li><a class="dropdown-item"   data-bs-toggle="tab" href="#kyc">KYC</a></li>
      <li><a class="dropdown-item"   data-bs-toggle="tab" href="#payments">PAYMENTS</a></li>
    </ul>
  </li> 
  <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#">START UP</a>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" data-bs-toggle="dropdown" href="#esigndoc">E-SIGN DOCUMENTS</a></li>
      <li><a class="dropdown-item" data-bs-toggle="dropdown" href="#companyprofile">COMPANY PROFILES</a></li>
      <li><a class="dropdown-item" data-bs-toggle="dropdown" href="#teams">TEAMS</a></li>
      <li><a class="dropdown-item" data-bs-toggle="dropdown" href="#pitchdesk">PITCH DESK</a></li>
      <li><a class="dropdown-item" data-bs-toggle="dropdown" href="#campaigns">CAMPAIGNS</a></li>
    </ul>
  </li> 
  <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown"  href="#account">ACCOUNT</a>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" data-bs-toggle="dropdown" href="#settings">SETTINGS</a></li> 
    </ul>
  </li>
</ul>
      <hr />
    </div>
  </div>

  <div className="row" align="center"> 
  <div class="tab-content">
  <div class="tab-pane container active" id="home">...</div>
  <div class="tab-pane container fade" id="users">...</div>
  <div class="tab-pane container fade" id="choosesector">...</div>
   <div class="tab-pane container fade" id="choosesector">...</div>
   <div class="tab-pane container fade" id="choosesector">...</div>
   <div class="tab-pane container fade" id="choosesector">...</div>
   <div class="tab-pane container fade" id="choosesector">...</div>
   <div class="tab-pane container fade" id="choosesector">...</div>
   <div class="tab-pane container fade" id="choosesector">...</div>
   <div class="tab-pane container fade" id="choosesector">...</div>
   <div class="tab-pane container fade" id="choosesector">...</div>
   <div class="tab-pane container fade" id="choosesector">...</div>
   <div class="tab-pane container fade" id="choosesector">...</div>
   <div class="tab-pane container fade" id="choosesector">...</div>
   
</div>


    <div className="col-xs-6 col-sm-6 col-md-3 col-lg-3 p-3">
      <a className="text-decoration-none" href="/Admin_Startup">
        <div className="card p-3 shadow bg-purple text-center border-0" style={{color:"#23b347"}}>
          <div className="card-body">
            
            <i className="fas fa-user-alt fa-2x" style={{backgroundColor:"white"}} aria-hidden="true"></i>
            <hr />
            <p className="card-title lead" style={{fontSize:18,color:"#23b347"}}> User</p>
          </div>
        </div>
      </a>
    </div>


    <div className="col-xs-6 col-sm-6 col-md-3 col-lg-3 p-3">
      <a className="text-decoration-none" href="/Admin_ChooseSector">
        <div className="card p-3 shadow bg-purple text-center border-0" style={{color:"#23b347"}}>
          <div className="card-body">
            <i className="glyphicon glyphicon-hand-up fa-2x" style={{backgroundColor:"white"}} aria-hidden="true"></i>
            <hr />
            <p className="card-title lead"style={{fontSize:18,color:"#23b347"}} >Investor Choose Sector</p>
          </div>
        </div>
      </a>
    </div>

    <div className="col-xs-6 col-sm-6 col-md-3 col-lg-3 p-3">
      <a className="text-decoration-none" href="/Admin_Standards">
        <div className="card p-3 shadow bg-purple text-center border-0" style={{color:"#23b347"}}>
          <div className="card-body">
            <i className="fa fa-edit fa-2x" style={{backgroundColor:"white"}} aria-hidden="true"></i>
            <hr />
            <p className="card-title lead"style={{fontSize:18,color:"#23b347"}} >Investor Standards</p>
          </div>
        </div>
      </a>
    </div>

    <div className="col-xs-6 col-sm-6 col-md-3 col-lg-3 p-3">
      <a className="text-decoration-none" href="/Admin_Nationality">
        <div className="card p-3 shadow bg-purple text-center border-0" style={{color:"#23b347"}}>
          <div className="card-body">
            <i className="fa fa-flag fa-2x" style={{backgroundColor:"white"}} aria-hidden="true"></i>
            <hr />
            <p className="card-title lead"style={{fontSize:18,color:"#23b347"}} >Investor Nationality</p>
          </div>
        </div>
      </a>
    </div>

    <div className="col-xs-6 col-sm-6 col-md-3 col-lg-3 p-3">
      <a className="text-decoration-none" href="/Admin_Kyc">
        <div className="card p-3 shadow bg-purple text-center border-0" style={{color:"#23b347"}}>
          <div className="card-body">
            <i className="fa fa-university fa-2x" style={{backgroundColor:"white"}} aria-hidden="true"></i>
            <hr />
            <p className="card-title lead"style={{fontSize:18,color:"#23b347"}} >Investor Kyc</p>
          </div>
        </div>
      </a>
    </div>

    <div className="col-xs-6 col-sm-6 col-md-3 col-lg-3 p-3">
      <a className="text-decoration-none" href="/Admin_Payment">
        <div className="card p-3 shadow bg-purple text-center border-0" style={{color:"#23b347"}}>
          <div className="card-body">
            <i className="fa fa-credit-card-alt fa-2x" style={{backgroundColor:"white"}} aria-hidden="true"></i>
            <hr />
            <p className="card-title lead"style={{fontSize:18,color:"#23b347"}} >Investor Payment</p>
          </div>
        </div>
      </a>
    </div>


    <div className="col-xs-6 col-sm-6 col-md-3 col-lg-3 p-3">
      <a className="text-decoration-none" href="/Admin_Analystics">
        <div className="card p-3 shadow bg-purple text-center border-0" style={{color:"#23b347"}}>
          <div className="card-body">
            <i className="fas fa-toolbox fa-2x" style={{backgroundColor:"white"}} aria-hidden="true"></i>
            <hr />
            <p className="card-title lead" style={{fontSize:18,color:"#23b347"}}>Startup Analystics</p>
          </div>
        </div>
      </a>
    </div>

    <div className="col-xs-6 col-sm-6 col-md-3 col-lg-3 p-3">
      <a className="text-decoration-none" href="/Admin_Banner">
        <div className="card p-3 shadow bg-purple text-center border-0" style={{color:"#23b347"}}>
          <div className="card-body">
            <i className="fa fa-id-card fa-2x" style={{backgroundColor:"white"}} aria-hidden="true"></i>
            <hr />
            <p className="card-title lead"style={{fontSize:18,color:"#23b347"}} >Startup Banner</p>
          </div>
        </div>
      </a>
    </div>


    <div className="col-xs-6 col-sm-6 col-md-3 col-lg-3 p-3">
      <a className="text-decoration-none" href="/Admin_FAQs">
        <div className="card p-3 shadow bg-purple text-center border-0" style={{color:"#23b347"}}>
          <div className="card-body">
            <i className="fa fa-question-circle-o fa-2x" style={{backgroundColor:"white"}} aria-hidden="true"></i>
            <hr />
            <p className="card-title lead"style={{fontSize:18,color:"#23b347"}} >Startup FAQs</p>
          </div>
        </div>
      </a>
    </div>

    <div className="col-xs-6 col-sm-6 col-md-3 col-lg-3 p-3">
      <a className="text-decoration-none" href="/Admin_Startup_Investors">
        <div className="card p-3 shadow bg-purple text-center border-0" style={{color:"#23b347"}}>
          <div className="card-body">
            <i className="fas fa-hand-holding-usd fa-2x" style={{backgroundColor:"white"}} aria-hidden="true"></i>
            <hr />
            <p className="card-title lead"style={{fontSize:18,color:"#23b347"}} >Startup Investors</p>
          </div>
        </div>
      </a>
    </div>

    <div className="col-xs-6 col-sm-6 col-md-3 col-lg-3 p-3">
      <a className="text-decoration-none" href="/Admin_Pressinfo">
        <div className="card p-3 shadow bg-purple text-center border-0" style={{color:"#23b347"}}>
          <div className="card-body">
            <i className="fas fa-newspaper fa-2x" style={{backgroundColor:"white"}} aria-hidden="true"></i>
            <hr />
            <p className="card-title lead"style={{fontSize:18,color:"#23b347"}} >Startup Press Info</p>
          </div>
        </div>
      </a>
    </div>

    <div className="col-xs-6 col-sm-6 col-md-3 col-lg-3 p-3">
      <a className="text-decoration-none" href="/Admin_Teaminfo">
        <div className="card p-3 shadow bg-purple text-center border-0" style={{color:"#23b347"}}>
          <div className="card-body">
            <i className="fa fa-bookmark-o fa-2x" style={{backgroundColor:"white"}} aria-hidden="true"></i>
            <hr />
            <p className="card-title lead" style={{fontSize:18,color:"#23b347"}}>Startup Team Info</p>
          </div>
        </div>
      </a>
    </div>

    <div className="col-xs-6 col-sm-6 col-md-3 col-lg-3 p-3">
      <a className="text-decoration-none" href="/Admin_Companyinfo">
        <div className="card p-3 shadow bg-purple text-center border-0" style={{color:"#23b347"}}>
          <div className="card-body">
            <i className="fa fa-building-o fa-2x" style={{backgroundColor:"white"}} aria-hidden="true"></i>
            <hr />
            <p className="card-title lead"style={{fontSize:18,color:"#23b347"}} >Startup Company Info</p>
          </div>
        </div>
      </a>
    </div>

    <div className="col-xs-6 col-sm-6 col-md-3 col-lg-3 p-3">
      <a className="text-decoration-none" href="/Admin_Agreement">
        <div className="card p-3 shadow bg-purple text-center border-0" style={{color:"#23b347"}}>
          <div className="card-body">
            <i className="fas fa-file-contract fa-2x" style={{backgroundColor:"white"}} aria-hidden="true"></i>
            <hr />
            <p className="card-title lead"style={{fontSize:18,color:"#23b347"}} >Startup Agreements</p>
          </div>
        </div>
      </a>
    </div>

    <div className="col-xs-6 col-sm-6 col-md-3 col-lg-3 p-3">
      <a className="text-decoration-none" href="/Admin_Businessinfo">
        <div className="card p-3 shadow bg-purple text-center border-0" style={{color:"#23b347"}}>
          <div className="card-body">
            <i className="fa fa-database fa-2x" style={{backgroundColor:"white"}} aria-hidden="true"></i>
            <hr />
            <p className="card-title lead"style={{fontSize:18,color:"#23b347"}} >Pitch Business Info</p>
          </div>
        </div>
      </a>
    </div>

    <div className="col-xs-6 col-sm-6 col-md-3 col-lg-3 p-3">
      <a className="text-decoration-none" href="/Admin_Competitioninfo">
        <div className="card p-3 shadow bg-purple text-center border-0" style={{color:"#23b347"}}>
          <div className="card-body">
            <i className="fa fa-info-circle fa-2x" style={{backgroundColor:"white"}} aria-hidden="true"></i>
            <hr />
            <p className="card-title lead"style={{fontSize:18,color:"#23b347"}} >Startup Pitch Competition Info</p>
          </div>
        </div>
      </a>
    </div>


    <div className="col-xs-6 col-sm-6 col-md-3 col-lg-3 p-3">
      <a className="text-decoration-none" href="/Admin_Probleminfo">
        <div className="card p-3 shadow bg-purple text-center border-0" style={{color:"#23b347"}}>
          <div className="card-body">
            <i className="fa fa-wechat fa-2x" style={{backgroundColor:"white"}} aria-hidden="true"></i>
            <hr />
            <p className="card-title lead"style={{fontSize:18,color:"#23b347"}} >Pitch Problem Info</p>
          </div>
        </div>
      </a>
    </div>

    <div className="col-xs-6 col-sm-6 col-md-3 col-lg-3 p-3">
      <a className="text-decoration-none" href="/Admin_Customerinfo">
        <div className="card p-3 shadow bg-purple text-center border-0" style={{color:"#23b347"}}>
          <div className="card-body">
            <i className="fa fa-users fa-2x" style={{backgroundColor:"white"}} aria-hidden="true"></i>
            <hr />
            <p className="card-title lead"style={{fontSize:18,color:"#23b347"}} >Pitch Customer Info</p>
          </div>
        </div>
      </a>
    </div>

    <div className="col-xs-6 col-sm-6 col-md-3 col-lg-3 p-3">
      <a className="text-decoration-none" href="/Admin_PotentialReturnsinfo">
        <div className="card p-3 shadow bg-purple text-center border-0" style={{color:"#23b347"}}>
          <div className="card-body">
            <i className="fa fa-exchange fa-2x" style={{backgroundColor:"white"}} aria-hidden="true"></i>
            <hr />
            <p className="card-title lead"style={{fontSize:18,color:"#23b347"}} >Pitch Potential Returns Info</p>
          </div>
        </div>
      </a>
    </div>

    <div className="col-xs-6 col-sm-6 col-md-3 col-lg-3 p-3">
      <a className="text-decoration-none" href="/Admin_Usagefundinfo">
        <div className="card p-3 shadow bg-purple text-center border-0" style={{color:"#23b347"}}>
          <div className="card-body">
            <i className="fa fa-inr fa-2x" style={{backgroundColor:"white"}} aria-hidden="true"></i>
            <hr />
            <p className="card-title lead"style={{fontSize:18,color:"#23b347"}} >Pitch Usagefunds Info</p>
          </div>
        </div>
      </a>
    </div>

    <div className="col-xs-6 col-sm-6 col-md-3 col-lg-3 p-3">
      <a className="text-decoration-none" href="/Admin_Productinfo">
        <div className="card p-3 shadow bg-purple text-center border-0" style={{color:"#23b347"}}>
          <div className="card-body">
            <i className="fas fa-box fa-2x" style={{backgroundColor:"white"}} aria-hidden="true"></i>
            <hr />
            <p className="card-title lead"style={{fontSize:18,color:"#23b347"}} >Pitch Product Info</p>
          </div>
        </div>
      </a>
    </div>

    
    <div className="col-xs-6 col-sm-6 col-md-3 col-lg-3 p-3">
      <a className="text-decoration-none" href="/Admin_Solution">
        <div className="card p-3 shadow bg-purple text-center border-0" style={{color:"#23b347"}}>
          <div className="card-body">
            <i className="far fa-lightbulb fa-2x" style={{backgroundColor:"white"}} aria-hidden="true"></i>
            <hr />
            <p className="card-title lead"style={{fontSize:18,color:"#23b347"}} >Pitch Solution</p>
          </div>
        </div>
      </a>
    </div>


    <div className="col-xs-6 col-sm-6 col-md-3 col-lg-3 p-3">
      <a className="text-decoration-none" href="/Admin_Tractioninfo">
        <div className="card p-3 shadow bg-purple text-center border-0" style={{color:"#23b347"}}>
          <div className="card-body">
            <i className="fas fa-magnet fa-2x" style={{backgroundColor:"white"}} aria-hidden="true"></i>
            <hr />
            <p className="card-title lead"style={{fontSize:18,color:"#23b347"}} >Pitch Traction Info</p>
          </div>
        </div>
      </a>
    </div>


    <div className="col-xs-6 col-sm-6 col-md-3 col-lg-3 p-3">
      <a className="text-decoration-none" href="/Admin_Visioninfo">
        <div className="card p-3 shadow bg-purple text-center border-0" style={{color:"#23b347"}}>
          <div className="card-body">
            <i className="fa fa-info fa-2x" style={{backgroundColor:"white"}} aria-hidden="true"></i>
            <hr />
            <p className="card-title lead"style={{fontSize:18,color:"#23b347"}} >Pitch Vision Info</p>
          </div>
        </div>
      </a>
    </div>

    

  </div>
</div>





           </div>
           </body>
    )       
}

}

export default Admin_Dashboard;