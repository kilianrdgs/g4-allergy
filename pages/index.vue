<script setup lang="ts">
definePageMeta({
  middleware: ["auth"],
});
</script>

<template>
  <div class="page">
	<div class="car">
	</div>
    <NavBar />
    <div class="list">
		<div class="dog"></div>
      <h2>Liste</h2>
	  <div class="top">
		<p>utilisateur :</p>
		<p>Allergies :</p>
	  </div>
      <div class="list-cell">
        <PublicAllergyList :allergyList="list" :currentUser="currentUser" />
      </div>
    </div>
    <Footer />

  </div>
</template>

<script lang="ts">
	import PublicAllergyList from '../../components/PublicAllergyList.vue'
	
 	export default {
    	name: "liste",
		components: { PublicAllergyList },
		data() {
			return {
				list: [],
        currentUser: Object
			}
		},
		methods : {
			async getList(){
				const config = useRuntimeConfig()
        const authToken = localStorage.getItem("Authorization")
				this.list = await $fetch(`${config.public.API_BASE_URL}list`, {
					method: 'GET',
          headers: {
            Authorization: `Bearer ${authToken}`,
            "Content-Type": "application/json",
          },
				})
				console.log(this.list)
			},
      async getCurrentUser() {
          const config = useRuntimeConfig()
          const authToken = localStorage.getItem("Authorization")
          this.currentUser = await $fetch(`${config.public.API_BASE_URL}user`, {
            method:"GET",
            headers: {
              Authorization: `Bearer ${authToken}`,
              "Content-Type": "application/json",
            },
        })
        console.log(this.currentUser)
      },
		},
		async mounted() {
			await this.getList()
      await this.getCurrentUser()
		},
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

.list h2 {
  margin: 10px;
}

.top{
	width: 450px;
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

.car{
	position: absolute;
	bottom: 0%;
	right: 0px;
	height: 50vh;
	width: 50vw;
	background-image: url("/car.png");
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
}

.dog{
	position: absolute;
	top: 0px;
	transform: translate(-60%, -75%);
	left: 50%;
	height: 350px;
	width: 350px;
	background-image: url("/dog.png");
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
