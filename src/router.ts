import Vue from 'vue';
import Router from 'vue-router';
import Main from './views/Main.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Main,
      children: [
        {
          path: '',
          component: () => import('./views/History.vue')
        },
        {
          path: 'history',
          component: () => import('./views/History.vue')
        },
        {
          path: 'presidents',
          component: () => import('./views/PresidentsList.vue')
        },
        {
          path: 'schedule',
          component: () => import('./views/Schedule.vue')
        },
        {
          path: 'installations',
          component: () => import('./views/Installations.vue')
        }
      ]
    },
  ]
})
