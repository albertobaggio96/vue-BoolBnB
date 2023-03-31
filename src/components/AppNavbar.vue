<script>
import {store} from '../store.js'

export default {
    name: 'navbar',
    data() {
        return {
            store
        }
    },
    methods:{
        resetStore() {
            this.store = {
                storeParams :{
                    address: ''
                },
                    selectedIcon:  [],
                    selectedBeds: 0,
                    selectedRooms: 0,
                    getBack : ''
                }

            return this.store
        },
    }
}
</script>
<template>
    <nav class="my-nav navbar navbar-expand-lg bg-body-tertiary ps-5 pe-5" data-bs-theme="dark">
        <div class="container-fluid p-1">
            <a class="navbar-brand" href="#"> <img src="../assets/Bool_icon.png" alt="Logo" width="30" height="24"
                    class="d-inline-block align-text-top"></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link  @click="resetStore()" :to="{ name: 'home' }" class="nav-link fs-5 fw-bold  text-dark"> <i class="fa-solid fa-house"></i> Home </router-link>
                    </li>
                    <li v-if="store.getBack == 'search'" class="nav-item">
                        <router-link @click="store.getBack = ''" :to="{ name: store.getBack }" class="nav-link fs-5 fw-bold  text-dark"> <i class="fa-solid fa-house"></i> Come Back </router-link>
                    </li>

                </ul>
                <span class="navbar-text">
                    <a class="login-a fw-bold m-2 " href="http://127.0.0.1:8000/admin">Login</a>
                </span>

            </div>
        </div>
    </nav>
</template>
<style lang="scss"></style>