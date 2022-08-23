import React, { Component } from "react";
import DataService from "../../service/DataService";

class Admin_Probleminfo extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchPITCH_ID_GEN = this.onChangeSearchPITCH_ID_GEN.bind(this);
    this.retrieveProbleminfo = this.retrieveProbleminfo.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveProbleminfo = this.setActiveProbleminfo.bind(this);
    this.removeAllProbleminfo = this.removeAllProbleminfo.bind(this);
    this.searchPITCH_ID_GEN = this.searchPITCH_ID_GEN.bind(this);
    this.state = {
        probleminfos: [],
      currentProbleminfo: null,
      currentIndex: -1,
      searchPITCH_ID_GEN: ""
    };
  }
  componentDidMount() {
    this.retrieveProbleminfo();
  }
  onChangeSearchPITCH_ID_GEN(e) {
    const searchPITCH_ID_GEN = e.target.value;
    this.setState({
      searchPITCH_ID_GEN: searchPITCH_ID_GEN
    });
  }
  retrieveProbleminfo() {
     DataService.getAll("/Probleminfo")
      .then(response => {
        this.setState({
            probleminfos: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }
  refreshList() {
    this.retrieveProbleminfo();
    this.setState({
      currentProbleminfo: null,
      currentIndex: -1
    });
  }
  setActiveProbleminfo(probleminfos, index) {
    this.setState({
      currentProbleminfo: probleminfos,
      currentIndex: index
    });
  }
  removeAllProbleminfo() {
     DataService.deleteAll("/Probleminfo")
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }
  searchPITCH_ID_GEN() {
     DataService.findByTitle("/Probleminfo?Pitch_Id_Gen="+this.state.searchPITCH_ID_GEN)
      .then(response => {
        this.setState({
            probleminfos: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }





  render() {
    const { searchPITCH_ID_GEN, probleminfos, currentProbleminfo, currentIndex } = this.state;
    return (
        <div className="container">
        <h3 align="center" style={{marginTop:100}}>ADMIN - START UP PITCH PROBLEM INFO MODULE</h3> 
      <div className="table-responsive">
      <table  className="table" style={{fontSize:"12px",width:"100%"}}>
        <thead className="bg-success text-white">
          <tr>
            <th>ID</th>
            <th> MTUSER ID </th> 
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
        {probleminfos &&
              probleminfos.map((Probleminfo, index) => (
            <tr>
            <td>{Probleminfo.id}</td> 
            <td>{Probleminfo.MT_USERID}</td>
            <td>{Probleminfo.EMAIL}</td> 
            <td>{Probleminfo.MODULE}</td> 
            <td>{Probleminfo.PITCH_ID_GEN}</td>
            <td>{Probleminfo.ROBLEM_HEADER}</td>
            <td>{Probleminfo.PROBLEM_BODY}</td>
            <td>{Probleminfo.PROBLEM_IMAGE}</td>
            <td>{Probleminfo.PROBLEM_VIDEO}</td>
            <td>{Probleminfo.STATUS}</td> 
            <td>{Probleminfo.COMMENTS}</td> 
            <td>{Probleminfo.DESCRIPTION}</td> 
            <td>{Probleminfo.CREATED_USER}</td> 
            <td>{Probleminfo.CREATED_DATE}</td> 
            <td>{Probleminfo.MODIFIED_USER}</td> 
            <td>{Probleminfo.MODIFIED_DATE}</td>
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

export default Admin_Probleminfo;