<script>
import {store} from '../store.js'
import axios from 'axios'

import MobileCarousel from '../components/shered-components/MobileCarousel.vue'
import SendMessage from '../components/PropertyShow/SendMessage.vue'
import ImagesDesktopMode from '../components/PropertyShow/ImagesDesktopMode.vue'
import GeoMap from '../components/PropertyShow/GeoMap.vue'

export default {
    name: 'PropertyShow',
    components:{
        SendMessage,
        MobileCarousel,
        ImagesDesktopMode, 
        GeoMap,
    },
    data() {
        return {
            store,
            property: Object,
            urlSlug: `${store.apiUri}/${store.show}`,
            mailGuest: '',
            nameGuest: '',
            subjectGuest: '',
            messageGuest: '',
        }
    },
    methods: {
        getPropertyApi(){
            axios.get(this.urlSlug)
            .then((response) => {
                console.log(response)
                this.property = response.data.results
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {
               // always executed
            });  
        },
        getMessageForm(mail, name, object, message){
            axios.post(`${this.urlSlug}/message`, {
                name: name,
                mail_from: mail,
                subject: object,
                body_message: message,
            })
            .then((response) => {
              console.log(response)
            })
        },
   },
    created() {
        this.getPropertyApi()
    },
}
</script>


<template>
    <section class="container">
        <div class="row">
            <div class="col-12 mt-4 mb-5 p-0">
                <h1 class="fs-2 fw-bolder">{{ property.title }}</h1>
            </div>
        </div>
    </section>

    <section class="container">  
        <div class="row">
            <!-- CAROUSEL VISIBLE ONLY IN MOBILE AND TABLE -->
            <div class="col-12 d-lg-none">
                <MobileCarousel :property="property"/>
            </div>
            <!-- LAYOUT FOR IMG VISIBILE ONLY IN DESKTOP MODE -->
            <ImagesDesktopMode :property="property" />
        </div> 
    </section>

    <section class="container">
        <div class="row">
            <div class="col-12 col-lg-8">
                <div class="row">
                    <div class="col-12 col-md-6 my-3">
                        <p>{{property.n_beds}} Ospiti | {{property.n_rooms}} Camere da letto | {{ property.n_beds }} Letti | {{property.n_toilettes}} Bagni</p>
                    </div>
                        <div class="col-12 col-md-6 text-md-end title mt-3 mb-5">
                            <h5 class="card-title">Costo <strong>{{ property.night_price }}€</strong> per notte</h5>
                        </div>
                    <hr>
                    <div class="col-md-12 my-4">
                        <h3>Descrizione:</h3>
                        <p>{{ property.description }}</p>
                    </div>
                    <hr>
                    <div class="col-12">
                        <h3>Servizi:</h3>
                    </div>
                        <div class="col-12 col-lg-6 my-2" v-for="service in property.services" :key="service.id">
                            <font-awesome-icon :icon="service.icon" />
                            <span class="ms-3">{{ service.title }}</span>
                        </div>
                    
                </div>
                <hr>
            </div>
            
            <div class="col-12 col-md-8 offset-md-3 col-lg-4 offset-lg-0">
                <!-- MAP -->
                <div class="map-wrapper container-fluid">
                    <div class="row">
                        <div class="col-12">
                            <GeoMap :lon="property.longitude" :lat="property.latitude"/>
                        </div>
                    </div>
                </div>
                <div class="row h-100 mb-4">
                    <div class="col-12">
                        <div class="card w-100">
                            <div class="card-body">
                                <div class="title mt-3 mb-5 text-center">
                                    <h5 class="card-title">Invia un messaggio all'Host</h5>
                                </div>
                                <hr>
                                <SendMessage @send="getMessageForm" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>


<style lang="scss" scoped> 
    .map-wrapper{

        margin: 5rem 0;
        .map{
            height: 250px;
        }
    }
</style>