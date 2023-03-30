<script>
export default {
  props:[
    'property'
  ]
  
}
</script>

<template>
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
          <figure class="cover-img" v-if="property.images.length === 0 ">
            <img :src="'http://127.0.0.1:8000/storage/'+property.cover_img" :alt="property.slug" class="custom-img d-block w-100">
          </figure>
          <figure v-else class="carousel-item" :class="(index == 0) ? 'active' : ''" v-for="image, index in property.images">
            <img :src="'http://127.0.0.1:8000/storage/'+image.path" :alt="property.slug" class="custom-img d-block w-100">
          </figure>
        </div>
        <button class="carousel-control-prev" type="button" :data-bs-target="'#carouselExampleIndicators'+ property.id" data-bs-slide="prev" :class="property.images.length === 0 ? 'd-none' : ''">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" :data-bs-target="'#carouselExampleIndicators' + property.id" data-bs-slide="next" :class="property.images.length === 0 ? 'd-none' : ''">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
</template>

<style lang="scss" scoped>
  .cover-img,
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
</style>