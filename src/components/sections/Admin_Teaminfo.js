import React, { Component } from "react";

import DataService from "../../service/DataService";

class Admin_Teaminfo extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchTEAM_SNO = this.onChangeSearchTEAM_SNO.bind(this);
    this.retrieveTeaminfo = this.retrieveTeaminfo.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveTeaminfo = this.setActiveTeaminfo.bind(this);
    this.removeAllTeaminfo = this.removeAllTeaminfo.bind(this);
    this.searchTEAM_SNO = this.searchTEAM_SNO.bind(this);
    this.state = {
      teaminfos: [],
      currentTeaminfo: null,
      currentIndex: -1,
      searchTEAM_SNO: ""
    };
  }
  componentDidMount() {
    this.retrieveTeaminfo();
  }
  onChangeSearchTEAM_SNO(e) {
    const searchTEAM_SNO = e.target.value;
    this.setState({
      searchTEAM_SNO: searchTEAM_SNO
    });
  }
  retrieveTeaminfo() {
     DataService.getAll("/teaminfo")
      .then(response => {
        this.setState({
          teaminfos: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }
  refreshList() {
    this.retrieveTeaminfo();
    this.setState({
      currentTeaminfo: null,
      currentIndex: -1
    });
  }
  setActiveTeaminfo(teaminfos, index) {
    this.setState({
      currentTeaminfo: teaminfos,
      currentIndex: index
    });
  }
  removeAllTeaminfo() {
     DataService.deleteAll("/teaminfo")
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }
  searchTEAM_SNO() {
     DataService.findByTitle("/teaminfo?Team_Sno="+this.state.searchTEAM_SNO)
      .then(response => {
        this.setState({
          teaminfos: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }





  render() {
    const { searchTEAM_SNO, teaminfos, currentTeaminfo, currentIndex } = this.state;
    return (
      <div className="container"> 
      <h3 align="center" style={{marginTop:100}}>ADMIN - STARTUP TEAM INFO</h3>
      <div className="table-responsive"> 
      <table  className="table" style={{fontSize:"12px",width:"100%"}}>
        <thead className="bg-success text-white">
          <tr>
            <th>ID</th>
            <th>MTUSER_ID</th> 
            <th>EMAIL</th> 
            <th>MODULE</th> 
            <th>TEAM SNO</th> 
            <th>TEAM MEMBER NAME</th> 
            <th>TEAM MEMBER POSITION</th> 
            <th>FB LINK</th> 
            <th>INSTA LINK</th> 
            <th>LINKEDIN LINK</th> 
            <th>TEAM BIO</th> 
            <th>PROFILE PIC</th>
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
        {teaminfos &&
              teaminfos.map((teaminfo, index) => (
            <tr>
            <td>{teaminfo.id}</td> 
            <td>{teaminfo. MTUSER_ID }</td> 
            <td>{teaminfo.EMAIL}</td> 
            <td>{teaminfo.MODULE}</td> 
            <td>{teaminfo.TEAM_SNO}</td> 
            <td>{teaminfo.TEAM_MEMBER_NAME}</td> 
            <td>{teaminfo.TEAM_MEMBER_POSITION}</td> 
            <td>{teaminfo.FB_LINK}</td> 
            <td>{teaminfo.INSTA_LINK}</td> 
            <td>{teaminfo.LINKEDIN_LINK}</td> 
            <td>{teaminfo.TEAM_BIO}</td> 
            <td>{teaminfo.PROFILE_PIC}</td>
            <td>{teaminfo.STATUS}</td> 
            <td>{teaminfo.COMMENTS}</td> 
            <td>{teaminfo.DESCRIPTION}</td> 
            <td>{teaminfo.CREATED_USER}</td> 
            <td>{teaminfo.CREATED_DATE}</td> 
            <td>{teaminfo.MODIFIED_USER}</td> 
            <td>{teaminfo.MODIFIED_DATE}</td>
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

export default Admin_Teaminfo;