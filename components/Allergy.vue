<template>
    <h4>{{ allergy.createdBy.name }}</h4>
    <span>{{ allergy.name }}</span>
</template>

<script lang="ts">
    export default {
        name: "Allergy",
        props: { 
            allergy: Object
        }
    }
</script>

<style scoped>

</style>