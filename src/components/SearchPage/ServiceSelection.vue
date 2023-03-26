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
    addOrRemov(arr, item){
     if(arr.includes(item)){
       return arr.splice(arr.indexOf(item), 1)
     }  
  		return arr.push(item)
    }
  }
}
</script>

<template>
  <ul>
    <li v-for="service in services">
      <a @click="addOrRemov(checkedServices, service.id), $emit('servicesFilter', checkedServices)">{{ service.title }} <font-awesome-icon :icon="service.icon" /></a>
    </li>
  </ul>
</template>

<style lang="scss">
  
</style>