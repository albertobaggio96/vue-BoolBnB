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
  methods: {
    getProperties() {
      axios.get(this.stro, {
        params: {
        }
      })
      .then((response) => {
        console.log(response)
        this.property = response.data.results
      })
    }
  }
}

</script>

<template>
    <form class="text-center">
        <div class="mb-3">
            <label for="mail-guest" class="form-label">Inserisci la tua Email</label>
            <input class="form-control" type="mail" id="mail-guest" name="mail-guest" v-model="mailGuest">
        </div>
        <div class="mb-3">
            <label for="name-guest" class="form-label">Nome</label>
            <input class="form-control" type="text" id="name-guest" name="name-guest" v-model="nameGuest">
        </div>
        <div class="mb-3">
            <label for="subject-guest" class="form-label">Oggetto del messaggio</label>
            <input class="form-control" type="text" id="subject-guest" name="subject-guest" v-model="subjectGuest">
  
        </div>
        <div class="mb-3">
            <label class="form-label" for="message-guest">Scrivi il tuo messaggio</label>
            <textarea name="message-guest" id="message-guest"  v-model="messageGuest" class="form-control"></textarea>
        </div>
        <hr class="my-5">
        <a class="btn btn-primary" @click="$emit('send', mailGuest, nameGuest, subjectGuest, messageGuest)">send</a>
    </form>
</template>

<style lang="scss">
  
</style>