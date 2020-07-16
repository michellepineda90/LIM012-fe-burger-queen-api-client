<template>
    <div class="modal">
        <div class="modal-employee">
            <h2>Nombre</h2>
            <input type="text" v-model="user">
            <h2>Correo electrónico</h2>
            <input type="text" v-model="email">
            <h2>Puesto</h2>
            <input type="text" v-model="role">
            <button class="btn-close-modal" @click="$emit('close')"></button>
            <button class="add-employee" @click="addEmployee">Agregar trabajador</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ModalEmployee',
  data() {
    return {
      user: '',
      email: '',
      role: '',
    };
  },
  methods: {
    addEmployee() {
      axios({
        method: 'post',
        url: 'http://localhost:3000/users',
        data: {
          firstName: this.user,
          email: this.email,
          role: this.role,
        },
      })
        .then(() => {
          this.$store.dispatch('getEmployees');
        });
    },
    // closeModal() {
    //   return {
    //     modal: false,
    //   };
    // },
  },
};
</script>

<style lang="scss">
    @mixin background-img($color, $url, $size, $border, $radius) {
        background-color: $color;
        background-image: url($url);
        background-size: $size;
        border: $border;
        border-radius: $radius;
    }

    .modal {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 100vh;
        background-color: rgba($color: #000000, $alpha: 0.4);

        .modal-employee {
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 480px;
            height: 580px;
            background-color: white;
            border-radius: 20px;
            padding: 40px;

            h2 {
                text-align: left;
            }

            input {
                width: 300px;
                height: 45px;
                border-radius: 10px;
                border-style: none;
                border: 1px solid black;
            }

            .btn-close-modal {
                position: absolute;
                top: 40px;
                right: 40px;
                width: 50px;
                height: 50px;
                outline: none;
                cursor: pointer;
                @include background-img(transparent,'../assets/btn-exit.svg', contain, none, 50%);
            }

            .add-employee {
                width: 330px;
                height: 60px;
                align-self: center;
                border-radius: 10px;
                background-color: #00C7D4;
                border-style: none;
                font-size: 28px;
                font-weight: 600;
                outline: none;
              cursor: pointer;
            }
        }
    }
</style>
