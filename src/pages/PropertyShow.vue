<script>
import {store} from '../store.js'
import axios from 'axios'

export default {
    name: 'PropertyShow',
    data() {
        return {
            store,
            slug: 'accogliente-cottage-immerso-nella-natura-15',
            property: Object
        }
    },
    methods: {
        getPropertyApi(){
            axios.get(this.store.apiUri + '/' + this.slug)
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
                <div class="col-12">
                    <h1>{{ property.title }}</h1>
                </div>
            </div>
        </div>
    </section>

    <section>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <!-- Carosello immagini -->
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
                    <!-- Fine carosello -->
                </div>
            </div>
        </div>
    </section>

    <section>
        <div class="container">
            <div class="row">

                <div class="col-8">
                    <div class="row">
                        <div class="col-12">
                            <h3>Info proprietà</h3>
                            <p>{{property.n_beds}} Ospiti | {{property.n_rooms}} Stanze | {{property.n_toilettes}} Bagni</p>
                        </div>
                        <div class="col-12">
                            <h3>Descrizione:</h3>
                            <p>{{ property.description }}</p>
                        </div>
                        <div class="col-12">
                            <h3>Servizi:</h3>
                            <ul class="list-unstyled">
                                <li v-for="service in property.services" :key="service.id">
                                    <font-awesome-icon :icon="service.icon" />
                                    <span class="ms-3">{{ service.title }}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="col-4">
                    <div class="col-12">
                        <p>Costo per notte: {{ property.night_price }}€</p>
                    </div>
                    <div class="col-12">
                        Form per contattare l'host
                    </div>
                </div>

            </div>
        </div>
    </section>
    
</template>


<style lang="scss">
    
</style>