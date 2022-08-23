import React, { Component } from "react";
import DataService from "../../service/DataService";

class Admin_FAQs extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchFAQ_SNO = this.onChangeSearchFAQ_SNO.bind(this);
    this.retrieveFaqs = this.retrieveFaqs.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveFaqs = this.setActiveFaqs.bind(this);
    this.removeAllFaqs = this.removeAllFaqs.bind(this);
    this.searchFAQ_SNO = this.searchFAQ_SNO.bind(this);
    this.state = {
        faqs: [],
      currentFaqs: null,
      currentIndex: -1,
      searchFAQ_SNO: ""
    };
  }
  componentDidMount() {
    this.retrieveFaqs();
  }
  onChangeSearchFAQ_SNO(e) {
    const searchFAQ_SNO = e.target.value;
    this.setState({
      searchFAQ_SNO: searchFAQ_SNO
    });
  }
  retrieveFaqs() {
     DataService.getAll("/FAQs")
      .then(response => {
        this.setState({
          faqs: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }
  refreshList() {
    this.retrieveFaqs();
    this.setState({
      currentFaqs: null,
      currentIndex: -1
    });
  }
  setActiveFaqs(faqs, index) {
    this.setState({
      currentFaqs: faqs,
      currentIndex: index
    });
  }
  removeAllFaqs() {
     DataService.deleteAll("/FAQs")
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }
  searchFAQ_SNO() {
     DataService.findByTitle("/FAQs?Faq_Sno="+this.state.searchFAQ_SNO)
      .then(response => {
        this.setState({
          faqs: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }





  render() {
    const { searchFirstName, faqs, currentFaqs, currentIndex } = this.state;
    return (
      <div className="container">
      <h3 align="center" style={{marginTop:100}}>ADMIN - STARTUP FAQs</h3> 
      <div className="table-responsive">
      <table  className="table" style={{fontSize:"12px",width:"100%"}}>
        <thead className="bg-success text-white">
          <tr>
            <th>ID</th>
            <th>MTUSER ID</th> 
            <th>EMAIL</th> 
            <th>MODULE</th> 
            <th>FAQ SNO</th> 
            <th>QUESTION</th> 
            <th>ANSWER</th> 
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
        {faqs &&
              faqs.map((faqs, index) => (
            <tr>
            <td>{faqs.id}</td>  
            <td>{faqs.MTUSER_ID}</td> 
            <td>{faqs.EMAIL}</td> 
            <td>{faqs.MODULE}</td> 
            <td>{faqs.FAQ_SNO}</td> 
            <td>{faqs.QUESTION}</td> 
            <td>{faqs.ANSWER}</td> 
            <td>{faqs.STATUS}</td> 
            <td>{faqs.COMMENTS}</td> 
            <td>{faqs.DESCRIPTION}</td> 
            <td>{faqs.CREATED_USER}</td> 
            <td>{faqs.CREATED_DATE}</td> 
            <td>{faqs.MODIFIED_USER}</td> 
            <td>{faqs.MODIFIED_DATE}</td> 
            
            <td>
              <button class="btn btn-primary"><i className="fa fa-edit"></i></button>
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

export default Admin_FAQs ;