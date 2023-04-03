<script>
import {store} from '../store.js'
import axios from 'axios';

import CardProperty from '../components/shered-components/CardProperty.vue';
import FiltersApp from '../components/SearchPage/FiltersApp.vue';
import LoaderLogo from '../components/SearchPage/LoaderLogo.vue';
import EmptySearch from '../components/SearchPage/EmptySearch.vue';
export default {
    props:[
        'homeInput'

    ],
    name: 'searchPage',
    components:{
        CardProperty,
        FiltersApp,
        LoaderLogo,
        EmptySearch,
    },
    data() {
        return {
            store,
            properties: null,
            services: null,
            servicesFilter : null,
            apiSuccess: 'in progress',
        }
    },
    methods:{
        getPropertyApi(){
            axios.get(this.store.apiUri, {
              params: this.store.storeParams
            })
            .then((response) => {
                console.log(response)
                this.apiSuccess = response.data.success
                if(this.apiSuccess){
                    this.properties = response.data.results
                } else {
                    this.properties = response.data.errorMessage
                }
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
                // console.log(response)
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
                this.store.storeParams.services = services.map(service => service.id);
                this.store.selectedIcon = services.map(service => service.icon)
            } else{
                delete this.store.storeParams.services 
                this.store.selectedIcon = []
            }

            if(beds){
                this.store.storeParams.min_beds = beds;
                this.store.selectedBeds = this.store.storeParams.min_beds
            } else{
                delete this.store.storeParams.min_beds
                this.store.selectedBeds = 0
            }

            if(rooms){
                this.store.storeParams.min_rooms = rooms;
                this.store.selectedRooms = this.store.storeParams.min_rooms
            } else{
                delete this.store.storeParams.min_rooms 
                this.store.selectedRooms = 0
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
            this.getPreviusPage()
        },
        getPreviusPage(){
            this.store.getBack ='search' 
        },
        removePreviusPage(){
            this.store.getBack = ''
        }
    },
    created(){
        this.getPropertyApi(),
        this.getServicesApi(),
        this.removePreviusPage()
    }
}
</script>

<template >
    <main>
        <div class="user-search container">
            <div class="row">
                <div class="col-12 mb-1 mt-5">
                    <h1 class="fs-4">Stai cercando appartamenti a : {{ this.store.storeParams.address.charAt(0).toUpperCase() +  this.store.storeParams.address.slice(1)}}</h1>
                </div>
            </div>
        </div>


        <!-- sezione della selezione dei servizi -->
        <section id="services-selection">
            <FiltersApp :services="services" @servicesFilter="getServicesFilter" :selectedBeds="store.selectedBeds" :selectedRooms="store.selectedRooms" :selectedIcon="store.selectedIcon"/>
        </section>
        <!-- risultato delle proprietà selezionate -->
        <section id="filtered-property">
            <div class="container">
                <div class="row">
                    <LoaderLogo v-if="properties === null"/>
                    
                    <EmptySearch v-else-if="properties.length < 1 || !apiSuccess" :invalidAddress="this.properties" :apiSuccess="apiSuccess"/>
                    
                    
                    <div v-else class="col-sm-12 col-md-6 col-lg-4 col-xl-3"  v-for="(property, index) in properties">
                      <CardProperty :property="property" @showSlug="getShowParams" :key="index"/>
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