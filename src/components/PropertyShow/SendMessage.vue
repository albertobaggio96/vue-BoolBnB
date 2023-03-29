<script>
export default {
  data() {
    return {
      mailGuest : '',
      nameGuest: '',
      subjectGuest: '',
      messageGuest: ''
    }
  },
}

</script>

<template>
    <form class="text-center">
        <div class="mb-3">
            <label for="mail-guest" class="form-label">Inserisci la tua Email</label>
            <input class="form-control" type="mail" id="mail-guest" name="mail-guest" v-model="mailGuest" required>
        </div>
        <div class="mb-3">
            <label for="name-guest" class="form-label">Nome</label>
            <input class="form-control" type="text" id="name-guest" name="name-guest" v-model="nameGuest" required>
        </div>
        <div class="mb-3">
            <label for="subject-guest" class="form-label">Oggetto del messaggio</label>
            <input class="form-control" type="text" id="subject-guest" name="subject-guest" v-model="subjectGuest" required>
  
        </div>
        <div class="mb-3">
            <label class="form-label" for="message-guest">Scrivi il tuo messaggio</label>
            <textarea name="message-guest" id="message-guest"  v-model="messageGuest" class="form-control" required></textarea>
        </div>
        <hr class="my-5">
        <a class="btn button-primary" @click="$emit('send', mailGuest, nameGuest, subjectGuest, messageGuest)">Invia Messaggio</a>
    </form>
</template>

<style lang="scss" scoped>
  @use '../../style/partials/variables' as *;
  .button-primary{
        @include button-primary;
        padding: .3rem 3.5rem;
    }
</style>  