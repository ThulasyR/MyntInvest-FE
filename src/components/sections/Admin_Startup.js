import React, { Component } from "react";
import DataService from "../../service/DataService";
import $ from "jquery";
class Admin_Startup extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchFirstName = this.onChangeSearchFirstName.bind(this);
    this.retrieveUser = this.retrieveUser.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveUser = this.setActiveUser.bind(this);
    this.removeAllUser = this.removeAllUser.bind(this);
    this.searchFirstName = this.searchFirstName.bind(this);
    this.state = {
      users: [],
      currentUser: null,
      currentIndex: -1,
      searchFirstName: ""
    };
  }
  componentDidMount() {
    this.retrieveUser();
  }
  onChangeSearchFirstName(e) {
    const searchFirstName = e.target.value;
    this.setState({
      searchFirstName: searchFirstName
    });
  }
  retrieveUser() {
     DataService.getAll("/mt_user")
      .then(response => {
        this.setState({
          users: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }
  refreshList() {
    $($.fn.dataTable.tables(true)).DataTable().columns.adjust().draw(false);   

    var adminStartupTable = $('#adminStartupTable').DataTable( {
    destroy: true,
    responsive: false,         
     ordering: false,
     searching: false,     
     scrollY:  "40vh",
     scrollX: true,
     scroller: false,
     scrollCollapse:false,
     paging:false, 
     filter:false,   
     columnDefs: [], 
     dom: '<<"top" ip>flt>', 
       columnDefs: [  { width: '20px', targets: [0,1]},
                 {"className": "dt-head-center text-center",targets: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],"orderable": false,"searchable": false}],		 
        fnDrawCallback: function(oSettings) {
           if (oSettings._iDisplayLength > oSettings.fnRecordsDisplay()) { 
           } 
        }
     }).draw();
    this.retrieveUser();
    this.setState({
      currentUser: null,
      currentIndex: -1
    });
  }
  setActiveUser(users, index) {
    this.setState({
      currentUser: users,
      currentIndex: index
    });
  }
  removeAllUser() {
     DataService.deleteAll("/mt_user")
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }
  searchFirstName() {
     DataService.findByTitle("/mt_user?firstname="+this.state.searchFirstName)
      .then(response => {
        this.setState({
          users: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }





  render() {
    const { searchFirstName, users, currentUser, currentIndex } = this.state;
    return (
      <div className="container">
        <h3 align="center" style={{marginTop:100}}>ADMIN - START UP MODULE</h3> 
      <div className="table-responsive">   
      <table id="adminStartupTable" class="dataTable table-bordered table-striped display hover" style={{width:"100%"}} > 
        <thead className="bg-success text-white">
          <tr>
            <th>ID</th> 
            <th>FIRST NAME</th> 
            <th>LAST NAME</th> 
            <th>EMAIL</th> 
            <th>SCHOOL</th> 
            <th>PASSWORD</th> 
            <th>CONFIRM PASSWORD</th> 
            <th>ROLE</th> 
            <th>MODULE</th> 
            <th>AGREECHK</th> 
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
        {users &&
              users.map((user, index) => (
            <tr>
            <td>{user.id}</td> 
            <td>{user.FIRSTNAME}</td> 
            <td>{user.LASTNAME}</td> 
            <td>{user.EMAIL}</td> 
            <td>{user.SCHOOL}</td> 
            <td>{user.PASSWORD}</td> 
            <td>{user.CONPASSWORD}</td> 
            <td>{user.ROLE}</td> 
            <td>{user.MODULE}</td> 
            <td>{user.AGREECHK}</td> 
            <td>{user.STATUS}</td> 
            <td>{user.COMMENTS}</td> 
            <td>{user.DESCRIPTION}</td> 
            <td>{user.CREATED_USER}</td> 
            <td>{user.CREATED_DATE}</td> 
            <td>{user.MODIFIED_USER}</td> 
            <td>{user.MODIFIED_DATE}</td>
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

export default Admin_Startup;