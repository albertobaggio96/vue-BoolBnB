<script>
export default {
    
}
</script>
<template>
     <div class="spinner-wrapper">
        <img src="../../assets/Bool_icon.png" alt="" class="scale-up-center">
    </div>
</template>
<style lang="scss" scoped>
    
    .spinner-wrapper{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        img{
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }

    .scale-up-center {
	    -webkit-animation: scale-up-center 0.8s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
	    animation: scale-up-center 0.8s infinite cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
    }
 
    @-webkit-keyframes scale-up-center {
    0% {
        -webkit-transform: scale(0.5);
                transform: scale(0.5);
    }
    100% {
        -webkit-transform: scale(1);
                transform: scale(1);
    }
    }
    @keyframes scale-up-center {
    0% {
        -webkit-transform: scale(0.5);
                transform: scale(0.5);
    }
    100% {
        -webkit-transform: scale(1);
                transform: scale(1);
    }
    }
</style>