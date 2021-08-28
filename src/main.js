import Vue from 'vue'
import VueAxios  from  'vue-axios'
import VueRouter from 'vue-router'
import axios  from  'axios' 
import router from './router'
import store from './store'

Vue.use( VueRouter );
Vue.use( VueAxios ,  axios );

new Vue({
  el: '#app',
  store,
  router,
  template: '<router-view/>',
})
