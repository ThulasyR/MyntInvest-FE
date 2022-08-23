import React, { Component } from "react";

import DataService from "../../service/DataService";

class Admin_Companyinfo extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchEMAIL = this.onChangeSearchEMAIL.bind(this);
    this.retrieveCompanyinfo = this.retrieveCompanyinfo.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveCompanyinfo = this.setActiveCompanyinfo.bind(this);
    this.removeAllCompanyinfo = this.removeAllCompanyinfo.bind(this);
    this.searchEMAIL = this.searchEMAIL.bind(this);
    this.state = {
      companyinfos: [],
      currentCompanyinfo: null,
      currentIndex: -1,
      searchEMAIL: ""
    };
  }
  componentDidMount() {
    this.retrieveCompanyinfo();
  }
  onChangeSearchEMAIL(e) {
    const searchEMAIL = e.target.value;
    this.setState({
      searchEMAIL: searchEMAIL
    });
  }
  retrieveCompanyinfo() {
     DataService.getAll("/Companyinfo")
      .then(response => {
        this.setState({
          companyinfos: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }
  refreshList() {
    this.retrieveCompanyinfo();
    this.setState({
      currentCompanyinfo: null,
      currentIndex: -1
    });
  }
  setActiveCompanyinfo(companyinfos, index) {
    this.setState({
      currentCompanyinfo: companyinfos,
      currentIndex: index
    });
  }
  removeAllCompanyinfo() {
     DataService.deleteAll("/Companyinfo")
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }
  searchEMAIL() {
     DataService.findByTitle("/Companyinfo?Email="+this.state.searchEMAIL)
      .then(response => {
        this.setState({
          companyinfos: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }





  render() {
    const { searchEMAIL, companyinfos, currentCompanyinfo, currentIndex } = this.state;
    return (
      <div className="container">
        <h3 align="center" style={{marginTop:100}}>ADMIN - STARTUP COMPANY INFO</h3> 
      <div className="table-responsive">
      <table  className="table" style={{fontSize:"12px",width:"100%"}}>
        <thead className="bg-success text-white">
          <tr>
            <th>ID</th> 
            <th>MTUSER ID</th> 
            <th>EMAIL</th> 
            <th>MODULE</th> 
            <th>COUNTRY</th> 
            <th>STATE</th> 
            <th>CITY</th> 
            <th>PINCODE</th> 
            <th>ADDRESS</th> 
            <th>COMPANY WEBSITE</th> 
            <th>FB LINK</th> 
            <th>INSTA LINK</th>
            <th>LINKEDIN LINK</th>
            <th>LEGAL NAME</th>
            <th>CIN NUMBER</th>
            <th>DATE OF INCORPORATATION</th>
            <th>INCORPORATION TYPE</th>
            <th>ABOUT COMPANY</th>
            <th>ABOUT INVESTED</th>
            <th>NO OF EMPLOYEES</th>
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
        {companyinfos &&
              companyinfos.map((companyinfo, index) => (
            <tr>
            <td>{companyinfo.id}</td>    
            <td>{companyinfo.MTUSER_ID}</td> 
            <td>{companyinfo.EMAIL}</td> 
            <td>{companyinfo.MODULE}</td> 
            <td>{companyinfo.COUNTRY}</td> 
            <td>{companyinfo.STATE}</td> 
            <td>{companyinfo.CITY}</td> 
            <td>{companyinfo.PINCODE}</td> 
            <td>{companyinfo.ADDRESS}</td> 
            <td>{companyinfo.COMPANY_WEBSITE}</td> 
            <td>{companyinfo.FB_LINK}</td> 
            <td>{companyinfo.INSTA_LINK}</td>
            <td>{companyinfo.LINKEDIN_LINK}</td>
            <td>{companyinfo.LEGAL_NAME}</td>
            <td>{companyinfo.CIN_NUMBER}</td>
            <td>{companyinfo.DATE_OF_INCORPORATATION}</td>
            <td>{companyinfo.INCORPORATION_TYPE}</td>
            <td>{companyinfo.ABOUT_COMPANY}</td>
            <td>{companyinfo.ABOUT_INVESTED}</td>
            <td>{companyinfo.NO_OF_EMPLOYEES}</td>
            <td>{companyinfo.STATUS}</td> 
            <td>{companyinfo.COMMENTS}</td> 
            <td>{companyinfo.DESCRIPTION}</td> 
            <td>{companyinfo.CREATED_USER}</td> 
            <td>{companyinfo.CREATED_DATE}</td> 
            <td>{companyinfo.MODIFIED_USER}</td> 
            <td>{companyinfo.MODIFIED_DATE}</td>
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

export default Admin_Companyinfo;