import Vue from 'vue'
import VueRouter from 'vue-router';
import router from './router'
import store from './store'

Vue.use(VueRouter);

new Vue({
  el: '#app',
  router,
  store,
  template: '<router-view/>',
})
