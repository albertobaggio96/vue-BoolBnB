<script>

export default {
  name: 'ServiceSelection',
  props:[
    'services'
  ],
  data() {
    return {
      checkedServices: [],
      nBeds : null,
      nRooms : null,
      radius : null,
    }
  },
  methods:{
  }
}
</script>

<template>
  <!-- services -->
  <ul>
    <li v-for="service in services">
      <input type="checkbox" :id="service.slug" :name="service.slug" :value="service.id" v-model="checkedServices"  @click="checkedServices" class="text-black text-decoration-none"/>
        <label :for="service.slug"> <font-awesome-icon :icon="service.icon" />{{ service.title }} </label>
    </li>
    <li>
      <a @click="checkedServices = []" class="btn btn-warning">Reset</a>
    </li>
  </ul>
  <div>
  </div>

  <!-- beds -->
  <div>
    <input type="number" id="beds" name="beds" v-model="nBeds">
    <label for="beds">Numero Letti</label>
  </div>

  <!-- rooms -->
  <div>
    <input type="number" id="rooms" name="rooms" v-model="nRooms">
    <label for="beds">Numero Stanze</label>
  </div>

  <!-- radius -->
  <div>
    <input type="number" id="rooms" name="rooms" v-model="radius">
    <label for="beds">Distanza</label>
  </div>
  <a class="btn btn-primary" @click="$emit('servicesFilter', checkedServices, nBeds, nRooms, radius)">cerca</a>
  <div>{{ checkedServices }}</div>
</template>

<style lang="scss">

</style>