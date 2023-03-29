<script>
import { objectToString } from '@vue/shared';

import MobileCarouselVue from './MobileCarousel.vue';

export default {
  name: 'CardProperty',
  components:{
    MobileCarouselVue,
  },
  props:{
    'property': {
      type: Object,
      required: true
    },
    // 'imagePath'
  },
  data(){
    return{
      getMaxLength(string){
        if(string.length > 27){
          return string.substring(0, 26) + '...'
        }

        return string
      }
    }
  }

}
</script>

<template>
  <router-link @click="$emit('showSlug', property.slug)" :to="{ name: 'show' }" class="text-black text-decoration-none">
    <div class="card border-0 mb-4">
      <MobileCarouselVue :property = "property"/>
      <article>
        <div class="d-flex align-items-center justify-content-between p-1">
          <h3 class="fs-6 fw-bold mb-0 h-100">{{ (property.address.split('-')[1]) ? property.address.split('-')[1] : property.address.split(' ').slice(-1)[0] }}</h3>
          <h3 class="fs-6 text-muted mb-0 h-100"> {{ property.distance }} km</h3>
          <div class="h-100"><strong>{{ property.night_price }}&euro;</strong> notte</div>
        </div>
        <div>
          <h2 class="fs-5 text-center">{{ getMaxLength(property.title) }}</h2>
        </div>
        <ul class="row text-center p-0">
          <li class="col list-group-item" v-for="service in property.services"><font-awesome-icon :icon="service.icon " /></li>
        </ul>
        <div class="d-flex justify-content-center">
          <div class="pe-2"><font-awesome-icon icon="fa-solid fa-bed" /> {{ property.n_beds }}</div>
          <div class="ps-2"><font-awesome-icon icon="fa-solid fa-person-shelter" /> {{ property.n_rooms }}</div>
        </div>
      </article>
    </div>
  </router-link>
</template>

<style lang="scss" scoped>

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