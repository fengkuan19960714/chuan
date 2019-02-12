import Vue from 'vue'
import App from './App'

//引入mint-ui 分模块引入
import { Header } from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.component(Header.name, Header)

//引入mui
import './css/mui/css/mui.min.css'

//引入mui-icons-extra
import './css/mui/css/icons-extra.css'

import router from './router'



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})