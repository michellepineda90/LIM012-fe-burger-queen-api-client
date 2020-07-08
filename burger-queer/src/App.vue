<template>
  <div id="app">
    <div id="nav">
      <Login />
    </div>
    <router-view/>
  </div>
</template>

<script>

import Login from '../src/components/LoginView'

export default {
  name: 'App',
  components: {
    Login
  }, 
}

</script>

<style lang="scss" src='../src/scss/main.scss'></style>
