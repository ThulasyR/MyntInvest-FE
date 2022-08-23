import React, { Component } from "react";

import DataService from "../../service/DataService";

class Admin_Banner extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchBANNER_SNO = this.onChangeSearchBANNER_SNO.bind(this);
    this.retrieveBanner = this.retrieveBanner.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveBanner = this.setActiveBanner.bind(this);
    this.removeAllBanner = this.removeAllBanner.bind(this);
    this.searchBANNER_SNO = this.searchBANNER_SNO.bind(this);
    this.state = {
        banners: [],
      currentBanner: null,
      currentIndex: -1,
      searchBANNER_SNO: ""
    };
  }
  componentDidMount() {
    this.retrieveBanner();
  }
  onChangeSearchBANNER_SNO(e) {
    const searchBANNER_SNO = e.target.value;
    this.setState({
      searchBANNER_SNO: searchBANNER_SNO
    });
  }
  retrieveBanner() {
     DataService.getAll("/Banner")
      .then(response => {
        this.setState({
            banners: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }
  refreshList() {
    this.retrieveBanner();
    this.setState({
      currentBanner: null,
      currentIndex: -1
    });
  }
  setActiveBanner(banners, index) {
    this.setState({
      currentBanner: banners,
      currentIndex: index
    });
  }
  removeAllBanner() {
     DataService.deleteAll("/Banner")
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }
  searchBANNER_SNO() {
     DataService.findByTitle("/Banner?Banner_Sno="+this.state.searchBANNER_SNO)
      .then(response => {
        this.setState({
            banners: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }





  render() {
    const { searchBANNER_SNO, banners, currentBanner, currentIndex } = this.state;
    return (
    <div className="container">
    <h3 align="center" style={{marginTop:100}}>ADMIN - START UP MODULE</h3> 
      <div className="table-responsive">
      <table  className="table" style={{fontSize:"12px",width:"100%"}}>
        <thead className="bg-success text-white">
          <tr>
            <th>ID</th>
            <th>MTUSER ID</th> 
            <th>EMAIL</th> 
            <th>MODULE</th> 
            <th>BANNER SNO</th> 
            <th>BANNER IMAGE</th> 
            <th>BANNER VIDEO</th> 
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
        {banners &&
              banners.map((banner, index) => (
            <tr>
            <td>{banner.id}</td>
            <td>{banner.MTUSER_ID}</td> 
            <td>{banner.EMAIL}</td> 
            <td>{banner.MODULE}</td> 
            <td>{banner.EBANNER_SNOAIL}</td> 
            <td>{banner.BANNER_IMAGE}</td> 
            <td>{banner.BANNER_VIDEO}</td> 
            <td>{banner.STATUS}</td> 
            <td>{banner.COMMENTS}</td> 
            <td>{banner.DESCRIPTION}</td> 
            <td>{banner.CREATED_USER}</td> 
            <td>{banner.CREATED_DATE}</td> 
            <td>{banner.MODIFIED_USER}</td> 
            <td>{banner.MODIFIED_DATE}</td>
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

export default Admin_Banner;