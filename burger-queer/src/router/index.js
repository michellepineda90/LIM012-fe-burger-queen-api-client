import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../components/LoginView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
  },
  {
    path: '/credentials',
    name: 'Credentials',
    component: () => import('../components/CredentialsView'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
