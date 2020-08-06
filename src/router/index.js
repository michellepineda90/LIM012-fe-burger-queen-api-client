import Vue from 'vue';
import VueRouter from 'vue-router';
import Credentials from '../components/CredentialsView';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Credentials',
    component: Credentials,
  },
  {
    path: '/manager/employees',
    name: 'Manager',
    component: () => import(/* webpackChunkName: "about" */ '../components/ManagerView'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
