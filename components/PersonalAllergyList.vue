<template>
    <div v-for="allergy in allergyList">
        <PersonalAllergy :allergy="allergy" />
    </div>
</template>

<script lang="ts">
    import PersonalAllergy from './PersonalAllergy.vue'
    export default {
        name: "AllergyList",
        components: { PersonalAllergy },
        props: { 
            allergyList: Array
        }
    }
</script>

<style scoped>

</style>