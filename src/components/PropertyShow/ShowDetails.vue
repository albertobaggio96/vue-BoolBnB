<script>
export default {
  name: 'ShowDetails',
  props:[
    'property'
  ]
}
</script>

<template>
  <div class="col-12 col-lg-8">
    <div class="row">
      <div class="col-12 col-md-6 my-3">
        <p>{{property.n_beds}} Ospiti | {{property.n_rooms}} Camere da letto | {{ property.n_beds }} Letti | {{property.n_toilettes}} Bagni</p>
      </div>
        <div class="col-12 col-md-6 text-md-end title mt-3 mb-5">
          <h5 class="card-title">Costo <strong>{{ property.night_price }}€</strong> per notte</h5>
        </div>
      <hr>
      <div class="col-md-12 my-4">
        <h3>Descrizione:</h3>
        <p>{{ property.description }}</p>
      </div>
      <hr>
      <div class="col-12">
        <h3>Servizi:</h3>
      </div>
        <div class="col-12 col-lg-6 my-2" v-for="service in property.services" :key="service.id">
          <font-awesome-icon :icon="service.icon" />
          <span class="ms-3">{{ service.title }}</span>
        </div>
    </div>
    <!-- <hr> -->
  </div>
</template>


<style lang="scss">
  
</style>