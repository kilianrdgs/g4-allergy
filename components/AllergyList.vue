<template>
    <div v-for="allergy in allergyList">
        <Allergy :allergy="allergy" />
    </div>
</template>

<script lang="ts">
    import Allergy from '@/components/Allergy.vue'
    export default {
        name: "AllergyList",
        components: { Allergy },
        props: { 
            allergyList: Array
        }
    }
</script>

<style scoped>

</style>