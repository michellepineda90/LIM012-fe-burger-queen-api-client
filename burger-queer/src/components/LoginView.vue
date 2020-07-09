<template>
  <div class="login">
      <div class="login-background-img">
        <img src="../assets/burger-queer-logo.png" class="logo" alt="burger-queer-logo">
      </div>
      <div class="login-choices">
        <h1 class="title-text">Escoge una<br>opción</h1>
        <router-link to="/credentials" tag="button" class="role-btn">Mesero/a</router-link>
        <router-link to="/credentials" tag="button" class="role-btn">Jefe de cocina</router-link>
        <router-link to="/credentials" tag="button" class="role-btn">Administrador</router-link>
      </div>
  </div>
</template>

<script>

export default {

};

</script>

<style lang="scss">
  $color1: #FF5E53;
  $color2: white;

  .login {
      width: 100%;
      display: grid;
      grid-template-columns: 2(50%);
      grid-template-rows: 100%;
  }

  .login-background-img {
      background-image: url("../assets/background-img-logo.png");
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      background-color: black;
      grid-column: 1 / 2;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
  }

  .logo {
      max-width: 250px;
      max-height: 260px;
  }

  .login-choices {
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      align-items: center;
      grid-column: 2 / 3;
  }

  .role-btn {
      width: 275px;
      height: 65px;
      font-size: 30px;
      font-style: normal;
      font-weight: 500;
      border-radius: 10px;
      margin-top: 30px;
      background-color: $color1;
      color: $color2;
      border-style: none;
      outline: none;
  }
</style>
