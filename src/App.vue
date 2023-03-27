<script> 
  import AppNavbar from './components/AppNavbar.vue';
  //import 'bootstrap/dist/js/bootstrap'

  export default{
    name: 'app',
    components: {
      AppNavbar,
    },
    data(){
      return{
        
      }
    },
    methods(){

    }
  }
</script>

<template>
  <AppNavbar/>
  <router-view></router-view>
</template>

<style lang="scss">
  //IMPORT BOOTSTRAP AND CUSTOM STYLE
  @use 'bootstrap/scss/bootstrap.scss' as *;
  @use './style/style.scss' as *;
</style>
