<script>
import {store} from '../store.js'
import axios from 'axios'
import SendMessage from '../components/PropertyShow/SendMessage.vue'
import GeoMap from '../components/PropertyShow/GeoMap.vue'
export default {
    name: 'PropertyShow',
    components:{
        SendMessage,
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
    <section>
        <div class="container">
            <div class="row">
                <div class="col-12 mt-4 mb-5 p-0">
                    <h1 class="fs-2 fw-bolder">{{ property.title }}</h1>
                </div>
            </div>
        </div>
    </section>

    <section>
        <div class="container">
            <div class="row">
                <!-- CAROUSEL VISIBLE ONLY IN MOBILE AND TABLE -->
                <div class="col-12 d-lg-none">
                    <div :id="'carouselExampleIndicators'+ property.id" class="carousel slide" data-bs-ride="false">
                        <div class="carousel-indicators">
                            <button 
                            v-for="id, index in property.images"  
                            type="button" 
                            :data-bs-target="'#carouselExampleIndicators' + property.id" 
                            :data-bs-slide-to="index" 
                            :class="(index == 0) ? 'active' : ''" 
                            :aria-current="(index == 0) ? 'true' : ''" 
                            :aria-label="'Slide ' + (index + 1)">
                            </button>
                        </div>
                        <div class="carousel-inner">  
                            <div class="carousel-item" :class="(index == 0) ? 'active' : ''" v-for="image, index in property.images">
                                <img :src="'http://127.0.0.1:8000/storage/'+image.path" alt="" class="img-fluid d-block w-100">
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" :data-bs-target="'#carouselExampleIndicators'+ property.id" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" :data-bs-target="'#carouselExampleIndicators' + property.id" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <!-- LAYOUT FOR IMG VISIBILE ONLY IN DESKTOP MODE -->
                <div class="col-6 p-1 d-none d-lg-inline-flex">
                    <img :src="'http://127.0.0.1:8000/storage/'+property.cover_img" alt="" class="img-fluid h-100 top-img">
                </div>
            
                <div class="col-6 h-100 d-flex flex-wrap p-1 d-none d-lg-inline-flex position-relative">
                    <div class="wrapper-img" v-for="image, index in property.images.slice(1, 5)" :class="'wrapper'+index">
                        <img :src="'http://127.0.0.1:8000/storage/'+image.path" class="img-fluid h-100 test" :class="'custom-img'+index" alt="">
                    </div>  
                    <button type="button" class="btn button-outline" data-bs-toggle="modal" data-bs-target="#exampleModal"><font-awesome-icon icon="fa-solid fa-maximize" /> Mostra tutte le foto</button>
                </div>
                
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-fullscreen">
                        <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body container">
                            <div class="row justify-content-center">
                                <div class="img-wrapper-modal col-12 col-lg-8 mb-1"  v-for="image in property.images">
                                    <img :src="'http://127.0.0.1:8000/storage/'+image.path" alt="" class="img-fluid">
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn button-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section>
        <div class="container">
            <div class="row">
                <div class="col-12 col-lg-8">
                    <div class="row">
                        <div class="col-12 my-3">
                            <p>{{property.n_beds}} Ospiti | {{property.n_rooms}} Camere da letto | {{ property.n_beds }} Letti | {{property.n_toilettes}} Bagni</p>
                        </div>
                        <hr>
                        <div class="col-12 my-4">
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
                                    <div class="title mt-3 mb-5">
                                        <h5 class="card-title">Costo <strong>{{ property.night_price }}€</strong> per notte</h5>
                                    </div>
                                    <hr>

                                    <SendMessage @send="getMessageForm" />
                                    {{ mailGuest}} {{ nameGuest }} {{ subjectGuest }} {{ messageGuest }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>


<style lang="scss" scoped> 
    @use '../style/partials/variables' as*;
    .top-img{
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;   
    }
    .wrapper-img{
        width: calc(50% - 5px);
        height: 300px;
        img{
            height: 100%;
        }
    }

    .wrapper0{
        margin-bottom: 5px;
        margin-right: 5px;
    }
    .wrapper2{
        margin-right: 5px;
    }
    .custom-img1{
        border-top-right-radius: 10px;
    }

    .custom-img3{
        border-bottom-right-radius: 10px;
    }

    .button-outline{
        position: absolute;
        right: 15px;
        bottom: 10px;
        @include button-outline;
    }

    .button-secondary{
        @include button-secondary;
    }
    .card{
        border-radius: 20px;
        background: #847EF0;
        background: -webkit-radial-gradient(top left, #847EF0, #C0C3D4);
        background: -moz-radial-gradient(top left, #847EF0, #C0C3D4);
        -webkit-box-shadow: 10px 10px 5px -1px rgba(0,0,0,0.75);
        -moz-box-shadow: 10px 10px 5px -1px rgba(0,0,0,0.75);
        box-shadow: 10px 10px 5px -1px rgba(0,0,0,0.75);
    }

    //REMOVE VERTICAL SCROLBAR FOR CHROME OPERA AND SAFARI
    .modal-body::-webkit-scrollbar {
        display: none;
    }
    //REMOVE VERTICAL SCROLBAR FOR EDGE AND FIREFOX
    .modal-body {
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
    }

    .map-wrapper{

        margin: 5rem 0;
        .map{
            height: 250px;
        }
    }
  
</style>