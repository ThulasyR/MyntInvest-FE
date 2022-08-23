import React, { Component } from "react";
import DataService from "../../service/DataService";

class Admin_PotentialReturnsInfo extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchPITCH_ID_GEN = this.onChangeSearchPITCH_ID_GEN.bind(this);
    this.retrievePotentialReturnsinfo = this.retrievePotentialReturnsinfo.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActivePotentialReturnsinfo = this.setActivePotentialReturnsinfo.bind(this);
    this.removeAllPotentialReturnsinfo = this.removeAllPotentialReturnsinfo.bind(this);
    this.searchPITCH_ID_GEN = this.searchPITCH_ID_GEN.bind(this);
    this.state = {
        potentialReturnsinfos: [],
      currentPotentialReturnsinfo: null,
      currentIndex: -1,
      searchPITCH_ID_GEN: ""
    };
  }
  componentDidMount() {
    this.retrievePotentialReturnsinfo();
  }
  onChangeSearchPITCH_ID_GEN(e) {
    const searchPITCH_ID_GEN = e.target.value;
    this.setState({
      searchPITCH_ID_GEN: searchPITCH_ID_GEN
    });
  }
  retrievePotentialReturnsinfo() {
     DataService.getAll("/PotentialReturnsinfo")
      .then(response => {
        this.setState({
            potentialReturnsinfos: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }
  refreshList() {
    this.retrievePotentialReturnsinfo();
    this.setState({
      currentTutorial: null,
      currentIndex: -1
    });
  }
  setActivePotentialReturnsinfo(potentialReturnsinfos, index) {
    this.setState({
      currentPotentialReturnsinfo: potentialReturnsinfos,
      currentIndex: index
    });
  }
  removeAllPotentialReturnsinfo() {
     DataService.deleteAll("/PotentialReturnsinfo")
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }
  searchPITCH_ID_GEN() {
     DataService.findByTitle("/PotentialReturnsinfo?Pitch_Id_Gen="+this.state.searchPITCH_ID_GEN)
      .then(response => {
        this.setState({
            potentialReturnsinfos: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }





  render() {
    const { searchPITCH_ID_GEN, potentialReturnsinfos, currentPotentialReturnsinfo, currentIndex } = this.state;
    return (
      <div className="container">
      <h3 align="center" style={{marginTop:100}}>ADMIN - START UP PITCH POTENTIAL RETURNS INFOMODULE</h3> 
      <div className="table-responsive">
      <table  className="table" style={{fontSize:"12px",width:"100%"}}>
        <thead className="bg-success text-white">
          <tr>
            <th>ID</th>
            <th>MTUSER ID</th> 
            <th>EMAIL</th> 
            <th>MODULE</th> 
            <th>PITCH ID GEN</th> 
            <th>POTENTIAL RETURNS HEADER</th> 
            <th>POTENTIAL RETURNS BODY</th> 
            <th>POTENTIAL RETURNS IMAGE</th> 
            <th>POTENTIAL RETURNS VIDEO</th> 
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
        {potentialReturnsinfos &&
              potentialReturnsinfos.map((PotentialReturnsinfo, index) => (
            <tr>
            <td>{PotentialReturnsinfo.id}</td> 
            <td>{PotentialReturnsinfo.MT_USERID}</td> 
            <td>{PotentialReturnsinfo.EMAIL}</td> 
            <td>{PotentialReturnsinfo.MODULE}</td> 
            <td>{PotentialReturnsinfo.PITCH_ID_GEN}</td> 
            <td>{PotentialReturnsinfo.POTENTIALRETURNS_HEADER}</td> 
            <td>{PotentialReturnsinfo.POTENTIALRETURNS_BODY}</td> 
            <td>{PotentialReturnsinfo.POTENTIALRETURNS_IMAGE}</td> 
            <td>{PotentialReturnsinfo.POTENTIALRETURNS_VIDEO}</td> 
            <td>{PotentialReturnsinfo.STATUS}</td> 
            <td>{PotentialReturnsinfo.COMMENTS}</td> 
            <td>{PotentialReturnsinfo.DESCRIPTION}</td> 
            <td>{PotentialReturnsinfo.CREATED_USER}</td> 
            <td>{PotentialReturnsinfo.CREATED_DATE}</td> 
            <td>{PotentialReturnsinfo.MODIFIED_USER}</td> 
            <td>{PotentialReturnsinfo.MODIFIED_DATE}</td>
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

export default Admin_PotentialReturnsInfo;