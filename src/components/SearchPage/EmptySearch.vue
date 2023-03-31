<script>
export default {
    props:[
        'invalidAddress',
        'apibho'
    ],
    data() {
        return {
            
        }
    },

}
</script>

<template >
    <div class="col-12 text-center align-content-center">
        <img v-if="!apibho || invalidAddress.length === 0" src="../../assets/Bool_icon.png" alt="logo">
        <h2 v-if="!apibho">{{ invalidAddress }} &#128533;</h2>
        <h2 v-if="invalidAddress.length === 0">Spiacenti ma non ci sono proprietá per la posizione inserita &#128533;</h2>
    </div>
    
</template>

<style lang="scss" scoped>


</style>