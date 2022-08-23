import http from "../http-upload-common";
class FileUploadService {

    create(url,formData) { 
      return http.post(url, formData);//localhost:8000/api/mt_user(data)
    }

    update(url, formData) { 
      return http.put(url, formData);//`/mt_user/${id}`
    } 
}
export default new FileUploadService();