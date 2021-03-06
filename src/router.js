import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import About from './About.vue';
import Courses from './Courses.vue';
import Booking from './Booking.vue';
import CourseList from './CourseList.vue';
import CourseDetail from './CourseDetail.vue';
import add from './add.vue';
import benefit from './benefit.vue'

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
      {
        path: '/',
        redirect: '/benefit',
        component: App,
        children: [
          { path: 'about', component: About},
          { path: 'booking', component: Booking},
          { path: 'add', component: add},
          { path: 'benefit', name:benefit, component: benefit},
          { 
            path: 'courses', 
            component: Courses,
            children: [
              { path: '', component: CourseList},
              { path: ':id', component: CourseDetail},
            ],
          },
        ],
      }, 
    ],
  });