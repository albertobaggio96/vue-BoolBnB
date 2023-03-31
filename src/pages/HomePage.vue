<script>
import RouteInput from '../components/HomePage/RouteInput.vue'
import { store } from '../store'
import axios from 'axios';

import CardProperty from '../components/shered-components/CardProperty.vue';


export default {
    name: 'HomePage',
    components: {
        RouteInput,
        CardProperty
    },
    data() {
        return {
            store,
            sponsoredProperty : null
        }
    },
    methods: {
        searchApparament(address) {
            this.store.storeParams.address = address;
        },
        resetStore() {
            this.store.storeParams = {
                address: ''
            }
            this.store.selectedIcon = [],
            this.store.selectedBeds = 0
            this.store.selectedRooms = 0
        },
        sponsoredApi(){
            axios.get(`${this.store.apiUri}/home`)
            .then((response) => {
                console.log(response)
                this.sponsoredProperty = response.data.results
             })
             .catch(function (error) {
               console.log(error, ok);
             })
             .finally(function () {
               // always executed
             });  
        },
        getShowParams(slug){
            this.store.show = slug;
        },
    },
    created() {
        this.resetStore(),
        this.sponsoredApi()
    }

}
</script>

<template >
    <div class="background container-fluid">

        <section class="container d-flex justify-content-center">
            <div class="row">
                <div class="col-12">
                    <img class="img-fluid" src="../assets/BoolB_B_logo-removebg-preview.png" alt="">
                </div>
            </div>
        </section>
        
        <section class="d-flex justify-content-center">
            <RouteInput @address="searchApparament"/>
        </section>
        
    </div>

    <section class="container">
        <div class="row">
            <h2 class="col-12 text-center fw-bold fs-1 m-3">
                Ecco le nostre proposte in evidenza!
            </h2>
            <div class="col-sm-12 col-md-6 col-lg-4 col-xl-3 mt-2"  v-for="(property, index) in sponsoredProperty">
                <CardProperty :property="property" @showSlug="getShowParams" :key="index"/>
            </div>
        </div>
    </section>
</template>

<style lang="scss">

:root {
  --bg: #fff;
  --color: #333333;
}

html.dark-mode {
  --bg: #232b32;
  --color: #ddd8ca;
}

body {
  background-color: var(--bg);
  color: var(--color);
}

</style>