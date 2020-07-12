<template>
    <div class="manager">
        <navComponent fullname="manager"/>
        <router-link to="" tag="button" class="back-btn-prev"></router-link>
        <router-link to="" tag="button" class="back-btn-next"></router-link>
        <div class="buttons">
            <router-link to="/" tag="button" class="btn-manager btn-list">Lista de trabajadores</router-link>
            <router-link to="/" tag="button" class="btn-manager btn-products">Productos</router-link>
        </div>
    </div>
</template>

<script>
import navComponent from './navComponent.vue';

export default {
  name: 'managerView',
  components: {
    navComponent,
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
    }

    .back-btn-prev {
        grid-column: 1 /2;
        grid-row: 2 / 3;
        justify-self: end;
    }

    .back-btn-next {
        grid-column: 3 / 4;
        grid-row: 2 / 3;
    }

    .buttons {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        grid-column: 1 / 4;
        grid-row: 3 / 4;

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
        }
    }
</style>
