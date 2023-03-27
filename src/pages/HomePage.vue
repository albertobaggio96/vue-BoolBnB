<script>
import RouteInput from '../components/HomePage/RouteInput.vue'
import { store } from '../store'


export default {
    name: 'HomePage',
    components: {
        RouteInput,
        
    },
    data() {
        return {
            store,
        }
    },
    methods: {
        searchApparament(address) {
            this.store.storeParams.address = address;
        },
        resetStore() {
            this.store.storeParams = {
                address: ''
            }
        }
    },
    created() {
        this.resetStore()
    }

}
</script>

<template>
    <div class="container d-flex justify-content-center">
        <div class="row">
            <div class="col-12">
                <img class="img-fluid" src="../assets/BoolB_B_logo-removebg-preview.png" alt="">
            </div>
        </div>
    </div>

    <main class="d-flex justify-content-center">
        <RouteInput @address="searchApparament" />
    </main>

    <div class="container">
        <div class="row">
            <div class="col-12 text-center fw-bold fs-1 m-3">
                Ecco le nostre proposte!
            </div>
        </div>
    </div>


</template>

<style lang="scss">

:root {
  --bg: #fff;
  --color: #333333;
}

html.dark-mode {
  --bg: #232b32;
  --color: #ddd8ca;
}

body {
  background-color: var(--bg);
  color: var(--color);
}

</style>