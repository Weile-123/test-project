import api from "../config/api";
let $api = {};
$api.postAuth = (params) => {
    return api.post('/portal/index/auth',params)
}
$api.getUpdataMsg = (params) => {
    return axios.get('/update',params)
}
export default $api