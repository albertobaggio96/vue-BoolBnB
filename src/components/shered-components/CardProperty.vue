<script>
import { objectToString } from '@vue/shared';

export default {
  name: 'CardProperty',
  props:{
    'property': {
      type: Object,
      required: true
    },
    // 'imagePath'
  },
  data(){
    return{

    }
  }

}
</script>

<template>
  <!-- <article>
    <img :src="'http://127.0.0.1:8000/storage/'+property.cover_img" alt="" class="img-fluid"> 
    
    <div class="test" v-for="image in property.images">
      <img :src="'http://127.0.0.1:8000/storage/'+image.path" alt="" class="img-fluid">
    </div>
    <h2>{{ property.title}}</h2>
    <div> services : 
      <ul>
        <li v-for="service in property.services">{{ service.title }} </li>
      </ul>
    </div>
    <div>{{ property.distance }}</div>
    <div>beds :{{ property.n_beds }}</div>
    <div>rooms :{{ property.n_rooms }}</div>
  </article> -->


  <div class="card border-0 mb-4">
    <div :id="'carouselExampleIndicators'+ property.id" class="carousel carousel-dark slide" data-bs-ride="false">
      <div class="carousel-indicators">
        <button 
          v-for="id, index in property.images"  
          type="button" 
          :data-bs-target="'#carouselExampleIndicators' + property.id" 
          :data-bs-slide-to="index" 
          :class="(index == 0) ? 'active' : ''" 
          class="bg-white"
          :aria-current="(index == 0) ? 'true' : ''" 
          :aria-label="'Slide ' + (index + 1)">
        </button>
        
      </div>
      <div class="carousel-inner">  
        <div class="carousel-item" :class="(index == 0) ? 'active' : ''" v-for="image, index in property.images">
          <figure>
            <img :src="(image.path) ? 'http://127.0.0.1:8000/storage/'+image.path : property.cover_img" :alt="property.title" class="custom-img d-block w-100">
          </figure>
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
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</template>

<style lang="scss">

.carousel-item{
  height: 280px;
  .custom-img{
    object-fit: cover;
    object-position: center;
    height: 100%;
    border-radius: 20px;
  }
}


.carousel-control-next-icon,
.carousel-control-prev-icon{
  border: 1px solid white;
  border-radius: 50%;
  padding: .8rem;
  background-color: black;

}

.card-title{
  font-size: 14px;
}

.price-box{
  line-height: inherit;
}

</style>