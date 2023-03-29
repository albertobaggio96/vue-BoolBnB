<script>
    export default {
        
    }
</script>

<template>
    <div  class="wrapper-popup slide-left">
        <div class="border1"></div>
        <div class="border2"></div>
        <img src="../../assets/Bool_icon.png" class="img-fluid try" alt="">
        <h6>Messaggio inviato!</h6>
    </div>
</template>

<style lang="scss">
     @use '../../style/partials/variables' as*;

    .wrapper-popup{
        z-index: 1;
        position: fixed;
        top: 50%;
        right: 100%;
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

        h6{
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translate(-50%);
        }
    }
    @keyframes  myAnimationLeft {
        from {left: 0%;}
        50% {left: 50%}
        to {left: 150%;}

    }
    /*Firefox */
    @-moz-keyframes myAnimationLeft {
        from {left: 0%;}
        to {left: 50%; transform: translate(-50%);}
    }
    /* Safari and Chrome */
    @-webkit-keyframes myAnimationLeft {
        from {left: 0%;}
        to {left: 50%;}
    }

    .slide-left {
        animation: myAnimationLeft 5.1s ease 0.1s 1 normal;
        -moz-animation: myAnimationLeft 5.1s ease 0.1s 1 normal;
        -webkit-animation: myAnimationLeft 5.1s ease 0.1s 1 normal;
        -o-animation: myAnimationLeft 5.1s ease 0.1s 1 normal;
    }
</style>