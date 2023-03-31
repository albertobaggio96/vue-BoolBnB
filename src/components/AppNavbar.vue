<script>
import {store} from '../store.js'

export default {
    name: 'navbar',
    data() {
        return {
            store
        }
    },
}
</script>
<template>
    <nav class="my-nav navbar navbar-expand bg-white" data-bs-theme="dark">
        <div class="container p-1 w-100">
            <div class="row w-100 align-items-center">
                <div class="col-4">
                    <a class="navbar-brand ms-3" href="http://localhost:5174/"> <img src="../assets/Bool_icon.png" alt="Logo" width="30" height="24" class="d-inline-block me-auto"></a>
                </div>
                <div class="navbar-collapse col-4 text-center" id="navbarText">
                    <ul class="navbar-nav me-auto">
                        <li class="nav-item button-nav">
                            <router-link :to="{ name: 'home' }" class="nav-link color-a fw-bold"> <i class="fa-solid fa-house"></i> <font-awesome-icon icon="fa-solid fa-house" class=""/><span class="d-none d-md-inline"> Home</span> </router-link>
                        </li>
                        <li v-if="store.getBack == 'search'" class="nav-item button-nav me-3">
                            <router-link :to="{ name: store.getBack }" class="nav-link color-a fw-bold"> <i class="fa-solid fa-house"></i><font-awesome-icon icon="fa-solid fa-arrow-left" /></router-link>
                        </li>
                    </ul>  
                </div>
                <div class="col-4 text-end">
                    <span class="navbar-text button-nav">
                        <a class="color-a text-decoration-none fw-bold" href="http://127.0.0.1:8000/admin"><font-awesome-icon icon="fa-solid fa-user" /> <span class="d-none d-md-inline"> Accedi</span></a>
                    </span>
                </div>
            </div>
        </div>
    </nav>
</template>
<style lang="scss">
@use '../style/partials/variables' as*;
    .custom-nav{  
        height: 60px;
    }
    .button-nav{
        border: 1px solid $secondary-purple;
        border-radius: 10px;
        padding: 0 1rem;
        &:hover{
            background-color: $secondary-purple;
            .color-a{
                color: white;
            }
        }
        .color-a{
            color: $primary-purple;
        }
        transition: 1s ease;
    }

</style>