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
      messageGuest: '',
      checkEmail : false,
      checkName: false,
      checkSubject: false,
      checkMessage: false,
      
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
    nameValidation(input, number){
      if(input.length == 0){
            return ""
        }else if(input.length < number){
          return "is-invalid"
        } 
          this.checkName = false
          return "is-valid"
    },
    subjectValidation(input, number){
      if(input.length == 0){
            return ""
        }else if(input.length < number){
          return "is-invalid"
        } 
          this.checkSubject = false
          return "is-valid"
    },
    messageValidation(input, number){
      if(input.length == 0){
            return ""
        }else if(input.length < number){
          return "is-invalid"
        } 
          this.checkMessage = false
          return "is-valid"
    },
    validateMail(email){
      const validRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
      if (email.match(validRegex)) {
        this.checkEmail = false
        return "is-valid";
      } else if(email.length == 0) {
        return "";
      }else{
        return "is-invalid"
      }
    },
    isValidate(){
      if(this.validateMail(this.mailGuest) && this.nameValidation(this.nameGuest) && this.subjectValidation(this.subjectGuest) && this.messageValidation(this.messageGuest)){
          return true
      }else{
        return false
      }
    },
    checkErrors(){
      this.checkEmail = true
      this.checkName = true
      this.checkSubject = true
      this.checkMessage = true


    },
  }
}

</script>

<template>
    <div class="col-12">
      <div class="card w-100">
        <div class="card-body">
          <div class="title mt-3 mb-5 text-center">
            <h3 class="card-title">Invia un messaggio all'Host</h3>
          </div>
          <hr>
          <form class=""> 
              <div class="mb-3 text-center">
                  <label for="nameGuest" class="form-label my-3">Inserisci la tua mail</label>
                  <input class="form-control" type="email" id="mail-guest" name="mail-guest" :class="validateMail(mailGuest, checkEmail), checkEmail ? 'is-invalid' : ''" v-model="mailGuest" required minlength="2" maxlength="100" placeholder="">
                </div>
                <span v-if="validateMail(mailGuest) === 'is-invalid' || checkEmail " class="text-error text-start">*Inserisci una mail valida</span>
              <div class="mb-3 text-center">
                  <label for="name-guest" class="form-label my-3">Nome</label>
                  <input class="form-control" type="text" id="name-guest" name="name-guest" :class="nameValidation(nameGuest, 2), checkName ? 'is-invalid' : ''" v-model="nameGuest" required minlength="2" maxlength="100">
              </div>
                <span v-if="nameValidation(nameGuest, 4) === 'is-invalid' || checkName " class="text-error text-start">*Inserisci un nome con almeno 2 caratteri</span>
              <div class="mb-3 text-center">
                  <label for="subject-guest" class="form-label my-3">Oggetto del messaggio</label>
                  <input class="form-control" type="text" id="subject-guest" name="subject-guest" :class="subjectValidation(subjectGuest, 4, checkSubject), checkSubject ? 'is-invalid' : ''" v-model="subjectGuest"  required minlength="2" maxlength="100">
              </div>
                <span v-if="subjectValidation(subjectGuest, 4) === 'is-invalid' || checkSubject " class="text-error text-start">*Inserisci un oggetto esplicativo</span>
              <div class="mb-3 text-center">
                  <label class="form-label my-3" for="message-guest ">Scrivi il tuo messaggio</label>
                  <textarea name="message-guest" id="message-guest"  v-model="messageGuest" class="form-control" :class="messageValidation(messageGuest, 20), checkMessage ? 'is-invalid' : ''" required minlength="20" maxlength="6000"></textarea>
              </div>
                <span v-if="messageValidation(messageGuest, 20) === 'is-invalid' || checkMessage " class="text-error text-start">*Inserisci una descrizione di almeno 20 caratteri</span>
              <hr class="my-5 text-center">
              <div class="text-center">
                <a class="btn button-primary" @click="(isValidate()) ? $emit('send', mailGuest, nameGuest, subjectGuest, messageGuest) : checkErrors()">Invia Messaggio</a>
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

  .text-error{
    color: $red-error;
  }
</style>  