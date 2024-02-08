<template>
    <h4>{{ allergy.createdBy.name }}</h4>
    <span>{{ allergy.name }}</span>
    <button v-if="allergy.createdBy.isAdmin" @click="deleteAllergy(allergy._id)">Supprimer</button>
</template>

<script lang="ts">
    export default {
        name: "Allergy",
        props: { 
            allergy: Object
        },
        methods: {
            async deleteAllergy(id) {
                const config = useRuntimeConfig()
                await $fetch(`${config.public.API_BASE_URL}${id}`, {
                    method: 'DELETE'
                })
            }
        }
    }
</script>

<style scoped>

</style>