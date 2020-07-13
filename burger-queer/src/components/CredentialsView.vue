<template>
    <div class="credentials">
        <router-link to="/" tag="button" class="back-btn"></router-link>
        <div class="login-form">
            <img src="../assets/logo-2.png" alt="">
            <h2>Inicia sesión</h2>
            <input class="input" type="email" placeholder="email">
            <input class="input" type="password" placeholder="contraseña">
            <router-link to="/manager" tag="button" class="login-btn">Entrar</router-link>
            <!-- Aqui es donde deberíamos usar el post method? -->
        </div>
    </div>
</template>

<script>
export default {

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
            border-radius: 10px;
            color: white;
        }
    }
</style>
