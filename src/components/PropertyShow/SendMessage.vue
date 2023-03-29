<script>
export default {
  name:'SendMessage',
  props:[
    'sended'
  ],
  data() {
    return {
      mailGuest : '',
      nameGuest: '',
      subjectGuest: '',
      messageGuest: ''
    }
  },
  watch: {
    sended(newValue){
      if(newValue === true){
        this.getEmptyForm()
      }
    }
  },
  methods:{
    getEmptyForm(){
      this.mailGuest = '',
      this.nameGuest= '',
      this.subjectGuest= '',
      this.messageGuest= ''
    }
  }
}

</script>

<template>
    <div class="col-12">
      <div class="card w-100">
        <div class="card-body">
          <div class="title mt-3 mb-5 text-center">
            <h5 class="card-title">Invia un messaggio all'Host</h5>
          </div>
          <hr>
          <form class="text-center">
              <div class="mb-3">
                  <label for="mail-guest" class="form-label">Inserisci la tua Email</label>
                  <input class="form-control" type="mail" id="mail-guest" name="mail-guest" v-model="mailGuest" required minlength="2" maxlength="100">
              </div>
              <div class="mb-3">
                  <label for="name-guest" class="form-label">Nome</label>
                  <input class="form-control" type="text" id="name-guest" name="name-guest" v-model="nameGuest" required minlength="2" maxlength="100">
              </div>
              <div class="mb-3">
                  <label for="subject-guest" class="form-label">Oggetto del messaggio</label>
                  <input class="form-control" type="text" id="subject-guest" name="subject-guest" v-model="subjectGuest" required minlength="2" maxlength="100">
        
              </div>
              <div class="mb-3">
                  <label class="form-label" for="message-guest">Scrivi il tuo messaggio</label>
                  <textarea name="message-guest" id="message-guest"  v-model="messageGuest" class="form-control" required minlength="2" maxlength="6000"></textarea>
              </div>
              <hr class="my-5">
              <a class="btn button-primary" @click="$emit('send', mailGuest, nameGuest, subjectGuest, messageGuest)">Invia Messaggio</a>
          </form>
        </div>
      </div>
    </div>
</template>

<style lang="scss" scoped>
  @use '../../style/partials/variables' as *;
  .card{
        border-radius: 20px;
        background: #847EF0;
        background: -webkit-radial-gradient(top left, #847EF0, #C0C3D4);
        background: -moz-radial-gradient(top left, #847EF0, #C0C3D4);
        -webkit-box-shadow: 10px 10px 5px -1px rgba(0,0,0,0.75);
        -moz-box-shadow: 10px 10px 5px -1px rgba(0,0,0,0.75);
        box-shadow: 10px 10px 5px -1px rgba(0,0,0,0.75);
    }
  .button-primary{
        @include button-primary;
        padding: .3rem 3.5rem;
    }
</style>  