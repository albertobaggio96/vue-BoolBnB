<script>
import {store} from '../store.js'
import axios from 'axios';

import CardProperty from '../components/shered-components/CardProperty.vue';
import FiltersApp from '../components/SearchPage/FiltersApp.vue';
import LoaderLogo from '../components/SearchPage/LoaderLogo.vue';
export default {
    name: 'searchPage',
    components:{
        CardProperty,
        FiltersApp,
        LoaderLogo,
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
                    <LoaderLogo v-if="properties === null" />
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