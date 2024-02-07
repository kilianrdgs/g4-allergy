<template>
    <div class="allergy">
        <p>{{ allergy.name }}</p>
        <p>{{ allergy.createdBy.name }}</p>
    
    </div>

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