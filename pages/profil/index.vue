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
				this.personalList = await $fetch(`${config.public.API_BASE_URL}list/kilian`, {
					method: 'GET'
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