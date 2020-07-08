import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/LoginView.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/credentials',
    name: 'Credentials',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/CredentialsView')
  }
]

const router = new VueRouter({
  routes
})

export default router
