<template>
    <div class="manager">
        <navComponent fullname="manager"/>
        <router-link to="" tag="button" class="btn-prev"></router-link>
        <EmployeeList />
        <router-link to="" tag="button" class="btn-next"></router-link>
        <div class="new-employee">
            <h3>Agregar trabajador</h3>
            <button class="btn-new-employee" v-on:click="modal=true"></button>
        </div>
        <div class="modal" v-if="modal">
            <div class="modal-employee">
                <h2>Nombre</h2>
                <input type="text" v-model="user">
                <h2>Correo electrónico</h2>
                <input type="text" v-model="email">
                <h2>Puesto</h2>
                <input type="text" v-model="role">
                <button class="btn-close-modal" v-on:click="modal=false"></button>
                <button class="add-employee" @click="addEmployee">Agregar trabajador</button>
            </div>
        </div>
        <div class="buttons">
            <router-link to="" tag="button"
            class="btn-manager"
            @click="currentView = !currentView"
            :class="{current: currentView}"
            >Trabajadores</router-link>
            <router-link to="" tag="button" class="btn-manager">Productos</router-link>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import navComponent from './navComponent.vue';
import EmployeeList from './EmployeeList.vue';

export default {
  name: 'managerView',
  data() {
    return {
      modal: false,
      currentView: true,
      user: '',
      email: '',
      role: '',
    };
  },
  components: {
    navComponent,
    EmployeeList,
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

    .manager {
        height: 100vh;
        display: grid;
        grid-template-columns: 10% 80% 10%;
        grid-template-rows: 10% 78% 12%;
    }

    .btn-prev, .btn-next {
        width: 65px;
        height: 65px;
        border: none;
        border-radius: 50%;
        align-self: center;
        background-color: transparent;
        background-size: contain;
        outline: none;
        cursor: pointer;
    }

    .btn-prev {
        grid-column: 1 /2;
        grid-row: 2 / 3;
        justify-self: end;
        background-image: url(../assets/btn-prev.svg);
    }

    .btn-next {
        grid-column: 3 / 4;
        grid-row: 2 / 3;
        background-image: url(../assets/btn-next.svg);
    }

    .new-employee {
        grid-column: 3 / 4;
        grid-row: 2 / 3;
        height: 30%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-self: end;
        justify-self: start;

        h3 {
            width: 65px;
            font-size: 12px;
            margin-bottom: 10px;
        }

        .btn-new-employee {
            width: 65px;
            height: 65px;
            outline: none;
            cursor: pointer;
            @include background-img(transparent,'../assets/btn-new-employee.svg', contain, none, 50%);
        }
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

    .buttons {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        grid-column: 1 / 4;
        grid-row: 3 / 4;
        border-top: 1px solid black;

        .btn-manager {
            width: 460px;
            height: 60px;
            font-size: 30px;
            font-weight: 800;
            border-radius: 10px;
            border: none;
            outline: none;
            cursor: pointer;
            background-color: white;
            border: 1px solid black;
        }

        .current {
            background-color: #00C7D4;
            border: none;
        }
    }
</style>
