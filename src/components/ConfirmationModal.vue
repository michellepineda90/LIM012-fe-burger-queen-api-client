<template>
    <div class="modal">
      <div class="modal-employee">
        <h2>¿Estás seguro que deseas realizar esta acción?</h2>
        <button class="btn-close-modal" @click="$emit('close')"></button>
        <div class="button-enclosure">
          <button class="accept">Sí</button>
          <button class="decline">No</button>
        </div>
      </div>
    </div>
</template>

<script>

export default {

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
            justify-content: space-evenly;
            width: 480px;
            height: 580px;
            background-color: white;
            border-radius: 20px;
            padding: 40px;

            h2 {
                text-align: center;
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

            .button-enclosure {
              display: flex;
              flex-direction: row;
              justify-content: space-around;

              .accept, .decline {
                width: 150px;
                height: 60px;
                align-self: center;
                border-radius: 10px;
                background-color: #000;
                color: #fff;
                border-style: none;
                font-size: 28px;
                font-weight: 600;
                outline: none;
                cursor: pointer;
              }
            }
        }
    }
</style>
