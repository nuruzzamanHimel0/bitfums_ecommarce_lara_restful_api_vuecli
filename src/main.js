import Vue from 'vue'
import App from './App.vue'

//vue support
import VueRouter from 'vue-router'
import {routes} from './router'
Vue.use(VueRouter)

//axios support
import axios from 'axios';
window.axios = axios;

// ##Global axios defaults
axios.defaults.baseURL = 'http://localhost/bitfums_ecommarce_lara_restful_api/public/api';




Vue.config.productionTip = false

const router = new VueRouter({
  routes ,
  mode:'history',
})

new Vue({
  render: h => h(App),
  router,
  
}).$mount('#app')
