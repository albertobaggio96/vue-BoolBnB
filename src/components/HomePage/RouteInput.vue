<script>
export default {
  name: 'RouteInput',
  data() {
    return {
      inputAddress: '',
    }
  },
}
</script>

<template>
  <form id="address-input">
    <label for="address">Scegli una destinazione per le tue vacanze!</label>
    <input type="text" placeholder="es.(Piazza S. Marco, Venezia)" v-model="inputAddress">
    <router-link @click="$emit('address', inputAddress)" :to="{ name: 'search' }" class="btn btn-primary"> results
    </router-link>
  </form>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Koulen&family=Lato&family=Nunito&family=Playfair+Display:ital@1&family=Prata&family=Raleway:ital,wght@1,100&family=Roboto&family=Roboto+Condensed&family=Teko&display=swap');

#address-input {
  margin: 1rem;
  background-color:  rgba(0, 0, 0, 0.1);
  padding: 1rem;
  border-radius: 2rem;

  label {
    margin: 1rem;
  }

  input {
    margin: 1rem;
    border-radius: 1rem;
    padding: .5rem;
    border: 1px solid #ff6550;
    width: 350px;
  }


  .btn {

    font-family: Roboto, sans-serif;
    font-weight: 0;
    font-size: 14px;
    color: #fff;
    background-color: #0066CC;
    padding: 10px 30px;
    border: 2px solid #0066cc;
    box-shadow: rgb(0, 0, 0) 0px 0px 0px 0px;
    border-radius: 50px;
    transition: 1000ms;
    transform: translateY(0);
    align-items: center;
    cursor: pointer;
  }

  .btn:hover {

    transition: 1000ms;
    padding: 10px 50px;
    transform: translateY(-0px);
    background-color: #fff;
    color: #0066cc;
    border: solid 2px #0066cc;
  }


}
</style>