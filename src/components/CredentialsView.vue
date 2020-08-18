<template>
  <div class="credentials">
    <div class="login-form">
      <img
        src="../assets/logo-2.png"
        alt="burger-queer-logo"
      >
      <h2>Inicia sesión</h2>
      <input
        v-model="email"
        class="input"
        type="email"
        placeholder="email"
      >
      <input
        v-model="password"
        class="input"
        type="password"
        placeholder="contraseña"
      >
      <router-link
        to="/manager/employees"
        tag="button"
        class="login-btn"
        @click.native="handleSendForm"
      >
        Entrar
      </router-link>
      <!-- TODO:
      1. User input validation...
      2. Redirigir a la vista correspondiente dependiendo del rol de usuario aquí
      y si ya tiene token en el router
      -->
    </div>
  </div>
</template>

<script>
// import { eventBus } from '../main';
import auth from '../controllers/auth';

export default {
  data() {
    return {
      email: '',
      password: '',
      component: false,
    };
  },
  methods: {
    handleSendForm(e) {
      e.preventDefault();
      const userCredentials = {
        email: this.email,
        password: this.password,
      };
      auth(userCredentials)
        .then((resp) => {
          if (resp.token) {
            window.localStorage.setItem('token', resp.token);
            this.$router.push('/manager/employees');
          }
        });
    },
  },
  // watch: {
  //   email(){
  //     console.log(eventBus);
  //     eventBus.$emit('emailChanged', this.email);
  //   }
  // },
};

</script>

<style lang="scss">
    @mixin width-height($width, $height) {
        width: $width;
        height: $height;
    };

    .credentials {
        display: grid;
        align-items: center;
        height: 100vh;
        grid-template-columns: 10% 80% 10%;
        grid-template-rows: 100%;

        .back-btn {
            grid-column: 1 / 2;
            justify-self: end;
            border: none;
            border-radius: 50%;
            background-image: url("../assets/btn-back.svg");
            background-position: center;
            background-size: cover;
            background-color: rgba($color: #000000, $alpha: 0);
            outline: none;
        }

        .login-form {
            height: 80%;
            grid-column: 2 / 3;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-evenly;

            h2 {
                font-size: 36px;
            }
        }

        img {
            max-width: 240px;
        }

        .input {
            @include width-height(430px, 60px);
            border: 2px solid black;
            text-align: center;
            font-size: 36px;
            color: #AFAFAF;
            border-radius: 10px;
            outline: none;
        }

        .login-btn {
            @include width-height(300px, 60px);
            background-color: #000;
            color: #AFAFAF;
            font-size: 36px;
            border: none;
            outline: none;
            cursor: pointer;
            border-radius: 10px;
            color: white;
        }
    }
</style>
