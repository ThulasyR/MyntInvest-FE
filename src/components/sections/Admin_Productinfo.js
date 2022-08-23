import React, { Component } from "react";
import DataService from "../../service/DataService";

class Admin_Produtioninfo extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchPITCH_ID_GEN = this.onChangeSearchPITCH_ID_GEN.bind(this);
    this.retrieveProductinfo = this.retrieveProductinfo.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveProductinfo = this.setActiveProductinfo.bind(this);
    this.removeAllProductinfo = this.removeAllProductinfo.bind(this);
    this.searchPITCH_ID_GEN = this.searchPITCH_ID_GEN.bind(this);
    this.state = {
        Productinfos: [],
      currentProductinfo: null,
      currentIndex: -1,
      searchPITCH_ID_GEN: ""
    };
  }
  componentDidMount() {
    this.retrieveProductinfo();
  }
  onChangeSearchPITCH_ID_GEN(e) {
    const searchPITCH_ID_GEN = e.target.value;
    this.setState({
      searchPITCH_ID_GEN: searchPITCH_ID_GEN
    });
  }
  retrieveProductinfo() {
     DataService.getAll("/Productinfo")
      .then(response => {
        this.setState({
            Productinfos: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }
  refreshList() {
    this.retrieveProductinfo();
    this.setState({
      currentProductinfo: null,
      currentIndex: -1
    });
  }
  setActiveProductinfo(Productinfos, index) {
    this.setState({
      currentProductinfo: Productinfos,
      currentIndex: index
    });
  }
  removeAllProductinfo() {
     DataService.deleteAll("/Productinfo")
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }
  searchPITCH_ID_GEN() {
     DataService.findByTitle("/Productinfo?Pitch_Id_Gen="+this.state.searchPITCH_ID_GEN)
      .then(response => {
        this.setState({
            Productinfos: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }





  render() {
    const { searchPITCH_ID_GEN, Productinfos, currentProductinfo, currentIndex } = this.state;
    return (
    <div className="container">
      <h3 align="center" style={{marginTop:100}}>ADMIN - START UP PITCH PRODUCT INFO MODULE</h3> 
      <div className="table-responsive">
      <table  className="table" style={{fontSize:"12px",width:"100%"}}>
        <thead className="bg-success text-white">
          <tr>
            <th>ID</th>
            <th>MTUSER ID</th> 
            <th>EMAIL</th> 
            <th>MODULE</th> 
            <th>PITCH ID GEN</th> 
            <th>PRODUCT HEADER</th> 
            <th>PRODUCT BODY</th> 
            <th>PRODUCT IMAGE</th> 
            <th>PRODUCT VIDEO</th> 
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
        {Productinfos &&
              Productinfos.map((Productinfo, index) => (
            <tr>
            <td>{Productinfo.id}</td>    
            <td>{Productinfo.MTUSER_ID}</td> 
            <td>{Productinfo.EMAIL}</td> 
            <td>{Productinfo.MODULE}</td> 
            <td>{Productinfo.PITCH_ID_GEN}</td> 
            <td>{Productinfo.PRODUCT_HEADER}</td> 
            <td>{Productinfo.PRODUCT_BODY}</td> 
            <td>{Productinfo.PRODUCT_IMAGE}</td> 
            <td>{Productinfo.PRODUCT_VIDEO}</td> 
            <td>{Productinfo.STATUS}</td> 
            <td>{Productinfo.COMMENTS}</td> 
            <td>{Productinfo.DESCRIPTION}</td> 
            <td>{Productinfo.CREATED_USER}</td> 
            <td>{Productinfo.CREATED_DATE}</td> 
            <td>{Productinfo.MODIFIED_USER}</td> 
            <td>{Productinfo.MODIFIED_DATE}</td>
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

export default Admin_Produtioninfo;