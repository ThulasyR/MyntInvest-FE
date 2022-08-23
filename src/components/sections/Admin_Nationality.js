import React, { Component } from "react";
import DataService from "../../service/DataService";

class Admin_Nationality extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchINV_NATIONALITY = this.onChangeSearchINV_NATIONALITY.bind(this);
    this.retrieveNationality = this.retrieveNationality.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveNationality = this.setActiveNationality.bind(this);
    this.removeAllNationality = this.removeAllNationality.bind(this);
    this.searchINV_NATIONALITY = this.searchINV_NATIONALITY.bind(this);
    this.state = {
        Nationalitys: [],
      currentNationality: null,
      currentIndex: -1,
      searchINV_NATIONALITY: ""
    };
  }
  componentDidMount() {
    this.retrieveNationality();
  }
  onChangeSearchINV_NATIONALITY(e) {
    const searchINV_NATIONALITY = e.target.value;
    this.setState({
      searchINV_NATIONALITY: searchINV_NATIONALITY
    });
  }
  retrieveNationality() {
     DataService.getAll("/Nationality")
      .then(response => {
        this.setState({
            Nationalitys: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }
  refreshList() {
    this.retrieveNationality();
    this.setState({
      currentNationality: null,
      currentIndex: -1
    });
  }
  setActiveNationality( Nationalitys, index) {
    this.setState({
      currentUser:  Nationalitys,
      currentIndex: index
    });
  }
  removeAllNationality() {
     DataService.deleteAll("/Nationality")
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }
  searchINV_NATIONALITY() {
     DataService.findByTitle("/Nationality?=Inv_Nationality"+this.state.searchINV_NATIONALITY)
      .then(response => {
        this.setState({
         Nationalitys: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }





  render() {
    const { searchINV_NATIONALITY,  Nationalitys, currentNationality, currentIndex } = this.state;
    return (
      <div className="container">
        <h3 align="center" style={{marginTop:100}}>ADMIN - INVESTOR NATIONALITY MODULE</h3> 
      <div className="table-responsive">
      <table  className="table" style={{fontSize:"12px",width:"100%"}}>
        <thead className="bg-success text-white">
          <tr>
            <th>ID</th> 
            <th>MTUSER ID</th>  
            <th>EMAIL</th> 
            <th>MODULE</th> 
            <th>NATIONALITY</th> 
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
        { Nationalitys &&
               Nationalitys.map((Nationality, index) => (
            <tr>
            <td>{Nationality.id}</td> 
            <td>{Nationality.MTUSER_ID}</td> 
            <td>{Nationality.EMAIL}</td> 
            <td>{Nationality.MODULE}</td> 
            <td>{Nationality.INV_NATIONALITY}</td> 
            <td>{Nationality.STATUS}</td> 
            <td>{Nationality.COMMENTS}</td> 
            <td>{Nationality.DESCRIPTION}</td> 
            <td>{Nationality.CREATED_USER}</td> 
            <td>{Nationality.CREATED_DATE}</td> 
            <td>{Nationality.MODIFIED_USER}</td> 
            <td>{Nationality.MODIFIED_DATE}</td>
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

export default Admin_Nationality;