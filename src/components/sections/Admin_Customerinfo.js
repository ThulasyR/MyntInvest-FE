import React, { Component } from "react";
import DataService from "../../service/DataService";

class Admin_Customerinfo extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchPITCH_ID_GEN = this.onChangeSearchPITCH_ID_GEN.bind(this);
    this.retrieveCustomerinfo = this.retrieveCustomerinfo.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveCustomerinfo = this.setActiveCustomerinfo.bind(this);
    this.removeAllCustomerinfo = this.removeAllCustomerinfo.bind(this);
    this.searchPITCH_ID_GEN = this.searchPITCH_ID_GEN.bind(this);
    this.state = {
        customerinfos: [],
      currentCustomerinfo: null,
      currentIndex: -1,
      searchPITCH_ID_GEN: ""
    };
  }
  componentDidMount() {
    this.retrieveCustomerinfo();
  }
  onChangeSearchPITCH_ID_GEN(e) {
    const searchPITCH_ID_GEN = e.target.value;
    this.setState({
      searchPITCH_ID_GEN: searchPITCH_ID_GEN
    });
  }
  retrieveCustomerinfo() {
     DataService.getAll("/Customerinfo")
      .then(response => {
        this.setState({
            customerinfos: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }
  refreshList() {
    this.retrieveCustomerinfo();
    this.setState({
      currentCustomerinfo: null,
      currentIndex: -1
    });
  }
  setActiveCustomerinfo(customerinfos, index) {
    this.setState({
      currentCustomerinfo: customerinfos,
      currentIndex: index
    });
  }
  removeAllCustomerinfo() {
     DataService.deleteAll("/Customerinfo")
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }
  searchPITCH_ID_GEN() {
     DataService.findByTitle("/Customerinfo?Pitch_Id_Gen="+this.state.searchPITCH_ID_GEN)
      .then(response => {
        this.setState({
            customerinfos: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }





  render() {
    const { searchPITCH_ID_GEN, customerinfos, currentCustomerinfo, currentIndex } = this.state;
    return (
        <div className="container">
            <h3 align="center" style={{marginTop:100}}>ADMIN - START UP PITCH CUSTOMER INFO MODULE</h3>
      <div className="table-responsive"> 
      <table  className="table" style={{fontSize:"12px",width:"100%"}}>
        <thead className="bg-success text-white">
          <tr>
            <th>ID</th>
            <th>MTUSER ID</th> 
            <th>EMAIL</th> 
            <th>MODULE</th> 
            <th>PITCH ID GEN</th> 
            <th>CUSTOMER HEADER</th> 
            <th>CUSTOMER BODY</th> 
            <th>CUSTOMER IMAGE</th> 
            <th>CUSTOMER VIDEO</th> 
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
        {customerinfos &&
              customerinfos.map((Customerinfo, index) => (
            <tr>
            <td>{Customerinfo.id}</td> 
            <td>{Customerinfo.MTUSER_ID}</td> 
            <td>{Customerinfo.EMAIL}</td> 
            <td>{Customerinfo.MODULE}</td> 
            <td>{Customerinfo.PITCH_ID_GEN}</td>
            <td>{Customerinfo.CUSTOMER_HEADER}</td>
            <td>{Customerinfo.CUSTOMER_BODY}</td>
            <td>{Customerinfo.CUSTOMER_IMAGE}</td>
            <td>{Customerinfo.CUSTOMER_VIDEO}</td>
            <td>{Customerinfo.STATUS}</td> 
            <td>{Customerinfo.COMMENTS}</td> 
            <td>{Customerinfo.DESCRIPTION}</td> 
            <td>{Customerinfo.CREATED_USER}</td> 
            <td>{Customerinfo.CREATED_DATE}</td> 
            <td>{Customerinfo.MODIFIED_USER}</td> 
            <td>{Customerinfo.MODIFIED_DATE}</td>
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

export default Admin_Customerinfo;