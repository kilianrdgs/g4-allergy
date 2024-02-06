<template>
    <div>
        <h1>Formulaire</h1>

        <TextInput v-model="textInput" placeholder="Entrer votre Allergie" />

    </div>
</template>
    
<script>
    import TextInput from '@/composants/TextInput.vue'

export default {
  components: {
    TextInput
  },
  data() {
    return {
      textInput: ''
    }
  }
}
</script>

<style scoped>



</style>