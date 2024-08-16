import { createRouter, createWebHistory } from 'vue-router';
import CoachesList from './compnents/CoachesList.vue';
import CoachDetails from './compnents/CoachDetails.vue';
import CoachRegistration from './compnents/CoachRegistration.vue';
import ContactCoach from './compnents/ContactCoach.vue';
import RequestsReceived from './compnents/RequestsReceived.vue';
import NotFound from './compnents/NotFound.vue';
const routes = [
  {
    path: '/',
    redirect: '/coaches',
  },
  {
    name: 'coaches',
    path: '/coaches',
    component: CoachesList,
  },
  {
    path: '/coaches/:id',
    component: CoachDetails,
    children: [{ path: '', name: 'contactbyid', component: ContactCoach }], // coaches/c1/contact
  },
  {
    name: 'register',
    path: '/register',
    component: CoachRegistration,
  },
  {
    name: 'requests',
    path: '/requests',
    component: RequestsReceived,
  },
  {
    name: 'notfound',
    path: '/:notFound(.*)',
    component: NotFound,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'active',
});

export default router;
