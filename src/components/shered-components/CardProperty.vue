<script>
export default {
  name: 'CardProperty',
  props:[
    'property'
  ],
  data(){
    return{

    }
  }

}
</script>

<template>
  <article class="col-12 col-lg-3">
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