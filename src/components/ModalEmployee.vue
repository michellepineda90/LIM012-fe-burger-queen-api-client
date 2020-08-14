<template>
  <div class="modal">
    <div class="modal-employee">
      <h2>Email</h2>
      <input type="email" v-model="user.email">
      <h2>Password</h2>
      <input type="password" v-model="user.password">
      <h2>Puesto</h2>
      <select v-model="user.roles">
        <option :value="{ admin: true }">Administrador</option>
        <option :value="{ admin: false }">Usuario</option>
      </select>
      <button class="btn-close-modal" @click="closeModal"></button>
      <button class="submit-modal" @click="handleSubmit">
        {{ saveOrCreateText }}
      </button>
    </div>
  </div>
</template>

<script>

import { defaultUser } from './employee-helpers';

export default {
  name: 'ModalEmployee',
  data() {
    return {
      user: {
        password: '',
        email: '',
        roles: {
          admin: false,
        },
      },
    };
  },
  props: {
    isEdition: {
      type: Boolean,
      default: false,
    },
    userToEdit: {
      type: Object,
      default: defaultUser,
    },
  },
  mounted () {
    this.user = Object.assign({}, this.user, this.userToEdit); 
  },
  computed: {
    saveOrCreateText() {
      return this.isEdition ? 'Guardar cambios' : 'Agregar Trabajador';
    },
  },
  methods: {
    handleSubmit() {
      this.$emit('onSubmit', this.user);
    },
    closeModal() {
      this.$emit('close');
    },
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
                outline: none;
                font-size: 22px;
                padding-left: 5px;
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

            .submit-modal {
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
