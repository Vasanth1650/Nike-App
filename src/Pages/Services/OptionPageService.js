import { Category } from '@material-ui/icons';
import axios from 'axios';
const VIEW_BASE_REST_API_URL = 'http://localhost:8080/totalproducts';

class DashboardService{

    allProducts(){
        return axios.get(VIEW_BASE_REST_API_URL+'/allproducts')
    }

    productbyID(id){
        return axios.get(VIEW_BASE_REST_API_URL+'/'+id);
    }

    findByCategory(option){
        return axios.get(VIEW_BASE_REST_API_URL+'/category/'+option);
    }

    findByGender(option){
        return axios.get(VIEW_BASE_REST_API_URL+'/gender/'+option);
    }
}

export default new DashboardService();