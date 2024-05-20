import { showToast,showSuccessToast, showFailToast, showLoadingToast, closeToast } from 'vant';
import router from '../../router/index'
import axios from 'axios'
let $config = import.meta.env
let $g = {};
$g.toast = (text = '',type) => {
    if(type == 'success'){
        return showSuccessToast(text);
    }else if(type == 'err'){
        return  showFailToast(text);
    }
    showToast(text);
}
$g.showLoading = (text = 'loading') => {
    showLoadingToast({
        message: text,
        duration:100000,
        forbidClick: true,
        loadingType: 'circular'
    });
}
$g.hideLoading = () => {
    closeToast()
}
$g.preventTouchScroll = (event) => {
    event.preventDefault();
}
$g.preventDoubleClick = (event) => {
    event.preventDefault();
}
$g.openLink = (url) => {
    if (window.Telegram && window.Telegram.WebApp) {
        window.Telegram.WebApp.openLink(url)
    }
}
$g.share = (share_url) =>{
    if (window.Telegram && window.Telegram.WebApp) {
        window.Telegram.WebApp.openTelegramLink(share_url)
    }
}
$g.getInitData = () =>{
    if (window.Telegram && window.Telegram.WebApp) {
        if(!window.Telegram.WebApp.initData && $config.MODE == 'development'){
            return decodeURIComponent($config.VITE_TG_DATA)
        }
        return decodeURIComponent(window.Telegram.WebApp.initData)
    }
    return ''
}
$g.isShowBackBtn = (type = true) => {
    if (window.Telegram && window.Telegram.WebApp) {
        if(type){
            Telegram.WebApp.BackButton.show();
        }else{
            Telegram.WebApp.BackButton.hide();
        }
    }
}
$g.fullScreen = () =>{
    if (window.Telegram && window.Telegram.WebApp) {
        window.Telegram.WebApp.expand();
    }
}
$g.loadImg = (path) => {
    return new Promise((resolve, reject) => {
        let image = new Image()
        image.src = path
        image.onload = () => {
          return resolve(image.src)
        }
    });
}
$g.setStorage = (key, value) => {
    if (!key) {
        return console.error('key undefined')
    }
    if (!value) {
        value = '';
    }
    key = `${$config.VITE_APP_NAME}_${key}`
    window.localStorage.setItem(key, value);
}
$g.clearStorage = () => {
    window.localStorage.clear();
}
$g.getStorage = (key) => {
    if (!key) {
        return console.error('key undefined')
    }
    key = `${$config.VITE_APP_NAME}_${key}`
    return window.localStorage.getItem(key);
}
$g.rmStorage = (key) => {
    if (!key) {
        return console.error('key undefined')
    }
    key = `${$config.VITE_APP_NAME}_${key}`
    window.localStorage.removeItem(key)
}
$g.toUrl = (path, params) => {
    if (!path) {
        return $.toast('Error')
    }
    return router.push({
        path: path,
        query: params
    });
}
$g.redirect = (path, params) => {
    if (!path) {
        return $.toast('Error')
    }
    return router.push({
        path: path,
        query: params
    });
}
$g.copy = (text) => {
    let domInput = document.createElement('input');
    domInput.value = text
    document.body.appendChild(domInput)
    domInput.select();
    document.execCommand('Copy') 
    domInput.remove()
    return true
}
$g.formatLocationSearchEvent = (str) => {
    let str0 = str.split('?')[1];
    let queryArr = str0.split('&');
    let resultObj = {}
    for (let i = 0; i < queryArr.length; i++) {
      let item = queryArr[i];
      let itemArr = item.split('=');
      resultObj[itemArr[0]] = itemArr[1]
    }
    return resultObj;
}
$g.formatInitDataEvent = (str) => {
     if(!str){return {}};
    let textStr = decodeURIComponent(str);
    let textArr = textStr.split('&');
    let resultObj = {};
    for (let i = 0; i < textArr.length; i++) {
        let itemArr = textArr[i].split('=')
        try {
            let value = JSON.parse(itemArr[1])
            resultObj[itemArr[0]] = value
        } catch (error) {
            resultObj[itemArr[0]] = itemArr[1] 
        }
    }
    return resultObj;
}
$g.formatSecondTime = (secondTime,format = '') => {
    let hours = Math.floor(secondTime / 3600);
    let minutes = Math.floor((secondTime % 3600) / 60);
    let seconds = secondTime % 60;
    let _hour = hours<10?'0'+hours:hours;
    let _minutes = minutes<10?'0'+minutes:minutes;
    let _second = seconds<10?'0'+seconds:seconds;
    if(format == 'arr'){
        let str = `${_hour}${_minutes}${_second}`
        return str.split('')
    }
    return `${_hour}:${_minutes}:${_second}`
}
$g.formatAddressEvent = (addressText = '') => {
    if(!addressText){return ''};
    let resultText = addressText.substring(0,5) +'......'+ addressText.substring(addressText.length-5,addressText.length);
    return resultText
}
$g.formatPriceStrEvent = (str) => {
    if(!str){return str};
    str = String(str)
    var source=str.replace(/,/g,'').split('.');
    source[0]=source[0].replace(/(\d)(?=(\d{3})+$)/ig,'$1,');
    str=source.join('.')
    return str;
}
$g.formatGoldStr = (str) => {
    if(!str){return 0};
    str = String(str);
    let strArr = str.split('.');
    let pointAfter = strArr[1];
    if(!pointAfter){
        pointAfter = '000'
    }else{
        for (let i = 0; i < 3; i++) {
            if(pointAfter.length < 3){
             pointAfter += '0'
            }
         }
    }
    let resultStr = `${$g.formatPriceStrEvent(strArr[0])}.${pointAfter}`;
    return resultStr;
}
$g.formatGoldEvent = (goldNum) => {
    if(goldNum <= 1000){
        return $g.formatGoldStr(goldNum)
    }
    if(goldNum <= 1000000){
        return $g.formatGoldStr(goldNum / 1000) + 'K'
    }
    if(goldNum <= 1000000000){
        return $g.formatGoldStr(Math.floor(goldNum / 1000000 * 1000) / 1000) + 'M'
    }
    return $g.formatGoldStr(Math.floor(goldNum / 1000000000 * 1000) / 1000) + 'B'
}
$g.isShowUpdatePage = () => {
    return new Promise((resolve,reject)=>{
        axios.get('/update.json').then(res => {
            let isShow = res.data.isUpdate;
            if(isShow){
                let initData = $g.getInitData();
                let initDataObj = $g.formatInitDataEvent(initData);
                let userId = initDataObj.user.id;
                console.log(userId)
                if(res.data.whiteIdList.includes(userId)){
                    return resolve(false)
                }
                return resolve(true)
            }
            return resolve(false)
        })
        .catch((err)=>{
            resolve(false)
        })
    })
}
$g.init = (color) => {
    if (window.Telegram && window.Telegram.WebApp) {
        window.Telegram.WebApp.ready()
        window.Telegram.WebApp.setBackgroundColor(color)
        window.Telegram.WebApp.setHeaderColor(color)
        window.Telegram.WebApp.expand();
        window.Telegram.WebApp.enableClosingConfirmation();
    }
}
export default $g