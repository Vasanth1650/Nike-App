import axios from 'axios'
const VIEW_BASE_REST_API_URL = 'https://nike-backend.herokuapp.com/charging';

class Checkout{

    findByUserid(userid){
        return axios.get(VIEW_BASE_REST_API_URL+'/'+userid)
    }

    CheckoutDelete(userid){
        return axios.delete(VIEW_BASE_REST_API_URL+'/delete/'+userid)
    }
}

export default new Checkout();