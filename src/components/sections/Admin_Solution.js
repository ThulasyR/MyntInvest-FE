import React, { Component } from "react";
import DataService from "../../service/DataService";

class Admin_Solution extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchPITCH_ID_GEN = this.onChangeSearchPITCH_ID_GEN.bind(this);
    this.retrieveSolution = this.retrieveSolution.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveSolution = this.setActiveSolution.bind(this);
    this.removeAllSolution = this.removeAllSolution.bind(this);
    this.searchPITCH_ID_GEN = this.searchPITCH_ID_GEN.bind(this);
    this.state = {
        Solutions: [],
      currentSolution: null,
      currentIndex: -1,
      searchPITCH_ID_GEN: ""
    };
  }
  componentDidMount() {
    this.retrieveSolution();
  }
  onChangeSearchPITCH_ID_GEN(e) {
    const searchPITCH_ID_GEN = e.target.value;
    this.setState({
      searchPITCH_ID_GEN: searchPITCH_ID_GEN
    });
  }
  retrieveSolution() {
     DataService.getAll("/Solution")
      .then(response => {
        this.setState({
            Solutions: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }
  refreshList() {
    this.retrieveSolution();
    this.setState({
      currentSolution: null,
      currentIndex: -1
    });
  }
  setActiveSolution(Solutions, index) {
    this.setState({
      currentSolution: Solutions,
      currentIndex: index
    });
  }
  removeAllSolution() {
     DataService.deleteAll("/Solution")
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }
  searchPITCH_ID_GEN() {
     DataService.findByTitle("/Solution?Pitch_Id_Gen="+this.state.searchPITCH_ID_GEN)
      .then(response => {
        this.setState({
            Solutions: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }





  render() {
    const { searchPITCH_ID_GEN, Solutions, currentSolution, currentIndex } = this.state;
    return (
    <div className="container">
      <div className="table-responsive">
       <h3 align="center" style={{marginTop:100}}>ADMIN - START UP PITCH SOLUTION MODULE</h3> 
      <table  className="table" style={{fontSize:"12px",width:"100%"}}>
        <thead className="bg-success text-white">
          <tr>
            <th>ID</th>
            <th>MTUSER ID</th> 
            <th>EMAIL</th> 
            <th>MODULE</th> 
            <th>PITCH_ID GEN</th> 
            <th>SOLUTION HEADER</th> 
            <th>SOLUTION BODY</th> 
            <th>SOLUTION IMAGE</th> 
            <th>SOLUTION VIDEO</th> 
            <th>STATUS</th> 
            <th>COMMENT</th> 
            <th>DESCRIPTION</th> 
            <th>CREATED USER</th> 
            <th>CREATED DATE</th> 
            <th>MODIFIED USER</th> 
            <th>MODIFIED DATE</th>
            <th>OPTIONS</th> 
            </tr>
        </thead>
        <tbody>
        {Solutions &&
              Solutions.map((Solution, index) => (
            <tr>
            <td>{Solution.id}</td>
            <td>{Solution.MTUSER_ID}</td> 
            <td>{Solution.EMAIL}</td> 
            <td>{Solution.MODULE}</td> 
            <td>{Solution.PITCH_ID_GEN}</td> 
            <td>{Solution.SOLUTION_HEADER}</td> 
            <td>{Solution.SOLUTION_BODY}</td> 
            <td>{Solution.SOLUTION_IMAGE}</td> 
            <td>{Solution.SOLUTION_VIDEO}</td> 
            <td>{Solution.STATUS}</td> 
            <td>{Solution.COMMENTS}</td> 
            <td>{Solution.DESCRIPTION}</td> 
            <td>{Solution.CREATED_USER}</td> 
            <td>{Solution.CREATED_DATE}</td> 
            <td>{Solution.MODIFIED_USER}</td> 
            <td>{Solution.MODIFIED_DATE}</td>
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

export default Admin_Solution;