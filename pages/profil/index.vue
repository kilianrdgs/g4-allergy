<script setup lang="ts">
definePageMeta({
  middleware: ["auth"],
});
</script>

<template>
 <div class="page">
	<div class="fortnite"></div>
    <NavBar />
    <div class="list">
	
		<div class="dog"></div>
      <h2>Liste</h2>
	  <div class="top">
		<p>Allergies :</p>
		<p>status :</p>
	  </div>
      <div class="list-cell">
        <PersonalAllergyList :allergyList="personalList" />
      </div>
    </div>
    <Footer />

  </div>
</template>

<script lang="ts">
import PersonalAllergyList from "../../components/PersonalAllergyList.vue";

export default {
  name: "liste-perso",
  components: { PersonalAllergyList },
  data() {
    return {
      personalList: [],
    };
  },
  methods: {      
    async getList() {
      const config = useRuntimeConfig();
      const authToken = localStorage.getItem("Authorization");
      this.personalList = await $fetch(
        `${config.public.API_BASE_URL}list/personal`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${authToken}`,
            "Content-Type": "application/json",
          },
        }
      );
    },
  },
  async mounted() {
    await this.getList();
  },
};
</script>

<style scoped>
.list h2 {
  margin: 10px;
}

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

.top {
  width: 450px;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  padding: 5px;
  background-color: black;
  border: 3px solid white;
  animation-name: slide;
  animation-duration: 5s;
  animation-iteration-count: infinite;
}
.list-cell {
  background-color: rgb(255, 0, 255);
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  gap: 10px;
}

.fortnite{
	position: absolute;
  bottom: 0px;
  left: 0px;
	height: 250px;
	width: 400px;

	background-image: url("/ane.png");
	background-position: center;
	background-size: contain;
	background-repeat: no-repeat;
}


@keyframes slide {
  0% {
    border-color: green;
  }
  10% {
	border-color: red;
  }
  20% {
	border-color: blue;
  }
  30% {
	border-color: yellow;
  }
  40% {
	border-color: purple;
  }
  50% {
	border-color: orange;
  }
  60% {
	border-color: pink;
  }
  70% {
	border-color: brown;
  }
  80% {
	border-color: black;
  }
  90% {
	border-color: white;
  }
  100% {
	border-color: green;
  }
}
</style>
