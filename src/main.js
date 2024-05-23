import { createApp } from 'vue'
import router from './router'
import store from './store'
import {Toast ,Locale, PullRefresh,Popup,Switch,Overlay} from 'vant';
import 'vant/lib/index.css';
import enUS from 'vant/es/locale/lang/en-US';
import $g from './config/common'
Locale.use('en-US', enUS);
import $pay from './config/pay'
import $api from './api/api'

import './style.css'
import App from './App.vue'
let app = createApp(App)
app.config.globalProperties.$g = $g;
app.config.globalProperties.$pay = $pay;
app.config.globalProperties.$api = $api;
app.config.globalProperties.$config = import.meta.env;
window.document.title = import.meta.env.VITE_APP_NAME

app.use(router).use(store).use(Toast).use(PullRefresh).use(Popup).use(Switch).use(Overlay).mount('#app')
