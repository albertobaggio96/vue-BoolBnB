<script>

export default {
  name: 'ServiceSelection',
  props:[
    'services',
    'selectedIcon',
    'selectedBeds',
    'selectedRooms'
  ],
  data() {
    return {
      checkedServices: [],
      nBeds : null,
      nRooms : null,
      radius : 20,
    }
  },
  methods:{
  
  }
}
</script>

<template>
  <!-- Button trigger modal -->
  <div class="container">
    <div class="row py-3 mb-4">
      <div class="selected-filters col-12 col-md-9">
        <span v-if="selectedIcon.length > 0 || selectedBeds > 0 || selectedRooms > 0" class="fs-4 me-3">Filtri attivi:</span>
        <span v-if="selectedIcon.length > 0" v-for="filter in selectedIcon" class="me-3"><font-awesome-icon class="fs-4 icon-color" :icon="filter" /></span>
        <font-awesome-icon v-if="selectedBeds > 0" class="fs-4 icon-color me-3" icon="fa-solid fa-grip-lines-vertical" />
        <span v-if="selectedBeds > 0" class="me-2 fs-4 icon-bg-color px-1 text-white"> {{ selectedBeds == 6 ? '6+' : selectedBeds}} <font-awesome-icon class="fs-4 text-white" icon="fa-solid fa-bed" /></span>
        <font-awesome-icon v-if="selectedRooms > 0" class="fs-4 icon-color me-3" icon="fa-solid fa-grip-lines-vertical" />
        <span v-if="selectedRooms > 0" class="me-3 fs-4 icon-bg-color px-1 text-white"> {{ selectedRooms == 6 ? '6+' : selectedRooms }} <font-awesome-icon class="fs-4 text-white" icon="fa-solid fa-person-shelter" /></span>
      </div>
      <div class="col-12 col-md-3 text-end mt-2 mt-md-0">
        <button type="button" class="btn button-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
          <font-awesome-icon icon="fa-solid fa-sliders" /> Filtri
        </button>
      </div>
    </div>
  </div>

  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5 ms-auto" id="exampleModalLabel">Filtri</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="roomsBeeds-box custom-mobile">
            <div class="row">
              
              <div class="col-12">
                <h4>Stanze e letti:</h4>
              </div>
              
              <!-- CHOSE ROOMS -->
              <div class="col-12">
                <h6>Stanze</h6>
              </div>
              <div class="wrapper col-12">
                <input type="radio" name="rooms" id="oneRoom" value="1" v-model="nRooms">
                <input type="radio" name="rooms" id="twoRoom" value="2" v-model="nRooms">
                <input type="radio" name="rooms" id="threeRoom" value="3"  v-model="nRooms">
                <input type="radio" name="rooms" id="fourRoom" value="4"  v-model="nRooms">
                <input type="radio" name="rooms" id="fiveRoom" value="5"  v-model="nRooms">
                <input type="radio" name="rooms" id="sixPlusRoom" value="6"  v-model="nRooms">
                
                <label for="oneRoom" class="option option-1 py-1 py-1">
                  <span>1</span>
                </label>
                <label for="twoRoom" class="option option-2 py-1 py-1">
                  <span>2</span>
                </label>
                <label for="threeRoom" class="option option-3 py-1 py-1">
                  <span>3</span>
                </label>
                <label for="fourRoom" class="option option-4 py-1 py-1">
                  <span>4</span>
                </label>
                <label for="fiveRoom" class="option option-5 py-1 py-1">
                  <span>5</span>
                </label>
                <label for="sixPlusRoom" class="option option-6 py-1 py-1">
                  <span>6+</span>
                </label>
              </div>
              <!-- CHOSE BEDS -->
              <div class="col-12">
                <h6>Letti</h6>
              </div>
              <div class="wrapper col-12">
                <input type="radio" name="beds" id="oneBed" value="1" v-model="nBeds">
                <input type="radio" name="beds" id="twoBed" value="2" v-model="nBeds">
                <input type="radio" name="beds" id="threeBed" value="3"  v-model="nBeds">
                <input type="radio" name="beds" id="fourBed" value="4"  v-model="nBeds">
                <input type="radio" name="beds" id="fiveBed" value="5"  v-model="nBeds">
                <input type="radio" name="beds" id="sixPlusBed" value="6"  v-model="nBeds">
                
                <label for="oneBed" class="option option-1 py-1">
                  <span>1</span>
                </label>
                <label for="twoBed" class="option option-2 py-1">
                  <span>2</span>
                </label>
                <label for="threeBed" class="option option-3 py-1">
                  <span>3</span>
                </label>
                <label for="fourBed" class="option option-4 py-1">
                  <span>4</span>
                </label>
                <label for="fiveBed" class="option option-5 py-1">
                  <span>5</span>
                </label>
                <label for="sixPlusBed" class="option option-6 py-1">
                  <span>6+</span>
                </label>
              </div>
            </div>
          </div>
          <hr>
          <div class="services-box container-fluid">
            <!-- CHOSE SERVICE -->
            <div class="row">
              <h4>Servizi:</h4>
              <div class="col-sm-12 col-lg-6 my-2" v-for="service in services">
                <input type="checkbox" :id="service.slug" :name="service.slug" :value="service" v-model="checkedServices"  @click="checkedServices" class="form-check-input text-black text-decoration-none"/>
                <label :for="service.slug" class="mx-2"> {{ service.title }} </label>
              </div>
            </div>
          </div>
          <hr>
          <div class="distance-box container-fluid">
            <!-- RADIUS -->
            <div class="row">
              <div class="col-12">
                <h4>Distanza:</h4>
              </div>

              <div class="col-12">
                <label for="customRange3" class="form-label">Aumenta il raggio di ricerca</label>
                <input type="range" class="form-range range-md px-sm-3 px-lg-5 p" min="1" max="30" step="1" id="customRange3" v-model="radius">
              </div>
              <div class="row ms-sm-0 ms-md-5">
                <div class="km-input border border-1 col-6 col-md-6 col-lg-4">
                  <span class="d-block text-secondary">Distanza minima</span>
                  <label for="km" class="fw-semibold me-1">Km</label>
                  <input id="km" type="text" v-model="radius" class="border-0 w-75">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer d-flex justify-content-between">
          <a @click="checkedServices = [] , nBeds = null, nRooms = null" class="btn button-reset">Reset</a>
          <button type="button" class="btn button-secondary"  @click="$emit('servicesFilter', checkedServices, nBeds, nRooms, radius)" data-bs-dismiss="modal">Salva</button>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss">
  @use '../../style/partials/variables' as*;

  .button-secondary{
    @include button-secondary;
  }

  .button-primary{
    @include button-primary;
  }

  .button-reset{
    border: 1px solid $secondary-purple;
    &:hover{
      border: 1px solid $secondary-purple;
      background-color: $primary-purple;
      color: white;
      transition: all 0.7s ease;
    }
  }

  input[type="radio"] {
  display: none;
  }

  .wrapper {
  display: inline-flex;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 5px;
  padding: 20px 15px;
  
  .option {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    cursor: pointer;
    border-radius: 10px;
    border: 2px solid $light-purple;
    transition: all 0.5s ease;
    margin: 0 10px;
    }
  }

  .icon-color{
    color: $light-purple;
  }

  .icon-bg-color{
    background-color: $secondary-purple;
    border-radius: 10px;
  }
  
  input#oneRoom:checked ~ .option-1,
  input#twoRoom:checked ~ .option-2,
  input#threeRoom:checked ~ .option-3,
  input#fourRoom:checked ~ .option-4,
  input#fiveRoom:checked ~ .option-5,
  input#sixPlusRoom:checked ~ .option-6,
  input#oneBed:checked ~ .option-1,
  input#twoBed:checked ~ .option-2,
  input#threeBed:checked ~ .option-3,
  input#fourBed:checked ~ .option-4,
  input#fiveBed:checked ~ .option-5,
  input#sixPlusBed:checked ~ .option-6{
  background: $secondary-purple;
  border-color: $light-purple;
  }
  
  input#oneRoom:checked ~ .option-1 span,
  input#twoRoom:checked ~ .option-2 span,
  input#threeRoom:checked ~ .option-3 span,
  input#fourRoom:checked ~ .option-4 span,
  input#fiveRoom:checked ~ .option-5 span,
  input#sixPlusRoom:checked ~ .option-6 span,
  input#oneBed:checked ~ .option-1 span,
  input#twoBed:checked ~ .option-2 span,
  input#threeBed:checked ~ .option-3 span,
  input#fourBed:checked ~ .option-4 span,
  input#fiveBed:checked ~ .option-5 span,
  input#sixPlusBed:checked ~ .option-6 span{
    color: #fff;
  }

  input[type="range"]::-moz-range-thumb{
    background-color: $secondary-purple;
    &:active{
      background-color: $primary-purple;
    }
  }
 
  input[type="checkbox"]:checked{
    background-color: $secondary-purple;
    border-color: $primary-purple;
  }

</style>