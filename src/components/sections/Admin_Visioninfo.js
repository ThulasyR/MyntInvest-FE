import React, { Component } from "react";
import DataService from "../../service/DataService";

class Admin_Visioninfo extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchPITCH_ID_GEN = this.onChangeSearchPITCH_ID_GEN.bind(this);
    this.retrieveVisioninfo = this.retrieveVisioninfo.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveVisioninfo = this.setActiveVisioninfo.bind(this);
    this.removeAllVisioninfo = this.removeAllVisioninfo.bind(this);
    this.searchPITCH_ID_GEN = this.searchPITCH_ID_GEN.bind(this);
    this.state = {
        Visioninfos: [],
      currentVisioninfo: null,
      currentIndex: -1,
      searchPITCH_ID_GEN: ""
    };
  }
  componentDidMount() {
    this.retrieveVisioninfo();
  }
  onChangeSearchPITCH_ID_GEN(e) {
    const searchPITCH_ID_GEN = e.target.value;
    this.setState({
      searchPITCH_ID_GEN: searchPITCH_ID_GEN
    });
  }
  retrieveVisioninfo() {
     DataService.getAll("/Visioninfo")
      .then(response => {
        this.setState({
            Visioninfos: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }
  refreshList() {
    this.retrieveVisioninfo();
    this.setState({
      currentVisioninfo: null,
      currentIndex: -1
    });
  }
  setActiveVisioninfo(Visioninfos, index) {
    this.setState({
      currentVisioninfo: Visioninfos,
      currentIndex: index
    });
  }
  removeAllVisioninfo() {
     DataService.deleteAll("/Visioninfo")
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }
  searchPITCH_ID_GEN() {
     DataService.findByTitle("/Visioninfo?Pitch_Id_Gen="+this.state.searchPITCH_ID_GEN)
      .then(response => {
        this.setState({
            Visioninfos: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }





  render() {
    const { searchPITCH_ID_GEN, Visioninfos, currentVisioninfo, currentIndex } = this.state;
    return (
      <div className="container">
         <h3 align="center" style={{marginTop:100}}>ADMIN - START UP PITCH VISION INFO MODULE</h3> 
      <div className="table-responsive">
      <table  className="table" style={{fontSize:"12px",width:"100%"}}>
        <thead className="bg-success text-white">
          <tr>
            <th>ID</th>
            <th>MTUSER_ID</th> 
            <th>EMAIL</th> 
            <th>MODULE</th> 
            <th>PITCH ID GEN</th> 
            <th>VISION HEADER</th> 
            <th>VISION BODY</th> 
            <th>VISION IMAGE</th> 
            <th>VISION VIDEO</th> 
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
        {Visioninfos &&
              Visioninfos.map((Visioninfo, index) => (
            <tr>
            <td>{Visioninfo.id}</td>   
            <td>{Visioninfo.MTUSER_ID}</td> 
            <td>{Visioninfo.EMAIL}</td> 
            <td>{Visioninfo.MODULE}</td> 
            <td>{Visioninfo.PITCH_ID_GEN}</td> 
            <td>{Visioninfo.VISION_HEADER}</td> 
            <td>{Visioninfo.VISION_BODY}</td> 
            <td>{Visioninfo.VISION_IMAGE}</td> 
            <td>{Visioninfo.VISION_VIDEO}</td> 
            <td>{Visioninfo.STATUS}</td> 
            <td>{Visioninfo.COMMENTS}</td> 
            <td>{Visioninfo.DESCRIPTION}</td> 
            <td>{Visioninfo.CREATED_USER}</td> 
            <td>{Visioninfo.CREATED_DATE}</td> 
            <td>{Visioninfo.MODIFIED_USER}</td> 
            <td>{Visioninfo.MODIFIED_DATE}</td>
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

export default Admin_Visioninfo;