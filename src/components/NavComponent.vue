<template>
    <div class="nav-style">
        <!-- <h2>¡Bienvenido {{ fullname }}!</h2> -->
        <h2>¡Bienvenido {{ nameFromBus }}!</h2>
        <router-link to="/" tag="h2" class="sign-out" @click.native="logout">Cerrar sesión</router-link>
    </div>
</template>

<script>
import { eventBus } from '../main';

export default {
  name: 'NavComponent',
//   props: {
//     fullname: String,
//   },
  data() {
    return {
      nameFromBus: '',
    };
  },
  methods: {
      logout() {
        window.localStorage.removeItem('token');
        this.$router.push('/');
      }
  },
  created() {
    const vm = this;
    eventBus.$on('emailChanged', function(payload) {
        console.log(payload);
        // eventBus. la variable en data en el eventBus del main
        vm.nameFromBus = payload;
    });
  },
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
