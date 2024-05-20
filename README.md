
主要封装
公共 css   scss/index.scss
公共方法    this.$g
公共请求通道    this.$api
公共支付模块    this.$pay
公共配置        this.$config
文件预加载写在  resource/index.js

====================== Api ===================================
=============== Pay api ======================
<!-- 
    use pay <Promise>
    targetAddress: target address
    payNum: pay num
    remark: remark
 -->
this.$pay.pay(targetAddress,payNum, remark);
<!-- connect wallet <Promise> -->
this.$pay.connect();
<!-- disconnect wallet  -->
this.$pay.disconnect();
<!-- get current connection wallet info -->
this.$pay.getWalletInfo();
<!-- get current connection wallet balance <Promise> -->
this.$pay.getbalance();
<!-- change wallet address -->
this.$pay.changeAddress(address);

============================= global event Api ==========================
<!-- toast  type = success || err || null (default:null) -->
this.$g.toast(text, type)
<!-- loading text (default:loading...) -->
this.$g.showLoading(text)
<!-- hideLoading use close showLoading -->
this.$g.hideLoading()
<!-- openLink tg openLink -->
this.$g.openLink(url)
<!-- share tg openTelegramLink -->
this.$g.share(url)
<!-- isShowBackBtn show Telegram back button 
    status:boolean  (default:true)
 -->
this.$g.isShowBackBtn(status)
<!-- get Telegram.WebApp.initData -->
this.$g.getInitData()
<!-- fullScreen Telegram.WebApp.expand -->
this.$g.fullScreen()
<!-- loadImg preLoad img file -->
this.$g.loadImg(img_url)
<!-- setStorage -->
this.$g.setStorage(key,value)
<!-- clearStorage -->
this.$g.clearStorage()
<!-- getStorage -->
this.$g.getStorage(key)
<!-- rmStorage -->
this.$g.rmStorage(key)
<!-- toUrl use change page -->
this.$g.toUrl(pagePath,params)
<!-- redirect use redirect page -->
this.$g.redirect(pagePath,params)
<!-- copy use copy text to clipBord -->
this.$g.copy(text)
<!-- formatLocationSearchEvent  format window.location.search to Object
 str=window.location.search
-->
this.$g.formatLocationSearchEvent(str)
<!-- formatInitDataEvent format window.Telegram.WebApp.initData to Object -->
this.$g.formatInitDataEvent(str)
<!-- formatSecondTime format second time to hour:minutes: seconds -->
this.$g.formatSecondTime(str)
<!-- formatAddressEvent format wallet address to aaaaa......bbbbb -->
this.$g.formatAddressEvent(addressStr)
<!-- formatGoldEvent format user balance to 100.000 || 100.000K || 100.000M || 100.000B -->
this.$g.formatGoldEvent(balanceNumber)
<!-- isShowUpdatePage current user is show update screen -->
this.$g.isShowUpdatePage()

======================= scss ========================
The outermost view of each page needs to add a class tag of the current page. example: Index.vue add <view class="index_page">page content</view>
Screen adaptation in src/scss/index.scss
small_window : pageSizeRate > 0.65 && winHeight < 600
phone_window : pageSizeRate < 0.65
pad_window : pageSizeRate > 0.65 && winHeight > 600 && 'pad_window'

all tag use rem
