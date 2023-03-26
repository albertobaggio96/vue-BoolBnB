<script>
import {store} from '../store.js'
import axios from 'axios';

import CardProperty from '../components/shered-components/CardProperty.vue';
import ServiceSelection from '../components/SearchPage/ServiceSelection.vue';

export default {
    name: 'searchPage',
    components:{
        CardProperty,
        ServiceSelection
    },
    data() {
        return {
            store,
            properties: null,
            services: null,
            servicesFilter : [],
        }
    },
    methods:{
        getPropertyApi(){
            axios.get(this.store.apiUri, {
              params: this.store.storeParams
            })
            .then((response) => {
                console.log(response)
                this.properties = response.data.results
             })
             .catch(function (error) {
               console.log(error, ok);
             })
             .finally(function () {
               // always executed
             });  
        },
        getServicesApi(){
            axios.get(`${this.store.apiUri}/services`)
            .then((response) => {
                console.log(response)
                this.services = response.data.results
             })
             .catch(function (error) {
               console.log(error);
             })
             .finally(function () {
               // always executed
             });  
        },
        getServicesFilter(services){
            this.store.storeParams.services = services;
            this.getPropertyApi()
        }
    },
    created(){
        this.getPropertyApi()
        this.getServicesApi()
    }
}
</script>

<template >
    <main>
        <h1>search</h1>

        <!-- sezione della selezione dei servizi -->
        <section id="services-selection" class="row">
            <ServiceSelection :services="services" @servicesFilter="getServicesFilter"/>
        </section>
        {{ this.store}}
        <!-- risultato delle proprietà selezionate -->
        <section id="filtered-property" class="row">
            <CardProperty  v-for="property in properties" :property="property"/>
        </section>
    </main>
</template>

<style lang="scss">
    
</style>