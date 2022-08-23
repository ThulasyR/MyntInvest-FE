import React, { Component } from "react";
import DataService from "../../service/DataService";

class Admin_Standards extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchINV_RISK = this.onChangeSearchINV_RISK.bind(this);
    this.retrieveStandard = this.retrieveStandard.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveStandard = this.setActiveStandard.bind(this);
    this.removeAllStandard = this.removeAllStandard.bind(this);
    this.searchINV_RISK = this.searchINV_RISK.bind(this);
    this.state = {
      standards: [],
      currentStandard: null,
      currentIndex: -1,
      searchINV_RISK: ""
    };
  }
  componentDidMount() {
    this.retrieveStandard();
  }
  onChangeSearchINV_RISK(e) {
    const searchINV_RISK = e.target.value;
    this.setState({
      searchINV_RISK: searchINV_RISK
    });
  }
  retrieveStandard() {
     DataService.getAll("/Standards")
      .then(response => {
        this.setState({
            standards: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }
  refreshList() {
    this.retrieveStandard();
    this.setState({
      currentTutorial: null,
      currentIndex: -1
    });
  }
  setActiveStandard(standards, index) {
    this.setState({
      currentStandard: standards,
      currentIndex: index
    });
  }
  removeAllStandard() {
     DataService.deleteAll("/Standards")
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }
  searchINV_RISK() {
     DataService.findByTitle("Standards?INV_RISK="+this.state.searchINV_RISK)
      .then(response => {
        this.setState({
            standards: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }





  render() {
    const { searchINV_RISK, standards, currentStandard, currentIndex } = this.state;
    return (
      <div className="container">
      <div className="table-responsive">
       <h3 align="center" style={{marginTop:100}}>ADMIN - INVESTORS VERIFY STANDARDS MODULE</h3> 
      <table  className="table" style={{fontSize:"12px",width:"100%"}}>
        <thead className="bg-success text-white">
          <tr>
            <th>ID</th> 
            <th>MTUSER ID</th> 
            <th>EMAIL</th> 
            <th>MODULE</th> 
            <th>INV RISK</th> 
            <th>INV LIMITED TRANSFER</th> 
            <th>INV DIVERSIFICATION</th> 
            <th>INV CANCELLATION</th> 
            <th>INV RESEARCH</th> 
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
        {standards &&
              standards.map((standard, index) => (
            <tr>
            <td>{standard.id}</td> 
            <td>{standard.MTUSER_ID}</td> 
            <td>{standard.EMAIL}</td> 
            <td>{standard.MODULE}</td> 
            <td>{standard.INV_RISK}</td> 
            <td>{standard.INV_LIMITED_TRANSFER}</td> 
            <td>{standard.INV_DIVERSIFICATION}</td> 
            <td>{standard.INV_CANCELLATION}</td> 
            <td>{standard.INV_RESEARCH}</td> 
            <td>{standard.STATUS}</td> 
            <td>{standard.COMMENTS}</td> 
            <td>{standard.DESCRIPTION}</td> 
            <td>{standard.CREATEDUSER}</td> 
            <td>{standard.CREATEDDATE}</td> 
            <td>{standard.MODIFIEDUSER}</td> 
            <td>{standard.MODIFIEDDATE}</td>
            <td>
              <button class="btn btn-success"><i className="fa fa-edit"></i>
              </button ><button  class="btn btn-success"><i className="fa fa-trash"></i></button></td>
            </tr>
           
          ))}
        </tbody>
      </table>
      </div>
      </div>
    );
  }
}

export default Admin_Standards;