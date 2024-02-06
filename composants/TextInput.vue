<template>

    <div>
        
        <form @submit.prevent="submitForm">
        <label for="allergyInput">Entrer votre allergie :</label>
        <input type="text" id="allergyInput" v-model="allergy" placeholder="Entrer votre Allergie" required>
        
        <fieldset>
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
    
<script>

export default {
    data() {
        return {
        allergy: '',
        visibility: 'public'
        }
    },
    methods: {
        submitForm() {
        // console.log('Allergie soumise :', this.allergy);
        // console.log('Visibilité de l\'allergie :', this.visibility);
        this.allergy = '';
        this.visibility = 'public';
        }
    }
}

</script>

<style scoped>

</style>