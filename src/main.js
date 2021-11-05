import Vue from 'vue'
import App from './App.vue'

//vue support
import VueRouter from 'vue-router'
import {routes} from './router'
Vue.use(VueRouter)




Vue.config.productionTip = false

const router = new VueRouter({
  routes ,
  mode:'history',
})

new Vue({
  render: h => h(App),
  router,
  
}).$mount('#app')
