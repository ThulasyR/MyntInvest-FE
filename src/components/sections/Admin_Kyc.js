import React, { Component } from "react";
import DataService from "../../service/DataService";

class Admin_Kyc extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchINV_BANK_ACC_NUMBER = this.onChangeSearchINV_BANK_ACC_NUMBER.bind(this);
    this.retrieveKyc = this.retrieveKyc.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveKyc = this.setActiveKyc.bind(this);
    this.removeAllKyc = this.removeAllKyc.bind(this);
    this.searchINV_BANK_ACC_NUMBER = this.searchINV_BANK_ACC_NUMBER.bind(this);
    this.state = {
      Kycs: [],
      currentKyc: null,
      currentIndex: -1,
      searchINV_BANK_ACC_NUMBER: ""
    };
  }
  componentDidMount() {
    this.retrieveKyc();
  }
  onChangeSearchINV_BANK_ACC_NUMBER(e) {
    const searchINV_BANK_ACC_NUMBER = e.target.value;
    this.setState({
      searchINV_BANK_ACC_NUMBER: searchINV_BANK_ACC_NUMBER
    });
  }
  retrieveKyc() {
     DataService.getAll("/Kyc")
      .then(response => {
        this.setState({
            Kycs: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }
  refreshList() {
    this.retrieveKyc();
    this.setState({
      currentKyc: null,
      currentIndex: -1
    });
  }
  setActiveKyc(Kycs, index) {
    this.setState({
      currentUser: Kycs,
      currentIndex: index
    });
  }
  removeAllKyc() {
     DataService.deleteAll("/Kyc")
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }
  searchINV_BANK_ACC_NUMBER() {
     DataService.findByTitle("/Kyc?Inv_Bank_Acc_Number="+this.state.searchINV_BANK_ACC_NUMBER)
      .then(response => {
        this.setState({
          Kycs: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }





  render() {
    const { searchINV_BANK_ACC_NUMBER, Kycs, currentKyc, currentIndex } = this.state;
    return (
      <div className="container">
        <h3 align="center" style={{marginTop:100}}>ADMIN - INVESTOR KYC MODULE</h3> 
      <div className="table-responsive">
      <table  className="table" style={{fontSize:"12px",width:"100%"}}>
        <thead className="bg-success text-white">
          <tr>
            <th>ID</th> 
            <th>MTUSER ID</th> 
            <th>EMAIL</th> 
            <th>MODULE</th> 
            <th>MOBILE NUMBER</th> 
            <th>MOBILE OTP</th> 
            <th>PANCARD NO</th> 
            <th>DATE</th> 
            <th>MONTH</th> 
            <th>YEAR</th> 
            <th>BANK ACC NUMBER</th> 
            <th>BANK IFSC CODE</th> 
            <th>BANK YEAR</th> 
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
        {Kycs &&
              Kycs.map((Kyc, index) => (
            <tr>
            <td>{Kyc.id}</td> 
            <td>{Kyc.MTUSER_ID}</td> 
            <td>{Kyc.EMAIL}</td> 
            <td>{Kyc.MODULE}</td> 
            <td>{Kyc.INV_MOBILE_NUMBER_VERIFY}</td> 
            <td>{Kyc.INV_MOBILE_OTP}</td> 
            <td>{Kyc.INV_PANCARD_NO}</td> 
            <td>{Kyc.DATE}</td> 
            <td>{Kyc.MONTH}</td> 
            <td>{Kyc.YEAR}</td> 
            <td>{Kyc.INV_BANK_ACC_NUMBER}</td> 
            <td>{Kyc.INV_BANK_IFSC_CODE}</td> 
            <td>{Kyc.BANK_YEAR}</td> 
            <td>{Kyc.STATUS}</td> 
            <td>{Kyc.COMMENTS}</td> 
            <td>{Kyc.DESCRIPTION}</td> 
            <td>{Kyc.CREATED_USER}</td> 
            <td>{Kyc.CREATED_DATE}</td> 
            <td>{Kyc.MODIFIED_USER}</td> 
            <td>{Kyc.MODIFIED_DATE}</td>
            <td>
              <button class="btn btn-primary"><i className="fa fa-edit"></i>
              </button >&nbsp;<button  class="btn btn-danger"><i className="fa fa-trash"></i></button></td>
            </tr>
           
          ))}
        </tbody>
      </table>
      </div>
      </div>
  
    );
  }
}

export default Admin_Kyc;