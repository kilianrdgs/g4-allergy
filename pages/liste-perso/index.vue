<template>
	<h1>Liste perso</h1>
	<AllergyList :allergyList="personalList" />
</template>

<script lang="ts">
	import AllergyList from '../../components/AllergyList.vue'
	
 	export default {
    	name: "liste-perso",
		components: { AllergyList },
		data() {
			return {
				personalList: []
			}
		}, 
		methods : {
			async getList(){
				const config = useRuntimeConfig()
				this.personalList = await $fetch(`${config.public.API_BASE_URL}list/admin2`, {
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