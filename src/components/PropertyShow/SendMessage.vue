<script>
import { Popup } from 'mapbox-gl'

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
      messageGuest: '',
      check : false
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
    },
    formValidation(input, number){
        if(input.length == 0){
            return ""
        }else if(input.length < number){
          return "is-invalid"
        }
          this.check = false
          return "is-valid"
    },
    validateMail(email){
      const validRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
      if (email.match(validRegex)) {
        this.check = false
        return "is-valid";
      } else if(email.length == 0) {
        return "";
      }else{
        return "is-invalid"
      }
    },
    isValidate(){
      if(this.validateMail(this.mailGuest) && this.formValidation(this.nameGuest) && this.formValidation(this.subjectGuest) && this.formValidation(this.messageGuest)){
          return true
      }else{
        return false
      }
    },
    checkErrors(){
      this.check = true
    },
  }
}

</script>

<template>
    <div class="col-12">
      <div class="card w-100">
        <div class="card-body">
          <div class="title mt-3 mb-5 text-center">
            <h5 class="card-title">Invia un messaggio all'Host</h5>
            <h1 v-if="check">Riempi i campi</h1>

          </div>
          <hr>
          <form class="">
              <div class="mb-3 text-center">
                  <input class="form-control" type="email" id="mail-guest" name="mail-guest" :class="validateMail(mailGuest), check ? 'is-invalid' : ''" v-model="mailGuest" required minlength="2" maxlength="100">
                </div>
                <span v-if="validateMail(mailGuest) === 'is-invalid' || check " class="text-danger text-start">inserisci una mail valida</span>
              <div class="mb-3 text-center">
                  <label for="name-guest" class="form-label">Nome</label>
                  <input class="form-control" type="text" id="name-guest" name="name-guest" :class="formValidation(nameGuest, 4), check ? 'is-invalid' : ''" v-model="nameGuest" required minlength="2" maxlength="100">
                  <span v-if="formValidation(nameGuest, 4) === 'is-invalid' || check " class="text-danger text-start">almeno 4 carratteri</span>
              </div>
              <div class="mb-3 text-center">
                  <label for="subject-guest" class="form-label">Oggetto del messaggio</label>
                  <input class="form-control" type="text" id="subject-guest" name="subject-guest" :class="formValidation(subjectGuest, 4), check ? 'is-invalid' : ''" v-model="subjectGuest"  required minlength="2" maxlength="100">
                  <span v-if="formValidation(subjectGuest, 4) === 'is-invalid' || check " class="text-danger text-start">almeno 4 carratteri</span>

              </div>
              <div class="mb-3 text-center">
                  <label class="form-label" for="message-guest">Scrivi il tuo messaggio</label>
                  <textarea name="message-guest" id="message-guest"  v-model="messageGuest" class="form-control" :class="formValidation(messageGuest, 20), check ? 'is-invalid' : ''" required minlength="20" maxlength="6000"></textarea>
                  <span v-if="formValidation(messageGuest, 20) === 'is-invalid' || check " class="text-danger text-start">almeno 20 carratteri</span>
              </div>
              <hr class="my-5 text-center">
              <div class="text-center">
                <a class="btn button-primary" @click="(isValidate()) ? $emit('send', mailGuest, nameGuest, subjectGuest, messageGuest) : checkErrors()">Invia Messaggio</a>
                {{ isValidate() }}
              </div>
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