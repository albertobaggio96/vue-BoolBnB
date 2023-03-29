<script>
export default {
    name: 'navbar',
}
</script>
<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container">
                <a class="navbar-brand" href="#">
                    <img src="../assets/Bool_icon.png" alt="Logo" width="30" height="24"
                        class="d-inline-block align-text-top">
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link :to="{ name: 'home' }" class="nav-link"> home </router-link>
                    </li>
                    <!-- <li class="nav-item">
                            <router-link :to="{ name: 'show'}" class="nav-link"> show </router-link>
                        </li>
                        <li class="nav-item">
                                <router-link :to="{ name: 'search'}" class="nav-link"> results </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link :to="{ name: 'all'}" class="nav-link"> all </router-link>
                            </li> -->
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>
<style lang="scss"></style>