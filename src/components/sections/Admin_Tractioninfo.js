import React, { Component } from "react";
import DataService from "../../service/DataService";

class Admin_Tractioninfo extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchPITCH_ID_GEN = this.onChangeSearchPITCH_ID_GEN.bind(this);
    this.retrieveTractioninfo = this.retrieveTractioninfo.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveTractioninfo = this.setActiveTractioninfo.bind(this);
    this.removeAllTractioninfo = this.removeAllTractioninfo.bind(this);
    this.searchPITCH_ID_GEN = this.searchPITCH_ID_GEN.bind(this);
    this.state = {
        Tractioninfos: [],
      currentTractioninfo: null,
      currentIndex: -1,
      searchPITCH_ID_GEN: ""
    };
  }
  componentDidMount() {
    this.retrieveTractioninfo();
  }
  onChangeSearchPITCH_ID_GEN(e) {
    const searchPITCH_ID_GEN = e.target.value;
    this.setState({
      searchPITCH_ID_GEN: searchPITCH_ID_GEN
    });
  }
  retrieveTractioninfo() {
     DataService.getAll("/Tractioninfo")
      .then(response => {
        this.setState({
            Tractioninfos: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }
  refreshList() {
    this.retrieveTractioninfo();
    this.setState({
      currentTractioninfo: null,
      currentIndex: -1
    });
  }
  setActiveTractioninfo(Tractioninfos, index) {
    this.setState({
      currentTractioninfo: Tractioninfos,
      currentIndex: index
    });
  }
  removeAllTractioninfo() {
     DataService.deleteAll("/Tractioninfo")
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }
  searchPITCH_ID_GEN() {
     DataService.findByTitle("/Tractioninfo?Pitch_Id_Gen="+this.state.searchPITCH_ID_GEN)
      .then(response => {
        this.setState({
            Tractioninfos: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }





  render() {
    const { searchPITCH_ID_GEN, Tractioninfos, currentTractioninfo, currentIndex } = this.state;
    return (
        <div className="container">
             <h3 align="center" style={{marginTop:100}}>ADMIN - START UP PITCH TRACTION INFO MODULE</h3> 
      <div className="table-responsive">
      <table  className="table" style={{fontSize:"12px",width:"100%"}}>
        <thead className="bg-success text-white">
          <tr>
            <th>ID</th>
            <th>MTUSER ID</th> 
            <th>EMAIL</th> 
            <th>MODULE</th> 
            <th>PITCH ID GEN</th> 
            <th>TRACTION HEADER</th> 
            <th>TRACTION BODY</th> 
            <th>TRACTION IMAGE</th> 
            <th>TRACTION VIDEO</th> 
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
        {Tractioninfos &&
              Tractioninfos.map((Tractioninfo, index) => (
            <tr>
            <td>{Tractioninfo.id}</td>    
            <td>{Tractioninfo.MTUSER_ID}</td> 
            <td>{Tractioninfo.EMAIL}</td> 
            <td>{Tractioninfo.MODULE}</td> 
            <td>{Tractioninfo.PITCH_ID_GEN}</td> 
            <td>{Tractioninfo.TRACTION_HEADER}</td> 
            <td>{Tractioninfo.TRACTION_BODY}</td> 
            <td>{Tractioninfo.TRACTION_IMAGE}</td> 
            <td>{Tractioninfo.TRACTION_VIDEO}</td> 
            <td>{Tractioninfo.STATUS}</td> 
            <td>{Tractioninfo.COMMENTS}</td> 
            <td>{Tractioninfo.DESCRIPTION}</td> 
            <td>{Tractioninfo.CREATED_USER}</td> 
            <td>{Tractioninfo.CREATED_DATE}</td> 
            <td>{Tractioninfo.MODIFIED_USER}</td> 
            <td>{Tractioninfo.MODIFIED_DATE}</td>
            <td>
              <button class="btn btn-primary"><i className="fa fa-edit"></i></button >
              <button  class="btn btn-danger"><i className="fa fa-trash"></i></button></td>
            </tr>
           
          ))}
        </tbody>
      </table>
      </div>
      </div>
    );
  }
}

export default Admin_Tractioninfo;