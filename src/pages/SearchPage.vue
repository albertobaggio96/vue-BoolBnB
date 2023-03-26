<script>
import {store} from '../store.js'
import axios from 'axios';

import CardProperty from '../components/shered-components/CardProperty.vue';
export default {
    name: 'searchPage',
    components:{
        CardProperty
    },
    data() {
        return {
            store,
            properties: null,
            services: null,

        }
    },
    methods:{
        getPropertyApi(){
            const requests = [
            //***** chiamata axios che riporta le proprietà con la via e il raggio indicato precedentemente****************************************
                axios.get(this.store.apiUri, {
                  params: this.store.storeParams
                }),
            //***** chiamata axios che riporta tutta la tebella servizi****************************************
                axios.get(`${this.store.apiUri}/services`)

             ]
            //  richiama le due chiamate axios in un array
             axios.all(requests).then((responses) => {
                console.log(responses[0].data.results)
                // il primo risultato è il prodotto della prima chiamata (le proprietà)
                this.properties = responses[0].data.results
                // il secondo risultato è il prodotto della seconda chiamata (la tabella servizi)
                this.services = responses[1].data.results
             })
             .catch(function (error) {
               console.log(error);
             })
             .finally(function () {
               // always executed
             });  
        }
    },
    created(){
        this.getPropertyApi()
    }
}
</script>

<template >
    <main>
        <h1>search</h1>
        <section class="row">
            <CardProperty  v-for="property in properties" :property="property"/>
        </section>
    </main>
</template>

<style lang="scss">
    
</style>