<script>
import {store} from '../store.js'
import axios from 'axios'

export default {
    name: 'PropertyShow',
    data() {
        return {
            store,
            property: Object
        }
    },
    methods: {
        getPropertyApi(){
            axios.get(this.store.apiUri + '/' + this.store.show)
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
                <div class="col-6 p-1">
                    <img :src="'http://127.0.0.1:8000/storage/'+property.cover_img" alt="" class="img-fluid h-100 top-img">
                </div>
            
                <div class="col-6 h-100 d-flex flex-wrap p-1">
                    <div class="wrapper-img" v-for="image, index in property.images.slice(1, 5)">
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


<style lang="scss" scoped>
    .top-img{
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;   
    }
    .wrapper-img{
        width: 50%;
        height: 300px;
        img{
            height: 100%;
        }
    }
    .custom-img1{
        border-top-right-radius: 10px;

    }

    .custom-img3{
        border-bottom-right-radius: 10px;
    }
  
</style>