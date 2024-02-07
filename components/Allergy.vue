<template>
    <h4 v-if="allergy.createdBy !== undefined && allergy.createdBy !== null">{{ allergy.createdBy.name }}</h4>
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
.allergy{
    display: flex;
    justify-content: space-between;
    padding: 10px;
}

.allergy:hover{
    background-color: aquamarine;
}
</style>