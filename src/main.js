import Vue from 'vue'
import App from './App.vue'
import uploader from 'vue-simple-uploader'
import router from './router'
import './plugins/element.js'
import './assets/css/global.css'
import TreeTable from 'vue-table-with-tree-grid'
import axios from 'axios'
import 'element-ui/lib/theme-chalk/base.css'

import VideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'
require('vue-video-player/src/custom-theme.css')
const hls = require('videojs-contrib-hls')
Vue.use(hls)
Vue.use(VideoPlayer)

axios.defaults.baseURL = 'http://localhost:8082'
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'; // 配置请求头（推荐）
axios.interceptors.request.use(config => {
  config.headers.Authorization = window.sessionStorage.getItem('tokenHead') + window.sessionStorage.getItem('token')
  return config
})
Vue.prototype.$http = axios
Vue.use(uploader)
Vue.config.productionTip = false
Vue.component('tree-table', TreeTable)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
