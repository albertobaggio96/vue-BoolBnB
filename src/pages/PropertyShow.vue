<script>
import {store} from '../store.js'
import axios from 'axios'
import SendMessage from '../components/PropertyShow/SendMessage.vue'
export default {
    name: 'PropertyShow',
    components:{
        SendMessage,
    },
    data() {
        return {
            store,
            property: Object,
            urlSlug: store.apiUri + '/' + store.show,
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
        }
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
                <div class="col-6 p-1 d-none d-lg-inline-flex">
                    <img :src="'http://127.0.0.1:8000/storage/'+property.cover_img" alt="" class="img-fluid h-100 top-img">
                </div>
            
                <div class="col-6 h-100 d-flex flex-wrap p-1 d-none d-lg-inline-flex">
                    <div class="wrapper-img" v-for="image, index in property.images.slice(1, 5)" :class="'wrapper'+index">
                        <img :src="'http://127.0.0.1:8000/storage/'+image.path" class="img-fluid h-100" :class="'custom-img'+index" alt="">
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section>
        <div class="container">
            <div class="row">
                <div class="col-8">
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
                </div>

                <div class="col-4">
                    <div class="row align-content-center h-100 my-4">
                        <!-- <div class="col-12">
                            <p>Costo per notte: {{ property.night_price }}€</p>
                        </div> -->
                        <div class="col-12">
                            <div class="card w-100">
                                <div class="card-body">
                                    <div class="title mt-3 mb-5">
                                        <h5 class="card-title">Costo <strong>{{ property.night_price }}€</strong> per notte</h5>
                                    </div>
                                    <hr>

                                    <SendMessage :url="urlSlug" />
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

    .card{
        border-radius: 20px;
        background: #847EF0;
        background: -webkit-radial-gradient(top left, #847EF0, #C0C3D4);
        background: -moz-radial-gradient(top left, #847EF0, #C0C3D4);
        -webkit-box-shadow: 10px 10px 5px -1px rgba(0,0,0,0.75);
        -moz-box-shadow: 10px 10px 5px -1px rgba(0,0,0,0.75);
        box-shadow: 10px 10px 5px -1px rgba(0,0,0,0.75);
    }
  
</style>