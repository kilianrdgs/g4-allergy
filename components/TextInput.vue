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
            const authToken = localStorage.getItem("Authorization")
            await $fetch(`${config.public.API_BASE_URL}formulaire`, {
                method: 'POST', 
                headers: {
                    Authorization: `Bearer ${authToken}`,
                },
                body: {
                    "name": this.allergy,
                    "isPrivate": this.visibility,
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