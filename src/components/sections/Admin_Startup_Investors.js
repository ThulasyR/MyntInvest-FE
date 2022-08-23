import React, { Component } from "react";
import DataService from "../../service/DataService";

class Admin_Startup_Investor extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchINVESTOR_SNO = this.onChangeSearchINVESTOR_SNO.bind(this);
    this.retrieveInvestorsDet = this.retrieveInvestorsDet.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveInvestorsDet = this.setActiveInvestorsDet.bind(this);
    this.removeAllInvestorsDet = this.removeAllInvestorsDet.bind(this);
    this.searchINVESTOR_SNO = this.searchINVESTOR_SNO.bind(this);
    this.state = {
      investorsDets: [],
      currentInvestorsDet: null,
      currentIndex: -1,
      searchINVESTOR_SNO: ""
    };
  }
  componentDidMount() {
    this.retrieveInvestorsDet();
  }
  onChangeSearchINVESTOR_SNO(e) {
    const searchINVESTOR_SNO = e.target.value;
    this.setState({
      searchINVESTOR_SNO: searchINVESTOR_SNO
    });
  }
  retrieveInvestorsDet() {
     DataService.getAll("/mt_InvestorsDet")
      .then(response => {
        this.setState({
          investorsDets: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }
  refreshList() {
    this.retrieveInvestorsDet();
    this.setState({
      currentInvestorsDet: null,
      currentIndex: -1
    });
  }
  setActiveInvestorsDet(investorsDets, index) {
    this.setState({
      currentInvestorsDet: investorsDets,
      currentIndex: index
    });
  }
  removeAllInvestorsDet() {
     DataService.deleteAll("/InvestorsDet")
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }
  searchINVESTOR_SNO() {
     DataService.findByTitle("/InvestorsDets?INVESTOR_SNOe="+this.state.searchINVESTOR_SNO)
      .then(response => {
        this.setState({
          investorsDets: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }





  render() {
    const { searchINVESTOR_SNO, investorsDets, currentInvestorsDet, currentIndex } = this.state;
    return (
      <div className="container">
      <div className="table-responsive">
       <h3 align="center" style={{marginTop:100}}>ADMIN - START UP MODULE</h3> 
      <table  className="table" style={{fontSize:"12px",width:"100%"}}>
        <thead className="bg-success text-white">
          <tr>
            <th>ID</th> 
            <th>MTUSER ID</th> 
            <th>EMAIL</th> 
            <th>MODULE</th> 
            <th>INVESTOR SNO</th> 
            <th>INV TEAM NAME</th> 
            <th>TEAM POSITION</th> 
            <th>FB LINK</th> 
            <th>INSTA LINK</th> 
            <th>LINKEDIN LINK</th> 
            <th>BIO</th> 
            <th>PRO PIC</th>
            <th>STATUS</th>
            <th>COMMENTS</th> 
            <th>DESCRIPTION</th> 
            <th>CREATED USER</th> 
            <th>CREATED DATE</th> 
            <th>MODIFIED USER</th> 
            <th>MODIFIED DATE</th> 
            <th>OPTIONS</th> 
          </tr>
        </thead>
        <tbody>
        {investorsDets &&
              investorsDets.map((InvestorsDet, index) => (
            <tr>
            <td>{InvestorsDet.id}</td> 
            <td>{InvestorsDet.MTUSER_ID}</td> 
            <td>{InvestorsDet.EMAIL}</td> 
            <td>{InvestorsDet.MODULE}</td> 
            <td>{InvestorsDet.INVESTOR_SNO}</td> 
            <td>{InvestorsDet.INV_TEAM_NAME}</td> 
            <td>{InvestorsDet.TEAM_POSITION}</td> 
            <td>{InvestorsDet.FB_LINK}</td> 
            <td>{InvestorsDet.INSTA_LINK}</td> 
            <td>{InvestorsDet.LINKEDIN_LINK}</td>
            <td>{InvestorsDet.BIO}</td> 
            <td>{InvestorsDet.PRO_PIC}</td>  
            <td>{InvestorsDet.STATUS}</td> 
            <td>{InvestorsDet.COMMENTS}</td> 
            <td>{InvestorsDet.DESCRIPTION}</td> 
            <td>{InvestorsDet.CREATEDUSER}</td> 
            <td>{InvestorsDet.CREATEDDATE}</td> 
            <td>{InvestorsDet.MODIFIEDUSER}</td> 
            <td>{InvestorsDet.MODIFIEDDATE}</td>
            <td>
              <button class="btn btn-primary"><i className="fa fa-edit"></i>
              </button ><button  class="btn btn-danger"><i className="fa fa-trash"></i></button></td>
            </tr>
           
          ))}
        </tbody>
      </table>
      </div>
      </div>
    );
  }
}

export default Admin_Startup_Investor;