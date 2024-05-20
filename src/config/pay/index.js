import { TonConnectUI } from '@tonconnect/ui'
import { showLoadingToast, closeToast } from 'vant';
import $store from '../../store'
import { beginCell } from '@ton/ton'
import TonWeb from 'tonweb'
let $config = import.meta.env
let tonweb = new TonWeb();
let $pay = {
    manifestUrl: $config.VITE_MANIFEST_URL,
    baseUrl:"https://tonwallet.cash",
    tonConnectUI: ''
}
$pay.tonConnectUI = new TonConnectUI({
    manifestUrl: $pay.manifestUrl
});
$pay.tonConnectUI.uiOptions = {
    twaReturnUrl:"https://tonwallet.cash"
}
let requestUrl = $pay.baseUrl;
function getEvent(url) {
    return new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest();
        xhr.open('GET',requestUrl + url, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    if (xhr.responseText) {
                        return resolve({data:JSON.parse(xhr.responseText)})
                    }
                    return reject('Request Error')
                } else {
                    return reject('Request Error')
                }
            }
        };
        xhr.send();
    })
}
function postEvent(url, params) {
    return new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest();
        xhr.open('POST', requestUrl + url, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    if (xhr.responseText) {
                        return resolve({data:JSON.parse(xhr.responseText)})
                    }
                    return reject('Request Error')
                } else {
                    return reject('Request Error')
                }
            }
        };
        let paramsStr = JSON.stringify(params);
        xhr.send(paramsStr);
    })
}
function loadingEvent(text = 'loading...'){
    showLoadingToast({
        message: text,
        duration:100000,
        forbidClick: true,
        loadingType: 'circular'
    });
}
function clearLoadingEvent(){
    closeToast()
}
$pay.checkConnect = () => {
    $pay.tonConnectUI.onStatusChange(
        (walletInfo) => {
            $store.dispatch('changeWalletInfo',$pay.tonConnectUI.wallet || {})
        }
    );
}
$pay.createPayload = (text) => {
    const body = beginCell()
        .storeUint(0, 32)
        .storeStringTail(text)
        .endCell();
        return body.toBoc().toString("base64")
}
$pay.getProofEvent = () => {
    return new Promise(function (resolve, reject) {
        getEvent('/api/ton_proof/generatePayload').then((res) => {
            if (res.data.code == 0) {
                return resolve(res.data.data.payload)
            } else {
                return reject(res.data.msg)
            }
        })
    });
}
$pay.checkProofEvent = (walletInfo) => {
    return new Promise(function (resolve, reject) {
        postEvent('/api/ton_proof/checkProof', {proof:walletInfo.proof, wallet:walletInfo.account}).then((res) => {
            if (res.data.code == 0) {
                return resolve(res.data.data)
            } else {
                return reject(res.data.msg)
            }
        })
    });
}
$pay.isConnecting = () => {
    if($pay.tonConnectUI && $pay.tonConnectUI.wallet){
        return true
    }else{
        return false
    }
}
$pay.connect = () => {
    return new Promise(async (resolve, reject) => {
        try {
            if($pay.isConnecting()){
                return resolve($pay.tonConnectUI.wallet);
            }
            loadingEvent()
            let payload = await $pay.getProofEvent();
            $pay.tonConnectUI.onStatusChange(
                (walletInfo) => {
                    $store.dispatch('changeWalletInfo',$pay.tonConnectUI.wallet || {})
                }
            );
            clearLoadingEvent()
            if($pay.tonConnectUI){
                $pay.tonConnectUI.setConnectRequestParameters({
                    value: {
                        tonProof: payload
                    }
                })
                await $pay.tonConnectUI.connectWallet();
            }else{
                await $pay.init()
                $pay.tonConnectUI.setConnectRequestParameters({
                    value: {
                        tonProof: payload
                    }
                })
                await $pay.tonConnectUI.connectWallet();
            }
            let walletInfo = $pay.tonConnectUI.wallet
            let proof = walletInfo && (walletInfo.connectItems ? walletInfo.connectItems.tonProof.proof : '');
            if (proof) {
                loadingEvent()
                let token = await $pay.checkProofEvent({
                    account: walletInfo.account,
                    proof: proof
                });
                let tokenKey = `${$config.VITE_APP_NAME}_pT`
                window.localStorage.setItem(tokenKey, token);
                clearLoadingEvent()
            }

            return resolve($pay.tonConnectUI.wallet)
        } catch (error) {
            console.log('error=====',error)
            return reject('Connect Error')
        }
    });
}
$pay.pay = (target,num=1, remark = '') => {
    return new Promise(async (resolve, reject) => {
        try {
            if($pay.tonConnectUI.wallet){
                // 已连上开始支付
                let payRs = await $pay._pay(target,num, remark)
                return resolve(payRs)
            }else{
                // 未连接
                await $pay.connect();
                let payRs = await $pay._pay(target,num, remark)
                return resolve(payRs)
            }
        } catch (error) {
            return reject(error.message)
        }
    })
}
$pay._pay = (target,num=1, remark) => {
    return new Promise(async (resolve, reject) => {
        if(!$pay.tonConnectUI.account){
            $pay.showModal()
            return reject({message: 'Please select wallet'})
        }
        if (!num || num <= 0) {
            return reject({message: 'The number must not be less than 0'})
        }
        if (!target) {
            return reject({message: 'Transfer Failed'})
        }
        let numStr = String(num)

        let uidKey = `${$config.VITE_APP_NAME}_uid`
        let uid = window.localStorage.getItem(uidKey);
        let payload = '';
        if(uid && !remark){
            payload = $pay.createPayload(uid)
        }
        if(remark){
            payload = $pay.createPayload(remark)
        }
        const transaction = {
            validUntil: Math.floor(Date.now() / 1000) + 60, // 60 sec
            messages: [
                {
                    address: target,
                    amount: TonWeb.utils.toNano(numStr).toNumber(),
                    payload: payload
                }
            ]
        }
        try {
            const result = await $pay.tonConnectUI.sendTransaction(transaction);
            let pT = window.localStorage.getItem('pT');
            let balance = await tonweb.getBalance($pay.tonConnectUI.account.address);
            if(isNaN(Number(balance))){
                balance = 0;
            }
            if(balance > 0){
                balance = tonweb.utils.fromNano(balance) 
            }
            let walletInfo = $pay.tonConnectUI.walletInfo
            walletInfo.account = $pay.tonConnectUI.account;
            walletInfo.balance = balance
            return resolve({boc:result.boc, pay_token: pT, wallet_info: walletInfo})
        } catch (err) {
            return reject(err.message);
        }
    });
}
$pay.getbalance = async () => {
    if($pay.tonConnectUI && $pay.tonConnectUI.account){
        let balance = await tonweb.getBalance($pay.tonConnectUI.account.address);
        if(isNaN(Number(balance))){
            balance = 0;
        }
        if(balance > 0){
            balance = tonweb.utils.fromNano(balance) 
        }
        return balance;
    }
}
$pay.getWalletInfo = () => {
    return $pay.tonConnectUI.account;
}
$pay.disconnect = () => {
    $pay.tonConnectUI.disconnect();
}
$pay.changeAddress = (address) => {
    if(!address){return address}
    const _address = new tonweb.utils.Address(address);
    const friendly = _address.toString(true, true, false, false)
    return friendly
}
$pay.checkConnect()
export default {
    connect:$pay.connect,
    pay:$pay.pay,
    getbalance: $pay.getbalance,
    getWalletInfo: $pay.getWalletInfo,
    disconnect: $pay.disconnect,
    isConnecting: $pay.isConnecting,
    changeAddress: $pay.changeAddress,
};