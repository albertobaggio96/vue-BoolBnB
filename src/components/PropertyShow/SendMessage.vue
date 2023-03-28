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
  <form>
    <div>
      <label class="form-label" for="mail-guest"></label>
      <input class="form-controll" type="mail" id="mail-guest" name="mail-guest" v-model="mailGuest">
    </div>
    <div>
      <label class="form-label" for="name-guest"></label>
      <input class="form-controll" type="text" id="name-guest" name="name-guest" v-model="nameGuest">
    </div>
    <div>
      <label class="form-label" for="subject-guest"></label>
      <input class="form-controll" type="text" id="subject-guest" name="subject-guest" v-model="subjectGuest">
    </div>
    <div>
      <label class="form-label" for="message-guest"></label>
      <textarea name="message-guest" id="message-guest" v-model="messageGuest" class="form-controll"></textarea>
    </div>

    <a class="btn btn-primary" @click="$emit('send', mailGuest, nameGuest, subjectGuest, messageGuest)">send</a>
    
  </form>
</template>

<style lang="scss">
  
</style>