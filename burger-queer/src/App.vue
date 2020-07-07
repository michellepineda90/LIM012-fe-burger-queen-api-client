<template>
  <div id="app">
    <Login />
  </div>
</template>

<script>

import Login from './views/LoginPage/LoginView.vue'

export default {
  name: 'App',
  components: {
    Login
  }, 
}
</script>

<style lang="scss" src="../src/scss/main.scss"></style>
