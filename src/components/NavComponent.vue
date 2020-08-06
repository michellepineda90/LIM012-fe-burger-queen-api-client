<template>
    <div class="nav-style">
        <H2>¡Bienvenido {{ fullname }}!</H2>
        <router-link to="/" tag="h2" class="sign-out" 
        @click="logout">Cerrar sesión</router-link>
    </div>
</template>

<script>
export default {
  name: 'NavComponent',
  props: {
    fullname: String,
  },
  methods: {
      logout(){
        window.localStorage.removeItem('token');
      }
  }
};
</script>

<style lang="scss">
    .nav-style {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 0 40px;
        box-sizing: border-box;
        grid-column: 1 / 4;
        background-color: #00C7D4;

        h2 {
            font-family: Livvic, Helvetica, Arial, sans-serif;
            font-size: 28px;
            font-weight: 500;
        }

        .sign-out {
            font-size: 28px;
            font-weight: 800;
            cursor: pointer;
        }
    }
</style>
