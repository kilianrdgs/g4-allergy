<template>
    <div  class="cell">
        <p>{{ allergy.name }}</p>
        <p>{{ allergy.isPrivate }}</p>
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
.cell{
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 60px;
    border: 1px solid black;
    background-color: rgb(0, 179, 255);
}

.cell p{
    margin: auto;
    font-size: 25px;
    color: black;
}
</style>