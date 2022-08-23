import React, { Component } from "react";
import DataService from "../../service/DataService";

class Admin_Usagefundsinfo extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchPITCH_ID_GEN = this.onChangeSearchPITCH_ID_GEN.bind(this);
    this.retrieveUsagefundsinfo = this.retrieveUsagefundsinfo.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveUsagefundsinfo = this.setActiveUsagefundsinfo.bind(this);
    this.removeAllUsagefundsinfo = this.removeAllUsagefundsinfo.bind(this);
    this.searchPITCH_ID_GEN = this.searchPITCH_ID_GEN.bind(this);
    this.state = {
        Usagefundsinfos: [],
      currentUsagefundsinfo: null,
      currentIndex: -1,
      searchPITCH_ID_GEN: ""
    };
  }
  componentDidMount() {
    this.retrieveUsagefundsinfo();
  }
  onChangeSearchPITCH_ID_GEN(e) {
    const searchPITCH_ID_GEN = e.target.value;
    this.setState({
      searchPITCH_ID_GEN: searchPITCH_ID_GEN
    });
  }
  retrieveUsagefundsinfo() {
     DataService.getAll("/Usagefundsinfo")
      .then(response => {
        this.setState({
            Usagefundsinfos: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }
  refreshList() {
    this.retrieveUsagefundsinfo();
    this.setState({
      currentUsagefundsinfo: null,
      currentIndex: -1
    });
  }
  setActiveUsagefundsinfo(Usagefundsinfos, index) {
    this.setState({
      currentUsagefundsinfo: Usagefundsinfos,
      currentIndex: index
    });
  }
  removeAllUsagefundsinfo() {
     DataService.deleteAll("/Usagefundsinfo")
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }
  searchPITCH_ID_GEN() {
     DataService.findByTitle("/Usagefundsinfo?Pitch_Id_Gen="+this.state.searchPITCH_ID_GEN)
      .then(response => {
        this.setState({
            Usagefundsinfos: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }





  render() {
    const { searchPITCH_ID_GEN, Usagefundsinfos, currentUsagefundsinfo, currentIndex } = this.state;
    return (
        <div className="container"> 
         <h3 align="center" style={{marginTop:100}}>ADMIN - START UP PITCH USAGE FUNDS INFO MODULE</h3> 
      <div className="table-responsive">
      <table  className="table" style={{fontSize:"12px",width:"100%"}}>
        <thead className="bg-success text-white">
          <tr>
            <th>ID</th>
            <th>MTUSER ID</th> 
            <th>EMAIL</th> 
            <th>MODULE</th> 
            <th>PITCH ID GEN</th> 
            <th>USAGEFUNDS HEADER</th> 
            <th>USAGEFUNDS BODY</th> 
            <th>USAGEFUNDS IMAGE</th> 
            <th>USAGEFUNDS VIDEO</th> 
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
        {Usagefundsinfos &&
              Usagefundsinfos.map((Usagefundsinfo, index) => (
            <tr>
            <td>{Usagefundsinfo.id}</td>    
            <td>{Usagefundsinfo.MTUSER_ID}</td> 
            <td>{Usagefundsinfo.EMAIL}</td> 
            <td>{Usagefundsinfo.MODULE}</td> 
            <td>{Usagefundsinfo.PITCH_ID_GEN}</td> 
            <td>{Usagefundsinfo.USAGEFUNDS_HEADER}</td> 
            <td>{Usagefundsinfo.USAGEFUNDS_BODY}</td> 
            <td>{Usagefundsinfo.USAGEFUNDS_IMAGE}</td> 
            <td>{Usagefundsinfo.USAGEFUNDS_VIDEO}</td> 
            <td>{Usagefundsinfo.STATUS}</td> 
            <td>{Usagefundsinfo.COMMENTS}</td> 
            <td>{Usagefundsinfo.DESCRIPTION}</td> 
            <td>{Usagefundsinfo.CREATED_USER}</td> 
            <td>{Usagefundsinfo.CREATED_DATE}</td> 
            <td>{Usagefundsinfo.MODIFIED_USER}</td> 
            <td>{Usagefundsinfo.MODIFIED_DATE}</td>
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

export default Admin_Usagefundsinfo;