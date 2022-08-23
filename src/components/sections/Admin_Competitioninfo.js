import React, { Component } from "react";

import DataService from "../../service/DataService";

class Admin_Competitioninfo extends Component {
  constructor(props) {
    super(props);
    this.onChangePITCH_ID_GEN = this.onChangeSearchPITCH_ID_GEN.bind(this);
    this.retrieveCompetitioninfo = this.retrieveCompetitioninfo.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveCompetitioninfo = this.setActiveCompetitioninfo.bind(this);
    this.removeAllCompetitioninfo = this.removeAllCompetitioninfo.bind(this);
    this.searchPITCH_ID_GEN = this.searchPITCH_ID_GEN.bind(this);
    this.state = {
        competitioninfos: [],
      currentCompetitioninfo: null,
      currentIndex: -1,
      searchPITCH_ID_GEN: ""
    };
  }
  componentDidMount() {
    this.retrieveCompetitioninfo();
  }
  onChangeSearchPITCH_ID_GEN(e) {
    const searchPITCH_ID_GEN = e.target.value;
    this.setState({
      searchPITCH_ID_GEN: searchPITCH_ID_GEN
    });
  }
  retrieveCompetitioninfo() {
     DataService.getAll("/Competitioninfo")
      .then(response => {
        this.setState({
            competitioninfos: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }
  refreshList() {
    this.retrieveInfo();
    this.setState({
      currentCompetitioninfo: null,
      currentIndex: -1
    });
  }
  setActiveCompetitioninfo(competitioninfos, index) {
    this.setState({
      currentCompetitioninfo: competitioninfos,
      currentIndex: index
    });
  }
  removeAllCompetitioninfo() {
     DataService.deleteAll("/Competitioninfo")
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }
  searchPITCH_ID_GEN () {
     DataService.findByTitle("/Competitioninfo?Pitch_Id_Gen ="+this.state.searchPITCH_ID_GEN )
      .then(response => {
        this.setState({
            competitioninfos: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }


  render() {
    const { searchFirstName, competitioninfos, currentCompetitioninfo, currentIndex } = this.state;
    return (
      <div className="container">
      <h3 align="center" style={{marginTop:100}}>ADMIN - START UP PITCH COMPETITION INFO</h3> 
      <div className="table-responsive">
      <table  className="table" style={{fontSize:"12px",width:"100%"}}>
        <thead className="bg-success text-white">
          <tr>
            <th>ID</th> 
            <th>MTUSER ID</th>
            <th>EMAIL</th> 
            <th>MODULE</th> 
            <th>PITCH ID GEN</th> 
            <th>COMPETITION HEADER</th> 
            <th>COMPETITION BODY</th> 
            <th>COMPETITION IMAGE</th> 
            <th>COMPETITION VIDEO</th> 
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
        {competitioninfos &&
              competitioninfos.map((competitioninfo, index) => (
            <tr>
            <td>{competitioninfo.id}</td>  
            <td>{competitioninfo.MTUSER_ID}</td> 
            <td>{competitioninfo.EMAIL}</td> 
            <td>{competitioninfo.MODULE}</td> 
            <td>{competitioninfo.PITCH_ID_GEN}</td> 
            <td>{competitioninfo.COMPETITION_HEADER}</td> 
            <td>{competitioninfo.COMPETITION_BODY}</td> 
            <td>{competitioninfo.COMPETITION_IMAGE}</td> 
            <td>{competitioninfo.COMPETITION_VIDEO}</td> 
            <td>{competitioninfo.STATUS}</td> 
            <td>{competitioninfo.COMMENTS}</td> 
            <td>{competitioninfo.DESCRIPTION}</td> 
            <td>{competitioninfo.CREATED_USER}</td> 
            <td>{competitioninfo.CREATED_DATE}</td> 
            <td>{competitioninfo.MODIFIED_USER}</td> 
            <td>{competitioninfo.MODIFIED_DATE}</td>
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

export default Admin_Competitioninfo;