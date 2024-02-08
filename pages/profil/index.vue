<script setup lang="ts">
definePageMeta({
  middleware: ["auth"],
});
</script>

<template>
    <NavBar/>
    <h1>Liste perso</h1>
    <PersonalAllergyList :allergyList="personalList" />
    <Footer />
</template>

<script lang="ts">
	import PersonalAllergyList from '../../components/PersonalAllergyList.vue'
	
 	export default {
    	name: "liste-perso",
		components: { PersonalAllergyList },
		data() {
			return {
				personalList: []
			}
		}, 
		methods : {
			async getList(){
				const config = useRuntimeConfig()
        const authToken = localStorage.getItem("Authorization")
				this.personalList = await $fetch(`${config.public.API_BASE_URL}list/personal`, {
					method: 'GET',
          headers: {
            Authorization: `Bearer ${authToken}`,
            "Content-Type": "application/json",
          },
				})
				console.log(this.personalList)
			}
		},
		async mounted() {
			await this.getList()
		},
 	}
 	
</script>

<style scoped>

</style>