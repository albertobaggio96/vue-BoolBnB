<script>
export default {
  name: 'ImagesDesktopMode',
  props:[
    'property',
  ],
  data() {
    return {
      
    }
  },
}
</script>

<template>
  <article class="col-12">
    <div class="row">
      <div class="p-1 d-none d-lg-inline-flex" :class="property.images.length === 0 ? 'col-12 justify-content-center' : 'col-6'">
        <img :src="'http://127.0.0.1:8000/storage/'+property.cover_img" :alt="property.title" class="img-fluid h-100 top-img">
      </div>
          
      <div v-if="property.images.length != 0" class="col-6 h-100 d-flex flex-wrap p-1 d-none d-lg-inline-flex position-relative">
        <div class="wrapper-img" v-for="image, index in property.images.slice(1, 5)" :class="'wrapper'+index">
          <img :src="'http://127.0.0.1:8000/storage/'+image.path" class="img-fluid h-100" :class="'custom-img'+index" :alt="property.title">
        </div>  
        <button type="button" class="btn button-outline" data-bs-toggle="modal" data-bs-target="#exampleModal"><font-awesome-icon icon="fa-solid fa-maximize" /> Mostra tutte le foto</button>
      </div>
      
      <div v-if="property.images.length != 0" class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
  </article>
</template>

<style lang="scss" scoped>
  @use '../../style/partials/variables' as*;

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
</style>