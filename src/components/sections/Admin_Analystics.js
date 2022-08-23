import React, { Component } from "react";
import DataService from "../../service/DataService";

class Admin_Analystics extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchTR_ANAL_SNO = this.onChangeSearchTR_ANAL_SNO.bind(this);
    this.retrieveAnalystic = this.retrieveAnalystic.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveAnalystic = this.setActiveAnalystic.bind(this);
    this.removeAllAnalystic = this.removeAllAnalystic.bind(this);
    this.searchTR_ANAL_SNO = this.searchTR_ANAL_SNO.bind(this);
    this.state = {
        analystics: [],
      currentAnalystic: null,
      currentIndex: -1,
      searchTR_ANAL_SNO: ""
    };
  }
  componentDidMount() {
    this.retrieveAnalystic();
  }
  onChangeSearchTR_ANAL_SNO(e) {
    const searchTR_ANAL_SNO = e.target.value;
    this.setState({
      searchTR_ANAL_SNO: searchTR_ANAL_SNO
    });
  }
  retrieveAnalystic() {
     DataService.getAll("/Analystics")
      .then(response => {
        this.setState({
            analystics: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }
  refreshList() {
    this.retrieveAnalystic();
    this.setState({
      currentAnalystic: null,
      currentIndex: -1
    });
  }
  setActiveAnalystic(analystics, index) {
    this.setState({
      currentAnalystic: analystics,
      currentIndex: index
    });
  }
  removeAllAnalystic() {
     DataService.deleteAll("/Analystics")
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }
  searchTR_ANAL_SNO() {
     DataService.findByTitle("/Analystics?Tr_Anal_Sno="+this.state.searchTR_ANAL_SNO)
      .then(response => {
        this.setState({
            analystics: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }





  render() {
    const { searchTR_ANAL_SNO, analystics, currentAnalystic, currentIndex } = this.state;
    return (
      <div className="container">
        <h3 align="center" style={{marginTop:100}}>ADMIN - START UP ANALYSTICS MODULE</h3> 
      <div className="table-responsive">
      <table  className="table" style={{fontSize:"12px",width:"100%"}}>
        <thead className="bg-success text-white">
          <tr>
            <th>ID</th> 
            <th>MTUSER ID</th> 
            <th>EMAIL</th> 
            <th>MODULE</th> 
            <th>TR ANAL SNO</th>
            <th>UPLOAD IMAGES</th>
            <th>TOTAL REVENUE</th>
            <th>GROWTH PROFIT MARGIN</th>
            <th>MONTH REC REVENUE</th> 
            <th>CUS CHURN RATE</th> 
            <th>MONTHLY ACTIVE USERS</th> 
            <th>CAC RATIO</th>
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
        {analystics &&
              analystics.map((analystic, index) => (
            <tr>
            <td>{analystic.id}</td> 
            <td>{analystic.MTUSER_ID}</td> 
            <td>{analystic.EMAIL}</td>
            <td>{analystic.MODULE}</td> 
            <td>{analystic.TR_ANAL_SNO}</td> 
            <td>{analystic.UPLOAD_IMAGES}</td> 
            <td>{analystic.TOTAL_REVENUE}</td> 
            <td>{analystic.GROWTH_PROFIT_MARGIN}</td> 
            <td>{analystic.MONTH_REC_REVENUE}</td> 
            <td>{analystic.CUS_CHURN_RATE}</td> 
            <td>{analystic.MONTHLY_ACTIVE_USERS}</td>
            <td>{analystic.CAC_RATIO}</td>  
            <td>{analystic.STATUS}</td> 
            <td>{analystic.COMMENTS}</td> 
            <td>{analystic.DESCRIPTION}</td> 
            <td>{analystic.CREATED_USER}</td> 
            <td>{analystic.CREATED_DATE}</td> 
            <td>{analystic.MODIFIED_USER}</td> 
            <td>{analystic.MODIFIED_DATE}</td>
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

export default Admin_Analystics;