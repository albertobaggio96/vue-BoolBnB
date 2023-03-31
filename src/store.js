import { reactive } from "vue";
import axios from "axios";

export const store = reactive({
  selectedIcon: [],
  apiUri : 'http://127.0.0.1:8000/api/properties',
  storeParams: {
    address : '',
  },
  show : '',
  getBack : '',
  selectedIcon : [],
  selectedBeds : 0,
  selectedRooms : 0
})