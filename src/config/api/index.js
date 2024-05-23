import axios from 'axios'
import store from '../../store'
import $g from '../common/index'
let $config = import.meta.env
let requestUrl = $config.VITE_BASE_URL;
let requestLength = 0;
let instance = axios.create({
  baseURL: requestUrl,
  timeout: 30000,
  header: {
    'content-type': 'application/x-www-form-urlencoded' // 默认值
  },
});

// 请求拦截
instance.interceptors.request.use(function (config) {
  if(config.method == 'post'){
    let token = store.state.user.initData;
    console.log('----token-----',token)
    if(token){
      config.headers['Use-Agen'] = token
    }
  }
    console.log('-----config-----',config)
    return config
  },
  function (err) {
    return Promise.reject(err);
  })
// 响应拦截
instance.interceptors.response.use(
  async function (res) {
    return Promise.resolve({data:res.data,config:res.config})
  },
  function (err) {
    console.log('err=====',err)
    return Promise.reject(err)
  }
);
let api = {};

api.post = (url, params = {},headers = {}) => {
  return new Promise((resolve, reject) => {
    instance.post(url, params,headers).then(async (res) => {
      let ret = res
      if(res.data.code == -1){
        requestLength++
        $g.clearStorage();
        if(requestLength>3){
          return reject('Login fail');
        }
        ret = await reLogin(res.config)
      }
      return resolve(ret.data);
    }).catch((err) => {
      return reject(err);
    })
  });
}
function reLogin(resConfig){
  return new Promise(async (resolve, reject) => {
    try {
      let loginParams = {}
      if($config.MODE == 'development'){
        loginParams['tg_data'] = $config.VITE_TG_DATA
        loginParams['is_dev'] = 1
      }else{
        loginParams['tg_data'] = window.Telegram.WebApp.initData;
      }
      let authResult = await api.post('/portal/index/auth',loginParams);
      let authResultData = authResult.data;
      if (authResultData.token) {
        $g.setStorage('token', authResultData['token'])
      }
      for (const key in authResultData) {
        $g.setStorage(key, authResultData[key])
      }
      let params = {};
      if(resConfig.data){
        params = JSON.parse(resConfig.data);
      }
      let result = await api.post(resConfig.url,params);
      return resolve({data:result})
    } catch (error) {
      return reject(error)
    }
  });
}
api.get = (url, params = {}) => {
  return new Promise((resolve, reject) => {
    instance.post(url, params).then((res) => {
      return resolve(res.data);
    }).catch((err) => {
      return reject(err);
    })
  });
}

export default api;
