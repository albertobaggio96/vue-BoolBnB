<script>
import {store} from '../store.js'
import { computed } from 'vue';
import axios from 'axios'

import CardProperty from '../components/shered-components/CardProperty.vue';

export default {
  name: 'AllPropertyPage',

  components: {
    CardProperty
  },

  data(){
    return{
      store,
      property: null
    }
  },

  methods: {
    getProperties() {
      axios.get('http://127.0.0.1:8000/api/properties/accogliente-cottage-immerso-nella-natura-15', {
        params: {
        }
      })
      .then((response) => {
        console.log(response)
        this.property = response.data.results
      })
      .catch(function (error) {
        console.warn(error);
    });
    }
  },

  created() {
    this.getProperties()
  },
}
</script>

<template>
  <main>
    <div class="container">
      <div class="row">
          <CardProperty :property="property" class="col-10" />
      </div>
    </div>
  </main>
</template>

<style lang="scss">
  
</style>
