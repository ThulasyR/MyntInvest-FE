import http from "../http-common";
class DataService { 
  getAll() {
    return http.get("/mt_user");
  }
  get(id) {
    return http.get(`/mt_user/${id}`);
  }
  create(url,data) {
    return http.post(url, data);// /api/employee(data)
  }
  update(url, data) {
    return http.put(url, data);//`/mt_user/${id}`
  }
  delete(url) {
    return http.delete(url); /*mt_user/${id} */
  }
  deleteAll() {
    return http.delete(`/mt_user`);
  }
  findByTitle(urls) {
    console.log("urls"+urls);
    return http.get(urls); ////"/userlogin?EMAIL="+this.state.input.logemail+
  }
  passData(urls){
    return http.get(urls);//"/userlogin?EMAIL="+this.state.input.logemail+"&PASSWORD="+this.state.input.logpassword
  }


  



}
export default new DataService();