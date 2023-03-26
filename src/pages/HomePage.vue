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
            searchApparament(address){
                this.store.storeParams.address = address;
            },
            resetStore(){
                this.store.storeParams = {
                    address : ''
                }
            }
        },
        created(){
            this.resetStore()
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