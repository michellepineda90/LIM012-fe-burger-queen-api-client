<template>
    <div class="manager">
        <navComponent fullname="manager"/>
        <router-link to="" tag="button" class="back-btn-prev"></router-link>
        <list-employees />
        <router-link to="" tag="button" class="back-btn-next"></router-link>
        <div class="new-employee">
            <h3>Agregar trabajador</h3>
            <button class="btn-new-employee" v-on:click="modal=true"></button>
        </div>
        <div class="modal" v-if="modal">
            <div class="modal-employee">
                <h1>Nombre</h1>
                <input type="text">
            </div>
        </div>
        <div class="buttons">
            <router-link to="/" tag="button" class="btn-manager btn-list">Lista de trabajadores</router-link>
            <router-link to="/" tag="button" class="btn-manager btn-products">Productos</router-link>
        </div>
    </div>
</template>

<script>
import navComponent from './navComponent.vue';
import listEmployees from './listEmployees.vue';

export default {
  name: 'managerView',
  data() {
    return {
      modal: false,
    };
  },
  components: {
    navComponent,
    listEmployees,
  },
};
</script>

<style lang="scss">
    .manager {
        height: 100vh;
        display: grid;
        grid-template-columns: 10% 80% 10%;
        grid-template-rows: 10% 78% 12%;
    }

    .back-btn-prev, .back-btn-next {
        width: 65px;
        height: 65px;
        border: none;
        border-radius: 50%;
        align-self: center;
        background-color: transparent;
        background-size: contain;
    }

    .back-btn-prev {
        grid-column: 1 /2;
        grid-row: 2 / 3;
        justify-self: end;
        background-image: url(../assets/btn-prev.svg);
    }

    .back-btn-next {
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
            width: 500px;
            height: 600px;
            background-color: white;
        }
    }

    h3 {
        width: 65px;
        font-size: 12px;
        margin-bottom: 10px;
    }

    .btn-new-employee {
        width: 65px;
        height: 65px;
        background-color: transparent;
        background-image: url(../assets/btn-new-employee.svg);
        background-size: contain;
        border: none;
        border-radius: 50%;
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
        }

        .btn-list {
            background-color: #00C7D4;
        }

        .btn-products {
            background-color: white;
            border: 1px solid black;
        }
    }
</style>
