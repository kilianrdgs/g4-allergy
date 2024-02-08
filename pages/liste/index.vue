<script setup lang="ts">
definePageMeta({
    middleware: ['auth'],
})
</script>

<template>
	<div>
	<NavBar/>
	<h1>Liste</h1>
	<PublicAllergyList :allergyList="list" />
	<Footer/>
	</div>
</template>

<script lang="ts">
	import PublicAllergyList from '../../components/PublicAllergyList.vue'
	
 	export default {
    	name: "liste",
		components: { PublicAllergyList },
		data() {
			return {
				list: []
			}
		}, 
		methods : {
			async getList(){
				const config = useRuntimeConfig()
				this.list = await $fetch(`${config.public.API_BASE_URL}list`, {
					method: 'GET'
				})
				console.log(this.list)
			}
		},
		async mounted() {
			await this.getList()
		},
 	}
 	
</script>

<style scoped>

</style>