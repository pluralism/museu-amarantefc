import Vue from 'vue';
import Router from 'vue-router';
import Main from './views/Main.vue';
import HistoryComponent from './views/History.vue';
import ScheduleComponent from './views/Schedule.vue';
import InstallationsComponent from './views/Installations.vue';
import PresidentsListComponent from './views/PresidentsList.vue';
import GalleryComponent from './views/Gallery.vue';
import EventDetailsComponent from './views/EventDetails.vue';

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
          component: HistoryComponent
        },
        {
          path: 'history',
          component: HistoryComponent
        },
        {
          path: 'presidents',
          component: PresidentsListComponent
        },
        {
          path: 'schedule/:year',
          component: ScheduleComponent
        },
        {
          path: 'installations',
          component: InstallationsComponent
        },
        {
          path: 'gallery',
          component: GalleryComponent
        },
        {
          path: 'events/:slug',
          component: EventDetailsComponent
        }
      ]
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
