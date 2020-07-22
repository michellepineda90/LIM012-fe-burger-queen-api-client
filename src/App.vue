<template>
  <div id="app">
    <login-view />
  </div>
</template>

<script>
import LoginView from './components/LoginView.vue'

export default {
  name: 'App',
  components: {
    LoginView,
  }
}
</script>

<style lang="scss" src='../src/scss/main.scss'></style>
