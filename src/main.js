import { createApp } from 'vue'
import App from './App.vue'
import { router } from './route'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faKitchenSet } from '@fortawesome/free-solid-svg-icons'


library.add(faKitchenSet)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.use(router)
.mount('#app')

