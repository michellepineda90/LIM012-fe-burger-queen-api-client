<template>
    <div class="nav-style">
        <H2>¡Bienvenido {{ fullname }}!</H2>
        <router-link to="/" tag="h2" class="btn-sign-out">Cerrar sesión</router-link>
    </div>
</template>

<script>
export default {
  name: 'navComponent',
  props: {
    fullname: String,
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
            font-size: 28px;
            font-weight: 500;
        }

        .btn-sign-out {
            font-size: 28px;
            font-weight: 800;
        }
    }
</style>
