<script>
import {store} from '../store.js'
import axios from 'axios';

export default {
    name: 'searchPage',
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
    <div>
        <h1>search</h1>
        <section>
            <article v-for="property in properties">
                <h1>{{property.title}}</h1>
            </article>
        </section>
</div>
</template>

<style lang="scss">
    
</style>