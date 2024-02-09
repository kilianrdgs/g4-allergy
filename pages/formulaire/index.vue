<template>
    <div class="page">
      <div class="fortnite"></div>
      <NavBar />
      <div class="list">
        <h1>Formulaire</h1>

        <TextInput v-model="textInput" placeholder="Entrer votre Allergie" />
      </div>

      <Footer />
    </div>
</template>
    
<script>
    import TextInput from '@/components/TextInput.vue'

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

.list {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url("/textures.webp");
  width: 800px;
  height: 500px;
  border: 15px solid green;
  animation-name: slide;
  animation-duration: 5s;
  animation-iteration-count: infinite;
}

.fortnite{
	position: absolute;
  top: 50%;
  transform: translate(0%, -50%);
	height: 80%;
	width: 100vw;
	background-image: url("/error.png");
	background-position: center;
	background-size: contain;
  background-size: 120px 120px;
	background-repeat: repeat;
}


</style>