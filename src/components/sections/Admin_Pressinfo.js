import React, { Component } from "react";

import DataService from "../../service/DataService";

class Admin_Pressinfo extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchPRESS_SNO = this.onChangeSearchPRESS_SNO.bind(this);
    this.retrievePressinfo = this.retrievePressinfo.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActivePressinfo = this.setActivePressinfo.bind(this);
    this.removeAllPressinfo = this.removeAllPressinfo.bind(this);
    this.searchPRESS_SNO = this.searchPRESS_SNO.bind(this);
    this.state = {
      pressinfos: [],
      currentInfo: null,
      currentIndex: -1,
      searchPRESS_SNO: ""
    };
  }
  componentDidMount() {
    this.retrievePressinfo();
  }
  onChangeSearchPRESS_SNO(e) {
    const searchPRESS_SNO = e.target.value;
    this.setState({
      searchPRESS_SNO: searchPRESS_SNO
    });
  }
  retrievePressinfo() {
     DataService.getAll("/Pressinfo")
      .then(response => {
        this.setState({
          pressinfos: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }
  refreshList() {
    this.retrievePressinfo();
    this.setState({
      currentPressinfo: null,
      currentIndex: -1
    });
  }
  setActivePressinfo(pressinfos, index) {
    this.setState({
      currentPressinfo: pressinfos,
      currentIndex: index
    });
  }
  removeAllPressinfo() {
     DataService.deleteAll("/Pressinfo")
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }
  searchPRESS_SNO() {
     DataService.findByTitle("/Pressinfo?Press_Sno"+this.state.searchPRESS_SNO)
      .then(response => {
        this.setState({
          pressinfos: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }





  render() {
    const { searchPRESS_SNO, pressinfos, currentPressinfo, currentIndex } = this.state;
    return (
      <div className="container">
         <h3 align="center" style={{marginTop:100}}>ADMIN - STARTUP PRESS INFO</h3>
      <div className="table-responsive"> 
      <table  className="table" style={{fontSize:"12px",width:"100%"}}>
        <thead className="bg-success text-white">
          <tr>
            <th>ID</th> 
            <th>MTUSER ID</th> 
            <th>EMAIL</th> 
            <th>MODULE</th> 
            <th>PRESS SNO</th> 
            <th>PRESS HEADER</th> 
            <th>PRESS BODY</th> 
            <th>PRESS IMAGE</th> 
            <th>PRESS VIDEO</th> 
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
        {pressinfos &&
              pressinfos.map((pressinfo, index) => (
            <tr>
            <td>{pressinfo.id}</td> 
            <td>{pressinfo.MTUSER_ID}</td> 
            <td>{pressinfo.EMAIL}</td> 
            <td>{pressinfo.MODULE}</td> 
            <td>{pressinfo.PRESS_SNO}</td> 
            <td>{pressinfo.PRESS_HEADER}</td> 
            <td>{pressinfo.PRESS_BODY}</td> 
            <td>{pressinfo.PRESS_IMAGE}</td> 
            <td>{pressinfo.PRESS_VIDEO}</td> 
            <td>{pressinfo.STATUS}</td> 
            <td>{pressinfo.COMMENTS}</td> 
            <td>{pressinfo.DESCRIPTION}</td> 
            <td>{pressinfo.CREATED_USER}</td> 
            <td>{pressinfo.CREATED_DATE}</td> 
            <td>{pressinfo.MODIFIED_USER}</td> 
            <td>{pressinfo.MODIFIED_DATE}</td>
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

export default Admin_Pressinfo;