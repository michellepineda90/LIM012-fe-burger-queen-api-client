<template>
    <div class="credentials">
        <div>
            <router-link to="" tag="button" class="back-btn"></router-link>
        </div>
        <div class="login-form">
            <img src="../assets/logo-2.png" alt="">
            <h2>Inicia sesión</h2>
            <input class="input" type="email" placeholder="email">
            <input class="input" type="password" placeholder="contraseña">
            <router-link to="" tag="button" class="login-btn">Entrar</router-link>
            <!-- Aqui es donde deberíamos usar el post method? -->
        </div>
    </div>
</template>

<script>
export default {

  }
</script>

<style lang="scss">

    $width: 430px;
    $height: 60px;

    .credentials {
        display: flex;
        height: 100vh;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
        padding: 80px 0;
        img {
            max-width: 240px;
        }

        .input {
            width: $width;
            height: $height;
            border: 2px solid black;
            text-align: center;
            font-size: 36px;
            color: #AFAFAF;
            border-radius: 10px;
            outline: none;
        }

        .login-btn {
            width: $width;
            height: $height;
            background-color: #000;
            color: #AFAFAF;
        }
    }
</style>