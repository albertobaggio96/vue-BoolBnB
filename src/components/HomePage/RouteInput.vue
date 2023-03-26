<script>
export default {
  name:'RouteInput',
  data() {
    return {
      inputAddress: '',
    }
  },
}
</script>

<template>
  <form id="address-input">
    <label for="address">Seleziona una destinazione</label>
    <input type="text" placeholder="es.(Piazza S. Marco, Venezia)" v-model="inputAddress">
    <router-link @click="$emit('address', inputAddress)" :to="{ name: 'search'}" class="btn btn-primary"> results </router-link>
  </form>
</template>

<style lang="scss">
  
</style>