import Vue from 'vue'
import App from './App.vue'
<<<<<<< HEAD
=======
import store from './store'
>>>>>>> 60d15bc48232cdbe2cea8bfcfce5a9a7afca0739

Vue.config.productionTip = false

new Vue({
<<<<<<< HEAD
  render: h => h(App),
=======
  store,
  render: h => h(App)
>>>>>>> 60d15bc48232cdbe2cea8bfcfce5a9a7afca0739
}).$mount('#app')
