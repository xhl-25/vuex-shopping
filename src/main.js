// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
Vue.config.productionTip = false

//引入common.css
import '@/assets/style/common.css'
// 引入resize
import '@/assets/lib/resize.js'

// 引入axios
import axios from 'axios'
Vue.prototype.$http=axios
console.log(axios);

// element
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// vant
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
