<template>
	<h1>Liste</h1>
	<AllergyList :allergyList="list" />
</template>

<script lang="ts">
	import AllergyList from '../../components/AllergyList.vue'
	
 	export default {
    	name: "liste",
		components: { AllergyList },
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