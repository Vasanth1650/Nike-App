import axios from 'axios';
const VIEW_BASE_REST_API_URL = 'http://localhost:8080/product';

class DashboardService{
    getAllProducts(){
        return axios.get(VIEW_BASE_REST_API_URL+'/allproducts');
    }

    getByIds(id){
        return axios.get(VIEW_BASE_REST_API_URL+'/'+id);
    }

    deleteByProductId(id){
        return axios.delete(VIEW_BASE_REST_API_URL+'/delete/'+id)
    }

    getByGender(gender){
        return axios.get(VIEW_BASE_REST_API_URL+'/gender/'+gender)
    }
}

export default new DashboardService();