<template>

    <div>
        
        <form @submit.prevent="submitForm">
        <label for="name">Entrer votre allergie :</label>
        <input type="text" id="name" v-model="allergy" placeholder="Entrer votre Allergie" required>
        
        <fieldset id="isPrivate">
            <legend>Visibilité de l'allergie :</legend>
            <label>
            <input type="radio" v-model="visibility" value="public"> Publique
            </label>
            <label>
            <input type="radio" v-model="visibility" value="private"> Privée
            </label>
        </fieldset>
        
        <button type="submit">Soumettre</button>
        </form>
    </div>

</template>
    
<script lang="ts">

export default {
    data() {
        return {
        allergy: '',
        visibility: 'public'
        }
    },
    methods: {
        async submitForm() {
            const config = useRuntimeConfig()
            await $fetch(`${config.public.API_BASE_URL}formulaire`, {
                method: 'POST', 
                body: {
                    "name": this.allergy,
                    "isPrivate": this.visibility,
                    "createdBy": "65c356059c5d44fd7862e83a"
                }
            })
            this.allergy = '';
            this.visibility = 'public';
        }
    }
}

</script>

<style scoped>

</style>