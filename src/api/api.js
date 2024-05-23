import api from "../config/api"
let $api = {}
$api.postAuth = (params) => {
    return api.post('/portal/index/auth', params)
}
$api.getUpdataMsg = (params) => {
    return axios.get('/update', params)
}
// 注册/登录接口
$api.usersLogin = () => {
    return api.post('users/login', {})
}
// 获取用户信息及挂机列表
$api.usersGetuser = () => {
    return api.post('users/getuser', {})
}
export default $api