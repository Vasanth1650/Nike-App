import axios from "axios";
const VIEW_BASE_REST_API_URL = 'https://nike-backend.herokuapp.com/ordered';


class Myorderservice{

    getting(userid){
        return axios.get(VIEW_BASE_REST_API_URL+"/getbyuserid/"+userid);
    }

    finderById(id){
        return axios.get(VIEW_BASE_REST_API_URL+"/"+id);
    }

    deleting(id){
        return axios.delete(VIEW_BASE_REST_API_URL+'/'+id);
    }

    getAllOrders(){
        return axios.get(VIEW_BASE_REST_API_URL+'/viewallproducts')
    }

    updatingStatus(id,orders){
        return axios.put(VIEW_BASE_REST_API_URL+'/updateOrder/'+id,orders)
    }


}


export default new Myorderservice();