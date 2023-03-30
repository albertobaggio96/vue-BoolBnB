<script>

export default {
  name: 'RouteInput',
  data() {
    return {
      inputAddress: 'ciao',
    }
  },
  methods:{
    addressAutocomlete(){
      let key_tomtom = '5dOnjZSt5ReBy5v5KLIX6NEApWJqJ6bZ'

      var options = {
          searchOptions: {
          key: key_tomtom,
          language: "it-IT",
          limit: 5,
          countrySet : 'IT',
          extendedPostalCodesFor: 'PAD,Addr'
          },
          autocompleteOptions: {
          key: key_tomtom,
          language: "it-IT",
          countrySet : 'IT'
          },
          placeholder : 'es. (Via Roma 30, 30020 Fossalta di Piave)',
          minNumberOfCharacters : 4,
          showSearchButton : false,
          cssStyleCheck : false
        
      }
      var ttSearchBox = new tt.plugins.SearchBox(tt.services, options)
      var searchBoxHTML = ttSearchBox.getSearchBoxHTML()
      var addressLabel = document.getElementById('address-label')
      addressLabel.after(searchBoxHTML)
      var inputAddress = document.getElementsByClassName('tt-search-box-input')[0]
      inputAddress.classList.add('form-control')
      inputAddress.setAttribute('name', 'inputAddress')
      inputAddress.setAttribute('v-model', 'inputAddress')
      inputAddress.setAttribute('autocomplete', 'off')
      inputAddress.setAttribute('required', true)
      const inputBox = document.getElementsByClassName('tt-search-box-input-container')[0]
      inputBox.classList.add('position-relative', 'd-inline')
      const resultBox = document.getElementsByClassName('tt-search-box-result-list-container')[0]
      resultBox.classList.add('position-absolute', 'bg-white')
    }
  },
  mounted(){
    this.addressAutocomlete()
  }
}
</script>

<template>
  <article id="address-input">
    <label for="address" id="address-label">Scegli una destinazione per le tue vacanze!</label>
    {{ inputAddress }}

    <!-- <input type="text" placeholder="es.(Piazza S. Marco, Venezia)" v-model="inputAddress"> -->
    <router-link id="address-button" @click=" $emit('address', inputAddress)" :to="{ name: 'search' }" class="btn btn-primary" :class="inputAddress.length < 2 ? 'pe-none' : ''" > Invia </router-link>
  </article>
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

  .tt-search-box-close-icon{
    display: none;
  }
}
</style>