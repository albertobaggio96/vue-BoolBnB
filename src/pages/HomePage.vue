<script>
    import RouteInput from '../components/HomePage/RouteInput.vue'
    import {store} from '../store'
    export default {
        name: 'HomePage',
        components:{
            RouteInput
        }, 
        data(){
            return{
                store,
            }
        },
        methods:{
            searchApparament(address, radius){
                this.store.storeParams.address = address;
                this.store.storeParams.radius = radius;
            }
        }
    }
</script>

<template>
    <main>
        <RouteInput @address="searchApparament"/>
    </main>
</template>

<style lang="scss">
    
</style>