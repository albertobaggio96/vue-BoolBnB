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
  <article>
    <!-- <img :src="imagePath+''+property.cover" alt=""> -->
    <img :src="'http://127.0.0.1:8000/storage/'+property.cover_img" alt="" class="img-fluid">
    <h2>{{ property.title}}</h2>
    <div> services : 
      <ul>
        <li v-for="service in property.services">{{ service.title }} </li>
      </ul>
    </div>
    <div>{{ property.distance }}</div>
    <div>beds :{{ property.n_beds }}</div>
    <div>rooms :{{ property.n_rooms }}</div>
  </article>
</template>

<style lang="scss">
  
</style>