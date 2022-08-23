import React, { Component } from "react";
import DataService from "../../service/DataService";

class Admin_Businessinfo extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchBUSMODEL_HEADER = this.onChangeSearchBUSMODEL_HEADER.bind(this);
    this.retrieveBusinessinfo = this.retrieveBusinessinfo.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveBusinessinfo = this.setActiveBusinessinfo.bind(this);
    this.removeAllBusinessinfo = this.removeAllBusinessinfo.bind(this);
    this.searchBUSMODEL_HEADER = this.searchBUSMODEL_HEADER.bind(this);
    this.state = {
      businessinfos: [],
      currentInfo: null,
      currentIndex: -1,
      searchBUSMODEL_HEADER: ""
    };
  }
  componentDidMount() {
    this.retrieveBusinessinfo();
  }
  onChangeSearchBUSMODEL_HEADER(e) {
    const searchBUSMODEL_HEADER = e.target.value;
    this.setState({
      searchBUSMODEL_HEADER: searchBUSMODEL_HEADER
    });
  }
  retrieveBusinessinfo() {
     DataService.getAll("/Businessinfo")
      .then(response => {
        this.setState({
          businessinfos: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }
  refreshList() {
    this.retrieveBusinessinfo();
    this.setState({
      currentBusinessinfo: null,
      currentIndex: -1
    });
  }
  setActiveBusinessinfo(businessinfos, index) {
    this.setState({
      currentBusinessinfo: businessinfos,
      currentIndex: index
    });
  }
  removeAllBusinessinfo() {
     DataService.deleteAll("/Businessinfo")
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }
  searchBUSMODEL_HEADER() {
     DataService.findByTitle("/Businessinfo?Busmodel_Header="+this.state.searchBUSMODEL_HEADER)
      .then(response => {
        this.setState({
          businessinfos: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }





  render() {
    const { searchBUSMODEL_HEADER, businessinfos, currentBusinessinfo, currentIndex } = this.state;
    return (
      <div className="container">
        <h3 align="center" style={{marginTop:100}}>ADMIN BUSINESS INFO</h3> 
      <div className="table-responsive">      
      <table  className="table" style={{fontSize:"12px",width:"100%"}}>
        <thead className="bg-success text-white">
          <tr>
            <th>ID</th>
            <th>MTUSER ID</th> 
            <th>EMAIL</th> 
            <th>MODULE</th> 
            <th>PITCH ID GEN</th> 
            <th>BUSMODEL HEADER</th> 
            <th>BUSMODEL BODY</th> 
            <th>BUSMODEL IMAGE</th> 
            <th>BUSMODEL VIDEO</th> 
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
        {businessinfos &&
              businessinfos.map((businessinfo, index) => (
            <tr>
            <td>{businessinfo.id}</td>
            <td>{businessinfo.MTUSER_ID}</td> 
            <td>{businessinfo.EMAIL}</td> 
            <td>{businessinfo.MODULE}</td> 
            <td>{businessinfo.PITCH_ID_GEN}</td> 
            <td>{businessinfo.BUSMODEL_HEADER}</td> 
            <td>{businessinfo.BUSMODEL_BODY}</td> 
            <td>{businessinfo.BUSMODEL_IMAGE}</td> 
            <td>{businessinfo.BUSMODEL_VIDEO}</td> 
            <td>{businessinfo.STATUS}</td> 
            <td>{businessinfo.COMMENTS}</td> 
            <td>{businessinfo.DESCRIPTION}</td> 
            <td>{businessinfo.CREATED_USER}</td> 
            <td>{businessinfo.CREATED_DATE}</td> 
            <td>{businessinfo.MODIFIED_USER}</td> 
            <td>{businessinfo.MODIFIED_DATE}</td>
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

export default Admin_Businessinfo;