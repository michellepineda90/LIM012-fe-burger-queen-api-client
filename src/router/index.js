import Vue from 'vue';
import VueRouter from 'vue-router';
import jwtDecode from 'jwt-decode';
import Credentials from '../components/CredentialsView.vue';

const USER_ROLE_ADMIN = 'Admin';
const AUTH_TOKEN_NAME = 'token';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Credentials',
    component: Credentials,
    beforeEnter: (to, from, next) => {
      const token = window.localStorage.getItem(AUTH_TOKEN_NAME);
      if (token !== '') {
        try {
          const user = jwtDecode(token);
          if (user.role === USER_ROLE_ADMIN) {
            next('/manager/employees');
          } else {
            next();
          }
        } catch (error) {
          next();
        }
      } else {
        next();
      }
    },
  },
  {
    path: '/manager/employees',
    name: 'Manager',
    component: () => import(/* webpackChunkName: "Manager" */ '../components/ManagerView'),
    beforeEnter: (to, from, next) => {
      const token = window.localStorage.getItem(AUTH_TOKEN_NAME);
      if (token !== '') {
        try {
          const user = jwtDecode(token);
          if (user.role === USER_ROLE_ADMIN) {
            next();
          } else {
            next('/');
          }
        } catch (error) {
          next('/');
        }
      } else {
        next('/');
      }
    },
  },
];

const router = new VueRouter({
  routes,
});

export default router;
