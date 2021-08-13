import Vue from 'vue'
import VueRouter from 'vue-router';
import router from './router'
import  axios  from  'axios' 
import  VueAxios  from  'vue-axios'
import store from './store'


Vue.use(VueRouter);
Vue.use( VueAxios ,  axios );

new Vue({
  el: '#app',
  store,
  router,
  template: '<router-view/>',
})
