import { createApp } from 'vue'
import App from './App.vue'
import { router } from './route'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faKitchenSet, faHouseTsunami, faUtensils, faTv, faCompactDisc, faPrint, faFire, faWifi, faElevator, faTemperatureArrowDown, faWaterLadder, faFilm, faParking, faDumbbell, faSliders, faBed, faPersonShelter, faMaximize, faArrowDown, faGripLinesVertical, faRocket, faArrowLeft, faHouse, faUser} from '@fortawesome/free-solid-svg-icons'
import {faSnowflake} from '@fortawesome/free-regular-svg-icons'


library.add(faKitchenSet, faHouseTsunami, faSnowflake, faUtensils, faTv, faCompactDisc, faPrint, faFire, faElevator, faTemperatureArrowDown, faWaterLadder, faFilm, faParking, faDumbbell, faWifi, faSliders, faBed, faPersonShelter, faMaximize,faArrowDown, faGripLinesVertical, faRocket, faArrowLeft, faHouse, faUser)

import 'bootstrap/dist/js/bootstrap'

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.use(router)
.mount('#app')

