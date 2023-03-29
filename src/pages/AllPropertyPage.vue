<script>
import {store} from '../store.js'
import { computed } from 'vue';
import axios from 'axios';

import CardProperty from '../components/shered-components/CardProperty.vue';
// 

// !!!!!!!!!!!!!!!!!!!!!!!!importare
// import SendMessage from '../components/PropertyShow/SendMessage.vue'

export default {
  name: 'AllPropertyPage',

  components: {
    CardProperty,
    // SendMessage
  },

  data(){
    return{
      store,
      property: null,

      //!!!!!!!!!!!!!!!!!! importare
      // mailGuest : '',
      // nameGuest: '',
      // subjectGuest: '',
      // messageGuest: ''
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
    },
    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!! importare
    // getMessageForm(mail, name, object, message){
    //   this.mailGuest = mail
    //   this.nameGuest = name
    //   this.subjectGuest = object
    //   this.messageGuest = message
    // }
  },

  created() {
    this.getProperties()
  },
}
</script>

<template>
  <main>
    <CardProperty :property="property"/>

    <!-- !!!!!!!!!!!!!!! importare -->
    <!-- <SendMessage @send="getMessageForm"/> -->

    <!-- {{ mailGuest}} {{ nameGuest }} {{ subjectGuest }} {{ messageGuest }} -->
  </main>
</template>

<style lang="scss">
  
</style>
