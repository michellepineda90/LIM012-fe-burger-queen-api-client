<template>
  <div class="manager">
    <nav-component fullname="manager"/>
    <router-link to="" tag="button" class="btn-prev"></router-link>
    <EmployeeList />
    <router-link to="" tag="button" class="btn-next"></router-link>
    <div class="new-employee">
        <h3>Agregar trabajador</h3>
        <button class="btn-new-employee" @click="modal=true"></button>
    </div>
    <modal-employee v-if="modal" @close="modal=false" button="Agregar Trabajador" />
    <div class="buttons">
        <router-link to="" tag="button" class="btn-manager employees">Trabajadores</router-link>
        <router-link to="" tag="button" class="btn-manager">Productos</router-link>
    </div>
  </div>
  <!-- TODO:
  1. Vincular el nombre del usuario desde CredentialsView
  2. Hacer renderizado condicional de componente trabajadores/productos con default en trabajadores
  -->
</template>

<script>
import NavComponent from './NavComponent.vue';
import EmployeeList from './EmployeeList.vue';
import ModalEmployee from './ModalEmployee.vue';

export default {
  name: 'managerView',
  data() {
    return {
      modal: false,
    };
  },
  components: {
    NavComponent,
    EmployeeList,
    ModalEmployee,
  },
  methods: {

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

      .employees {
        background-color: #00C7D4;
        border: none;
      }
    }
</style>
