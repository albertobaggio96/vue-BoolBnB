<script>

export default {
  name: 'ServiceSelection',
  props:[
    'services'
  ],
  data() {
    return {
      checkedServices: [],
    }
  },
  methods:{
  }
}
</script>

<template>
  <ul>
    <li v-for="service in services">
      <input type="checkbox" :id="service.slug" :name="service.slug" :value="service.id" v-model="checkedServices"  @click="checkedServices" class="text-black text-decoration-none"/>
        <label :for="service.slug"> <font-awesome-icon :icon="service.icon" />{{ service.title }} </label>
    </li>
    <li>
      <a @click="checkedServices = []" class="btn btn-warning">Reset</a>
    </li>
  </ul>
  
  <a class="btn btn-primary" @click="$emit('servicesFilter', checkedServices)">cerca</a>
  <div>{{ checkedServices }}</div>
</template>

<style lang="scss">

</style>