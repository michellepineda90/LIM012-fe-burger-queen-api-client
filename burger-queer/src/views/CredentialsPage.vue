<template>
    <div class="credentials">
        <img src="../../assets/logo-2.png" alt="">
        <h2>Inicia sesión</h2>
        <input class="input" type="email" placeholder="email">
        <input class="input" type="password" placeholder="contraseña">
        <button>Entrar</button>
    </div>
</template>

<script>
<<<<<<< HEAD
    export default {
=======
export default {
>>>>>>> 0ae3199db53385ab09209cc9f593c34386b1516a
    name: 'App',
    components: {

    }, 
  }
</script>

<style lang="scss">
    .credentials {
        display: flex;
        height: 100vh;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        padding: 80px 0;
        img {
            width: 240px;
        }

        .input {
            width: 430px;
            height: 60px;
            border: 2px solid black;
            text-align: center;
            font-size: 36px;
            color: #AFAFAF;
            border-radius: 10px;
        }
    }
</style>