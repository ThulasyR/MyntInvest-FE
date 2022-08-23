import React, { Component } from "react";

import DataService from "../../service/DataService";

class Admin_Agreement extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchESIGN_DOC = this.onChangeSearchESIGN_DOC.bind(this);
    this.retrieveAgreement = this.retrieveAgreement.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveAgreement = this.setActiveAgreement.bind(this);
    this.removeAllAgreement = this.removeAllAgreement.bind(this);
    this.searchESIGN_DOC = this.searchESIGN_DOC.bind(this);
    this.state = {
        agreements: [],
      currentUser: null,
      currentIndex: -1,
      searchFirstName: ""
    };
  }
  componentDidMount() {
    this.retrieveAgreement();
  }
  onChangeSearchESIGN_DOC(e) {
    const searchESIGN_DOC = e.target.value;
    this.setState({
      searchESIGN_DOC: searchESIGN_DOC
    });
  }
  retrieveAgreement() {
     DataService.getAll("/Agreements")
      .then(response => {
        this.setState({
            agreements: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }
  refreshList() {
    this.retrieveAgreement();
    this.setState({
      currentAgreement: null,
      currentIndex: -1
    });
  }
  setActiveAgreement(agreements, index) {
    this.setState({
      currentAgreement: agreements,
      currentIndex: index
    });
  }
  removeAllAgreement() {
     DataService.deleteAll("/Agreements")
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }
  searchESIGN_DOC() {
     DataService.findByTitle("/Agreements?Esign_Doc="+this.state.searchESIGN_DOC)
      .then(response => {
        this.setState({
            agreements: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }





  render() {
    const { searchFirstName, agreements, currentAgreement, currentIndex } = this.state;
    return (
      <div className="container">
        <h3 align="center" style={{marginTop:100}}>ADMIN - STARTUP AGREEMENT</h3> 
      <div className="table-responsive">
      <table  className="table" style={{fontSize:"12px",width:"100%"}}>
        <thead className="bg-success text-white">
          <tr>
            <th>ID</th> 
            <th>MTUSER ID</th> 
            <th>EMAIL</th> 
            <th>MODULE</th> 
            <th>ESIGN DOC</th> 
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
        {agreements &&
              agreements.map((agreement, index) => (
            <tr>
            <td>{agreement.id}</td>  
            <td>{agreement.MTUSER_ID}</td> 
            <td>{agreement.EMAIL}</td> 
            <td>{agreement.MODULE}</td> 
            <td>{agreement.ESIGN_DOC}</td> 
            <td>{agreement.STATUS}</td> 
            <td>{agreement.COMMENTS}</td> 
            <td>{agreement.DESCRIPTION}</td> 
            <td>{agreement.CREATED_USER}</td> 
            <td>{agreement.CREATED_DATE}</td> 
            <td>{agreement.MODIFIED_USER}</td> 
            <td>{agreement.MODIFIED_DATE}</td>
             <td>
                <button class="btn btn-primary"><i className="fa fa-edit"></i></button>
                <button  class="btn btn-danger"><i className="fa fa-trash"></i></button>
              </td>
            </tr>
           
          ))}
        </tbody>
      </table>
      </div>
      </div>
    );
  }
}

export default Admin_Agreement;