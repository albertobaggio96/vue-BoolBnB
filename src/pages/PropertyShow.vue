<script>
import {store} from '../store.js'
import axios from 'axios'

import MobileCarousel from '../components/shered-components/MobileCarousel.vue'
import SendMessage from '../components/PropertyShow/SendMessage.vue'
import ImagesDesktopMode from '../components/PropertyShow/ImagesDesktopMode.vue'
import ShowDetails from '../components/PropertyShow/ShowDetails.vue'
import GeoMap from '../components/PropertyShow/GeoMap.vue'

export default {
    name: 'PropertyShow',
    components:{
        SendMessage,
        MobileCarousel,
        ImagesDesktopMode, 
        ShowDetails,
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
            <!-- details -->
            <ShowDetails :property="property"/>
            
            <div class="col-12 col-md-8 offset-md-3 col-lg-4 offset-lg-0">
                <!-- MAP -->
                <GeoMap :lon="property.longitude" :lat="property.latitude"/>

                <!-- message form -->
                <SendMessage @send="getMessageForm" />

            </div>
        </div>
    </section>

</template>