<script>
export default {
    props:[
        'invalidAddress',
        'apiSuccess'
    ],
    data() {
        return {
            
        }
    },

}
</script>

<template >
    <div class="col-12 text-center align-content-center">
        <img v-if="!apiSuccess || invalidAddress.length === 0" src="../../assets/Bool_icon.png" alt="logo">
        <h2 v-if="!apiSuccess">{{ invalidAddress }} &#128533;</h2>
        <h2 v-if="invalidAddress.length === 0">Spiacenti ma non ci sono proprietá per la posizione inserita &#128533;</h2>
        <router-link v-if="invalidAddress.length === 0 || !apiSuccess" :to="{ name: 'home'}" class="btn outline-button"> <i class="fa-solid fa-house"></i> Torna alla home </router-link>
    </div>
    
</template>

<style lang="scss" scoped>
@use '../../style/partials/variables' as *;

.outline-button{
    @include button-outline;
}
</style>