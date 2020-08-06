import Vue from 'vue';
import VueRouter from 'vue-router';
import Credentials from '../components/CredentialsView';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Credentials',
    component: Credentials,
    beforeEnter: (to, from, next) => {
      if (window.localStorage.getItem('token') != ''){
        next('/manager/employees')
      }
    }
  },
  {
    path: '/manager/employees',
    name: 'Manager',
    component: () => import(/* webpackChunkName: "about" */ '../components/ManagerView'),
    beforeEnter: (to, from, next) => {
      if (window.localStorage.getItem('token') != ''){
        next()
      }
      next('/')
    }
  },
];

const router = new VueRouter({
  routes,
});

export default router;
