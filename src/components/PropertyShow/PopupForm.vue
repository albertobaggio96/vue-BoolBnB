<script>
    export default {
        
    }
</script>

<template>
    <div  class="wrapper-popup slide-left">
        <div class="border1"></div>
        <div class="border2"></div>
        <img src="../../assets/Bool_icon.png" class="img-fluid try" alt="">
        <h1 class="">Messaggio inviato!</h1>
    </div>
</template>

<style lang="scss">
     @use '../../style/partials/variables' as*;
     

    .wrapper-popup{
        opacity: 0%;
        z-index: 1;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border: 1px solid $primary-purple;
        background-color: white;
        height: 200px;
        width: 300px;
        .border1{
            width:50%;
            transform: rotate(35deg);
            transform-origin: top left;
            border-top: 1px solid $secondary-purple;
            position: absolute;
            left: -1px;
            box-sizing: border-box;
        }
        .border2{
            width:50%;
            transform: rotate(-35deg);
            transform-origin: top right;
            border-top: 1px solid $secondary-purple;
            position: absolute;
            right: -1px;
            box-sizing: border-box;
        }
        img{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }

        h1{
            width: 100%;
            text-align: center;
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translate(-50%);
            color: $primary-purple;
            font-size: 1.8rem;
        }
    }
    @keyframes  transition-popup {
        from {opacity: 0%;}
        to {opacity: 100%}
        }
    /*Firefox */
    @-moz-keyframes transition-popup {
        from {opacity: 0%;}
        to {opacity: 100%;}
    }
    /* Safari and Chrome */
    @-webkit-keyframes transition-popup {
        from {opacity: 0%;}
        to {opacity: 100%;}
    }

    .slide-left {
        animation: transition-popup 2.1s ease 0.1s 1 normal;
        -moz-animation: transition-popup 2.1s ease 0.1s 1 normal;
        -webkit-animation: transition-popup 2.1s ease 0.1s 1 normal;
        -o-animation: transition-popup 2.1s ease 0.1s 1 normal;
    }
</style>