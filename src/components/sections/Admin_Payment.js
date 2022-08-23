import React, { Component } from "react";
import DataService from "../../service/DataService";

class Admin_Payment extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchCOMPANY_INVESTED_IN = this.onChangeSearchCOMPANY_INVESTED_IN.bind(this);
    this.retrievePayment = this.retrievePayment.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActivePayment = this.setActivePayment.bind(this);
    this.removeAllPayment = this.removeAllPayment.bind(this);
    this.searchCOMPANY_INVESTED_IN = this.searchCOMPANY_INVESTED_IN.bind(this);
    this.state = {
      Payments: [],
      currentPayment: null,
      currentIndex: -1,
      searchCOMPANY_INVESTED_IN: ""
    };
  }
  componentDidMount() {
    this.retrievePayment();
  }
  onChangeSearchCOMPANY_INVESTED_IN(e) {
    const searchCOMPANY_INVESTED_IN = e.target.value;
    this.setState({
      searchCOMPANY_INVESTED_IN: searchCOMPANY_INVESTED_IN
    });
  }
  retrievePayment() {
     DataService.getAll("/Payment")
      .then(response => {
        this.setState({
            Payments: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }
  refreshList() {
    this.retrievePayment();
    this.setState({
      currentPayment: null,
      currentIndex: -1
    });
  }
  setActivePayment(Payments, index) {
    this.setState({
      currentPayment: Payments,
      currentIndex: index
    });
  }
  removeAllPayment() {
     DataService.deleteAll("/Payment")
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }
  searchCOMPANY_INVESTED_IN() {
     DataService.findByTitle("/Payment?Company_Invested_In="+this.state.searchCOMPANY_INVESTED_IN)
      .then(response => {
        this.setState({
            Payments: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }





  render() {
    const { searchCOMPANY_INVESTED_IN,Payments, currentPayment, currentIndex } = this.state;
    return (
        <div className="container">
        <h3 align="center" style={{marginTop:100}}>ADMIN - INVESTOR PAYMENT MODULE</h3> 
      <div className="table-responsive"> 
      <table  className="table" style={{fontSize:"12px",width:"100%"}}>
        <thead className="bg-success text-white">
          <tr>
            <th>ID</th> 
            <th>MTUSER ID</th> 
            <th>EMAIL</th> 
            <th>MODULE</th> 
            <th>COMPANY INVESTED IN</th>
            <th>INVESTED DATE</th>
            <th>INV AMOUNT</th>
            <th>INV CONVENIENCE FEE</th>
            <th>INV GST</th>
            <th>INV TOT</th>
            <th>INV CHK AGREE TERMS</th>
            <th>INV PAID</th>
            <th>INV BALANCE</th>
            <th>AGREEMENT FILE DOC</th> 
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
        {Payments &&
              Payments.map((Payment, index) => (
            <tr>
            <td>{Payment.id}</td> 
            <td>{Payment.MTUSER_ID }</td> 
            <td>{Payment.EMAIL}</td> 
            <td>{Payment.MODULE}</td> 
            <td>{Payment.COMPANY_INVESTED_IN}</td> 
            <td>{Payment.INVESTED_DATE}</td> 
            <td>{Payment.INV_AMOUNT}</td> 
            <td>{Payment.INV_CONVENIENCE_FEE}</td> 
            <td>{Payment.INV_GST}</td> 
            <td>{Payment.INV_TOT}</td>
            <td>{Payment.INV_CHK_AGREE_TERMS}</td> 
            <td>{Payment.INV_PAID}</td> 
            <td>{Payment.INV_BALANCE}</td> 
            <td>{Payment.AGREEMENT_FILE_DOC}</td>  
            <td>{Payment.STATUS}</td> 
            <td>{Payment.COMMENTS}</td> 
            <td>{Payment.DESCRIPTION}</td> 
            <td>{Payment.CREATED_USER}</td> 
            <td>{Payment.CREATED_DATE}</td> 
            <td>{Payment.MODIFIED_USER}</td> 
            <td>{Payment.MODIFIED_DATE}</td>
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

export default Admin_Payment;