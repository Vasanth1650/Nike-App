import axios from 'axios'
const VIEW_BASE_REST_API_URL = 'https://nike-backend.herokuapp.com/refund';

class RefundServicee{

    getDetails(userid){
        return axios.get(VIEW_BASE_REST_API_URL+'/refunding/'+userid)
    }

    getAllRefund(){
        return axios.get(VIEW_BASE_REST_API_URL+'/viewerequest')
    }

    updatestatus(id,refund){
        return axios.put(VIEW_BASE_REST_API_URL+'/updaterefund/'+id,refund)
    }

    getById(id){
        return axios.get(VIEW_BASE_REST_API_URL+'/'+id);
    }

}

export default new RefundServicee();