<script>
import {store} from '../store.js'
import axios from 'axios';

import CardProperty from '../components/shered-components/CardProperty.vue';
import FiltersApp from '../components/SearchPage/FiltersApp.vue';

export default {
    name: 'searchPage',
    components:{
        CardProperty,
        FiltersApp
    },
    data() {
        return {
            store,
            properties: null,
            services: null,
            servicesFilter : null,
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
        getServicesFilter(services, beds, rooms, radius){
            if(services.length){
                this.store.storeParams.services = services;
            } else{
                delete this.store.storeParams.services 
            }

            if(beds){
                this.store.storeParams.min_beds = beds;
            } else{
                delete this.store.storeParams.min_beds 
            }

            if(rooms){
                this.store.storeParams.min_rooms = rooms;
            } else{
                delete this.store.storeParams.min_rooms 
            }

            if(radius){
                this.store.storeParams.radius = radius;
            } else{
                delete this.store.storeParams.radius 
            }
            
            this.getPropertyApi()
        },
        getShowParams(slug){
            this.store.show = slug;
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
        <!-- sezione della selezione dei servizi -->
        <section id="services-selection">
            <FiltersApp :services="services" @servicesFilter="getServicesFilter"/>
        </section>
        <!-- risultato delle proprietà selezionate -->
        <section id="filtered-property">
            <div class="container">
                <div class="row">
                    <div v-if="properties === null" class="spinner-border text-secondary" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                    <div v-else-if="properties.length === 0 ">
                        NON CI SONO PROPRIETà
                    </div>
                    <div v-else class="col-sm-12 col-md-6 col-lg-4 col-xl-3"  v-for="property in properties">
                      <CardProperty :property="property" @showSlug="getShowParams"/>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<style lang="scss">
    
</style>