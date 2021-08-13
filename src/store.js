import Vue from 'vue'
import Vuex from 'vuex'
import  axios  from  'axios' 
import  VueAxios  from  'vue-axios'

Vue.use( VueAxios ,  axios );
Vue.use( Vuex );

const Lesson_URL='http://localhost:3000/data';

const store = new Vuex.Store({
  state:{
    lessons:[],
  },
  mutations:{
    setLessons(state, lessons){
      state.lessons = lessons;
    },
  },
  actions:{
	axiosLessons({commit}){
		axios.get('http://localhost:3000/data')
			.then((res) =>{
			console.log(res.data);
			commit('setLessons', res.data);
		})
		.catch((err) =>{
		// Run into big problems when I get an error
			console.log("Got an error logging in, here's the message: ", err);
		})
	},
},
});

export default store;