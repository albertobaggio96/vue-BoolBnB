<script>
import {store} from '../store.js'
import axios from 'axios'

import MobileCarousel from '../components/shered-components/MobileCarousel.vue'
import SendMessage from '../components/PropertyShow/SendMessage.vue'
import ImagesDesktopMode from '../components/PropertyShow/ImagesDesktopMode.vue'
import ShowDetails from '../components/PropertyShow/ShowDetails.vue'
import GeoMap from '../components/PropertyShow/GeoMap.vue'
import PopupForm from '../components/PropertyShow/PopupForm.vue'
import TitleShow from '../components/PropertyShow/TitleShow.vue'
export default {
    name: 'PropertyShow',
    components:{
        SendMessage,
        MobileCarousel,
        ImagesDesktopMode, 
        ShowDetails,
        GeoMap,
        PopupForm,
        TitleShow,
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
            sended : false
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
              console.log(response.data)
              this.sended = response.data.success
            })

            setTimeout(this.endNotficiation, 5000);
        },
        endNotficiation(){
            return this.sended = false
        }
   },
    created() {
        this.getPropertyApi()
    },
}
</script>


<template>
    
    
    <section class="container" id="show-img">
        <TitleShow :property="property" />
        <div class="row">
            <!-- CAROUSEL VISIBLE ONLY IN MOBILE AND TABLE -->
            <div class="col-12 d-lg-none">
                <MobileCarousel :property="property"/>
            </div>
            <!-- LAYOUT FOR IMG VISIBILE ONLY IN DESKTOP MODE -->
            <ImagesDesktopMode :property="property" />
        </div> 
    </section>
    <section class="container" id="show-details">
        <div class="row">
            <!-- details -->
            <ShowDetails :property="property"/>
            
            <div class="col-12 col-md-8 offset-md-2 col-lg-4 offset-lg-0">
                <!-- MAP -->
                <GeoMap :lon="property.longitude" :lat="property.latitude"/>

                <!-- message form -->
                <div class="row mb-4">
                    <SendMessage @send="getMessageForm" :sended="sended"/>
                    <PopupForm v-if="sended" />
                </div>
            </div>
        </div>
    </section>

</template>


<style lang="scss" scoped>
   

</style>