import React, { Component } from "react";
import DataService from "../../service/DataService";

class Admin_ChooseSector extends Component {
 constructor(props) {
    super(props);
    this.onChangeSearchINV_CHOOSE_SECTOR = this.onChangeSearchINV_CHOOSE_SECTOR.bind(this);
    this.retrieveChoose_Sector = this.retrieveChoose_Sector.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveChoose_Sector = this.setActiveChoose_Sector.bind(this);
    this.removeAllChoose_Sector = this.removeAllChoose_Sector.bind(this);
    this.searchINV_CHOOSE_SECTOR = this.searchINV_CHOOSE_SECTOR.bind(this);
    this.state = {
      Choose_Sectors: [],
      currentChoose_Sector: null,
      currentIndex: -1,
      searchINV_CHOOSE_SECTOR: ""
    };
  }
  componentDidMount() {
    this.retrieveChoose_Sector();
  }
  onChangeSearchINV_CHOOSE_SECTOR(e) {
    const searchINV_CHOOSE_SECTOR = e.target.value;
    this.setState({
      searchINV_CHOOSE_SECTOR: searchINV_CHOOSE_SECTOR
    });
  }
  retrieveChoose_Sector() {
     DataService.getAll("/Choose_Sector")
      .then(response => {
        this.setState({
          Choose_Sectors: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }
  refreshList() {
    this.retrieveChoose_Sector();
    this.setState({
      currentChoose_Sector: null,
      currentIndex: -1
    });
  }
  setActiveChoose_Sector(Choose_Sectors, index) {
    this.setState({
      currentChoose_Sector: Choose_Sectors,
      currentIndex: index
    });
  }
  removeAllChoose_Sector() {
     DataService.deleteAll("/Choose_Sector")
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }
  searchINV_CHOOSE_SECTOR() {
     DataService.findByTitle("/Choose_Sector?Inv_Choose_Sector="+this.state.searchINV_CHOOSE_SECTOR)
      .then(response => {
        this.setState({
          Choose_Sectors: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }





  render() {
    const { searchINV_CHOOSE_SECTOR, Choose_Sectors, currentChoose_Sector, currentIndex } = this.state;
    return (
      <div className="container">
        <h3 align="center" style={{marginTop:100}}>ADMIN - INVESTOR CHOOSE SECTOR MODULE</h3>
      <div className="table-responsive"> 
      <table  className="table" style={{fontSize:"12px",width:"100%"}}>
        <thead className="bg-success text-white">
          <tr>
            <th>ID</th> 
            <th>MTUSER ID</th> 
            <th>EMAIL</th> 
            <th>MODULE</th> 
            <th>INVESTOR CHOOSE SECTOR</th> 
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
        {Choose_Sectors &&
              Choose_Sectors.map((Choose_Sector, index) => (
            <tr>
            <td>{Choose_Sector.id}</td> 
            <td>{Choose_Sector.MTUSER_ID}</td> 
            <td>{Choose_Sector.EMAIL}</td>  
            <td>{Choose_Sector.MODULE}</td> 
            <td>{Choose_Sector.INV_CHOOSE_SECTOR}</td> 
            <td>{Choose_Sector.STATUS}</td> 
            <td>{Choose_Sector.COMMENTS}</td> 
            <td>{Choose_Sector.DESCRIPTION}</td> 
            <td>{Choose_Sector.CREATED_USER}</td> 
            <td>{Choose_Sector.CREATED_DATE}</td> 
            <td>{Choose_Sector.MODIFIED_USER}</td> 
            <td>{Choose_Sector.MODIFIED_DATE}</td>
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

export default Admin_ChooseSector;