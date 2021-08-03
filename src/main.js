import Vue from 'vue'
import VueRouter from 'vue-router';
import router from './router'
import  axios  from  'axios' 
import  VueAxios  from  'vue-axios'


Vue.use(VueRouter);
Vue.use( VueAxios ,  axios );

new Vue({
  el: '#app',
  router,
  template: '<router-view/>',
})
